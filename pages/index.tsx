import Link from "next/link"
import { Button } from "@/components/ui"
import { CheckCircle, MousePointerClick, Share2 } from "lucide-react"

// === HERO ===
function HeroSection() {
  return (
    <section className="text-center px-4 pt-10">
      <h1 className="mx-auto max-w-3xl text-4xl md:text-6xl font-extrabold leading-[1.12] md:leading-[1.1]">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-pink">
          Mistrzostwa Mazowsza – Gaming Party 2025
        </span>
      </h1>

      <p className="mt-3 text-base md:text-xl">
        Twój głos = e-sport na najwyższym poziomie w całym Mazowszu
      </p>

      <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link href="https://bom.mazovia.pl/projekty?nr=420" target="_blank">
          <Button className="h-12 md:h-14 px-8 text-lg bg-neon-pink hover:bg-neon-pink/80 text-white font-bold">
            Zagłosuj na inicjatywę 420
          </Button>
        </Link>
        
      </div>

      {/* Wideo promo */}
      <div className="mt-8 aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/rS6WVq0uz7A"
          title="Promo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  )
}

// === JAK ZAGŁOSOWAĆ ===
function HowToVote() {
  const steps = [
    {
      icon: <MousePointerClick className="h-10 w-10 text-neon-blue" />,
      title: "Wejdź na stronę BOM",
      text: "Otwórz portal Budżetu Obywatelskiego Mazowsza",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-neon-pink" />,
      title: "Wybierz inicjatywę 420 - Gaming Party ",
      text: "dodatkowo organizujemy również upamiętnienie powstania warszawskiego inicjatywa 578, którą można wybrać również w jednym głosowaniu",
    },
    {
      icon: <Share2 className="h-10 w-10 text-green-400" />,
      title: "Potwierdź i udostępnij",
      text: "Oddaj głos i zachęć znajomych do udziału",
    },
  ]

  return (
    <section className="mt-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Jak zagłosować?</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div
            key={i}
            className="bg-white/5 rounded-lg p-6 flex flex-col items-center"
          >
            {s.icon}
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-gray-300">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// === ZDJĘCIA ===
function ImagesSection() {
  return (
    <section className="mt-12 px-4 flex flex-col md:flex-row justify-center items-center gap-8">
      <div className="flex-1 flex justify-center">
        <Link href="https://bom.mazovia.pl/projekty?nr=420" target="_blank">
          <img
            src="/images/gaming.png"
            alt="Gaming"
            className="rounded-lg shadow-lg object-cover w-full max-w-xl aspect-[16/9]"
          />
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
         <Link href="https://bom.mazovia.pl/projekty?nr=578" target="_blank">
          <img
            src="/images/powstanie.jpg"
            alt="Powstanie"
            className="rounded-lg shadow-lg object-cover w-full max-w-xl aspect-[16/9]"
          />
        </Link>
      </div>
    </section>
  )
}

// === DLA KAŻDEGO ===
function MiddleSection() {
  return (
    <section className="mt-12 px-4 text-center max-w-5xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-3">
        Dla każdego gracza. <span className="text-neon-pink">Ty</span> decydujesz!
      </h2>
      <p className="text-gray-200 max-w-3xl mx-auto">
        To impreza <b>dla wszystkich</b> — początkujących i wyjadaczy.
        <br />
        <b>Zgłaszaj gry</b>, w których chcesz turniej. W trakcie pojawią się też
        <b> goście specjalni</b> — streamerzy, youtuberzy.  
        Razem stworzymy totalną zabawę w gry — ale tylko, jeśli
        <b> zagłosujesz!</b>
      </p>

      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
       
        <Link href="https://bom.mazovia.pl/projekty?nr=420" target="_blank">
          <Button
            variant="outline"
            className="h-12 px-6 text-neon-pink hover:bg-neon-pink hover:text-white"
          >
            Zagłosuj na 420
          </Button>
        </Link>
      </div>
    </section>
  )
}

// === FOOTER ===
function Footer() {
  return (
    <footer className="mt-16 py-6 text-center text-gray-400">
      <p>&copy; 2025 Gaming Party. Wszelkie prawa zastrzeżone.</p>
    </footer>
  )
}

// === STRONA GŁÓWNA ===
export default function Home() {
  return (
    <>
      <HeroSection />
      <HowToVote />
      <MiddleSection />
      <ImagesSection />
      <Footer />
    </>
  )
}
