import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Colors · Tailsass',
  description:
    'Opt-in color utilities: build an app color bundle with the palettes you need.',
}

const sitePalettes = ['slate', 'purple'] as const

const catalogPalettes = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const

const appColorsCode = `// styles/colors.scss
@use '@maalbuquerque/tailsass/src/color-palette' as *;
@use '@maalbuquerque/tailsass/src/colors' with (
  $colors: (
    'slate': palette('slate'),
    'purple': palette('purple'),
  )
);

// Optional: override any token from color-variables
// :root {
//   --purple-600: hsl(271 81% 48%);
// }`

const compileCode = `npx sass styles/colors.scss dist/app-colors.css --no-source-map`

const dualImportCode = `import '@maalbuquerque/tailsass/dist/tailsass.css';
import './app-colors.css';`

const addBlueCode = `@use '@maalbuquerque/tailsass/src/color-palette' as *;
@use '@maalbuquerque/tailsass/src/colors' with (
  $colors: (
    'slate': palette('slate'),
    'purple': palette('purple'),
    'blue': palette('blue'), // add this — tokens already exist
  )
);`

const fullColorsCode = `// All catalog palettes (tokens included via colors)
@use '@maalbuquerque/tailsass/src/colors';`

const buttonCode = `<button class="px-4 py-2 bg-purple-600 text-white shadow-purple-400">
  Primary button
</button>`

const cardCode = `<div class="border-1 border-solid border-slate-300 bg-slate-50 text-slate-900 p-4">
  Subtle card using slate tones.
</div>`

function shadeLabelClass(shade: number) {
  return shade >= 500 ? 'text-white' : 'text-slate-900'
}

function tokenSwatchStyle(color: string, shade: number): CSSProperties {
  return {
    backgroundColor: `var(--${color}-${shade})`,
    color: shade >= 500 ? '#fff' : 'var(--slate-900)',
  }
}

