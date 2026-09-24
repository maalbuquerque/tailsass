const highlights = [
  {
    title: 'No dependencies',
    body: 'The package is CSS and Sass source. No runtime JS, no PostCSS plugins, and nothing to keep in sync beyond the stylesheet.',
  },
  {
    title: 'Easy to extend',
    body: 'Add your own Sass partials and @extend utilities into semantic classes, or compose new patterns from the same scale and naming.',
  },
  {
    title: 'Simple to integrate',
    body: 'Import the CSS or @use the Sass entry, then compose classes. Easy to adopt and easy to maintain.',
  },
]

export default function HomePage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Documentation</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">Tailsass</h1>
      <p className="mb-6 text-lg text-slate-600">
        This initiative was born to keep CSS simple and easy to integrate. The engineering
        principle is straightforward: do not complicate what does not need to be complicated.
      </p>
      <p className="mb-8 text-base text-slate-600">
        Utility-first helpers compiled from SCSS. This site documents each utility with class names
        and live examples.
      </p>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border-1 border-solid border-purple-200 bg-white p-5"
          >
            <p className="mb-2 text-sm font-bold text-purple-700">{item.title}</p>
            <p className="text-sm text-slate-600">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border-1 border-solid border-purple-200 bg-purple-50 p-5">
        <p className="mb-2 text-sm font-bold text-purple-800">Install</p>
        <code className="text-sm text-purple-900">npm install @maalbuquerque/tailsass</code>
      </div>
    </div>
  )
}
