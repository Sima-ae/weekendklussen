'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';

interface LekkageOpzoekenContentProps {
  location: string;
  title: string;
  description: string;
  nearbyCities?: string[];
}

export function LekkageOpzoekenContent({ 
  location, 
  title, 
  description, 
  nearbyCities = []
}: LekkageOpzoekenContentProps) {
  const services = [
    'Lekkage opzoeken met vochtmeter',
    'Lekkage opzoeken met warmtebeeldcamera',
    'Lekkage opzoeken in leidingen',
    'Lekkage opzoeken in muren en vloeren',
    'Lekkage opzoeken in daken',
    'Lekkage opzoeken in badkamer en keuken',
    'Lekkage opzoeken met endoscoop',
    'Lekkage opzoeken met gasdetectie',
    '24/7 Spoed lekkage opzoeken',
    'Nauwkeurige lokalisatie van lekkage',
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Lekkage opzoeken in {location}</h2>
          <p className="text-gray-700 mb-4">
            Weekend Klussen is uw specialist voor lekkage opzoeken in {location}. Het vinden van een lekkage kan lastig zijn, vooral als deze zich op verborgen plaatsen bevindt. Onze ervaren vakmannen gebruiken moderne detectietechnieken om lekkages snel en nauwkeurig op te sporen, zonder onnodige sloopwerkzaamheden.
          </p>
          <p className="text-gray-700 mb-4">
            Wij verzorgen professioneel lekkage opzoeken in {location} en omgeving met behulp van geavanceerde apparatuur zoals vochtmeters, warmtebeeldcamera's, endoscopen en gasdetectie. Of het nu gaat om een lekkage in leidingen, muren, vloeren, daken of andere verborgen plaatsen - wij vinden de bron van het probleem snel en efficiënt.
          </p>
          <p className="text-gray-700">
            Bij Weekend Klussen begrijpen wij dat een lekkage spoed vereist. Daarom bieden wij ook 24/7 spoed lekkage opzoeken aan. Onze specialisten in {location} komen snel ter plaatse om de lekkage op te sporen, zodat u direct weet waar het probleem zit en wat er moet gebeuren.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Onze lekkage opzoeken diensten in {location}</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Waarom professioneel lekkage opzoeken belangrijk is</h2>
          <p className="text-gray-700 mb-4">
            Een lekkage die niet wordt gevonden kan ernstige gevolgen hebben:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Waterschaade aan muren, vloeren en plafonds</li>
            <li>Schimmelvorming en gezondheidsrisico's</li>
            <li>Structurele schade aan uw woning</li>
            <li>Hoge kosten door onnodige sloopwerkzaamheden</li>
            <li>Energieverlies en hoge energierekeningen</li>
            <li>Voortdurende waterschaade als de lekkage niet wordt gevonden</li>
          </ul>
          <p className="text-gray-700">
            Door professioneel lekkage opzoeken wordt de bron van het probleem snel gevonden zonder onnodige sloop. Onze specialisten in {location} gebruiken moderne technieken om lekkages nauwkeurig op te sporen, waardoor reparaties gericht en efficiënt kunnen worden uitgevoerd.
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
              Weekend Klussen verzorgt lekkage opzoeken niet alleen in {location}, maar ook in de omliggende gemeenten en steden:
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Waarom kiezen voor Weekend Klussen voor lekkage opzoeken in {location}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle className="text-brown-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Ervaren specialisten</h3>
                <p className="text-sm text-gray-600">Jarenlange ervaring met lekkage opzoeken in {location}.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle className="text-brown-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Moderne apparatuur</h3>
                <p className="text-sm text-gray-600">Wij gebruiken de nieuwste detectietechnieken en apparatuur.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle className="text-brown-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">24/7 Spoedservice</h3>
                <p className="text-sm text-gray-600">Spoed lekkage opzoeken beschikbaar voor urgente lekkages.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle className="text-brown-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Geen onnodige sloop</h3>
                <p className="text-sm text-gray-600">Nauwkeurige opsporing voorkomt onnodige sloopwerkzaamheden.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle className="text-brown-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Snelle opsporing</h3>
                <p className="text-sm text-gray-600">Efficiënte werkwijze voor snelle lokalisatie van de lekkage.</p>
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
          <h2 className="text-2xl font-bold mb-4">Vrijblijvend offerte voor lekkage opzoeken in {location}</h2>
          <p className="mb-6 text-brown-100">
            Heeft u een lekkage die opgezocht moet worden in {location}? Laat het niet verergeren! Vraag vrijblijvend een gratis offerte aan. Voor spoedgevallen kunt u ons direct bellen voor 24/7 spoed lekkage opzoeken. Wij reageren binnen 24 uur met een duidelijke prijsopgave zonder verplichtingen.
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
                <a href="tel:+31103112884" className="text-brown-600 hover:underline font-medium">
                  +31103112884
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
