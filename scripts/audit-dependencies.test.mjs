import assert from 'node:assert/strict';
import test from 'node:test';
import { activeVulnerabilityNames, registryFailureDetail } from './audit-dependencies.mjs';

const picomatchUrl = 'https://github.com/advisories/GHSA-fc5q-39xc-vjpf';
const nextUrl = 'https://github.com/advisories/GHSA-mfr8-8qww-v76h';

test('registry failures stay distinct from vulnerability findings', () => {
  const detail = registryFailureDetail({
    message: 'request to https://registry.npmjs.org/-/npm/v1/security/advisories/bulk failed, reason: getaddrinfo ENOTFOUND registry.npmjs.org',
    error: { summary: '', detail: '' },
  });
  assert.match(detail, /ENOTFOUND registry\.npmjs\.org/);
  assert.equal(registryFailureDetail({ vulnerabilities: { next: { via: [] } } }), null);
});

test('an active advisory still fails even when another advisory was withdrawn', () => {
  const vulnerabilities = {
    picomatch: { via: [{ url: picomatchUrl, severity: 'high' }] },
    next: { via: [{ url: nextUrl, severity: 'moderate' }] },
    tinyglobby: { via: ['picomatch'] },
  };
  assert.deepEqual(
    activeVulnerabilityNames(vulnerabilities, [picomatchUrl]).sort(),
    ['next'],
  );
});

test('a package with both a withdrawn and an active advisory still fails', () => {
  const vulnerabilities = {
    example: { via: [{ url: picomatchUrl }, { url: nextUrl }] },
  };
  assert.deepEqual(activeVulnerabilityNames(vulnerabilities, [picomatchUrl]), ['example']);
});

test('a dependency chain that only reaches a withdrawn advisory does not fail', () => {
  const vulnerabilities = {
    picomatch: { via: [{ url: picomatchUrl, severity: 'high' }] },
    fdir: { via: ['picomatch'] },
    tinyglobby: { via: ['fdir', 'picomatch'] },
    'typescript-eslint': { via: ['tinyglobby'] },
  };
  assert.deepEqual(activeVulnerabilityNames(vulnerabilities, [picomatchUrl]), []);
});

test('an unconfirmed advisory is still a failure', () => {
  const vulnerabilities = {
    picomatch: { via: [{ url: picomatchUrl, severity: 'high' }] },
  };
  assert.deepEqual(activeVulnerabilityNames(vulnerabilities, []), ['picomatch']);
});
