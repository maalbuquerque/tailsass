export default function HomePage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Documentation</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">Tailsass</h1>
      <p className="mb-6 text-lg text-slate-600">
        Unofficial utility-first CSS and Sass helpers. Tailwind-style class names, compiled from
        SCSS, without the full Tailwind pipeline.
      </p>
      <p className="mb-8 text-base text-slate-600">
        This site will document each utility with class names and live examples. Use the menu to
        browse the categories we will cover next.
      </p>

      <div className="rounded-lg border-1 border-solid border-purple-200 bg-purple-50 p-5">
        <p className="mb-2 text-sm font-bold text-purple-800">Install</p>
        <code className="text-sm text-purple-900">npm install @maalbuquerque/tailsass</code>
      </div>

      <p className="mt-8 text-sm text-slate-500">
        Tailsass is not affiliated with Tailwind Labs or the Tailwind CSS project.
      </p>
    </div>
  )
}
