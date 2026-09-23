import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Getting started · Tailsass',
  description: 'Install Tailsass and start using utility classes in CSS or Sass.',
}

const installCode = `npm install @maalbuquerque/tailsass`

const cssImportCode = `import '@maalbuquerque/tailsass/dist/tailsass.css';`

const htmlExampleCode = `<div class="p-4 my-4 w-full text-center">
  <h1 class="text-3xl font-bold mb-2">Hello Tailsass</h1>
  <p class="text-base text-wrap">
    Utility classes for spacing, sizing, typography, and more.
  </p>
</div>`

const sassImportCode = `@use '@maalbuquerque/tailsass/src/index' as tailsass;`

const responsiveCode = `<div class="p-2 md:p-4 lg:p-8 2xl:p-10">
  <p class="text-base md:text-xl">
    This text and padding grow on larger screens.
  </p>
</div>`

const breakpoints = [
  { prefix: 'xs:', width: '480px' },
  { prefix: 'sm:', width: '640px' },
  { prefix: 'md:', width: '768px' },
  { prefix: 'lg:', width: '1024px' },
  { prefix: 'xl:', width: '1280px' },
  { prefix: '2xl:', width: '1536px' },
  { prefix: '3xl:', width: '1920px' },
]

export default function GettingStartedPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Start</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Getting started</h1>
      <DocLead>
        Install the package, import it once, then compose utility classes in your markup.
      </DocLead>

      <DocH2 id="install">Install</DocH2>
      <DocP>Add Tailsass from npm:</DocP>
      <div className="mb-6">
        <CodeBlock language="bash" code={installCode} />
      </div>

      <DocH2 id="use-as-css">Use as global CSS</DocH2>
      <DocP>
        Import the compiled CSS once in your app entry (for example in a React, Vue, or Svelte
        app):
      </DocP>
      <div className="mb-6">
        <CodeBlock language="js" code={cssImportCode} />
      </div>
      <DocP>Then use utility classes directly in your markup:</DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={htmlExampleCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="p-4 my-4 w-full text-center">
            <h1 className="mb-2 text-3xl font-bold">Hello Tailsass</h1>
            <p className="text-base text-wrap">
              Utility classes for spacing, sizing, typography, and more.
            </p>
          </div>
        </Example>
      </div>

      <DocH2 id="use-with-sass">Use with Sass</DocH2>
      <DocP>If your build supports Sass, import the source instead:</DocP>
      <div className="mb-4">
        <CodeBlock language="scss" code={sassImportCode} />
      </div>
      <DocP>
        That generates the same utility classes into your compiled CSS. Use the same class names in
        HTML or component templates.
      </DocP>

      <DocH2 id="responsive">Responsive variants</DocH2>
      <DocP>
        Most utilities support responsive prefixes based on the configured breakpoints. For
        example:
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={responsiveCode} />
      </div>
      <div className="mb-6">
        <Example title="Preview (resize the window)">
          <div className="rounded-md bg-purple-50 p-2 md:p-4 lg:p-8 2xl:p-10">
            <p className="text-base text-purple-900 md:text-xl">
              This text and padding grow on larger screens.
            </p>
          </div>
        </Example>
      </div>

      <DocP>Default breakpoints:</DocP>
      <div className="mb-8 overflow-auto rounded-lg border-1 border-solid border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="border-b-1 border-solid border-slate-200 px-4 py-3 font-bold text-slate-700">
                Prefix
              </th>
              <th className="border-b-1 border-solid border-slate-200 px-4 py-3 font-bold text-slate-700">
                Min width
              </th>
            </tr>
          </thead>
          <tbody>
            {breakpoints.map((row) => (
              <tr key={row.prefix}>
                <td className="border-b-1 border-solid border-slate-100 px-4 py-3">
                  <code className="rounded-sm bg-purple-50 px-2 py-1 text-purple-800">
                    {row.prefix}
                  </code>
                </td>
                <td className="border-b-1 border-solid border-slate-100 px-4 py-3 text-slate-600">
                  {row.width}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
