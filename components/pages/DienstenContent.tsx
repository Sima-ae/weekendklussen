'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Bath,
  ChefHat,
  Home,
  HardHat,
  Wrench,
  ArrowRight,
} from 'lucide-react';

const secties = [
  {
    id: 'badkamer',
    icon: Bath,
    title: 'Badkamer verbouwen & badkamer renovatie',
    intro:
      'Van badkamer verbouwen tot complete badkamer renovatie. Sanitair installeren, tegelzetter, stucen en alle afwerking. Wij zijn uw vaklieden voor badkamer renovatie.',
    items: [
      'Badkamer verbouwen',
      'Sanitair installeren en aanpassingen',
      'Vochtbestrijding en isolatie',
      'Volledige badkamer renovatie met garantie',
    ],
  },
  {
    id: 'keuken',
    icon: ChefHat,
    title: 'Keukenrenovatie & keuken plaatsen',
    intro:
      'Keuken plaatsen, keukenrenovatie en aanpassingen. Professionele uitvoering, bouwbegeleiding en vaste prijs.',
    items: [
      'Keuken plaatsen en keukenrenovatie',
      'Elektricien en sanitair in keuken',
      'Tegelzetter, vloer renoveren',
      'Keukenrenovatie met duidelijke offerte',
    ],
  },
  {
    id: 'aanbouw',
    icon: Home,
    title: 'Aanbouw, uitbouw, dakkapel & serre',
    intro:
      'Aanbouw maken, uitbouw bouwen, serre bouwen, dakkapel plaatsen, dakopbouw. Bouwtekening, vergunning aanvragen en bouwbegeleiding.',
    items: [
      'Aanbouw, uitbouw, dakkapel',
      'Uitbouw laten bouwen, serre bouwen',
      'Dakkapel plaatsen offerte, dakopbouw',
      'Bouwtekening en vergunning aanvragen',
    ],
  },
  {
    id: 'renovatie',
    icon: HardHat,
    title: 'Renovatie, verbouwing & woningverbouwing',
    intro:
      'Verbouwing, renovatie, woningverbouwing. Verbouwing zonder gedoe, met vaste prijs en garantie. Verbouwingskosten en verbouwingsplannen helder. Duurzaam bouwen en energieneutraal bouwen.',
    items: [
      'Verbouwing en woningverbouwing',
      'Binnenwand verwijderen, vloer renoveren',
      'Spouwmuur isolatie, isolatie algemeen',
      'Gevel renovatie, dak renoveren',
    ],
  },
  {
    id: 'onderhoud',
    icon: Wrench,
    title: 'Onderhoud woning & klein onderhoud',
    intro:
      'Onderhoud woning, klein onderhoud, timmerwerk, metselwerk, schilderen, stucen.',
    items: [
      'Onderhoud woning en klein onderhoud',
      'Klein onderhoud',
      'Tuin aanleg',
      'Klusjesman',
    ],
  },
];

export function DienstenContent() {
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
              Diensten van Weekend Klussen
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Weekend Klussen is uw betrouwbare vaklieden en bouwbedrijf in Zuid-Holland. Wij verzorgen een breed scala aan bouw- en renovatiediensten voor particulieren en bedrijven. Van complete woningverbouwing tot specifieke klussen zoals badkamer verbouwen, keukenrenovatie, aanbouw plaatsen en meer.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Alle werkzaamheden worden uitgevoerd door ervaren vakmannen met vaste prijzen en garantie. Vraag vrijblijvend een{' '}
              <Link href="/offerte" className="text-brown-600 font-semibold hover:underline">
                gratis offerte
              </Link>{' '}
              aan en ontvang binnen 24-48 uur een duidelijke prijsopgave.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {secties.map((s, index) => {
              const Icon = s.icon;
              return (
                <motion.section
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="scroll-mt-24 bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="text-brown-600" size={28} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{s.title}</h2>
                      <p className="text-gray-600">{s.intro}</p>
                    </div>
                  </div>
                  <ul className="ml-0 sm:ml-18 space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-brown-500 rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gray-50 rounded-xl border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overige diensten</h2>
            <p className="text-gray-600 mb-4">
              Ook voor sloopwerk, fundering, timmerwerk, metselwerk, tegelwerk, schilderen,
              stucen, bouwadvies en nog veel meer. Neem contact met ons op voor een vrijblijvende offerte.
            </p>
          </motion.div>
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
