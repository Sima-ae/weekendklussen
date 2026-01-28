'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
    <>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Over Weekend Klussen
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Weekend Klussen is een betrouwbare vaklieden en bouwbedrijf met jarenlange ervaring in de regio Zuid-Holland. Wij staan bekend om onze professionele aanpak, vaste prijzen en uitstekende service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Wie zijn wij?</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Weekend Klussen is een betrouwbare vaklieden en bouwbedrijf in de regio Zuid-Holland. Wij verzorgen verbouwing, renovatie, aanbouw en alle gerelateerde klussen voor particulieren en bedrijven. Of u nu een vaklieden nodig heeft voor een badkamer renovatie, keukenrenovatie of een aanbouw laten bouwen — wij zorgen voor verbouwing zonder gedoe.
              </p>
              <p className="text-lg">
                Met vaste prijzen, duidelijke communicatie en professionele vakmannen staan wij altijd voor u klaar. Ons team bestaat uit ervaren specialisten die bekend zijn met de lokale bouwvoorschriften en werken volgens de hoogste kwaliteitsstandaarden.
              </p>
              <p className="text-lg">
                Wij werken met vaste prijzen, zodat alle kosten vooraf duidelijk zijn en geen verrassingen ontstaan. Vergunning aanvragen, bouwtekening en architect: wij denken mee en ondersteunen waar nodig. Duurzaam bouwen en kwaliteit nemen wij altijd serieus. Duurzaam bouwen is niet alleen om het milieu te beschermen, maar ook om de kwaliteit van het werk te verbeteren en de energiekosten te verlagen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Waarom Weekend Klussen?</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {waarom.map((w, index) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{w.title}</h3>
                <p className="text-gray-600">{w.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-brown-600 to-brown-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Starten met weekend klussen?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Vraag vrijblijvend een offerte aan. Wij reageren binnen 24-48 uur.
            </p>
            <Link
              href="/offerte"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brown-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Offerte aanvragen <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
