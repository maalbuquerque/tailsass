import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Lists · Tailsass',
  description: 'list-disc, list-decimal, and list-none utilities.',
}

const exampleCode = `<ul class="list-disc pl-6">
  <li>First item</li>
  <li>Second item</li>
</ul>

<ol class="list-decimal pl-6">
  <li>First step</li>
  <li>Second step</li>
</ol>

<ul class="list-none pl-0">
  <li>No markers here</li>
</ul>`

export default function ListsPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Lists</h1>
      <DocLead>Control list marker style for ordered and unordered lists.</DocLead>

      <DocH2 id="styles">List styles</DocH2>
      <DocP>
        <code className="text-purple-700">list-disc</code>,{' '}
        <code className="text-purple-700">list-decimal</code>,{' '}
        <code className="text-purple-700">list-none</code>
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={exampleCode} />
      </div>
      <div className="mb-8">
        <Example>
          <div className="flex flex-col gap-6">
            <ul className="list-disc pl-6 text-slate-800">
              <li>First item</li>
              <li>Second item</li>
            </ul>
            <ol className="list-decimal pl-6 text-slate-800">
              <li>First step</li>
              <li>Second step</li>
            </ol>
            <ul className="list-none pl-0 text-slate-800">
              <li>No markers here</li>
              <li>Still no markers</li>
            </ul>
          </div>
        </Example>
      </div>
      <DocP>
        Combine with spacing such as <code className="text-purple-700">pl-*</code> to control
        indentation separately from the marker style.
      </DocP>
    </div>
  )
}
