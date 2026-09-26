import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, readFile, stat, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { buildImages } from './build-og-images.mjs'

test('generates PNGs, reuses unchanged cards, and changes URLs when content changes', async () => {
  const cacheDir = await mkdtemp(join(tmpdir(), 'dotenvx-og-test-'))
  try {
    const entries = [
      { key: '/blog/example.html', template: 'blog', title: 'Dotenv 18: CLI', author: 'Scott Motte', date: 'September 19, 2026' },
      { key: '/blog/long.html', template: 'blog', title: 'From dotenv to dotenvx: Next Generation Config Management' },
      { key: '/blog/symbol.html', template: 'blog', title: 'Rotate NPM Tokens with Dotenvx Armor ⛨. Automatically.' },
      { key: '/members/supermemory', template: 'logo', logo: '_includes/logos/supermemory.svg' },
      { key: '/corporate', template: 'mark', image: 'assets/img/corporate-cube.png' },
    ]
    const first = await buildImages({ cacheDir, entries })
    assert.equal(new Set(first.map(image => image.url)).size, entries.length)
    for (const image of first) {
      const png = await readFile(join(cacheDir, image.url))
      assert.equal(png.subarray(1, 4).toString(), 'PNG')
      assert.equal(png.readUInt32BE(16), 1200)
      assert.equal(png.readUInt32BE(20), 630)
      assert.equal(image.cached, false)
    }
    const before = await stat(join(cacheDir, first[0].url))
    const second = await buildImages({ cacheDir, entries })
    assert.ok(second.every(image => image.cached))
    assert.deepEqual(second.map(image => image.url), first.map(image => image.url))
    assert.equal((await stat(join(cacheDir, first[0].url))).mtimeMs, before.mtimeMs)
    const changed = await buildImages({ cacheDir, entries: [{ ...entries[0], title: 'Dotenv 18: A new CLI' }] })
    assert.notEqual(changed[0].url, first[0].url)
    await assert.rejects(buildImages({ cacheDir, entries: [{ key: '/bad', template: 'unknown' }] }), /Unknown OG template/)
  } finally {
    await rm(cacheDir, { recursive: true, force: true })
  }
})
