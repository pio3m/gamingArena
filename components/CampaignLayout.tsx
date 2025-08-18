import Header from '@/components/Header'

export default function CampaignLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-300">
        <p>&copy; {new Date().getFullYear()} Gaming Party</p>
      </footer>
    </div>
  )
}
