'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { StructuredData } from '@/components/StructuredData';
import { generateLocalBusinessSchema, generateServiceSchema } from '@/lib/metadata-utils';

interface ServiceLocationContentProps {
  location: string;
  service: string;
  title: string;
  description: string;
  serviceDescription: string;
  serviceDetails: string[];
  nearbyCities?: string[];
  serviceBenefits?: string[];
}

export function ServiceLocationContent({ 
  location, 
  service,
  title, 
  description, 
  serviceDescription,
  serviceDetails,
  nearbyCities = [],
  serviceBenefits = []
}: ServiceLocationContentProps) {
  const defaultBenefits = [
    'Ervaren vakmannen met jarenlange expertise',
    'Snelle service en snelle reactietijd',
    'Vaste prijzen zonder verrassingen',
    'Garantie op alle uitgevoerde werkzaamheden',
    '24/7 beschikbaar voor spoedgevallen',
    'Lokale kennis van de regio',
  ];

  const displayBenefits = serviceBenefits.length > 0 ? serviceBenefits : defaultBenefits;

  // Generate structured data
  const localBusinessSchema = generateLocalBusinessSchema(location, service);
  const serviceSchema = generateServiceSchema(service, location);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <StructuredData data={[localBusinessSchema, serviceSchema]} />
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{service} in {location}</h2>
          <p className="text-gray-700 mb-4">
            {serviceDescription}
          </p>
          <p className="text-gray-700 mb-4">
            Weekend Klussen is uw betrouwbare specialist voor {service.toLowerCase()} in {location} en de omliggende regio. Met jarenlange ervaring en een team van ervaren vakmannen staan wij 24/7 voor u klaar.
          </p>
          <p className="text-gray-700">
            Of u nu een spoedgeval heeft of een geplande klus - wij zorgen voor een snelle, professionele oplossing met vaste prijzen en garantie op al onze werkzaamheden.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Onze {service.toLowerCase()} diensten in {location}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceDetails.map((detail, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-brown-600 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">{detail}</span>
              </div>
            ))}
          </div>
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
              Weekend Klussen is niet alleen actief in {location}, maar ook in de omliggende gemeenten en steden:
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Waarom kiezen voor Weekend Klussen voor {service.toLowerCase()} in {location}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle className="text-brown-600" size={20} />
                </div>
                <div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-brown-600 to-brown-700 p-6 sm:p-8 rounded-xl text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Vrijblijvend een offerte aanvragen in {location}</h2>
          <p className="mb-6 text-brown-100">
            Heeft u een {service.toLowerCase()} project in {location}? Vraag vrijblijvend een gratis offerte aan. Wij reageren binnen 24 uur met een duidelijke prijsopgave zonder verplichtingen.
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
