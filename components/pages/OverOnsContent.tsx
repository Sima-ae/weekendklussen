'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const waarom = [
  {
    title: 'Betrouwbare vaklieden met garantie',
    text: 'Wij willen als betrouwbare vaklieden gevonden worden. Vaste prijzen, duidelijke afspraken en garantie op ons werk.',
  },
  {
    title: 'Snel kunnen starten',
    text: 'Vaklieden die snel kan starten. Geen maanden wachten: wij plannen flexibel en houden ons aan afgesproken data.',
  },
  {
    title: 'Gratis offerte, duidelijk en snel',
    text: 'Offerte vaklieden binnen 24 uur. Geen gedoe: transparante offerte, geen verborgen kosten. Verbouwing zonder gedoe.',
  },
  {
    title: 'Lokale vaklieden in de buurt',
    text: 'Weekend Klussen is voornamelijk actief in Zuid-Holland.',
  },
];

export function OverOnsContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Over Weekend Klussen</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Weekend Klussen is een betrouwbare vaklieden en bouwbedrijf met jarenlange ervaring in de regio Zuid-Holland. Wij staan bekend om onze professionele aanpak, vaste prijzen en uitstekende service.
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Wie zijn wij?</h2>
            <p className="text-gray-700 mb-4">
              Weekend Klussen is een betrouwbare vaklieden en bouwbedrijf in de regio Zuid-Holland. Wij verzorgen verbouwing, renovatie, aanbouw en alle gerelateerde klussen voor particulieren en bedrijven. Of u nu een vaklieden nodig heeft voor een badkamer renovatie, keukenrenovatie of een aanbouw laten bouwen — wij zorgen voor verbouwing zonder gedoe.
            </p>
            <p className="text-gray-700 mb-4">
              Met vaste prijzen, duidelijke communicatie en professionele vakmannen staan wij altijd voor u klaar. Ons team bestaat uit ervaren specialisten die bekend zijn met de lokale bouwvoorschriften en werken volgens de hoogste kwaliteitsstandaarden.
            </p>
            <p className="text-gray-700">
              Wij werken met vaste prijzen, zodat alle kosten vooraf duidelijk zijn en geen verrassingen ontstaan. Vergunning aanvragen, bouwtekening en architect: wij denken mee en ondersteunen waar nodig. Duurzaam bouwen en kwaliteit nemen wij altijd serieus. Duurzaam bouwen is niet alleen om het milieu te beschermen, maar ook om de kwaliteit van het werk te verbeteren en de energiekosten te verlagen.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Waarom Weekend Klussen?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {waarom.map((w) => (
            <div
              key={w.title}
              className="p-5 bg-gray-50 rounded-xl border border-gray-100 text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-2">{w.title}</h3>
              <p className="text-gray-600 text-sm">{w.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link
          href="/offerte"
          className="inline-block px-6 py-3 bg-brown-600 text-white rounded-lg font-semibold hover:bg-brown-700 transition-colors"
        >
          Gratis offerte aanvragen
        </Link>
      </motion.div>
    </div>
  );
}
