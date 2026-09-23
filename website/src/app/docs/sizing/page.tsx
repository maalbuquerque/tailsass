import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Sizing · Tailsass',
  description: 'Width and height utilities: core sizes, scale, fractions, and bracket whitelist.',
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

const coreCode = `<div class="w-full">
  <div class="w-fit h-fit p-4">
    I size to my content.
  </div>
</div>`

const fixedCode = `<div class="w-64 h-32">
  Fixed 16rem × 8rem box.
</div>`

const fractionCode = `<div class="flex">
  <div class="w-1/3">One third</div>
  <div class="w-2/3">Two thirds</div>
</div>`

const arbitraryCode = `<div class="w-[50%] h-[300px]">
  50% width, 300px height
</div>`

const responsiveCode = `<div class="w-full md:w-1/2 lg:w-64 2xl:w-80">
  Full width on mobile, half on medium, fixed on large+.
</div>`

export default function SizingPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Utilities</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Sizing</h1>
      <DocLead>Width and height helpers with a predictable set of classes.</DocLead>

      <DocH2 id="core">Core sizes</DocH2>
      <DocP>
        <code className="text-purple-700">w-auto</code>, <code className="text-purple-700">h-auto</code>,{' '}
        <code className="text-purple-700">w-full</code>, <code className="text-purple-700">h-full</code>,{' '}
        <code className="text-purple-700">w-screen</code>, <code className="text-purple-700">h-screen</code>,{' '}
        <code className="text-purple-700">w-min</code>, <code className="text-purple-700">h-min</code>,{' '}
        <code className="text-purple-700">w-max</code>, <code className="text-purple-700">h-max</code>,{' '}
        <code className="text-purple-700">w-fit</code>, <code className="text-purple-700">h-fit</code>
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={coreCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="w-full rounded-md bg-slate-100 p-3">
            <div className="w-fit h-fit rounded-md bg-purple-600 p-4 text-sm text-white">
              I size to my content.
            </div>
          </div>
        </Example>
      </div>

      <DocH2 id="scale">Fixed size scale</DocH2>
      <DocP>
        <code className="text-purple-700">w-{'{n}'}</code> and{' '}
        <code className="text-purple-700">h-{'{n}'}</code> follow the Tailwind size scale.
      </DocP>
      <div className="mb-4 overflow-auto rounded-lg border-1 border-solid border-slate-200">
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
      <div className="mb-4">
        <CodeBlock language="html" code={fixedCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="flex h-32 w-64 items-center justify-center rounded-md bg-purple-600 text-sm text-white">
            w-64 h-32
          </div>
        </Example>
      </div>

      <DocH2 id="fractions">Fractions</DocH2>
      <DocP>
        Tailwind-compatible fractions such as <code className="text-purple-700">w-1/2</code>,{' '}
        <code className="text-purple-700">w-1/3</code>, <code className="text-purple-700">w-2/3</code>,
        fourths, fifths, sixths, and twelfths. Same set for <code className="text-purple-700">h-*</code>.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={fractionCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="flex overflow-hidden rounded-md">
            <div className="flex w-1/3 items-center justify-center bg-purple-600 p-4 text-sm text-white">
              w-1/3
            </div>
            <div className="flex w-2/3 items-center justify-center bg-purple-300 p-4 text-sm text-purple-900">
              w-2/3
            </div>
          </div>
        </Example>
      </div>

      <DocH2 id="arbitrary">Percentage and pixel whitelist</DocH2>
      <DocP>
        Fixed arbitrary-value classes (not open-ended):{' '}
        <code className="text-purple-700">w-[10%]</code>…<code className="text-purple-700">w-[100%]</code>,{' '}
        <code className="text-purple-700">w-[100px]</code>…<code className="text-purple-700">w-[1000px]</code>,
        and matching <code className="text-purple-700">h-[…]</code>.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={arbitraryCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="flex h-[100px] w-[50%] items-center justify-center rounded-md bg-slate-800 text-sm text-white">
            w-[50%] h-[100px]
          </div>
        </Example>
      </div>

      <DocH2 id="responsive">Responsive sizing</DocH2>
      <div className="mb-4">
        <CodeBlock language="html" code={responsiveCode} />
      </div>
      <div className="mb-8">
        <Example title="Preview (resize the window)">
          <div className="flex h-16 w-full items-center justify-center rounded-md bg-purple-600 text-sm text-white md:w-1/2 lg:w-64 2xl:w-80">
            w-full md:w-1/2 lg:w-64
          </div>
        </Example>
      </div>
    </div>
  )
}
