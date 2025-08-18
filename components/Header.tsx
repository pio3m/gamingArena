import Link from 'next/link'
import { useRouter } from 'next/router'

const tabs = [
  { href: '/', label: 'Start' },
  { href: '/turnieje', label: 'Turnieje' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/konkurs', label: 'Konkurs' },
]

export default function Header() {
  const { pathname } = useRouter()

  return (
    <div className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center">
            <img src="/images/logo.webp" alt="Logo" className="h-14 md:h-16 w-auto" />
        </Link>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-1">
          {tabs.map(t => {
            const active = pathname === t.href
            return (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${active ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                >
                  {t.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA w topbarze */}
        <Link href="https://bom.mazovia.pl" target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex h-10 items-center rounded-md px-4 text-sm font-semibold
                     bg-neon-pink hover:bg-neon-pink/80 text-white shadow">
          Zagłosuj #420
        </Link>
      </nav>
    </div>
  )
}