export default function ColorsPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Colors</h1>
      <DocLead>
        Color utilities are opt-in. Core Tailsass has no palette CSS — each app compiles the
        palettes it needs, then imports that bundle beside the core stylesheet.
      </DocLead>

      <DocH2 id="why-split">Why colors are separate</DocH2>
      <DocP>
        Every palette × shade × <code className="text-purple-700">bg</code>/
        <code className="text-purple-700">text</code>/
        <code className="text-purple-700">border</code>/… × hover/focus/dark adds a lot of CSS. Keep
        core utilities lean, and ship only the colors your product uses.
      </DocP>

      <DocH2 id="build-bundle">Build an app color bundle</DocH2>
      <DocP>
        Pick palettes with <code className="text-purple-700">palette()</code>, configure{' '}
        <code className="text-purple-700">$colors</code>, compile, and import beside core. CSS
        variables for the full catalog ship automatically from{' '}
        <code className="text-purple-700">color-variables</code> when you load{' '}
        <code className="text-purple-700">colors</code> — <code className="text-purple-700">$colors</code>{' '}
        only controls which utility classes are generated.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="scss" code={appColorsCode} />
      </div>
      <DocP>
        To rebrand, redefine any <code className="text-purple-700">--*</code> token after the{' '}
        <code className="text-purple-700">@use</code> lines — later{' '}
        <code className="text-purple-700">:root</code> declarations win.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="bash" code={compileCode} />
      </div>
      <div className="mb-6">
        <CodeBlock language="js" code={dualImportCode} />
      </div>

      <DocH2 id="add-palette">Add another palette</DocH2>
      <DocP>
        Add it to <code className="text-purple-700">$colors</code>. Tokens for the full catalog
        are already defined — you only choose which utility classes to generate.
      </DocP>
      <div className="mb-6">
        <CodeBlock language="scss" code={addBlueCode} />
      </div>

      <DocH2 id="full-utilities">Generate every palette</DocH2>
      <DocP>To emit utility classes for the entire catalog:</DocP>
      <div className="mb-6">
        <CodeBlock language="scss" code={fullColorsCode} />
      </div>

      <DocH2 id="naming">Naming</DocH2>
      <DocP>Colors use name + shade (50–950):</DocP>
      <ul className="mb-6 list-none p-0 text-sm text-slate-700">
        <li className="mb-1">
          Background: <code className="text-purple-700">bg-{'{color}-{shade}'}</code>
        </li>
        <li className="mb-1">
          Text: <code className="text-purple-700">text-{'{color}-{shade}'}</code>
        </li>
        <li className="mb-1">
          Border: <code className="text-purple-700">border-{'{color}-{shade}'}</code>
        </li>
        <li className="mb-1">
          Outline: <code className="text-purple-700">outline-{'{color}-{shade}'}</code>
        </li>
        <li className="mb-1">
          Shadow glow: <code className="text-purple-700">shadow-{'{color}-{shade}'}</code>
        </li>
        <li className="mb-1">
          Accent: <code className="text-purple-700">accent-{'{color}-{shade}'}</code>
        </li>
      </ul>

      <DocH2 id="this-site">Palettes on this site</DocH2>
      <DocP>
        These docs generate utility classes for <code className="text-purple-700">slate</code> and{' '}
        <code className="text-purple-700">purple</code> only (same slim bundle as the example
        above).
      </DocP>
      <div className="mb-8 flex flex-col gap-5">
        {sitePalettes.map((color) => (
          <div key={color}>
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <p className="text-sm font-bold text-slate-800">{color}</p>
              <code className="text-xs text-purple-700">
                bg-{color}-{'{shade}'}
              </code>
            </div>
            <div className="flex overflow-hidden rounded-md border-1 border-solid border-slate-200">
              {shades.map((shade) => (
                <div
                  key={`${color}-${shade}`}
                  className={`flex h-14 min-w-0 flex-1 flex-col items-center justify-center bg-${color}-${shade} ${shadeLabelClass(shade)}`}
                  title={`bg-${color}-${shade}`}
                >
                  <span className="text-xs font-bold">{shade}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div>
          <div className="mb-2 flex items-baseline justify-between gap-3">
            <p className="text-sm font-bold text-slate-800">white / black / transparent</p>
            <code className="text-xs text-purple-700">bg-white · bg-black · bg-transparent</code>
          </div>
          <div className="flex overflow-hidden rounded-md border-1 border-solid border-slate-200">
            <div
              className="flex h-14 flex-1 items-center justify-center bg-white text-xs font-bold text-slate-900"
              title="bg-white"
            >
              white
            </div>
            <div
              className="flex h-14 flex-1 items-center justify-center bg-black text-xs font-bold text-white"
              title="bg-black"
            >
              black
            </div>
            <div
              className="flex h-14 flex-1 items-center justify-center bg-transparent text-xs font-bold text-slate-700"
              style={{
                backgroundImage:
                  'linear-gradient(45deg, #e2e8f0 25%, transparent 25%), linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e2e8f0 75%), linear-gradient(-45deg, transparent 75%, #e2e8f0 75%)',
                backgroundSize: '12px 12px',
                backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0',
              }}
              title="bg-transparent"
            >
              transparent
            </div>
          </div>
        </div>
      </div>

      <DocH2 id="all-palettes">All available palettes</DocH2>
      <DocP>
        These palettes are available when you{' '}
        <code className="text-purple-700">@use &apos;@maalbuquerque/tailsass/src/colors&apos;</code>
        .
      </DocP>
      <div className="mb-8 flex flex-col gap-5">
        {catalogPalettes.map((color) => (
          <div key={color}>
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <p className="text-sm font-bold text-slate-800">{color}</p>
              <code className="text-xs text-purple-700">
                bg-{color}-{'{shade}'}
              </code>
            </div>
            <div className="flex overflow-hidden rounded-md border-1 border-solid border-slate-200">
              {shades.map((shade) => (
                <div
                  key={`${color}-${shade}`}
                  className="flex h-14 min-w-0 flex-1 flex-col items-center justify-center"
                  style={tokenSwatchStyle(color, shade)}
                  title={`bg-${color}-${shade}`}
                >
                  <span className="text-xs font-bold">{shade}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <DocH2 id="examples">Examples</DocH2>
      <div className="mb-4">
        <CodeBlock language="html" code={buttonCode} />
      </div>
      <div className="mb-6">
        <Example>
          <button
            type="button"
            className="cursor-pointer rounded-md bg-purple-600 px-4 py-2 text-white shadow-purple-400"
          >
            Primary button
          </button>
        </Example>
      </div>
      <div className="mb-4">
        <CodeBlock language="html" code={cardCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="rounded-md border-1 border-solid border-slate-300 bg-slate-50 p-4 text-slate-900">
            Subtle card using slate tones.
          </div>
        </Example>
      </div>

      <DocH2 id="variants">State and color-scheme variants</DocH2>
      <DocP>
        Most color utilities support state prefixes (
        <code className="text-purple-700">hover:</code>,{' '}
        <code className="text-purple-700">focus:</code>,{' '}
        <code className="text-purple-700">active:</code>) and color-scheme prefixes (
        <code className="text-purple-700">dark:</code>,{' '}
        <code className="text-purple-700">light:</code>).
      </DocP>
      <div className="mb-8">
        <Example>
          <button
            type="button"
            className="cursor-pointer rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-800"
          >
            hover:bg-purple-800
          </button>
        </Example>
      </div>
    </div>
  )
}
