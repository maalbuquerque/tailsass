'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { navSections } from '@/lib/nav'

type DocsShellProps = {
  children: React.ReactNode
}

export default function DocsShell({ children }: DocsShellProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="docs-shell">
      <header className="fixed top-0 left-0 right-0 z-30 flex items-center gap-3 border-b-1 border-solid border-slate-200 bg-white px-4 py-3 md:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-purple-700 hover:bg-purple-50"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconX size={22} stroke={1.75} /> : <IconMenu2 size={22} stroke={1.75} />}
        </button>
        <Link href="/" className="text-lg font-bold text-purple-700">
          Tailsass
        </Link>
      </header>

      {open ? (
        <button
          type="button"
          className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-slate-900 opacity-40 md:hidden"
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <aside
        className={[
          'docs-sidebar fixed top-0 left-0 z-30 flex h-screen w-72 flex-col border-r-1 border-solid border-slate-200 bg-white',
          open ? 'flex' : 'hidden',
          'md:flex',
        ].join(' ')}
      >
        <div className="hidden border-b-1 border-solid border-slate-200 px-5 py-5 md:block">
          <Link href="/" className="text-xl font-bold text-purple-700">
            Tailsass
          </Link>
          <p className="mt-1 text-sm text-slate-500">Utility-first CSS in Sass</p>
        </div>

        <nav className="flex-1 overflow-auto px-3 py-4 pt-16 md:pt-4">
          {navSections.map((section) => (
            <div key={section.title} className="mb-6">
              <p className="docs-nav-label mb-2 px-2 text-xs font-bold text-purple-600">
                {section.title}
              </p>
              <ul className="m-0 list-none p-0">
                {section.items.map((item) => {
                  const active = pathname === item.href
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={[
                          'block rounded-md px-3 py-2 text-sm',
                          active
                            ? 'bg-purple-100 font-bold text-purple-800'
                            : 'text-slate-700 hover:bg-purple-50 hover:text-purple-800',
                        ].join(' ')}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <main className="docs-shell-main pt-14 md:pt-0 md:pl-72">
        <div className="docs-main mx-auto px-6 py-10 md:px-10 md:py-12">{children}</div>
      </main>
    </div>
  )
}
