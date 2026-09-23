import type { Metadata } from 'next'
import Link from 'next/link'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Typography · Tailsass',
  description: 'Text alignment, wrapping, truncation, font sizes, and font weight.',
}

const alignCode = `<p class="text-left">Left aligned</p>
<p class="text-center">Centered</p>
<p class="text-right">Right aligned</p>`

const truncateCode = `<p class="truncate w-[200px]">
  Very long line of text that will be cut off with an ellipsis.
</p>`

const sizesCode = `<h1 class="text-4xl font-bold">Page title</h1>
<p class="text-base">Regular body copy.</p>
<small class="text-xs">Tiny helper text.</small>`

export default function TypographyPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Typography</h1>
      <DocLead>Text alignment, wrapping, truncation, font size, and weight.</DocLead>

      <DocH2 id="alignment">Text alignment</DocH2>
      <DocP>
        <code className="text-purple-700">text-left</code>,{' '}
        <code className="text-purple-700">text-center</code>,{' '}
        <code className="text-purple-700">text-right</code>,{' '}
        <code className="text-purple-700">text-justify</code>
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={alignCode} />
      </div>
      <div className="mb-6">
        <Example>
          <p className="mb-2 text-left text-slate-800">Left aligned</p>
          <p className="mb-2 text-center text-slate-800">Centered</p>
          <p className="text-right text-slate-800">Right aligned</p>
        </Example>
      </div>

      <DocH2 id="wrapping">Wrapping and truncation</DocH2>
      <DocP>
        <code className="text-purple-700">truncate</code>,{' '}
        <code className="text-purple-700">text-ellipsis</code>,{' '}
        <code className="text-purple-700">text-clip</code>,{' '}
        <code className="text-purple-700">text-wrap</code>,{' '}
        <code className="text-purple-700">text-nowrap</code>,{' '}
        <code className="text-purple-700">text-balance</code>,{' '}
        <code className="text-purple-700">text-pretty</code>
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={truncateCode} />
      </div>
      <div className="mb-6">
        <Example>
          <p className="truncate w-[200px] rounded-md bg-slate-100 p-2 text-sm text-slate-800">
            Very long line of text that will be cut off with an ellipsis when it exceeds the
            container width.
          </p>
        </Example>
      </div>

      <DocH2 id="sizes">Font sizes</DocH2>
      <DocP>
        <code className="text-purple-700">text-xs</code> through{' '}
        <code className="text-purple-700">text-9xl</code>, including{' '}
        <code className="text-purple-700">text-base</code>,{' '}
        <code className="text-purple-700">text-lg</code>, and{' '}
        <code className="text-purple-700">text-xl</code>.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={sizesCode} />
      </div>
      <div className="mb-6">
        <Example>
          <h1 className="mb-2 text-4xl font-bold text-slate-900">Page title</h1>
          <p className="mb-2 text-base text-slate-700">Regular body copy.</p>
          <small className="text-xs text-slate-500">Tiny helper text.</small>
        </Example>
      </div>

      <DocH2 id="weight">Font weight</DocH2>
      <DocP>
        <code className="text-purple-700">font-bold</code>
      </DocP>
      <div className="mb-8">
        <Example>
          <span className="font-bold text-slate-900">Important label</span>
          <span className="ml-4 text-slate-600">Regular label</span>
        </Example>
      </div>

      <DocP>
        Responsive prefixes work too, for example{' '}
        <code className="text-purple-700">md:text-center</code> or{' '}
        <code className="text-purple-700">lg:text-4xl</code>. For loading a custom typeface, see{' '}
        <Link className="text-purple-700" href="/docs/fonts">
          Fonts
        </Link>
        .
      </DocP>
    </div>
  )
}
