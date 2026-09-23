import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Animation · Tailsass',
  description: 'animate-spin, pulse, bounce, and transition utilities.',
}

const spinCode = `<div class="w-10 h-10 rounded-full border-2 border-solid border-purple-200 animate-spin"
     style="border-top-color: #7c3aed"></div>`

const pulseCode = `<div class="p-4 animate-pulse">
  Loading state content...
</div>`

const transitionCode = `<button class="px-4 py-2 transition-colors hover:bg-purple-800">
  Hover me
</button>`

export default function AnimationPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Animation</h1>
      <DocLead>Quick motion without writing keyframes by hand.</DocLead>

      <DocH2 id="animations">Animations</DocH2>
      <DocP>
        <code className="text-purple-700">animate-spin</code>,{' '}
        <code className="text-purple-700">animate-pulse</code>,{' '}
        <code className="text-purple-700">animate-bounce</code>,{' '}
        <code className="text-purple-700">animate-none</code>
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={spinCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="flex items-center gap-6">
            <div
              className="h-10 w-10 animate-spin rounded-full border-2 border-solid border-purple-200"
              style={{ borderTopColor: '#7c3aed' }}
            />
            <div className="animate-pulse rounded-md bg-purple-100 px-4 py-3 text-sm text-purple-900">
              animate-pulse
            </div>
            <div className="animate-bounce rounded-md bg-purple-600 px-3 py-2 text-sm text-white">
              bounce
            </div>
          </div>
        </Example>
      </div>
      <div className="mb-4">
        <CodeBlock language="html" code={pulseCode} />
      </div>

      <DocH2 id="transitions">Transitions</DocH2>
      <DocP>
        <code className="text-purple-700">transition-none</code>,{' '}
        <code className="text-purple-700">transition-all</code>,{' '}
        <code className="text-purple-700">transition-colors</code>,{' '}
        <code className="text-purple-700">transition-opacity</code>,{' '}
        <code className="text-purple-700">transition-transform</code>
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={transitionCode} />
      </div>
      <div className="mb-8">
        <Example>
          <button
            type="button"
            className="cursor-pointer rounded-md bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-800"
          >
            Hover me
          </button>
        </Example>
      </div>
    </div>
  )
}
