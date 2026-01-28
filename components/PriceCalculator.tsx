'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceItem {
  name: string;
  price: number;
  unit?: string;
}

const serviceOptions: Record<string, ServiceItem[]> = {
  'Badkamer verbouwen': [
    { name: 'Badkamer renovatie (basis)', price: 2500, unit: 'per badkamer' },
    { name: 'Sanitair installeren', price: 450, unit: 'per stuk' },
    { name: 'Tegelen badkamer', price: 65, unit: 'per m²' },
    { name: 'Douchecabine plaatsen', price: 350, unit: 'per stuk' },
  ],
  'Keukenrenovatie': [
    { name: 'Keuken plaatsen (basis)', price: 1200, unit: 'per keuken' },
    { name: 'Keukenbladen monteren', price: 350, unit: 'per blad' },
    { name: 'Aansluitingen keuken', price: 250, unit: 'per aansluiting' },
    { name: 'Keukenkastjes monteren', price: 45, unit: 'per kastje' },
  ],
  'Aanbouw / Uitbouw': [
    { name: 'Aanbouw (basis)', price: 850, unit: 'per m²' },
    { name: 'Dakkapel plaatsen', price: 3500, unit: 'per dakkapel' },
    { name: 'Serre bouwen', price: 1200, unit: 'per m²' },
    { name: 'Vergunning aanvragen', price: 500, unit: 'eenmalig' },
  ],
  'Renovatie / Verbouwing': [
    { name: 'Woningverbouwing', price: 1200, unit: 'per m²' },
    { name: 'Vloeren leggen', price: 35, unit: 'per m²' },
    { name: 'Stucwerk', price: 25, unit: 'per m²' },
    { name: 'Schilderwerk', price: 15, unit: 'per m²' },
  ],
};

