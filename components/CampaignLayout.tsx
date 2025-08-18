// components/CampaignLayout.tsx
import NavBar from './NavBar'

export default function CampaignLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 text-white">
      <NavBar />
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="container mx-auto py-8 px-4 text-center text-gray-300">
        <p>&copy; {new Date().getFullYear()} Gaming Party · <a className="underline" href="/konkurs">Konkurs</a></p>
      </footer>
    </div>
  )
}
