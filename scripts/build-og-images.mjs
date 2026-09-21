import { createHash } from 'node:crypto'
import { readFile, mkdir, access, writeFile, rename } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const width = 1200
const height = 630
const background = '#0a0a0a'
const ink = '#e8e0d2'
const muted = '#a59a83'
const fontFiles = [400, 600].map(weight => ({
  name: 'Inter', weight, style: 'normal',
  path: join(root, `node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff`)
}))
const fonts = await Promise.all(fontFiles.map(async ({ path, ...font }) => ({ ...font, data: await readFile(path) })))
fonts.push({
  name: 'Symbols', weight: 400, style: 'normal',
  data: await readFile(join(root, 'node_modules/@fontsource/noto-sans-symbols/files/noto-sans-symbols-symbols-400-normal.woff')),
})
const script = await readFile(fileURLToPath(import.meta.url))
const dependencies = await readFile(join(root, 'package-lock.json'))
const element = (type, style, children, props = {}) => ({ type, props: { ...props, style, children } })

async function blogSvg(entry) {
  if (!entry.title?.trim()) throw new Error(`Missing title for ${entry.key}`)
  // Measure the actual title and shrink only when necessary. No truncated titles.
  for (let fontSize = 88; fontSize >= 28; fontSize -= 2) {
    let bounds
    const svg = await satori(element('div', {
      width, height, display: 'flex', flexDirection: 'column', background,
      color: ink, fontFamily: 'Inter, Symbols', padding: '64px 80px',
    }, [
      element('div', { display: 'flex', justifyContent: 'space-between', fontSize: 22, color: muted }, [
        element('span', { fontWeight: 600, color: ink }, 'dotenvx'),
        element('span', { letterSpacing: '3px', fontSize: 16 }, 'BLOG'),
      ]),
      element('div', { display: 'flex', alignItems: 'center', flex: 1 }, [
        element('div', {
          display: 'flex', width: '100%', fontSize, fontWeight: 600,
          lineHeight: 1.08, letterSpacing: '-3px',
        }, entry.title, { 'data-og-title': true }),
      ]),
      element('div', {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderTop: '1px solid #292722', paddingTop: 24, fontSize: 19, color: muted,
      }, [element('span', {}, entry.author || 'Scott Motte'), element('span', {}, entry.date || '')]),
    ]), {
      width, height, fonts,
      onNodeDetected(node) { if (node.props['data-og-title']) bounds = node },
    })
    if (bounds && bounds.height <= 310 && bounds.width <= 1040) return svg
  }
  throw new Error(`Title does not fit the OG template: ${entry.title}`)
}

function logoSvg(logo) {
  const viewBox = logo.match(/viewBox="([^"]+)"/)?.[1].trim().split(/[\s,]+/).map(Number)
  if (!viewBox || viewBox.length !== 4 || viewBox[2] <= 0 || viewBox[3] <= 0) throw new Error('Logo needs a valid SVG viewBox')
  const scale = Math.min(720 / viewBox[2], 260 / viewBox[3])
  const logoWidth = viewBox[2] * scale
  const logoHeight = viewBox[3] * scale
  const body = logo.replace(/^.*?<svg\b[^>]*>/s, '').replace(/<\/svg>\s*$/, '').replaceAll('currentColor', ink)
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="${background}"/><svg x="${(width-logoWidth)/2}" y="${(height-logoHeight)/2}" width="${logoWidth}" height="${logoHeight}" viewBox="${viewBox.join(' ')}">${body}</svg></svg>`
}

export async function buildImages({ entries, cacheDir }) {
  const results = []
  for (const entry of entries) {
    const logo = entry.template === 'logo' ? await readFile(resolve(root, entry.logo), 'utf8') : ''
    if (!['blog', 'logo'].includes(entry.template)) throw new Error(`Unknown OG template: ${entry.template}`)
    const digest = createHash('sha256').update(script).update(dependencies).update(JSON.stringify(entry)).update(logo)
    for (const font of fonts) digest.update(font.data)
    const hash = digest.digest('hex').slice(0, 16)
    const slug = entry.key.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '')
    const url = `/assets/img/og/${slug}-${hash}.png`
    const path = join(cacheDir, url)
    let cached = true
    try { await access(path) } catch { cached = false }
    if (!cached) {
      const svg = entry.template === 'logo' ? logoSvg(logo) : await blogSvg(entry)
      const png = new Resvg(svg, { font: { loadSystemFonts: false } }).render().asPng()
      await mkdir(dirname(path), { recursive: true })
      const temporary = `${path}.${process.pid}.tmp`
      await writeFile(temporary, png)
      await rename(temporary, path)
    }
    results.push({ key: entry.key, url, width, height, cached })
  }
  return results
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    let input = ''
    for await (const chunk of process.stdin) input += chunk
    process.stdout.write(JSON.stringify(await buildImages(JSON.parse(input))))
  } catch (error) {
    console.error(`OG images: ${error.message}`)
    process.exitCode = 1
  }
}
