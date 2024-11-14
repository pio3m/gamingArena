import { useState } from 'react'
import Link from 'next/link'
import { Button, Input, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui'
import { Gamepad2, Trophy, Users, Zap, ChevronRight } from 'lucide-react'

export default function HomePage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Rejestracja z adresem email:', email)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 text-white">
      <header className="container mx-auto py-6 px-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-neon-blue">Gaming Party Arena</Link>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <Button variant="outline" className="bg-neon-blue text-black hover:bg-neon-blue/80 hover:text-white border-2 border-neon-blue font-bold">
              <Link href="/login">Logowanie</Link>
            </Button>
            <Button variant="outline" className="bg-neon-pink text-white hover:bg-neon-pink/80 border-2 border-neon-pink font-bold">
              <Link href="/register">Rejestracja</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink">
            Podnieś Poziom Swojej Gry
          </h1>
          <p className="text-xl md:text-2xl mb-8">Dołącz do najlepszych turniejów gamingowych i udowodnij swoje umiejętności!</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <FeatureCard icon={<Gamepad2 size={40} />} title="Wiele Gier" description="FIFA, Fortnite i więcej" />
            <FeatureCard icon={<Trophy size={40} />} title="Duże Nagrody" description="Wygraj gotówkę i sprzęt" />
            <FeatureCard icon={<Users size={40} />} title="Społeczność" description="Poznaj innych graczy" />
            <FeatureCard icon={<Zap size={40} />} title="Wydarzenia Na Żywo" description="Online i stacjonarnie" />
          </div>
        </div>

        <Card className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md border-neon-blue mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-neon-pink">Zarejestruj się teraz</CardTitle>
            <CardDescription className="text-center text-gray-300">
              Uzyskaj wczesny dostęp do nadchodzących turniejów
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
            <CardTitle className="text-2xl text-center text-neon-blue">Najnowsze Turnieje</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                { title: "FIFA 24 Champions Cup", date: "15.07.2024", prize: "10 000 PLN" },
                { title: "Fortnite Battle Royale", date: "22.07.2024", prize: "15 000 PLN" },
                { title: "League of Legends Showdown", date: "29.07.2024", prize: "20 000 PLN" }
              ].map((tournament, index) => (
                <li key={index} className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
                  <div>
                    <h3 className="font-bold text-neon-pink">{tournament.title}</h3>
                    <p className="text-sm text-gray-300">Data: {tournament.date}</p>
                    <p className="text-sm text-gray-300">Pula nagród: {tournament.prize}</p>
                  </div>
                  <Button variant="outline" className="text-neon-blue hover:bg-neon-blue hover:text-black">
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