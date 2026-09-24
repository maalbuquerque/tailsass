import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { execSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const websiteRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const libraryRoot = path.join(websiteRoot, '..')
const distCss = path.join(libraryRoot, 'dist', 'tailsass.css')
const destDir = path.join(websiteRoot, 'src', 'vendor')
const destCss = path.join(destDir, 'tailsass.css')
const colorsEntry = path.join(websiteRoot, 'src', 'styles', 'colors.scss')
const destColorsCss = path.join(destDir, 'app-colors.css')
const sassBin = path.join(websiteRoot, 'node_modules', 'sass', 'sass.js')

if (!existsSync(distCss)) {
  execSync('npm run build', { cwd: libraryRoot, stdio: 'inherit' })
}

mkdirSync(destDir, { recursive: true })
copyFileSync(distCss, destCss)
console.log(`Synced ${distCss} -> ${destCss}`)

execSync(
  `node "${sassBin}" "${colorsEntry}" "${destColorsCss}" --no-source-map --style=expanded --load-path="${path.join(libraryRoot, 'src')}"`,
  { cwd: websiteRoot, stdio: 'inherit' },
)
console.log(`Built ${colorsEntry} -> ${destColorsCss}`)
