import Link from "next/link";
import { Button } from "@/components/ui";
import { CheckCircle, MousePointerClick, Share2 } from "lucide-react";

const CTA_URL = "https://bom.mazovia.pl/glosowanie";

export default function Home() {
  const shareText =
    "Głosuję na BOM #420 – Mistrzostwa Mazowsza – Gaming Party. Dołącz! https://bom.mazovia.pl #BOM420 #GamingParty #Mazowsze";

  async function handleShare() {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "BOM #420 – Gaming Party",
          text: shareText,
          url: CTA_URL,
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        alert("Skopiowano treść udostępnienia – wklej w swoje social media!");
      }
    } catch {}
  }

  return (
    <>
      {/* HERO */}
     {/* HERO — wersja kompaktowa */}
    <section className="text-center px-4 pt-8">
      <h1 className="mx-auto max-w-3xl text-4xl md:text-6xl font-extrabold tracking-tight
                    leading-[1.12] md:leading-[1.1] pb-0.5 text-transparent">
        <span className="bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink">
          Mistrzostwa Mazowsza w grach komputerowych
        </span>
      </h1>

    

      <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="https://bom.mazovia.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg inline-flex items-center justify-center
                    rounded-md bg-neon-pink hover:bg-neon-pink/80 text-white shadow"
        >
          Zagłosuj na inicjatywę 420
        </a>
        <button
          onClick={handleShare}
          className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-md border border-white/20
                    text-neon-blue hover:bg-neon-blue hover:text-black transition"
        >
          Udostępnij znajomym
        </button>
      </div>
    </section>


      <section className="mt-8 grid sm:grid-cols-3 gap-4">
        {[
          {
            t: "1. Wejdź na BOM",
            d: "Otwórz stronę Budżetu Obywatelskiego Mazowsza.",
          },
          { t: "2. Wybierz #420", d: "Mistrzostwa Mazowsza – Gaming Party." },
          {
            t: "3. Potwierdź + udostępnij",
            d: "Zachęć znajomych do głosowania.",
          },
        ].map((s, i) => (
          <div
            key={i}
            className="rounded-xl bg-white/8 hover:bg-white/10 transition shadow-[0_1px_0_0_rgba(255,255,255,.08)] border border-white/10 p-5 text-center"
          >
            <h3 className="font-semibold">{s.t}</h3>
            <p className="text-sm text-gray-200 mt-1">{s.d}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-xl p-6 border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
        <h2 className="text-2xl font-bold mb-3">Dlaczego warto?</h2>
        <ul className="space-y-2 text-gray-100">
          <li>• Największe e-sportowe wydarzenie na Mazowszu</li>
          <li>• Świetny dojazd z całego regionu + baza noclegowa</li>
          <li>• Lokalne jedzenie: m.in. sery z Sierpca</li>
          <li>• Nagrody i emocje jak na profesjonalnych turniejach</li>
        </ul>
      </section>

      <section className="mt-10">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUTUBE_ID_HERE"
              title="Promo – Mistrzostwa Mazowsza – Gaming Party"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
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
  );
}

function Step({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white/10 p-4 rounded-lg text-center">
      <div className="mx-auto mb-2 h-10 w-10 flex items-center justify-center rounded-full bg-white/15">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-200 mt-1">{text}</p>
    </div>
  );
}
