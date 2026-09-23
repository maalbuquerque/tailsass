import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Colors · Tailsass',
  description: 'Background, text, border, outline, shadow, and accent color utilities.',
}

const palettes = [
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

const buttonCode = `<button class="px-4 py-2 bg-blue-600 text-white shadow-blue-400">
  Primary button
</button>`

const cardCode = `<div class="border-1 border-solid border-slate-300 bg-slate-50 text-slate-900 p-4">
  Subtle card using slate tones.
</div>`

function shadeLabelClass(shade: number) {
  return shade >= 500 ? 'text-white' : 'text-slate-900'
}

export default function ColorsPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Colors</h1>
      <DocLead>
        Background, text, border, outline, shadow, and accent colors from the Tailsass palette.
      </DocLead>

      <DocH2 id="naming">Palette and naming</DocH2>
      <DocP>Colors use name + shade (50–950):</DocP>
      <p className="mb-4 text-sm text-slate-600">{palettes.join(', ')}</p>
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

      <DocH2 id="all-colors">All colors</DocH2>
      <DocP>
        Every palette and shade as <code className="text-purple-700">bg-*</code>. The same shade
        tokens work with text, border, outline, shadow, and accent prefixes.
      </DocP>
      <div className="mb-8 flex flex-col gap-5">
        {palettes.map((color) => (
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

      <DocH2 id="examples">Examples</DocH2>
      <div className="mb-4">
        <CodeBlock language="html" code={buttonCode} />
      </div>
      <div className="mb-6">
        <Example>
          <button
            type="button"
            className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white shadow-blue-400"
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

      <DocH2 id="neutrals">White, black, and transparent</DocH2>
      <DocP>
        <code className="text-purple-700">bg-white</code>,{' '}
        <code className="text-purple-700">bg-black</code>,{' '}
        <code className="text-purple-700">bg-transparent</code>, plus matching{' '}
        <code className="text-purple-700">text-*</code>,{' '}
        <code className="text-purple-700">border-*</code>,{' '}
        <code className="text-purple-700">shadow-*</code>,{' '}
        <code className="text-purple-700">outline-*</code>, and{' '}
        <code className="text-purple-700">accent-*</code> for white and black.
      </DocP>
      <div className="mb-6">
        <Example>
          <button
            type="button"
            className="cursor-pointer rounded-md border-1 border-solid border-white bg-black px-4 py-2 text-white"
          >
            High contrast
          </button>
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
