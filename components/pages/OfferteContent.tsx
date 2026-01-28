'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FileText, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const dienstenOpties = [
  'Badkamer verbouwen',
  'Keukenrenovatie / keuken plaatsen',
  'Aanbouw / uitbouw / serre',
  'Dakkapel plaatsen',
  'Renovatie / verbouwing',
  'Onderhoud woning',
  'Overig',
];

export function OfferteContent() {
  const [verzonden, setVerzonden] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      naam: formData.get('naam'),
      telefoon: formData.get('telefoon'),
      email: formData.get('email'),
      plaats: formData.get('plaats'),
      dienst: formData.get('dienst'),
      bericht: formData.get('bericht'),
    };

    try {
      const response = await fetch('/api/offerte', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Er is een fout opgetreden');
      }

      setVerzonden(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Er is een fout opgetreden bij het verzenden');
      setIsSubmitting(false);
    }
  };

  if (verzonden) {
    return (
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8 bg-green-50 rounded-xl border border-green-200"
        >
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-green-600" size={28} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Aanvraag ontvangen</h2>
          <p className="text-gray-600">
            Bedankt voor uw aanvraag. Wij nemen binnen 24-48 uur contact met u op voor vrijblijvende
            offerte zonder verplichtingen. Heeft u spoed? Bel ons voor een snelle reactie.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="w-14 h-14 bg-brown-100 rounded-xl flex items-center justify-center mx-auto mb-4">
          <FileText className="text-brown-600" size={28} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Offerte aanvragen
        </h1>
        <p className="text-lg text-gray-600">
          Vul het formulier in. Wij reageren binnen 24-48 uur met een vrijblijvende offerte zonder verplichtingen.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onSubmit={handleSubmit}
        className="space-y-5 p-6 sm:p-8 bg-gray-50 rounded-xl border border-gray-100"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-1">
              Naam *
            </label>
            <input
              id="naam"
              name="naam"
              type="text"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-brown-500"
            />
          </div>
          <div>
            <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700 mb-1">
              Telefoon *
            </label>
            <input
              id="telefoon"
              name="telefoon"
              type="tel"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-brown-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-brown-500"
          />
        </div>
        <div>
          <label htmlFor="plaats" className="block text-sm font-medium text-gray-700 mb-1">
            Woonlaats / regio *
          </label>
          <input
            id="plaats"
            name="plaats"
            type="text"
            required
            placeholder="bijv. Rotterdam, Den Haag, Leiden"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-brown-500"
          />
        </div>
        <div>
          <label htmlFor="dienst" className="block text-sm font-medium text-gray-700 mb-1">
            Gewenste dienst *
          </label>
          <select
            id="dienst"
            name="dienst"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-brown-500 bg-white"
          >
            <option value="">Maak een keuze...</option>
            {dienstenOpties.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bericht" className="block text-sm font-medium text-gray-700 mb-1">
            Vul hieronder een korte omschrijving in van uw project en wensen *
          </label>
          <textarea
            id="bericht"
            name="bericht"
            rows={4}
            required
            placeholder="Bijv. badkamer verbouwen, aanbouw achterkant woning, keukenrenovatie..."
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-brown-500 resize-none"
          />
        </div>
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}
        <p className="text-sm text-gray-500">
          Door te versturen gaat u akkoord met het verwerken van uw gegevens voor uw offerteaanvraag.
          Wij gebruiken uw gegevens alleen hiervoor. Zie onze{' '}
          <a href="/privacy" className="text-brown-600 hover:underline">
            privacyverklaring
          </a>
          .
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 bg-brown-600 text-white rounded-lg font-semibold hover:bg-brown-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>Verzenden...</span>
            </>
          ) : (
            'Versturen'
          )}
        </button>
      </motion.form>
    </div>
  );
}