const servicePackages = [
  {
    id: 1,
    name: 'Basis Pakket',
    price: 115,
    description: 'Stevige, nette standaardmontage',
    features: [
      'Vakkundige montage',
      'Waterpas afgesteld',
      '12 mnd garantie',
    ],
    popular: false,
  },
  {
    id: 2,
    name: 'XL Pakket',
    price: 129,
    description: 'Perfect voor hoge kasten & kinderen',
    features: [
      'Alles van Basis',
      'Leidingcheck (veiligheid)',
      'Veilig verankerd',
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Zorgeloos',
    price: 149,
    description: 'Geen rommel, geen gedoe',
    features: [
      'Alles van Veiligheid',
      'Kartonafvoer',
      'Schoon opgeleverd',
    ],
    popular: false,
  },
  {
    id: 4,
    name: 'Vervangingspakket',
    price: 229,
    description: 'Nieuwe kast erin, oude eruit',
    features: [
      'Nieuwe kast gemonteerd',
      'Oude kast weggehaald',
      'Alles netjes afgevoerd',
    ],
    popular: false,
  },
];

export function PriceCalculator() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const calculateTotal = () => {
    let total = 0;
    
    if (selectedPackage) {
      const packageData = servicePackages.find(p => p.id === selectedPackage);
      if (packageData) {
        total += packageData.price;
      }
    }

    if (selectedService) {
      const serviceItems = serviceOptions[selectedService];
      if (serviceItems) {
        serviceItems.forEach((item) => {
          const qty = quantities[item.name] || 0;
          total += item.price * qty;
        });
      }
    }

    return total;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  const generateWhatsAppMessage = () => {
    let message = 'Hallo, wij willen graag een offerte aanvragen:\n\n';
    if (selectedPackage) {
      const packageData = servicePackages.find(p => p.id === selectedPackage);
      message += `Pakket: ${packageData?.name}\n`;
    }
    if (selectedService) {
      message += `Dienst: ${selectedService}\n`;
    }
    message += `\nGeschatte prijs: ${formatPrice(calculateTotal())}\n\n`;
    message += 'Graag horen wij van u!';
    return encodeURIComponent(message);
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Snel een indicatie van de kosten
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparantie vinden wij belangrijk. Vul uw wensen in en u ziet direct waar u aan toe bent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Montage prijsindicatie</h3>
              <span className="text-sm text-gray-500">
                Stap {currentStep} / {totalSteps}
              </span>
            </div>

            <div className="space-y-6">
              {/* Step 1: Package Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Kies pakket
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {servicePackages.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedPackage === pkg.id
                          ? 'border-brown-600 bg-brown-50'
                          : 'border-gray-200 hover:border-brown-300'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="font-semibold text-gray-900">{pkg.name}</span>
                        {pkg.popular && (
                          <span className="text-xs bg-brown-600 text-white px-2 py-1 rounded">
                            Meest gekozen
                          </span>
                        )}
                      </div>
                      <div className="text-2xl font-bold text-brown-600 mb-1">
                        {formatPrice(pkg.price)}
                      </div>
                      <p className="text-sm text-gray-600">{pkg.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Service Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Gewenste dienst
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => {
                    setSelectedService(e.target.value);
                    setQuantities({});
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-brown-500 bg-white"
                >
                  <option value="">Selecteer een dienst...</option>
                  {Object.keys(serviceOptions).map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Service Items */}
              {selectedService && serviceOptions[selectedService] && (
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    {selectedService} - Details
                  </label>
                  <div className="space-y-3">
                    {serviceOptions[selectedService]?.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-600">
                            {formatPrice(item.price)} {item.unit && (item.unit.startsWith('per ') ? item.unit : `per ${item.unit}`)}
                          </div>
                        </div>
                        <input
                          type="number"
                          min="0"
                          value={quantities[item.name] || 0}
                          onChange={(e) =>
                            setQuantities({
                              ...quantities,
                              [item.name]: parseInt(e.target.value) || 0,
                            })
                          }
                          className="w-20 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-brown-500 text-center"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Price Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brown-600 to-brown-700 rounded-xl p-6 sm:p-8 text-white shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Uw prijsindicatie</h3>
            
            <div className="bg-white/10 rounded-lg p-6 mb-6">
              <div className="text-sm text-white/80 mb-2">Geschatte totaalprijs (incl. BTW)</div>
              <div className="text-4xl font-bold">
                {calculateTotal() > 0 ? formatPrice(calculateTotal()) : '€ 0,-'}
              </div>
            </div>

            {calculateTotal() === 0 && (
              <p className="text-white/80 text-sm mb-6">
                Vul de gegevens links in om een prijsindicatie te zien.
              </p>
            )}

            {calculateTotal() > 0 && (
              <div className="space-y-4">
                <Link
                  href={`https://wa.me/31103112884?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 bg-white text-brown-600 rounded-lg font-semibold py-3 px-6 hover:bg-gray-100 transition-colors"
                >
                  Verstuur via WhatsApp <ArrowRight size={18} />
                </Link>
                <Link
                  href="/offerte"
                  className="block w-full bg-white/15 text-white rounded-lg font-semibold py-3 px-6 text-center border-2 border-white/40 hover:bg-white/25 transition-colors"
                >
                  Aanvraag via e-mail
                </Link>
              </div>
            )}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-xl p-6 sm:p-8 border border-gray-200"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Basisprijzen & Opties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Veelvoorkomende aanvragen</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Basisprijs (regio)</span>
                  <span className="font-medium">€ 25</span>
                </li>
                <li className="flex justify-between">
                  <span>Badkamer verbouwen</span>
                  <span className="font-medium">€ 2.500 – € 4.500</span>
                </li>
                <li className="flex justify-between">
                  <span>Keuken plaatsen</span>
                  <span className="font-medium">€ 1.200 – € 2.500</span>
                </li>
                <li className="flex justify-between">
                  <span>Aanbouw (per m²)</span>
                  <span className="font-medium">€ 850 – € 1.200</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Extra Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Oude kast demontage</span>
                  <span className="font-medium">€ 90</span>
                </li>
                <li className="flex justify-between">
                  <span>Kartonafvoer</span>
                  <span className="font-medium">€ 25</span>
                </li>
                <li className="flex justify-between">
                  <span>Spoedmontage</span>
                  <span className="font-medium">+ € 45</span>
                </li>
                <li className="flex justify-between">
                  <span>Vergunning aanvragen</span>
                  <span className="font-medium">€ 500</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
