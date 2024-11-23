import { useState } from 'react'
import Link from 'next/link'
import { Button, Input, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui'
import { Gamepad2, Trophy, Users, Zap, ChevronRight } from 'lucide-react'
import { supabase } from '@/components/supabaseClient'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Rejestracja z adresem email:', email)

    const { data, error } = await supabase
      .from('emails')
      .insert([{ email }])

    if (error) {
      console.error('Błąd podczas zapisywania e-maila:', error)
    } else {
      console.log('E-mail zapisany:', data)
      setModalContent('Email dodany do bazy. Dziękujemy.')
      setIsModalOpen(true)
    }
  }

  const handleButtonClick = (content: string) => {
    setModalContent(content)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 text-white">
      <header className="container mx-auto py-6 px-4">
        <nav className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <img src="/images/logo.webp" alt="Logo" className="h-48 mr-4" />
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink">
              Podnieś Poziom Swojej Gry
            </h1>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          
          <p className="text-xl md:text-2xl mb-8">Dołącz do najlepszych turniejów gamingowych i udowodnij swoje umiejętności!</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
          <FeatureCard 
  icon={<Gamepad2 size={40} />} 
  title="Wiele Gier" 
  description="FIFA, Fortnite, retro klasyki i wiele więcej. Graj w to, co lubisz!" 
/>
<FeatureCard 
  icon={<Trophy size={40} />} 
  title="Graj. Spotykaj. Wygrywaj!" 
  description="Dołącz do nas, by rywalizować, integrować się i czerpać radość z grania." 
/>
<FeatureCard 
  icon={<Users size={40} />} 
  title="Gaming łączy" 
  description="Wyjdź z domu, spotkaj się z przyjaciółmi i poczuj klimat LAN Party jak za dawnych lat." 
/>
<FeatureCard 
  icon={<Zap size={40} />} 
  title="Nowe miejsce na mapie e-sportu" 
  description="Śledź zapowiedzi turniejów, zarówno online, jak i stacjonarnych!" 
/>
 </div>
        </div>

        <Card className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md border-neon-blue mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-neon-pink">Zapisz się na newsletter</CardTitle>
            <CardDescription className="text-center text-gray-300">
              Wysyłamy informacje o nadchodzących turniejach. <br></br> Miej wpływ na to w co będziemy grali!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Wpisz swój email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-neon-blue text-white placeholder-gray-400"
                required
              />
              <Button type="submit" className="w-full bg-neon-pink hover:bg-neon-pink/80 text-white font-bold">
                Zapisz się
              </Button>
            </form>
          </CardContent>
          <CardFooter className="text-center text-sm text-gray-400">
            Rejestrując się, akceptujesz nasz Regulamin i Politykę Prywatności
          </CardFooter>
        </Card>

        <Card className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-md border-neon-blue">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-neon-blue">Najblisze Turnieje</CardTitle>
          </CardHeader>
          <CardContent>
          <ul className="space-y-4">
  {[
    { title: "FC 25 - Turniej Inauguracyjny", date: "30.11.2024", location: "Dom Pobytu Przyszłość, Sierpc", prize: "Nagrody rzeczowe i upominki", description: "Regulamin na stronie sierpcgamingparty.pl" },
    { title: "FC 25 - Liga eSportu z Mosir", date: "06.12.2024", location: "MOSiR, Sierpc", prize: "Do ogłoszenia", description: "Szczegóły wkrótce" },
  ].map((tournament, index) => (
    <li key={index} className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
      <div>
        <h3 className="font-bold text-neon-pink">{tournament.title}</h3>
        <p className="text-sm text-gray-300">Data: {tournament.date}</p>
        {tournament.location && <p className="text-sm text-gray-300">Lokalizacja: {tournament.location}</p>}
        <p className="text-sm text-gray-300">Pula nagród: {tournament.prize}</p>
      </div>
      <Button variant="outline" className="text-neon-blue hover:bg-neon-blue hover:text-black" onClick={() => handleButtonClick(tournament.description)}>
        Szczegóły <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </li>
  ))}
</ul>

          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline" className="text-neon-pink hover:bg-neon-pink hover:text-white">
              Zobacz wszystkie turnieje
            </Button>
          </CardFooter>
        </Card>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold">Informacje</h2>
              <p className="text-black">{modalContent}</p>
              <button onClick={closeModal} className="mt-4 bg-neon-blue text-white px-4 py-2 rounded">Zamknij</button>
            </div>
          </div>
        )}
      </main>

      <footer className="container mx-auto py-6 px-4 text-center text-gray-400">
        <p>&copy; 2024 Gaming Party. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg text-center w-48">
      <div className="text-neon-blue mb-2">{icon}</div>
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  )
}