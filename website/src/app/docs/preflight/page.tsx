import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Preflight · Tailsass',
  description: 'Base styles that normalize browsers so utility classes can take over.',
}

const includeCode = `import '@maalbuquerque/tailsass/dist/tailsass.css';
// Preflight ships with the compiled stylesheet. No extra class names needed.`

const indexImportCode = `@use '@maalbuquerque/tailsass/src/preflight';
// Or via the full entry:
@use '@maalbuquerque/tailsass/src/index';`

const features = [
  'Resets margins, padding, and border box-sizing for most elements',
  'Normalizes font families for html and code-like elements (code, kbd, samp, pre)',
  'Resets heading elements (h1–h6) to inherit font sizing and weight',
  'Removes default list styles for ol, ul, and menu',
  'Normalizes form controls (button, input, select, textarea)',
  'Ensures [hidden] elements are actually hidden',
  'Smooths small browser quirks (spin buttons, search inputs, file upload buttons, and more)',
]

export default function PreflightPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Preflight</h1>
      <DocLead>
        A small set of base styles that normalize browser defaults and give typography a clean
        foundation. You do not apply preflight with classes; it runs globally when you include the
        stylesheet.
      </DocLead>

      <DocH2 id="what-it-does">What preflight does</DocH2>
      <ul className="mb-6 list-none p-0">
        {features.map((item) => (
          <li
            key={item}
            className="mb-2 flex gap-3 rounded-md border-1 border-solid border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
          >
            <span className="font-bold text-purple-600">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <DocH2 id="how-it-loads">How it loads</DocH2>
      <DocP>
        Importing the compiled CSS (or the Sass entry) includes preflight automatically:
      </DocP>
      <div className="mb-4">
        <CodeBlock language="js" code={includeCode} />
      </div>
      <div className="mb-6">
        <CodeBlock language="scss" code={indexImportCode} />
      </div>

      <DocH2 id="baseline-preview">Baseline preview</DocH2>
      <DocP>
        With preflight active, headings inherit size and weight until you add utilities, lists lose
        default bullets, and spacing starts from zero so utilities fully control layout.
      </DocP>
      <div className="mb-6">
        <Example title="Elements after preflight">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Headings</h3>
              <h1>Heading 1 (no size utility yet)</h1>
              <h2>Heading 2 (inherits until you style it)</h2>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">List without utilities</h3>
              <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
              </ul>
              <p className="mt-2 text-sm text-slate-500">
                No bullets by default. Add <code className="text-purple-700">list-disc</code> when
                you want markers back.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Form controls</h3>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  className="border-1 border-solid border-slate-300 p-2 rounded-md"
                  type="text"
                  defaultValue="Inherited font"
                />
                <button
                  type="button"
                  className="cursor-pointer rounded-md bg-purple-600 px-4 py-2 text-white"
                >
                  Button
                </button>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Hidden attribute</h3>
              <p hidden>You should not see this paragraph.</p>
              <p className="text-sm text-slate-600">
                A sibling with <code className="text-purple-700">hidden</code> stays out of the
                layout.
              </p>
            </div>
          </div>
        </Example>
      </div>

      <DocH2 id="when-to-use">When to use it</DocH2>
      <DocP>Include preflight when you want:</DocP>
      <ul className="mb-4 list-none p-0">
        <li className="mb-2 text-base text-slate-600">
          · A clean, predictable baseline across browsers
        </li>
        <li className="mb-2 text-base text-slate-600">
          · Utility classes (spacing, typography, and the rest) to fully control layout and
          appearance
        </li>
      </ul>
      <DocP>
        If you prefer native browser styles, fork the library and remove or customize the{' '}
        <code className="text-purple-700">preflight</code> import in{' '}
        <code className="text-purple-700">src/index.scss</code>.
      </DocP>
    </div>
  )
}
