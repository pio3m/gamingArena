import Link from 'next/link'
import { Button } from '@/components/ui'
import { CheckCircle, MousePointerClick, Share2 } from 'lucide-react'

const CTA_URL = 'https://bom.mazovia.pl/glosowanie'

export default function Home() {
  const shareText =
    'Głosuję na BOM #420 – Mistrzostwa Mazowsza – Gaming Party. Dołącz! https://bom.mazovia.pl #BOM420 #GamingParty #Mazowsze'

  async function handleShare() {
    try {
      if (navigator.share) {
        await navigator.share({ title: 'BOM #420 – Gaming Party', text: shareText, url: CTA_URL })
      } else {
        await navigator.clipboard.writeText(shareText)
        alert('Skopiowano treść udostępnienia – wklej w swoje social media!')
      }
    } catch {}
  }

  return (
    <>
      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink leading-[1.4] md:leading-[1.3] pb-1">
    Mistrzostwa Mazowsza w grach komputerowych
  </h1>
        <p className="text-lg md:text-2xl mt-4">
          Twój głos = e-sport na najwyższym poziomie na Mazowszu
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href={CTA_URL} target="_blank" rel="noopener noreferrer">
            <Button className="h-14 px-8 text-lg bg-neon-pink hover:bg-neon-pink/80">
              Zagłosuj na inicjatywę 420
            </Button>
          </Link>
          <Button onClick={handleShare} variant="outline" className="h-14 px-8 text-lg text-neon-blue hover:bg-neon-blue hover:text-black">
            Udostępnij znajomym
          </Button>
        </div>
      </section>

      {/* 3 KROKI – JAK ZAGŁOSOWAĆ */}
      <section className="mt-10 grid sm:grid-cols-3 gap-3">
        <Step icon={<MousePointerClick />} title="1. Wejdź na BOM" text="Otwórz stronę Budżetu Obywatelskiego Mazowsza." />
        <Step icon={<CheckCircle />} title="2. Wybierz #420" text="Mistrzostwa Mazowsza – Gaming Party." />
        <Step icon={<Share2 />} title="3. Potwierdź + udostępnij" text="Zachęć znajomych do głosowania." />
      </section>

      {/* DLACZEGO WARTO */}
      <section className="mt-8 bg-white/10 rounded-xl p-5">
        <h2 className="text-2xl font-bold mb-3">Dlaczego warto?</h2>
        <ul className="space-y-2 text-gray-100">
          <li>• Największe e-sportowe wydarzenie na Mazowszu</li>
          <li>• Świetny dojazd z całego regionu + baza noclegowa</li>
          <li>• Lokalne jedzenie: m.in. sery z Sierpca</li>
          <li>• Nagrody i emocje jak na profesjonalnych turniejach</li>
        </ul>
      </section>

      {/* WIDEO PROMO */}
      <section className="mt-8">
        <div className="aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUTUBE_ID_HERE"
            title="Promo – Mistrzostwa Mazowsza – Gaming Party"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      {/* POWTÓRZONY CTA */}
      <section className="mt-8 text-center">
        <Link href={CTA_URL} target="_blank" rel="noopener noreferrer">
          <Button className="h-12 px-8 text-base bg-neon-blue hover:bg-neon-blue/80">
            Zagłosuj teraz na 420
          </Button>
        </Link>
      </section>

      {/* STICKY CTA – MOBILE */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-3 bg-black/60 backdrop-blur md:hidden">
        <div className="container mx-auto">
          <Link href={CTA_URL} target="_blank" rel="noopener noreferrer">
            <Button className="w-full h-12 text-base bg-neon-pink hover:bg-neon-pink/80">
              Zagłosuj na 420
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

function Step({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="bg-white/10 p-4 rounded-lg text-center">
      <div className="mx-auto mb-2 h-10 w-10 flex items-center justify-center rounded-full bg-white/15">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-200 mt-1">{text}</p>
    </div>
  )
}
