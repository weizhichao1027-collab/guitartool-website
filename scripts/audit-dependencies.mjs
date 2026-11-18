import { spawnSync } from 'node:child_process';
import { realpathSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

// Audit development and production alike. Active advisories still fail the gate.
// A GitHub advisory counts only while it remains published. npm can keep serving
// an advisory after GitHub withdraws it; that stale entry is not an active advisory.
// If withdrawal cannot be confirmed, the advisory still fails the gate.

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const curl = process.platform === 'win32' ? 'curl.exe' : 'curl';
const advisoryId = /GHSA-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/i;

export function registryFailureDetail(report, stderr = '') {
  if (!report || typeof report !== 'object' || Array.isArray(report)) return null;
  if (report.vulnerabilities && !report.error) return null;
  const errorText = report.error && typeof report.error === 'object'
    ? [report.error.summary, report.error.detail].filter(part => typeof part === 'string' && part.trim()).join('\n')
    : '';
  const detail = [report.message, errorText].filter(part => typeof part === 'string' && part.trim()).join('\n').trim()
    || (typeof stderr === 'string' ? stderr.trim() : '');
  const looksLikeRegistry = Boolean(report.error)
    || /ENOTFOUND|ETIMEDOUT|ECONNRESET|ECONNREFUSED|EAI_AGAIN|getaddrinfo|audit endpoint returned|request to https:\/\/registry\.npmjs\.org/i.test(detail);
  if (!looksLikeRegistry) return null;
  return detail || 'npm audit registry request failed';
}

export function activeVulnerabilityNames(vulnerabilities, withdrawnUrls) {
  const withdrawn = new Set(withdrawnUrls);
  const names = Object.keys(vulnerabilities);
  const memo = new Map();

  function active(name, stack) {
    if (memo.has(name)) return memo.get(name);
    if (stack.has(name)) return false;
    const vulnerability = vulnerabilities[name];
    if (!vulnerability) return true;
    stack.add(name);
    const vias = Array.isArray(vulnerability.via) ? vulnerability.via : vulnerability.via == null ? [] : [vulnerability.via];
    let found = vias.length === 0;
    for (const via of vias) {
      if (typeof via === 'string') {
        if (!vulnerabilities[via] || active(via, stack)) found = true;
      } else if (!via || typeof via !== 'object' || typeof via.url !== 'string' || !withdrawn.has(via.url)) {
        found = true;
      }
    }
    stack.delete(name);
    memo.set(name, found);
    return found;
  }

  return names.filter(name => active(name, new Set()));
}

function advisoryUrls(vulnerabilities) {
  const urls = [];
  for (const vulnerability of Object.values(vulnerabilities)) {
    const vias = Array.isArray(vulnerability.via) ? vulnerability.via : [];
    for (const via of vias) {
      if (via && typeof via === 'object' && typeof via.url === 'string') urls.push(via.url);
    }
  }
  return [...new Set(urls)];
}

function readAdvisory(id) {
  const args = [
    '-sS', '--max-time', '20',
    '-H', 'Accept: application/vnd.github+json',
    '-H', 'User-Agent: guitartool-dependency-audit',
    '-H', 'X-GitHub-Api-Version: 2022-11-28',
  ];
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (token) args.push('-H', `Authorization: Bearer ${token}`);
  args.push('-w', '\n%{http_code}', `https://api.github.com/advisories/${id}`);
  const result = spawnSync(curl, args, { encoding: 'utf8' });
  if (result.error || result.status !== 0 || typeof result.stdout !== 'string') return null;
  const breakAt = result.stdout.lastIndexOf('\n');
  if (breakAt < 0) return null;
  const status = Number(result.stdout.slice(breakAt + 1).trim());
  if (status !== 200) return null;
  try {
    const body = JSON.parse(result.stdout.slice(0, breakAt));
    if (!body || String(body.ghsa_id || '').toLowerCase() !== id.toLowerCase()) return null;
    return body;
  } catch {
    return null;
  }
}

function confirmedWithdrawals(urls) {
  const withdrawn = new Map();
  for (const url of urls) {
    const id = url.match(advisoryId)?.[0];
    if (!id) continue;
    const advisory = readAdvisory(id);
    if (advisory && typeof advisory.withdrawn_at === 'string' && advisory.withdrawn_at.trim()) {
      withdrawn.set(url, advisory.withdrawn_at);
    }
  }
  return withdrawn;
}

function invokedDirectly() {
  const entry = process.argv[1];
  if (!entry) return false;
  try {
    return import.meta.url === pathToFileURL(realpathSync(entry)).href;
  } catch {
    return false;
  }
}

function main() {
  const full = spawnSync(npm, ['audit', '--registry=https://registry.npmjs.org', '--json'], { encoding: 'utf8' });
  let report;
  try {
    report = JSON.parse(full.stdout);
  } catch {
    throw new Error(`Could not read npm audit: ${full.stderr || full.status}`);
  }
  const registryDetail = registryFailureDetail(report, full.stderr);
  if (registryDetail) throw new Error(`npm audit could not reach the registry: ${registryDetail}`);
  if (!report.vulnerabilities) throw new Error('npm audit did not return a valid vulnerability report');

  const withdrawn = confirmedWithdrawals(advisoryUrls(report.vulnerabilities));
  for (const [url, withdrawnAt] of withdrawn) {
    console.log(`Not counting withdrawn advisory ${url} (withdrawn_at=${withdrawnAt}).`);
  }
  const activeNames = new Set(activeVulnerabilityNames(report.vulnerabilities, withdrawn.keys()));
  const failures = Object.entries(report.vulnerabilities)
    .filter(([name]) => activeNames.has(name))
    .map(([, vulnerability]) => vulnerability);
  if (failures.length) {
    console.error(JSON.stringify(failures, null, 2));
    process.exit(1);
  }
  if (full.status !== 0 && Object.keys(report.vulnerabilities).length === 0) {
    throw new Error(`npm audit failed: ${full.stderr || full.status}`);
  }
  console.log('Dependency gate passed: no active advisories across production and development.');
}

if (invokedDirectly()) main();
