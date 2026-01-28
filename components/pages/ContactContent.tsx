'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, ArrowRight, FileText, Clock, MapPin } from 'lucide-react';

export function ContactContent() {
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
              Neem contact met ons op
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Heeft u een vraag over een klusje, renovatie of een complete totaalverbouwing? Wellicht wilt u direct een vrijblijvende offerte aanvragen?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.a
              href="tel:+31103112884"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-brown-200 hover:bg-brown-50/50 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="text-brown-600" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Bellen</h2>
                <p className="text-gray-600 mb-3">Bel voor spoed of een snelle vraag.</p>
                <p className="text-brown-600 font-semibold text-lg">+31103112884</p>
                <p className="text-sm text-gray-500 mt-2">24/7 Spoedservice beschikbaar</p>
              </div>
            </motion.a>
            <motion.a
              href="mailto:info@weekend-klussen.nl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-brown-200 hover:bg-brown-50/50 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="text-brown-600" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">E-mail</h2>
                <p className="text-gray-600 mb-3">Stuur een bericht voor offerte of informatie.</p>
                <p className="text-brown-600 font-semibold text-lg">info@weekend-klussen.nl</p>
                <p className="text-sm text-gray-500 mt-2">Reactie binnen 24-48 uur</p>
              </div>
            </motion.a>
          </div>

          

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-8 bg-gradient-to-r from-brown-600 to-brown-700 rounded-xl text-center text-white"
          >
            
            <h2 className="text-2xl font-bold mb-3">Direct een offerte aanvragen?</h2>
            
            <Link
              href="/offerte"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brown-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Klik hier <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
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
        </div>
      </section>
    </>
  );
}
