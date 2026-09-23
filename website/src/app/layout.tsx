import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import DocsShell from '@/components/DocsShell'
import '@/vendor/tailsass.css'
import '@/styles/globals.scss'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Tailsass',
  description: 'Utility-first CSS and Sass helpers. A lightweight Tailwind-style toolkit in SCSS.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body style={{ fontFamily: 'var(--font-dm-sans), Segoe UI, sans-serif' }}>
        <DocsShell>{children}</DocsShell>
      </body>
    </html>
  )
}
