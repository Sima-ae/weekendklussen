'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';

interface LekkageOnderzoekenContentProps {
  location: string;
  title: string;
  description: string;
  nearbyCities?: string[];
}

export function LekkageOnderzoekenContent({ 
  location, 
  title, 
  description, 
  nearbyCities = []
}: LekkageOnderzoekenContentProps) {
  const services = [
    'Grondig lekkage onderzoek',
    'Onderzoek met vochtmeter',
    'Onderzoek met warmtebeeldcamera',
    'Onderzoek in leidingen en installaties',
    'Onderzoek in muren en vloeren',
    'Onderzoek in daken en dakranden',
    'Onderzoek in badkamer en keuken',
    'Onderzoek met endoscoop',
    '24/7 Spoed lekkage onderzoek',
    'Gedetailleerd onderzoeksrapport',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-brown-100 rounded-full mb-4">
          <MapPin className="text-brown-600" size={32} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
      </motion.div>

      <div className="space-y-8">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Lekkage onderzoeken in {location}</h2>
          <p className="text-gray-700 mb-4">
            Weekend Klussen is uw specialist voor lekkage onderzoeken in {location}. Een grondig lekkage onderzoek is essentieel om de oorzaak en omvang van een lekkage te bepalen. Onze ervaren vakmannen voeren een systematisch onderzoek uit met moderne technieken om alle aspecten van de lekkage in kaart te brengen.
          </p>
          <p className="text-gray-700 mb-4">
            Wij verzorgen professioneel lekkage onderzoek in {location} en omgeving. Onze specialisten gebruiken geavanceerde apparatuur zoals vochtmeters, warmtebeeldcamera's en endoscopen om de lekkage grondig te onderzoeken. Wij kijken naar alle mogelijke oorzaken en bepalen de exacte locatie en omvang van het probleem.
          </p>
          <p className="text-gray-700">
            Bij Weekend Klussen begrijpen wij dat een lekkage spoed vereist. Daarom bieden wij ook 24/7 spoed lekkage onderzoek aan. Onze specialisten in {location} komen snel ter plaatse om een grondig onderzoek uit te voeren en u te voorzien van een duidelijk rapport met bevindingen en aanbevelingen.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Onze lekkage onderzoeken diensten in {location}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-brown-600 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Waarom een grondig lekkage onderzoek belangrijk is</h2>
          <p className="text-gray-700 mb-4">
            Een grondig lekkage onderzoek biedt tal van voordelen:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Bepaling van de exacte oorzaak en locatie van de lekkage</li>
            <li>Inzicht in de omvang van de schade</li>
            <li>Voorkomen van onnodige reparaties en kosten</li>
            <li>Gerichte aanpak voor efficiënte reparatie</li>
            <li>Gedetailleerd rapport voor verzekering of vaklieden</li>
            <li>Voorkomen van terugkerende problemen</li>
          </ul>
          <p className="text-gray-700">
            Door een grondig lekkage onderzoek krijgt u volledig inzicht in het probleem. Onze specialisten in {location} zorgen voor een systematisch onderzoek waarbij alle aspecten worden meegenomen, zodat u precies weet wat er aan de hand is en wat er moet gebeuren.
          </p>
        </motion.section>

        {nearbyCities.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-brown-50 p-6 sm:p-8 rounded-xl border border-brown-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ook actief in de omgeving</h2>
            <p className="text-gray-700 mb-4">
              Weekend Klussen verzorgt lekkage onderzoeken niet alleen in {location}, maar ook in de omliggende gemeenten en steden:
            </p>
            <div className="flex flex-wrap gap-2">
              {nearbyCities.map((city, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-white rounded-lg text-sm text-gray-700 border border-brown-200"
                >
                  {city}
                </span>
              ))}
            </div>
          </motion.section>
        )}

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Waarom kiezen voor Weekend Klussen voor lekkage onderzoeken in {location}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle className="text-brown-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Ervaren specialisten</h3>
                <p className="text-sm text-gray-600">Jarenlange ervaring met lekkage onderzoeken in {location}.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle className="text-brown-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Grondig onderzoek</h3>
                <p className="text-sm text-gray-600">Systematisch onderzoek waarbij alle aspecten worden meegenomen.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle className="text-brown-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Moderne apparatuur</h3>
                <p className="text-sm text-gray-600">Wij gebruiken de nieuwste technieken en apparatuur.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle className="text-brown-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Gedetailleerd rapport</h3>
                <p className="text-sm text-gray-600">U ontvangt een uitgebreid rapport met bevindingen en aanbevelingen.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle className="text-brown-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">24/7 Spoedservice</h3>
                <p className="text-sm text-gray-600">Spoed lekkage onderzoek beschikbaar voor urgente situaties.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle className="text-brown-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Vaste prijzen</h3>
                <p className="text-sm text-gray-600">Duidelijke offertes zonder verrassingen achteraf.</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-brown-600 to-brown-700 p-6 sm:p-8 rounded-xl text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Vrijblijvend offerte voor lekkage onderzoeken in {location}</h2>
          <p className="mb-6 text-brown-100">
            Heeft u een lekkage die onderzocht moet worden in {location}? Vraag vrijblijvend een gratis offerte aan. Voor spoedgevallen kunt u ons direct bellen voor 24/7 spoed lekkage onderzoek. Wij reageren binnen 24 uur met een duidelijke prijsopgave zonder verplichtingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/offerte"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-brown-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Offerte aanvragen <ArrowRight size={18} />
            </Link>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="text-brown-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Bellen</h3>
                <a href="tel:+31642502442" className="text-brown-600 hover:underline font-medium">
                  +31642502442
                </a>
                <p className="text-sm text-gray-600 mt-1">Maandag t/m vrijdag: 8:00 - 18:00</p>
                <p className="text-sm text-brown-600 font-medium mt-1">24/7 Spoedservice beschikbaar</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="text-brown-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">E-mail</h3>
                <a href="mailto:info@weekend-klussen.nl" className="text-brown-600 hover:underline font-medium">
                  info@weekend-klussen.nl
                </a>
                <p className="text-sm text-gray-600 mt-1">Wij reageren binnen 24 uur</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-8 text-center"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brown-600 font-medium hover:underline"
        >
          ← Terug naar home
        </Link>
      </motion.div>
    </div>
  );
}
