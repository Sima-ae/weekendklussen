'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, ArrowRight, FileText } from 'lucide-react';

export function ContactContent() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Weekend Klussen</h1>
          <p className="text-lg text-gray-600 mb-2">
            Heeft u een vraag over verbouwing, renovatie of aanbouw? Of wilt u een vrijblijvende offerte aanvragen? Neem gerust contact met ons op.
          </p>
          <p className="text-lg text-gray-600">
            Wij zijn bereikbaar voor al uw bouwvragen en reageren binnen 24 uur op uw bericht. Voor spoedgevallen kunt u ons direct bellen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
        >
          <a
            href="tel:+31103112884"
            className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-brown-200 hover:bg-brown-50/50 transition-colors"
          >
            <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
              <Phone className="text-brown-600" size={20} />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">Bellen</h2>
              <p className="text-gray-600 text-sm">Bel voor spoed of een snelle vraag.</p>
              <p className="text-brown-600 font-medium mt-1">+31103112884</p>
            </div>
          </a>
          <a
            href="mailto:info@weekend-klussen.nl"
            className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-brown-200 hover:bg-brown-50/50 transition-colors"
          >
            <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
              <Mail className="text-brown-600" size={20} />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">E-mail</h2>
              <p className="text-gray-600 text-sm">Stuur een bericht voor offerte of informatie.</p>
              <p className="text-brown-600 font-medium mt-1">info@weekend-klussen.nl</p>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 sm:p-8 bg-brown-50 rounded-xl border border-brown-100 text-center"
        >
          <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <FileText className="text-brown-600" size={24} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Direct een offerte aanvragen?</h2>
          <Link
            href="/offerte"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brown-600 text-white rounded-lg font-semibold hover:bg-brown-700 transition-colors"
          >
            Klik hier <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full mt-12 sm:mt-16"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1251880.4831694672!2d3.9578107816137305!3d52.20561059863709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3db87e4bb%3A0xb3a175ceffbd0a9f!2sNederland!5e0!3m2!1snl!2snl!4v1769484350594!5m2!1snl!2snl"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </motion.div>
    </>
  );
}
