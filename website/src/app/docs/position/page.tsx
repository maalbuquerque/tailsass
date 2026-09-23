import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Position · Tailsass',
  description: 'static, relative, absolute, fixed, and sticky position utilities.',
}

const exampleCode = `<div class="relative">
  <div class="absolute top-2 right-2">
    Badge in the top-right corner
  </div>
</div>`

export default function PositionPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Position</h1>
      <DocLead>
        Common CSS position values. Pair them with spacing offsets like top-*, right-*, bottom-*,
        and left-*.
      </DocLead>

      <DocH2 id="values">Position values</DocH2>
      <DocP>
        <code className="text-purple-700">static</code>,{' '}
        <code className="text-purple-700">relative</code>,{' '}
        <code className="text-purple-700">absolute</code>,{' '}
        <code className="text-purple-700">fixed</code>,{' '}
        <code className="text-purple-700">sticky</code>
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={exampleCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="relative h-32 rounded-md bg-slate-100">
            <div className="absolute top-2 right-2 rounded-md bg-purple-600 px-3 py-2 text-sm text-white">
              top-2 right-2
            </div>
            <p className="p-4 text-sm text-slate-600">Parent is relative</p>
          </div>
        </Example>
      </div>

      <DocH2 id="responsive">Responsive positions</DocH2>
      <DocP>
        Breakpoint prefixes work too, for example{' '}
        <code className="text-purple-700">sm:fixed</code>,{' '}
        <code className="text-purple-700">md:absolute</code>,{' '}
        <code className="text-purple-700">lg:relative</code>,{' '}
        <code className="text-purple-700">2xl:sticky</code>.
      </DocP>
    </div>
  )
}
