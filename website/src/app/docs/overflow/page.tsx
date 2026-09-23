import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Overflow · Tailsass',
  description: 'overflow-auto, hidden, scroll, clip, and directional overflow utilities.',
}

const generalCode = `<div class="w-[200px] h-[100px] overflow-auto">
  Long content that becomes scrollable when it exceeds the box.
</div>`

const directionalCode = `<div class="w-[200px] overflow-x-scroll">
  <div class="w-[400px]">
    Horizontal scrolling only.
  </div>
</div>`

export default function OverflowPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Overflow</h1>
      <DocLead>Control how content that exceeds its container is handled.</DocLead>

      <DocH2 id="general">General overflow</DocH2>
      <DocP>
        <code className="text-purple-700">overflow-auto</code>,{' '}
        <code className="text-purple-700">overflow-hidden</code>,{' '}
        <code className="text-purple-700">overflow-visible</code>,{' '}
        <code className="text-purple-700">overflow-clip</code>,{' '}
        <code className="text-purple-700">overflow-scroll</code>
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={generalCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="h-[100px] w-[200px] overflow-auto rounded-md border-1 border-solid border-slate-300 p-3 text-sm text-slate-700">
            Long content that becomes scrollable when it exceeds the box. Keep adding lines so the
            container scrolls. Line three. Line four. Line five. Line six. Line seven.
          </div>
        </Example>
      </div>

      <DocH2 id="directional">Directional overflow</DocH2>
      <DocP>
        Axis helpers such as <code className="text-purple-700">overflow-x-auto</code>,{' '}
        <code className="text-purple-700">overflow-y-hidden</code>,{' '}
        <code className="text-purple-700">overflow-x-scroll</code>, and matching clip/visible
        variants.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={directionalCode} />
      </div>
      <div className="mb-8">
        <Example>
          <div className="w-[200px] overflow-x-scroll rounded-md border-1 border-solid border-slate-300 p-3">
            <div className="w-[400px] text-sm text-slate-700">
              Horizontal scrolling only. This inner row is wider than the outer box.
            </div>
          </div>
        </Example>
      </div>
    </div>
  )
}
