# Dependency audit — 2026-10-09

Next and eslint-config-next remain pinned to 16.3.8; sharp remains 0.35.5. The site exports static HTML and does not run a public Next server.

The development-only [braces advisory GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) has been removed from this dependency tree. A scoped npm override replaces only `@next/eslint-plugin-next`'s `fast-glob` dependency with `tinyglobby@0.2.17`. The Next plugin uses that package only for `globSync(pattern, { onlyDirectories: true })` in `get-root-dirs.js`. [Tinyglobby](https://github.com/SuperchupuDev/tinyglobby) supports this operation without the micromatch/braces chain. This is a replacement, not a patched braces release.

`next-root-dirs.test.mjs` tests the installed Next plugin's actual directory discovery with literal paths, wildcards, brace patterns, arrays, missing paths and file exclusion. It compares resolved filesystem paths because tinyglobby can return relative paths with trailing separators; Next joins these with `pages`/`app` before filesystem access. A second test verifies that the Next navigation rule still reports invalid links after glob-based project discovery. No Next lint rules were disabled. Recheck this narrow API contract when upgrading the Next plugin.

The previous advisory exception and its expiry have been removed. `npm run audit:dependencies` now audits both production and development, fails on **any** reported advisory, and fails closed on malformed reports or registry errors. As of this verification, the complete locked dependency tree has zero known advisories.
