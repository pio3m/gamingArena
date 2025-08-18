import Link from "next/link";
import { useRouter } from "next/router";

const tabs = [
  { href: "/", label: "Start" },
  { href: "/turnieje", label: "Turnieje" },
  { href: "/o-nas", label: "O nas" },
  { href: "/konkurs", label: "Konkurs" },
];

export default function Header() {
  const { pathname } = useRouter();

  return (
    <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
  <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
    {/* LOGO */}
    <Link href="/" className="flex items-center">
      <img
        src="/images/logo.webp"
        alt="Logo Gaming Party"
        className="h-16 w-auto transition-transform duration-300 hover:scale-105"
      />
    </Link>

    {/* MENU */}
    <ul className="hidden md:flex items-center gap-2">
      <li>
        <Link href="/" className="px-4 py-2 rounded-md text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-colors">
          Start
        </Link>
      </li>
      <li>
        <Link href="/turnieje" className="px-4 py-2 rounded-md text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-colors">
          Turnieje
        </Link>
      </li>
      <li>
        <Link href="/o-nas" className="px-4 py-2 rounded-md text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-colors">
          O nas
        </Link>
      </li>
      <li>
        <Link
          href="/konkurs"
          className="relative px-4 py-2 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-neon-pink to-purple-600
                     animate-pulse shadow-lg shadow-neon-pink/30 hover:scale-110 transition-transform"
        >
          🎉 Konkurs
          <span className="absolute inset-0 rounded-md border-2 border-neon-pink animate-[ping_1.5s_ease-in-out_infinite]" />
        </Link>
      </li>
    </ul>

    {/* CTA */}
    <Link
      href="https://bom.mazovia.pl"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:inline-flex h-11 items-center rounded-xl px-6 text-sm font-semibold
                 bg-neon-pink hover:bg-neon-pink/80 text-white shadow-lg shadow-neon-pink/30
                 transition-transform duration-300 hover:scale-105"
    >
      Zagłosuj #420
    </Link>
  </nav>
</div>

  );
}
