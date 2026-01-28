'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  CheckCircle,
  ShieldCheck,
  Clock,
  MapPin,
  ArrowRight,
  Phone,
  Mail,
  Wrench,
  Home,
  Bath,
  HardHat,
} from 'lucide-react';
import { PriceCalculator } from './PriceCalculator';

const diensten = [
  {
    icon: Bath,
    title: 'Badkamer verbouwen',
    description: 'Complete badkamer renovatie, sanitair installeren en volledige verbouwingsplannen. Van kleine aanpassingen tot complete badkamer verbouwing.',
    href: '/diensten#badkamer',
  },
  {
    icon: Home,
    title: 'Keukenrenovatie & keuken plaatsen',
    description: 'Keuken plaatsen, keukenrenovatie en aanpassingen. Professionele uitvoering, vaste prijs en bouwbegeleiding bij uw keukenverbouwing.',
    href: '/diensten#keuken',
  },
  {
    icon: Wrench,
    title: 'Aanbouw, uitbouw & dakkapel',
    description: 'Aanbouw maken, uitbouw bouwen, serre bouwen, dakkapel plaatsen. Bouwtekening, vergunning aanvragen en bouwbegeleiding.',
    href: '/diensten#aanbouw',
  },
  {
    icon: HardHat,
    title: 'Renovatie & verbouwing',
    description: 'Woningverbouwing, renovatie en verbouwing zonder gedoe. Verbouwingskosten helder inzichtelijk. Duurzaam en energieneutraal bouwen.',
    href: '/diensten#renovatie',
  },
];

const voordelen = [
  {
    icon: ShieldCheck,
    title: '12 Maanden garantie',
    description: 'Volledige zekerheid op alle werkzaamheden',
  },
  {
    icon: CheckCircle,
    title: 'Tevreden klanten',
    description: 'Hoge klantbeoordelingen en referenties',
  },
  {
    icon: Clock,
    title: 'Snelle reactie',
    description: 'Binnen 30 min reactie via WhatsApp',
  },
  {
    icon: MapPin,
    title: 'Lokale specialist',
    description: 'Regio Zuid-Holland & omgeving',
  },
];

export function HomePageContent() {
  return (
    <>
      {/* Hero CTA Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meubelmontage & Verbouwing specialist. Zonder gedoe.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Geen ingewikkelde handleidingen of zwaar tilwerk. Weekend Klussen zorgt dat uw verbouwing, renovatie en montage perfect worden uitgevoerd.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-brown-50 px-4 py-2 rounded-lg">
                <span className="text-sm text-gray-600">Kleine klussen:</span>
                <span className="font-semibold text-brown-600 ml-2">Vanaf €65,-</span>
              </div>
              <div className="bg-brown-50 px-4 py-2 rounded-lg">
                <span className="text-sm text-gray-600">Badkamer verbouwen:</span>
                <span className="font-semibold text-brown-600 ml-2">Vanaf €2.500,-</span>
              </div>
              <div className="bg-brown-50 px-4 py-2 rounded-lg">
                <span className="text-sm text-gray-600">Aanbouw:</span>
                <span className="font-semibold text-brown-600 ml-2">€850,- per m²</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brown-600 text-white rounded-lg font-semibold text-lg hover:bg-brown-700 transition-colors shadow-lg"
              >
                Bereken uw prijs <ArrowRight size={20} />
              </Link>
              <Link
                href="/offerte"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brown-600 rounded-lg font-semibold text-lg border-2 border-brown-600 hover:bg-brown-50 transition-colors"
              >
                Direct aanvragen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {voordelen.map((voordeel, index) => {
              const Icon = voordeel.icon;
              return (
                <motion.div
                  key={voordeel.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brown-100 rounded-full mb-4">
                    <Icon className="text-brown-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{voordeel.title}</h3>
                  <p className="text-sm text-gray-600">{voordeel.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Waarmee kan ik u helpen?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ik help particulieren in regio Zuid-Holland met het <strong>veilig en netjes</strong> uitvoeren van verbouwingen en renovaties.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diensten.map((dienst, index) => {
              const Icon = dienst.icon;
              return (
                <motion.div
                  key={dienst.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-brown-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{dienst.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{dienst.description}</p>
                  <Link
                    href={dienst.href}
                    className="inline-flex items-center gap-2 text-brown-600 font-medium hover:gap-3 transition-all text-sm"
                  >
                    Meer info <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <div id="calculator">
        <PriceCalculator />
      </div>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              In 3 stappen geregeld
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Prijsindicatie',
                description: 'Geef door wat u gemonteerd wilt hebben via de calculator. U ziet direct waar u aan toe bent.',
              },
              {
                step: '2',
                title: 'Afspraak & Uitvoering',
                description: 'Ik kom op de afgesproken tijd, voer alles vakkundig uit en laat de ruimte netjes achter.',
              },
              {
                step: '3',
                title: 'Garantie',
                description: 'U controleert het werk en krijgt standaard 12 maanden garantie op de uitvoering.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brown-600 text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Over Weekend Klussen
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Het uitvoeren van verbouwingen en renovaties kan een hele opgave zijn. De materialen zijn zwaar, de plannen onduidelijk en het kost vaak meer energie dan u lief is.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Weekend Klussen is geen 'klusjesman' die er ook verbouwingen bij doet, maar een specialist die zich 100% richt op vakkundige uitvoering. Ik kom bij u thuis in Zuid-Holland en omgeving om ervoor te zorgen dat uw verbouwing perfect wordt uitgevoerd.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-brown-600" size={20} />
                  <span className="text-gray-700">12 Maanden volledige garantie</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-brown-600" size={20} />
                  <span className="text-gray-700">Vaste prijsafspraak vooraf</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-brown-600" size={20} />
                  <span className="text-gray-700">Alles netjes en schoon achtergelaten</span>
                </div>
              </div>
              <Link
                href="/over-ons"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brown-600 text-white rounded-lg font-semibold hover:bg-brown-700 transition-colors"
              >
                Lees meer <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-brown-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telefoon</div>
                    <a href="tel:+31642502442" className="text-brown-600 hover:underline font-medium">
                      +31 6 4250 2442
                    </a>
                    <p className="text-sm text-gray-600 mt-1">24/7 Spoedservice beschikbaar</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="text-brown-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">E-mail</div>
                    <a href="mailto:info@weekend-klussen.nl" className="text-brown-600 hover:underline font-medium">
                      info@weekend-klussen.nl
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Klaar om te beginnen?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Vraag vrijblijvend een offerte aan. Wij reageren binnen 24-48 uur.
            </p>
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
                Contact opnemen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
