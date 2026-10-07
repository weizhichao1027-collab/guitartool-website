import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

// One upstream advisory has no patched braces release as of 2026-10-08.
// It only reaches Next's development linter through repository-owned glob patterns.
// Production remains subject to the normal high/critical audit with no exceptions.
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const run = args => spawnSync(npm, ['audit', '--registry=https://registry.npmjs.org', ...args], { encoding: 'utf8' });
const production = run(['--omit=dev', '--audit-level=high']);
process.stdout.write(production.stdout ?? '');
process.stderr.write(production.stderr ?? '');
if (production.status !== 0) process.exit(production.status ?? 1);
const full = run(['--json']);
let report;
try { report = JSON.parse(full.stdout); } catch { throw new Error(`Could not read npm audit: ${full.stderr}`); }
if (report.error || !report.vulnerabilities) throw new Error('npm audit did not return a valid vulnerability report');
const lock = JSON.parse(readFileSync(new URL('../package-lock.json', import.meta.url), 'utf8'));
const advisory = 'https://github.com/advisories/GHSA-vfj7-8cjw-p6xm';
const chain = new Set(['braces', 'micromatch', 'fast-glob', '@next/eslint-plugin-next', 'eslint-config-next']);
const expires = new Date('2026-11-08T00:00:00Z');
const failures = [];
for (const item of Object.values(report.vulnerabilities)) {
  if (!['high', 'critical'].includes(item.severity)) continue;
  const accepted = Date.now() < expires.getTime() && item.severity === 'high' && chain.has(item.name)
    && item.nodes.length > 0 && item.nodes.every(node => lock.packages[node]?.dev === true)
    && item.via.length > 0 && item.via.every(via => typeof via === 'string' ? chain.has(via) : via.url === advisory);
  if (!accepted) failures.push(item);
  else console.warn(`Known development-only advisory (review by 2026-11-08): ${item.name} → ${advisory}`);
}
if (failures.length) { console.error(JSON.stringify(failures, null, 2)); process.exit(1); }
console.log('Dependency gate passed; production has no high/critical findings. See DEPENDENCY_NOTES.md for the bounded development exception.');
