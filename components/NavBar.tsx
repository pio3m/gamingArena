// components/NavBar.tsx
import Link from 'next/link'
import { useRouter } from 'next/router'

const tabs = [
  { href: '/', label: 'Start' },
  { href: '/turnieje', label: 'Turnieje' },
]

export default function NavBar() {
  const { pathname } = useRouter()
  return (
    <header className="w-full">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center">
            <img 
                src="/images/logo.webp" 
                alt="Logo" 
                className="h-40 w-auto mr-2"
            />
            </Link>

        <ul className="flex items-center gap-1">
          {tabs.map(t => {
            const active = pathname === t.href
            return (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${active ? 'bg-white/20 text-white' : 'text-gray-200 hover:text-white hover:bg-white/10'}`}
                >
                  {t.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
