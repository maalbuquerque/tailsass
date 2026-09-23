import type { Metadata } from 'next'
import { Fraunces, JetBrains_Mono } from 'next/font/google'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Fonts · Tailsass',
  description: 'Load any web font and apply it globally or with your own utility classes.',
}

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const defaultStackCode = `html {
  font-family:
    system-ui,
    'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji';
}`

const googleLinkCode = `<!-- in <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700&display=swap"
  rel="stylesheet"
/>`

const fontFaceCode = `@font-face {
  font-family: 'Fraunces';
  src: url('/fonts/Fraunces-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}`

const globalCssCode = `/* after importing Tailsass */
html {
  font-family: 'Fraunces', system-ui, sans-serif;
}`

const globalSassCode = `// styles/globals.scss
@use '@maalbuquerque/tailsass/src/index';

html {
  font-family: 'Fraunces', system-ui, sans-serif;
}`

const utilityCssCode = `.font-display {
  font-family: 'Fraunces', Georgia, serif;
}

.font-mono {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
}`

const utilityHtmlCode = `<h1 class="font-display text-4xl font-bold mb-2">
  Display headline
</h1>
<p class="text-base">
  Body stays on the default stack.
</p>
<code class="font-mono text-sm">const answer = 42;</code>`

const extendScssCode = `// styles/_fonts.scss
.font-display {
  font-family: 'Fraunces', Georgia, serif;
}

.font-mono {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
}

.card-title {
  @extend .font-display;
  @extend .text-2xl;
  @extend .font-bold;
}`

export default function FontsPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fonts</h1>
      <DocLead>
        Tailsass does not ship a fixed set of brand fonts. Load the typeface you want, then apply it
        globally or through small custom classes.
      </DocLead>

      <DocH2 id="default">Default stack</DocH2>
      <DocP>
        Preflight sets a system UI stack on <code className="text-purple-700">html</code>. Body
        text inherits it until you override it.
      </DocP>
      <div className="mb-6">
        <CodeBlock language="css" code={defaultStackCode} />
      </div>

      <DocH2 id="load">Load a font</DocH2>
      <DocP>
        Pick any source — Google Fonts, Adobe Fonts, Fontshare, or self-hosted files. The important
        part is that the family name you load matches the name you use in CSS.
      </DocP>
      <DocP>Google Fonts via a stylesheet link:</DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={googleLinkCode} />
      </div>
      <DocP>Or self-host with <code className="text-purple-700">@font-face</code>:</DocP>
      <div className="mb-6">
        <CodeBlock language="css" code={fontFaceCode} />
      </div>

      <DocH2 id="global">Apply globally</DocH2>
      <DocP>
        Override <code className="text-purple-700">html</code> (or <code className="text-purple-700">body</code>){' '}
        after importing Tailsass so every element inherits your font.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="css" code={globalCssCode} />
      </div>
      <div className="mb-4">
        <CodeBlock language="scss" code={globalSassCode} />
      </div>
      <div className="mb-6">
        <Example title="Global-style preview">
          <div className={fraunces.className}>
            <p className="mb-2 text-2xl font-bold text-slate-900">Fraunces on this block</p>
            <p className="text-base text-slate-600">
              Same utilities — <code className="text-purple-700">text-2xl</code>,{' '}
              <code className="text-purple-700">font-bold</code>, colors — different typeface.
            </p>
          </div>
        </Example>
      </div>

      <DocH2 id="utilities">Apply with your own classes</DocH2>
      <DocP>
        For mixed type (display headlines, body, code), define small font-family utilities and
        combine them with Tailsass size and weight classes.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="css" code={utilityCssCode} />
      </div>
      <div className="mb-4">
        <CodeBlock language="html" code={utilityHtmlCode} />
      </div>
      <div className="mb-6">
        <Example>
          <h1 className={`${fraunces.className} mb-2 text-4xl font-bold text-slate-900`}>
            Display headline
          </h1>
          <p className="mb-3 text-base text-slate-600">Body stays on the default stack.</p>
          <code className={`${jetbrainsMono.className} text-sm text-purple-800`}>
            const answer = 42;
          </code>
        </Example>
      </div>

      <DocH2 id="sass-extend">Compose with Sass @extend</DocH2>
      <DocP>
        Define font classes once, then fold them into component selectors the same way you would
        with spacing or color utilities.
      </DocP>
      <div className="mb-6">
        <CodeBlock language="scss" code={extendScssCode} />
      </div>

      <DocP>
        Size, weight, alignment, and color stay with Tailsass (
        <code className="text-purple-700">text-4xl</code>,{' '}
        <code className="text-purple-700">font-bold</code>,{' '}
        <code className="text-purple-700">text-center</code>,{' '}
        <code className="text-purple-700">text-purple-700</code>). Your CSS only needs to name the
        typeface.
      </DocP>
    </div>
  )
}
