import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Spacing · Tailsass',
  description: 'Margin, padding, gap, and position offset utilities on the fixed size scale.',
}

const scale = [
  ['0', '0rem'],
  ['1', '0.25rem'],
  ['2', '0.5rem'],
  ['3', '0.75rem'],
  ['4', '1rem'],
  ['5', '1.25rem'],
  ['6', '1.5rem'],
  ['7', '1.75rem'],
  ['8', '2rem'],
  ['9', '2.25rem'],
  ['10', '2.5rem'],
  ['11', '2.75rem'],
  ['12', '3rem'],
  ['14', '3.5rem'],
  ['16', '4rem'],
  ['20', '5rem'],
  ['24', '6rem'],
  ['28', '7rem'],
  ['32', '8rem'],
  ['36', '9rem'],
  ['40', '10rem'],
  ['44', '11rem'],
  ['48', '12rem'],
  ['52', '13rem'],
  ['56', '14rem'],
  ['60', '15rem'],
  ['64', '16rem'],
  ['72', '18rem'],
  ['80', '20rem'],
  ['96', '24rem'],
]

const namingGroups = [
  {
    title: 'Margin',
    classes: 'm-{n}, mt-{n}, mr-{n}, mb-{n}, ml-{n}, mx-{n}, my-{n}',
  },
  {
    title: 'Padding',
    classes: 'p-{n}, pt-{n}, pr-{n}, pb-{n}, pl-{n}, px-{n}, py-{n}',
  },
  {
    title: 'Gap',
    classes: 'gap-{n} (flex / grid)',
  },
  {
    title: 'Position offsets',
    classes: 'top-{n}, right-{n}, bottom-{n}, left-{n}',
  },
]

const paddingExample = `<div class="p-4 m-4">
  <button class="px-4 py-2 mx-2">Spaced button</button>
  <button class="px-4 py-2 mx-2">Another button</button>
</div>`

const gapExample = `<ul class="flex gap-4">
  <li class="p-2">Item 1</li>
  <li class="p-2">Item 2</li>
  <li class="p-2">Item 3</li>
</ul>`

const autoExample = `<div class="flex">
  <button class="ml-auto px-4 py-2">
    Right-aligned button
  </button>
</div>`

const responsiveExample = `<section class="p-2 md:p-4 lg:p-8 2xl:p-10">
  <p class="mb-2 md:mb-4">
    Spacing increases as the viewport grows.
  </p>
</section>`

export default function SpacingPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Spacing</h1>
      <DocLead>
        Margin, padding, gap, and positional offsets on the fixed size scale.
      </DocLead>

      <DocH2 id="naming">Class naming</DocH2>
      <ul className="mb-6 list-none p-0">
        {namingGroups.map((group) => (
          <li
            key={group.title}
            className="mb-2 rounded-md border-1 border-solid border-slate-200 bg-white px-4 py-3"
          >
            <p className="mb-1 text-sm font-bold text-purple-700">{group.title}</p>
            <code className="text-sm text-slate-700">{group.classes}</code>
          </li>
        ))}
      </ul>

      <DocH2 id="scale">Size scale</DocH2>
      <DocP>
        <code className="text-purple-700">{'{n}'}</code> follows the fixed size scale.
        Values 0–12 are contiguous, then the scale becomes non-linear (14, 16, 20, …, 96).
      </DocP>
      <div className="mb-8 overflow-auto rounded-lg border-1 border-solid border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="border-b-1 border-solid border-slate-200 px-4 py-3 font-bold text-slate-700">
                Suffix
              </th>
              <th className="border-b-1 border-solid border-slate-200 px-4 py-3 font-bold text-slate-700">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {scale.map(([suffix, value]) => (
              <tr key={suffix}>
                <td className="border-b-1 border-solid border-slate-100 px-4 py-2">
                  <code className="rounded-sm bg-purple-50 px-2 py-1 text-purple-800">{suffix}</code>
                </td>
                <td className="border-b-1 border-solid border-slate-100 px-4 py-2 text-slate-600">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DocH2 id="padding-margin">Padding and margin</DocH2>
      <div className="mb-4">
        <CodeBlock language="html" code={paddingExample} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="m-4 rounded-md border-1 border-dashed border-purple-300 bg-purple-50 p-4">
            <button
              type="button"
              className="mx-2 cursor-pointer rounded-md bg-purple-600 px-4 py-2 text-white"
            >
              Spaced button
            </button>
            <button
              type="button"
              className="mx-2 cursor-pointer rounded-md bg-purple-600 px-4 py-2 text-white"
            >
              Another button
            </button>
          </div>
        </Example>
      </div>

      <DocH2 id="gap">Gap</DocH2>
      <div className="mb-4">
        <CodeBlock language="html" code={gapExample} />
      </div>
      <div className="mb-6">
        <Example>
          <ul className="m-0 flex list-none gap-4 p-0">
            <li className="rounded-md bg-slate-100 p-2 text-sm text-slate-800">Item 1</li>
            <li className="rounded-md bg-slate-100 p-2 text-sm text-slate-800">Item 2</li>
            <li className="rounded-md bg-slate-100 p-2 text-sm text-slate-800">Item 3</li>
          </ul>
        </Example>
      </div>

      <DocH2 id="auto">Auto spacing</DocH2>
      <DocP>
        Use auto variants to center or push content:{' '}
        <code className="text-purple-700">m-auto</code>,{' '}
        <code className="text-purple-700">mt-auto</code>,{' '}
        <code className="text-purple-700">mr-auto</code>,{' '}
        <code className="text-purple-700">mb-auto</code>,{' '}
        <code className="text-purple-700">ml-auto</code>,{' '}
        <code className="text-purple-700">mx-auto</code>,{' '}
        <code className="text-purple-700">my-auto</code>.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={autoExample} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="flex rounded-md border-1 border-dashed border-slate-300 p-3">
            <button
              type="button"
              className="ml-auto cursor-pointer rounded-md bg-purple-600 px-4 py-2 text-white"
            >
              Right-aligned button
            </button>
          </div>
        </Example>
      </div>

      <DocH2 id="position-offsets">Position offsets</DocH2>
      <DocP>
        Pair <code className="text-purple-700">relative</code> /{' '}
        <code className="text-purple-700">absolute</code> with{' '}
        <code className="text-purple-700">top-*</code>,{' '}
        <code className="text-purple-700">right-*</code>,{' '}
        <code className="text-purple-700">bottom-*</code>, and{' '}
        <code className="text-purple-700">left-*</code>.
      </DocP>
      <div className="mb-6">
        <Example>
          <div className="relative h-32 rounded-md bg-slate-100">
            <div className="absolute top-4 left-4 rounded-md bg-purple-600 px-3 py-2 text-sm text-white">
              top-4 left-4
            </div>
          </div>
        </Example>
      </div>

      <DocH2 id="responsive">Responsive spacing</DocH2>
      <DocP>
        All spacing classes support breakpoint prefixes (
        <code className="text-purple-700">xs:</code> through{' '}
        <code className="text-purple-700">3xl:</code>):
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={responsiveExample} />
      </div>
      <div className="mb-8">
        <Example title="Preview (resize the window)">
          <section className="rounded-md bg-purple-50 p-2 md:p-4 lg:p-8 2xl:p-10">
            <p className="mb-2 text-purple-900 md:mb-4">
              Spacing increases as the viewport grows.
            </p>
          </section>
        </Example>
      </div>
    </div>
  )
}
