import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join, resolve as absolute } from 'node:path';
import test from 'node:test';
import { ESLint } from 'eslint';

const require = createRequire(import.meta.url);
const { getRootDirs } = require('@next/eslint-plugin-next/dist/utils/get-root-dirs.js');

test('Next root-dir discovery retains literal, glob, brace and array behavior without braces', () => {
  const root = mkdtempSync(join(tmpdir(), 'next-root-dirs-'));
  try {
    for (const name of ['site-a', 'site-b', 'other']) mkdirSync(join(root, name));
    writeFileSync(join(root, 'site-file'), 'not a directory');
    // Next joins each returned directory with app/pages; relative paths and trailing
    // separators are equivalent there. Compare the filesystem destinations.
    const resolve = rootDir => getRootDirs({ cwd: root, settings: { next: { rootDir } } }).map(dir => absolute(dir)).sort();
    const sites = [join(root, 'site-a'), join(root, 'site-b')];
    assert.deepEqual(resolve(undefined), [root]);
    assert.deepEqual(resolve(join(root, 'site-a')), [sites[0]]);
    assert.deepEqual(resolve(join(root, 'site-*')), sites);
    assert.deepEqual(resolve(join(root, 'site-{a,b}')), sites);
    assert.deepEqual(resolve(sites), sites);
    assert.deepEqual(resolve(join(root, 'missing-*')), []);
    const pluginRequire = createRequire(require.resolve('@next/eslint-plugin-next'));
    assert.equal(pluginRequire('fast-glob/package.json').name, 'tinyglobby');
    assert.throws(() => pluginRequire.resolve('braces'), { code: 'MODULE_NOT_FOUND' });
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('Next still reports invalid navigation after glob-based project discovery', async () => {
  const root = mkdtempSync(join(tmpdir(), 'next-rule-'));
  try {
    const pages = join(root, 'site', 'pages');
    mkdirSync(pages, { recursive: true });
    writeFileSync(join(pages, 'index.js'), 'export default function Home() {}');
    const eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: {
        files: ['**/*.jsx'],
        languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
        plugins: { '@next/next': require('@next/eslint-plugin-next') },
        settings: { next: { rootDir: join(root, '*') } },
        rules: { '@next/next/no-html-link-for-pages': 'error' },
      },
    });
    const [result] = await eslint.lintText('export default () => <a href="/">Home</a>;', { filePath: 'fixture.jsx' });
    assert.equal(result.errorCount, 1);
    assert.equal(result.messages[0].ruleId, '@next/next/no-html-link-for-pages');
  } finally { rmSync(root, { recursive: true, force: true }); }
});
