import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Transform · Tailsass',
  description: 'translate-x-full, translate-y-full, and reset helpers.',
}

const offscreenCode = `<div class="relative w-full h-64 overflow-hidden">
  <div class="absolute top-0 right-0 bottom-0 left-0 bg-blue-500 translate-x-full">
    I start completely off-screen to the right.
  </div>
</div>`

const panelCode = `<aside class="fixed top-0 right-0 bottom-0 w-80 translate-x-full transition-transform">
  <!-- Add translate-x-0 (e.g. via JS) to slide the panel in -->
</aside>`

export default function TransformPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Transform</h1>
      <DocLead>Simple translate helpers for sliding panels, drawers, and motion.</DocLead>

      <DocH2 id="classes">Classes</DocH2>
      <DocP>
        <code className="text-purple-700">translate-x-full</code>,{' '}
        <code className="text-purple-700">translate-y-full</code>,{' '}
        <code className="text-purple-700">translate-x-0</code>,{' '}
        <code className="text-purple-700">translate-y-0</code>
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={offscreenCode} />
      </div>
      <div className="mb-6">
        <Example title="Compare translate-x-0 vs translate-x-full">
          <div className="flex flex-col gap-4">
            <div className="relative h-20 overflow-hidden rounded-md bg-slate-100">
              <div className="absolute top-0 right-0 bottom-0 left-0 flex translate-x-0 items-center justify-center bg-purple-600 text-sm text-white">
                translate-x-0 (visible)
              </div>
            </div>
            <div className="relative h-20 overflow-hidden rounded-md bg-slate-100">
              <div className="absolute top-0 right-0 bottom-0 left-0 flex translate-x-full items-center justify-center bg-purple-600 text-sm text-white">
                translate-x-full (off-screen)
              </div>
              <p className="relative z-10 p-4 text-sm text-slate-500">
                Panel is translated fully to the right
              </p>
            </div>
          </div>
        </Example>
      </div>

      <DocH2 id="panels">Sliding panels</DocH2>
      <DocP>
        Combine with <code className="text-purple-700">transition-transform</code> and toggle{' '}
        <code className="text-purple-700">translate-x-0</code> in JS to open drawers or toasts.
      </DocP>
      <div className="mb-8">
        <CodeBlock language="html" code={panelCode} />
      </div>
    </div>
  )
}
