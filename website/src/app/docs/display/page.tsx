import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Display & layout · Tailsass',
  description: 'Display, flexbox, grid, floats, visibility, alignment, and sr-only.',
}

const flexCode = `<div class="flex flex-row gap-4">
  <div class="flex-1">Main</div>
  <aside class="flex-none w-64">Sidebar</aside>
</div>`

const gridCode = `<div class="grid grid-cols-3 gap-4">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>`

const gridSpanCode = `<div class="grid grid-cols-4 gap-3">
  <div class="col-span-2">Wide</div>
  <div>A</div>
  <div>B</div>
  <div class="col-span-3">Wider</div>
  <div>C</div>
</div>`

const gridResponsiveCode = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>`

const gridRowsCode = `<div class="grid grid-cols-2 grid-rows-2 gap-3 h-48">
  <div>1</div>
  <div class="row-span-2">Tall</div>
  <div>3</div>
</div>`

const alignCode = `<div class="flex items-center justify-between">
  <span>Left</span>
  <span>Right</span>
</div>`

export default function DisplayPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Display & layout</h1>
      <DocLead>Display modes, flexbox, grid, floats, visibility, alignment, and sr-only.</DocLead>

      <DocH2 id="display">Display modes</DocH2>
      <DocP>
        <code className="text-purple-700">block</code>,{' '}
        <code className="text-purple-700">inline</code>,{' '}
        <code className="text-purple-700">flex</code>,{' '}
        <code className="text-purple-700">grid</code>,{' '}
        <code className="text-purple-700">hidden</code>, table variants, and more.
      </DocP>

      <DocH2 id="flex">Flexbox</DocH2>
      <DocP>
        Direction (<code className="text-purple-700">flex-row</code>,{' '}
        <code className="text-purple-700">flex-col</code>, reverses), wrap,{' '}
        <code className="text-purple-700">flex-1</code>–<code className="text-purple-700">flex-12</code>,{' '}
        <code className="text-purple-700">grow</code>, <code className="text-purple-700">shrink</code>.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={flexCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="flex flex-row gap-4">
            <div className="flex-1 rounded-md bg-purple-600 p-4 text-sm text-white">Main (flex-1)</div>
            <aside className="w-32 flex-none rounded-md bg-slate-200 p-4 text-sm text-slate-800">
              Sidebar
            </aside>
          </div>
        </Example>
      </div>

      <DocH2 id="grid">Grid</DocH2>
      <DocP>
        <code className="text-purple-700">grid</code>,{' '}
        <code className="text-purple-700">grid-cols-{'{n}'}</code>,{' '}
        <code className="text-purple-700">grid-rows-{'{n}'}</code>,{' '}
        <code className="text-purple-700">col-span-{'{n}'}</code>,{' '}
        <code className="text-purple-700">row-span-{'{n}'}</code>, start/end helpers, and{' '}
        <code className="text-purple-700">columns-{'{n}'}</code>.
      </DocP>

      <DocP>Basic three-column grid:</DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={gridCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-md bg-purple-100 p-4 text-center text-sm text-purple-900">One</div>
            <div className="rounded-md bg-purple-100 p-4 text-center text-sm text-purple-900">Two</div>
            <div className="rounded-md bg-purple-100 p-4 text-center text-sm text-purple-900">Three</div>
          </div>
        </Example>
      </div>

      <DocP>Spanning columns:</DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={gridSpanCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-2 rounded-md bg-purple-600 p-4 text-center text-sm text-white">
              col-span-2
            </div>
            <div className="rounded-md bg-purple-100 p-4 text-center text-sm text-purple-900">A</div>
            <div className="rounded-md bg-purple-100 p-4 text-center text-sm text-purple-900">B</div>
            <div className="col-span-3 rounded-md bg-purple-300 p-4 text-center text-sm text-purple-950">
              col-span-3
            </div>
            <div className="rounded-md bg-purple-100 p-4 text-center text-sm text-purple-900">C</div>
          </div>
        </Example>
      </div>

      <DocP>Responsive columns:</DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={gridResponsiveCode} />
      </div>
      <div className="mb-6">
        <Example title="Preview (resize the window)">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-md bg-slate-100 p-4 text-center text-sm text-slate-800">1</div>
            <div className="rounded-md bg-slate-100 p-4 text-center text-sm text-slate-800">2</div>
            <div className="rounded-md bg-slate-100 p-4 text-center text-sm text-slate-800">3</div>
            <div className="rounded-md bg-slate-100 p-4 text-center text-sm text-slate-800">4</div>
          </div>
        </Example>
      </div>

      <DocP>Explicit rows:</DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={gridRowsCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="grid h-48 grid-cols-2 grid-rows-2 gap-3">
            <div className="flex items-center justify-center rounded-md bg-purple-600 text-sm text-white">
              1
            </div>
            <div className="row-span-2 flex items-center justify-center rounded-md bg-purple-800 text-sm text-white">
              row-span-2
            </div>
            <div className="flex items-center justify-center rounded-md bg-purple-300 text-sm text-purple-950">
              3
            </div>
          </div>
        </Example>
      </div>

      <DocH2 id="alignment">Alignment</DocH2>
      <DocP>
        <code className="text-purple-700">justify-*</code>,{' '}
        <code className="text-purple-700">items-*</code>,{' '}
        <code className="text-purple-700">content-*</code>,{' '}
        <code className="text-purple-700">self-*</code>, and{' '}
        <code className="text-purple-700">place-*</code> families.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={alignCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="flex items-center justify-between rounded-md bg-slate-100 p-4">
            <span className="text-sm font-bold text-slate-800">Left</span>
            <span className="text-sm font-bold text-slate-800">Right</span>
          </div>
        </Example>
      </div>

      <DocH2 id="visibility">Visibility and z-index</DocH2>
      <DocP>
        <code className="text-purple-700">visible</code>,{' '}
        <code className="text-purple-700">invisible</code>,{' '}
        <code className="text-purple-700">collapse</code>, and{' '}
        <code className="text-purple-700">z-10</code>…<code className="text-purple-700">z-120</code>.
      </DocP>
      <div className="mb-6">
        <Example>
          <div className="relative h-24 rounded-md bg-slate-100">
            <div className="absolute top-4 left-4 z-10 rounded-md bg-slate-400 px-3 py-2 text-sm text-white">
              z-10
            </div>
            <div className="absolute top-8 left-12 z-20 rounded-md bg-purple-600 px-3 py-2 text-sm text-white">
              z-20
            </div>
          </div>
        </Example>
      </div>

      <DocH2 id="sr-only">Screen-reader only</DocH2>
      <DocP>
        <code className="text-purple-700">sr-only</code> hides content visually but keeps it
        available to assistive technologies.
      </DocP>
      <div className="mb-8">
        <Example>
          <button
            type="button"
            className="cursor-pointer rounded-md bg-purple-600 px-4 py-2 text-white"
          >
            <span className="sr-only">Open navigation menu</span>
            Menu
          </button>
        </Example>
      </div>
    </div>
  )
}
