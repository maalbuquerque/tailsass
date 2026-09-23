import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Borders · Tailsass',
  description: 'Border style, width, outline, and radius utilities.',
}

const styleCode = `<div class="border-solid border-1 rounded p-4">
  Solid 1px border with default radius.
</div>`

const widthCode = `<div class="border-2 border-y-4 outline-2 outline-offset-2 p-4">
  Custom border and outline widths.
</div>`

export default function BordersPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Borders</h1>
      <DocLead>Border style, width, outline, and radius.</DocLead>

      <DocH2 id="styles">Border styles</DocH2>
      <DocP>
        <code className="text-purple-700">border-solid</code>,{' '}
        <code className="text-purple-700">border-dashed</code>,{' '}
        <code className="text-purple-700">border-dotted</code>,{' '}
        <code className="text-purple-700">border-double</code>,{' '}
        <code className="text-purple-700">border-none</code>, plus matching{' '}
        <code className="text-purple-700">outline-*</code> styles.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={styleCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="rounded border-1 border-solid border-purple-400 p-4 text-sm text-slate-800">
            Solid 1px border with default radius.
          </div>
        </Example>
      </div>

      <DocH2 id="widths">Border widths</DocH2>
      <DocP>
        Numeric suffixes 0–12 for <code className="text-purple-700">border-{'{n}'}</code>,
        sides, axes, <code className="text-purple-700">outline-{'{n}'}</code>, and{' '}
        <code className="text-purple-700">outline-offset-{'{n}'}</code>.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={widthCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="border-2 border-y-4 border-solid border-purple-500 p-4 text-sm text-slate-800">
            border-2 with border-y-4
          </div>
        </Example>
      </div>

      <DocH2 id="radius">Border radius</DocH2>
      <DocP>
        <code className="text-purple-700">rounded-none</code>,{' '}
        <code className="text-purple-700">rounded-sm</code>,{' '}
        <code className="text-purple-700">rounded</code>,{' '}
        <code className="text-purple-700">rounded-md</code>,{' '}
        <code className="text-purple-700">rounded-lg</code>,{' '}
        <code className="text-purple-700">rounded-xl</code>,{' '}
        <code className="text-purple-700">rounded-2xl</code>,{' '}
        <code className="text-purple-700">rounded-3xl</code>,{' '}
        <code className="text-purple-700">rounded-full</code>, plus directional variants.
      </DocP>
      <div className="mb-8">
        <Example>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-md bg-purple-600 px-4 py-2 text-white"
            >
              rounded-md
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-full bg-purple-600 px-4 py-2 text-white"
            >
              rounded-full
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-2xl bg-purple-600 px-4 py-2 text-white"
            >
              rounded-2xl
            </button>
          </div>
        </Example>
      </div>
    </div>
  )
}
