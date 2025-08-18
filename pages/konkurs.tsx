// pages/konkurs.tsx
import Link from 'next/link'
import { Button } from '@/components/ui'
import { Share2, Video } from 'lucide-react'

const FORMS = '[FORMS_LINK]'
const CTA_URL = 'https://bom.mazovia.pl'
const shareText =
  'Głosuję na BOM #420 – Mistrzostwa Mazowsza – Gaming Party. Dołącz! https://bom.mazovia.pl #BOM420 #GamingParty #Mazowsze'

export default function Konkurs() {
  async function handleShare() {
    try {
      if (navigator.share) await navigator.share({ title: 'BOM #420 – Gaming Party', text: shareText, url: CTA_URL })
      else {
        await navigator.clipboard.writeText(shareText)
        alert('Skopiowano treść udostępnienia – wklej w swoje social media!')
      }
    } catch {}
  }

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Konkurs</h1>
      <p className="text-gray-100 mb-6">Weź udział na dwa sposoby – możesz zrobić oba.</p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white/10 p-4 rounded-lg">
          <h3 className="font-semibold text-neon-pink flex items-center gap-2"><Share2 /> Wariant A – Udostępnij</h3>
          <p className="text-sm text-gray-200 mt-1">
            Opublikuj post/relację o <strong>Gaming Party</strong> i głosowaniu na <strong>BOM #420</strong>.
            Dodaj link: <span className="underline">https://bom.mazovia.pl</span>
          </p>
          <Button onClick={handleShare} className="mt-3">Udostępnij teraz</Button>
        </div>

        <div className="bg-white/10 p-4 rounded-lg">
          <h3 className="font-semibold text-neon-pink flex items-center gap-2"><Video /> Wariant B – Wideo</h3>
          <p className="text-sm text-gray-200 mt-1">
            Wstaw link do swojego wideo z najlepszymi akcjami (CS, FC/EA Sports FC, itp.) – YouTube/TikTok/Drive.
          </p>
          <Link href={FORMS} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="mt-3 text-neon-blue hover:bg-neon-blue hover:text-black">Wyślij zgłoszenie</Button>
          </Link>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href={CTA_URL} target="_blank" rel="noopener noreferrer">
          <Button className="h-12 px-8 text-base bg-neon-blue hover:bg-neon-blue/80">
            Zagłosuj teraz na 420
          </Button>
        </Link>
      </div>
    </section>
  )
}
