import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Cursor · Tailsass',
  description: 'Cursor style utilities for interactive elements.',
}

const commonCode = `<button class="px-4 py-2 cursor-pointer">
  Clickable button
</button>

<button class="px-4 py-2 cursor-not-allowed" disabled>
  Disabled button
</button>`

export default function CursorPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Cursor</h1>
      <DocLead>Control the mouse cursor style for interactive elements.</DocLead>

      <DocH2 id="common">Common cursors</DocH2>
      <DocP>
        <code className="text-purple-700">cursor-auto</code>,{' '}
        <code className="text-purple-700">cursor-default</code>,{' '}
        <code className="text-purple-700">cursor-pointer</code>,{' '}
        <code className="text-purple-700">cursor-text</code>,{' '}
        <code className="text-purple-700">cursor-move</code>,{' '}
        <code className="text-purple-700">cursor-wait</code>,{' '}
        <code className="text-purple-700">cursor-help</code>,{' '}
        <code className="text-purple-700">cursor-not-allowed</code>, and more.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={commonCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-md bg-purple-600 px-4 py-2 text-white"
            >
              cursor-pointer
            </button>
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-md bg-slate-300 px-4 py-2 text-slate-600"
            >
              cursor-not-allowed
            </button>
            <span className="cursor-help rounded-md border-1 border-solid border-slate-300 px-4 py-2 text-sm">
              cursor-help
            </span>
          </div>
        </Example>
      </div>

      <DocH2 id="advanced">Advanced cursors</DocH2>
      <DocP>
        Grab, resize, zoom, and specialty cursors such as{' '}
        <code className="text-purple-700">cursor-grab</code>,{' '}
        <code className="text-purple-700">cursor-col-resize</code>,{' '}
        <code className="text-purple-700">cursor-zoom-in</code>, and the full resize set.
      </DocP>
      <div className="mb-8">
        <Example>
          <div className="cursor-grab rounded-md border-1 border-dashed border-purple-400 bg-purple-50 p-6 text-center text-sm text-purple-900">
            cursor-grab — drag me (cursor only)
          </div>
        </Example>
      </div>
      <DocP>
        State prefixes work too, for example{' '}
        <code className="text-purple-700">hover:cursor-pointer</code>.
      </DocP>
    </div>
  )
}
