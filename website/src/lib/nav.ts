export type NavItem = {
  label: string
  href: string
}

export type NavSection = {
  title: string
  items: NavItem[]
}

export const navSections: NavSection[] = [
  {
    title: 'Start',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Getting started', href: '/docs/getting-started' },
    ],
  },
  {
    title: 'Utilities',
    items: [
      { label: 'Preflight', href: '/docs/preflight' },
      { label: 'Spacing', href: '/docs/spacing' },
      { label: 'Sizing', href: '/docs/sizing' },
      { label: 'Typography', href: '/docs/typography' },
      { label: 'Fonts', href: '/docs/fonts' },
      { label: 'Colors', href: '/docs/colors' },
      { label: 'Borders', href: '/docs/borders' },
      { label: 'Display & layout', href: '/docs/display' },
      { label: 'Forms', href: '/docs/forms' },
      { label: 'Position', href: '/docs/position' },
      { label: 'Lists', href: '/docs/lists' },
      { label: 'Overflow', href: '/docs/overflow' },
      { label: 'Cursor', href: '/docs/cursor' },
      { label: 'Effects', href: '/docs/effects' },
      { label: 'Animation', href: '/docs/animation' },
      { label: 'Transform', href: '/docs/transform' },
    ],
  },
]
