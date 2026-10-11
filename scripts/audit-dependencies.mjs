import { spawnSync } from 'node:child_process';
// Audit development and production alike, with no advisory exceptions.
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const run = args => spawnSync(npm, ['audit', '--registry=https://registry.npmjs.org', ...args], { encoding: 'utf8' });
const full = run(['--json']);
let report;
try { report = JSON.parse(full.stdout); } catch { throw new Error(`Could not read npm audit: ${full.stderr}`); }
if (report.error || !report.vulnerabilities) throw new Error('npm audit did not return a valid vulnerability report');
const failures = Object.values(report.vulnerabilities);
if (failures.length) { console.error(JSON.stringify(failures, null, 2)); process.exit(1); }
if (full.status !== 0) throw new Error(`npm audit failed: ${full.stderr || full.status}`);
console.log('Dependency gate passed: zero known advisories across production and development.');
