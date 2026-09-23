import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import FormsDemo from '@/components/docs/FormsDemo'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Forms · Tailsass',
  description: 'Style forms with Tailsass utilities in markup, or @extend them into your own SCSS.',
}

const utilityFormCode = `<form>
  <div class="py-2">
    <label class="block font-bold mb-2 cursor-pointer" for="email">Email</label>
    <p class="text-sm mb-2 text-slate-500">We will never share your email.</p>
    <input
      id="email"
      type="email"
      placeholder="you@example.com"
      class="w-full p-3 border-1 border-solid border-slate-300 rounded outline-none bg-white text-slate-900 focus:border-purple-500"
    />
  </div>

  <div class="py-2">
    <label class="block font-bold mb-2 cursor-pointer" for="message">Message</label>
    <textarea
      id="message"
      rows="4"
      placeholder="Say hello"
      class="w-full p-3 border-1 border-solid border-slate-300 rounded outline-none bg-white text-slate-900 focus:border-purple-500"
    ></textarea>
  </div>

  <div class="flex gap-3 mt-4">
    <button type="button" class="cursor-pointer px-4 py-2 rounded-md bg-purple-600 text-white border-0 hover:bg-purple-800">
      Send
    </button>
    <button type="button" class="cursor-pointer px-4 py-2 rounded-md bg-slate-100 text-slate-800 border-1 border-solid border-slate-300">
      Cancel
    </button>
  </div>
</form>`

const inputOnlyCode = `<label class="block font-bold mb-2 cursor-pointer" for="name">Name</label>
<input
  id="name"
  type="text"
  class="w-full p-3 border-1 border-solid border-slate-300 rounded outline-none focus:border-purple-500"
/>`

const formsScss = `// styles/_forms.scss
@use '@maalbuquerque/tailsass/src/index';

.form-field {
  @extend .py-2;

  label {
    @extend .font-bold;
    @extend .block;
    @extend .mb-2;
    @extend .cursor-pointer;
  }

  .info-text {
    @extend .text-sm;
    @extend .mb-2;
    @extend .text-slate-500;
  }
}

.form-control {
  @extend .border-1;
  @extend .border-solid;
  @extend .border-slate-300;
  @extend .rounded;
  @extend .p-3;
  @extend .w-full;
  @extend .outline-none;
  @extend .bg-white;
  @extend .text-slate-900;

  &:focus {
    @extend .border-purple-500;
  }
}

.form-actions {
  @extend .flex;
  @extend .gap-3;
  @extend .mt-4;
}

.btn-primary {
  @extend .cursor-pointer;
  @extend .px-4;
  @extend .py-2;
  @extend .rounded-md;
  @extend .bg-purple-600;
  @extend .text-white;
  @extend .border-0;

  &:hover {
    @extend .bg-purple-800;
  }
}

.btn-secondary {
  @extend .cursor-pointer;
  @extend .px-4;
  @extend .py-2;
  @extend .rounded-md;
  @extend .bg-slate-100;
  @extend .text-slate-800;
  @extend .border-1;
  @extend .border-solid;
  @extend .border-slate-300;
}`

const importScss = `// styles/globals.scss (or your app entry stylesheet)
@use '@maalbuquerque/tailsass/src/index';
@use './forms';`

const htmlExtendExample = `<form>
  <div class="form-field">
    <label for="email">Email</label>
    <p class="info-text">We will never share your email.</p>
    <input id="email" class="form-control" type="email" placeholder="you@example.com" />
  </div>

  <div class="form-field">
    <label for="message">Message</label>
    <textarea id="message" class="form-control" rows="4" placeholder="Say hello"></textarea>
  </div>

  <div class="form-actions">
    <button type="button" class="btn-primary">Send</button>
    <button type="button" class="btn-secondary">Cancel</button>
  </div>
</form>`

export default function FormsPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Forms</h1>
      <DocLead>
        Two ways to style forms with Tailsass: put utility classes directly on the inputs, or create
        a small SCSS partial and <code className="text-purple-700">@extend</code> those utilities
        into your own component classes.
      </DocLead>

      <DocH2 id="utilities">Use utilities on the inputs</DocH2>
      <DocP>
        Compose spacing, borders, colors, and focus states directly in the markup. No extra
        stylesheet required beyond Tailsass.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={inputOnlyCode} />
      </div>
      <div className="mb-6">
        <Example>
          <label className="mb-2 block cursor-pointer font-bold" htmlFor="docs-name">
            Name
          </label>
          <input
            id="docs-name"
            type="text"
            placeholder="Jane Doe"
            className="w-full rounded border-1 border-solid border-slate-300 bg-white p-3 text-slate-900 outline-none focus:border-purple-500"
          />
        </Example>
      </div>

      <DocP>Full form with utilities only:</DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={utilityFormCode} />
      </div>
      <div className="mb-8">
        <Example title="Live preview">
          <form>
            <div className="py-2">
              <label className="mb-2 block cursor-pointer font-bold" htmlFor="docs-email-util">
                Email
              </label>
              <p className="mb-2 text-sm text-slate-500">We will never share your email.</p>
              <input
                id="docs-email-util"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded border-1 border-solid border-slate-300 bg-white p-3 text-slate-900 outline-none focus:border-purple-500"
              />
            </div>
            <div className="py-2">
              <label className="mb-2 block cursor-pointer font-bold" htmlFor="docs-message-util">
                Message
              </label>
              <textarea
                id="docs-message-util"
                rows={4}
                placeholder="Say hello"
                className="w-full rounded border-1 border-solid border-slate-300 bg-white p-3 text-slate-900 outline-none focus:border-purple-500"
              />
            </div>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                className="cursor-pointer rounded-md border-0 bg-purple-600 px-4 py-2 text-white hover:bg-purple-800"
              >
                Send
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-md border-1 border-solid border-slate-300 bg-slate-100 px-4 py-2 text-slate-800"
              >
                Cancel
              </button>
            </div>
          </form>
        </Example>
      </div>

      <DocH2 id="extend">Then extract with @extend</DocH2>
      <DocP>
        When the same field/control pattern shows up often, create a partial that maps semantic
        names onto those utilities. HTML stays shorter; the look stays the same.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="scss" code={formsScss} />
      </div>
      <DocP>Import it with Tailsass:</DocP>
      <div className="mb-4">
        <CodeBlock language="scss" code={importScss} />
      </div>
      <DocP>Markup using the component classes:</DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={htmlExtendExample} />
      </div>
      <div className="mb-8">
        <Example title="Same UI via form-field / form-control">
          <FormsDemo />
        </Example>
      </div>

      <DocH2 id="tips">Tips</DocH2>
      <ul className="mb-8 list-none p-0 text-base text-slate-600">
        <li className="mb-2">
          · Start with utilities in markup. Reach for{' '}
          <code className="text-purple-700">@extend</code> when the pattern repeats.
        </li>
        <li className="mb-2">
          · You need a Sass build that can resolve{' '}
          <code className="text-purple-700">@maalbuquerque/tailsass/src/index</code> for the extend
          approach (see Getting started).
        </li>
        <li className="mb-2">
          · State variants work with extend when the utility exists, for example nesting{' '}
          <code className="text-purple-700">&amp;:focus {'{ @extend .border-purple-500; }'}</code>.
        </li>
        <li className="mb-2">
          · Keep preflight on so native inputs start from a clean baseline.
        </li>
      </ul>
    </div>
  )
}
