type DocHeadingProps = {
  id: string
  children: React.ReactNode
}

export function DocH2({ id, children }: DocHeadingProps) {
  return (
    <h2 id={id} className="mb-4 mt-10 text-2xl font-bold text-slate-900">
      {children}
    </h2>
  )
}

export function DocLead({ children }: { children: React.ReactNode }) {
  return <p className="mb-8 text-lg text-slate-600">{children}</p>
}

export function DocP({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-base text-slate-600">{children}</p>
}
