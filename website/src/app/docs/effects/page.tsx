import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Effects · Tailsass',
  description: 'Opacity utilities from opacity-0 to opacity-100.',
}

const opacityCode = `<div class="opacity-50">
  50% opaque content
</div>`

const hoverCode = `<button class="opacity-80 hover:opacity-100 transition-opacity">
  Fade in on hover
</button>`

export default function EffectsPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Effects</h1>
      <DocLead>Simple opacity helpers in steps of 10.</DocLead>

      <DocH2 id="opacity">Opacity</DocH2>
      <DocP>
        <code className="text-purple-700">opacity-0</code>,{' '}
        <code className="text-purple-700">opacity-10</code>, …{' '}
        <code className="text-purple-700">opacity-100</code>
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={opacityCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="flex flex-wrap gap-3">
            <div className="rounded-md bg-purple-600 px-4 py-3 text-sm text-white opacity-100">
              100
            </div>
            <div className="rounded-md bg-purple-600 px-4 py-3 text-sm text-white opacity-70">
              70
            </div>
            <div className="rounded-md bg-purple-600 px-4 py-3 text-sm text-white opacity-40">
              40
            </div>
            <div className="rounded-md bg-purple-600 px-4 py-3 text-sm text-white opacity-10">
              10
            </div>
          </div>
        </Example>
      </div>

      <DocH2 id="states">With state prefixes</DocH2>
      <div className="mb-4">
        <CodeBlock language="html" code={hoverCode} />
      </div>
      <div className="mb-8">
        <Example>
          <button
            type="button"
            className="cursor-pointer rounded-md bg-purple-600 px-4 py-2 text-white opacity-80 transition-opacity hover:opacity-100"
          >
            Fade in on hover
          </button>
        </Example>
      </div>
    </div>
  )
}
