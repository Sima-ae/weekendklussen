'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Wrench,
  Home,
  Bath,
  HardHat,
  ShieldCheck,
  FileText,
  ArrowRight,
} from 'lucide-react';

const diensten = [
  {
    icon: Bath,
    title: 'Badkamer verbouwen',
    description:
      'Badkamer renovatie, sanitair installeren en volledige verbouwingsplannen. Van toilet tot complete badkamer verbouwing. Vakmannen met garantie.',
    href: '/diensten#badkamer',
  },
  {
    icon: Home,
    title: 'Keukenrenovatie & keuken plaatsen',
    description:
      'Keuken plaatsen, keukenrenovatie en aanpassingen. professionele uitvoering, vaste prijs en bouwbegeleiding bij uw keukenverbouwing.',
    href: '/diensten#keuken',
  },
  {
    icon: Wrench,
    title: 'Aanbouw, uitbouw & dakkapel',
    description:
      'Aanbouw maken, uitbouw bouwen, serre bouwen, dakkapel plaatsen. Bouwtekening, vergunning aanvragen en bouwbegeleiding. Klein bouwbedrijf voor aanbouw.',
    href: '/diensten#aanbouw',
  },
  {
    icon: HardHat,
    title: 'Renovatie & verbouwing',
    description:
      'Woningverbouwing, renovatie en verbouwing zonder gedoe. Verbouwingskosten helder inzichtelijk. Duurzaam en energieneutraal bouwen.',
    href: '/diensten#renovatie',
  },
];

const waaromWeekendklussen = [
  'Vrijblijvend een offerte ontvangen binnen 24-48 uur',
  'Betrouwbare vaklieden met garantie',
  'Voornamelijk actief in Zuid-Holland',
  'Een vaklieden die snel kan starten',
  'Bouwadvies en bouwbegeleiding',
  'Vaste prijs, geen verrassingen',
];

export function ContentSections() {
  return (
    <>
      <section id="diensten" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Weekend Klussen verzorgt totaalverbouwingen van A tot Z
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Van badkamer en keukenrenovatie tot aanbouw en complete woning verbouwing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diensten.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-brown-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-brown-600 font-medium hover:gap-3 transition-all"
                  >
                    Meer info <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/diensten"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brown-600 text-white rounded-lg font-semibold hover:bg-brown-700 transition-colors"
            >
              Alle diensten <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="over-ons" className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Over Weekend Klussen
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Weekend Klussen is een betrouwbare vaklieden en bouwbedrijf in de regio Zuid-Holland. Wij
                verzorgen verbouwing, renovatie, aanbouw en alle gerelateerde klussen. Of
                u nu een vaklieden nodig heeft voor een badkamer renovatie, keukenrenovatie of een aanbouw
                laten bouwen — wij zorgen voor verbouwing zonder gedoe.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Met vaste prijzen, duidelijke communicatie en professionele vakmannen staan wij altijd voor u klaar.
              </p>
              <Link
                href="/over-ons"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brown-600 text-white rounded-lg font-semibold hover:bg-brown-700 transition-colors"
              >
                Lees meer...<ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="text-brown-600" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Waarom Weekend Klussen?</h3>
              </div>
              <ul className="space-y-3">
                {waaromWeekendklussen.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-brown-500 rounded-full mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="offerte" className="py-20 sm:py-24 bg-brown-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <FileText className="text-white" size={28} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Een vaklieden nodig?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/offerte"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brown-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Offerte aanvragen <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/15 text-white rounded-lg font-semibold text-lg border-2 border-white/40 hover:bg-white/25 transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
