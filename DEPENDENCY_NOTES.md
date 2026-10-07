# Dependency audit — 2026-10-08

Next and eslint-config-next are pinned to 16.3.8; sharp to 0.35.5. The lockfile also updates brace-expansion and source-map-js within compatible ranges. The Next `ImageResponse` advisory and the fixable high-severity advisories are cleared. This deployment exports static HTML; it does not run a public Next server.

One **high-severity development-only advisory remains**, [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm), via eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces 3.0.3. The registry has no patched braces release at verification time; `npm audit fix --force` proposes downgrading Next's ESLint configuration to 14.2.35. We retain the compatible 16.3 configuration. The linter processes repository-controlled paths, not visitor-supplied patterns, and is not included in the static deployment.

`npm run audit:dependencies` still blocks every high/critical production finding, network/audit errors, and other high/critical development findings. It allows only this exact advisory and its named dependency chain, checks that every affected lockfile node is development-only, and expires the exception on **2026-11-08 UTC**. New advisories in the same packages are not exempt. Before that date, update the chain if an upstream fix exists and remove the exception; do not extend it silently. This is not a claim of zero vulnerabilities.

References: [Next patch advisory](https://github.com/advisories/GHSA-vcvr-r3jv-pc5j), [braces advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm).
