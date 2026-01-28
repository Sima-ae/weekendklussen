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
      'Van badkamer verbouwen tot complete badkamer renovatie. Sanitair installeren, tegelzetter, stucen en alle afwerking. Wij zijn uw aannemer voor badkamer renovatie.',
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Diensten van Weekend Klussen</h1>
        <p className="text-lg text-gray-600 mb-4">
          Weekend Klussen is uw betrouwbare aannemer en bouwbedrijf in Zuid-Holland. Wij verzorgen een breed scala aan bouw- en renovatiediensten voor particulieren en bedrijven. Van complete woningverbouwing tot specifieke klussen zoals badkamer verbouwen, keukenrenovatie, aanbouw plaatsen en meer.
        </p>
        <p className="text-lg text-gray-600">
          Alle werkzaamheden worden uitgevoerd door ervaren vakmannen met vaste prijzen en garantie. Vraag vrijblijvend een{' '}
          <Link href="/offerte" className="text-indigo-600 font-medium hover:underline">
            gratis offerte
          </Link>{' '}
          aan en ontvang binnen 24-48 uur een duidelijke prijsopgave.
        </p>
      </motion.div>

      <div className="space-y-16">
        {secties.map((s) => {
          const Icon = s.icon;
          return (
            <motion.section
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-24"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{s.title}</h2>
                  <p className="text-gray-600 mt-2">{s.intro}</p>
                </div>
              </div>
              <ul className="ml-0 sm:ml-16 space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>
          );
        })}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 p-6 sm:p-8 bg-gray-50 rounded-xl border border-gray-100"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-4">Overige diensten</h2>
        <p className="text-gray-600 mb-4">
          Ook voor sloopwerk, fundering, timmerwerk, metselwerk, tegelwerk, schilderen,
          stucen, bouwadvies en nog veel meer...
        </p>
        
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 text-center"
      >
        <Link
          href="/offerte"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Gratis offerte aanvragen <ArrowRight size={18} />
        </Link>
      </motion.div>
    </div>
  );
}
