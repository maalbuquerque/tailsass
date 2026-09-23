type ExampleProps = {
  title?: string
  children: React.ReactNode
}

export default function Example({ title = 'Preview', children }: ExampleProps) {
  return (
    <div className="overflow-hidden rounded-lg border-1 border-solid border-slate-200 bg-white">
      <div className="border-b-1 border-solid border-slate-200 bg-slate-50 px-4 py-2">
        <p className="text-xs font-bold text-slate-500">{title}</p>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}
