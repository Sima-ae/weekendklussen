'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function PrivacyContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Privacyverklaring</h1>
        <p className="text-sm text-gray-500 mb-6">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </motion.div>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Inleiding</h2>
          <p className="mb-4">
            Weekend Klussen hecht grote waarde aan de bescherming van uw persoonsgegevens. In deze privacyverklaring leggen wij uit welke persoonsgegevens wij verzamelen, waarom wij deze verzamelen, hoe wij deze gebruiken en welke rechten u heeft met betrekking tot uw persoonsgegevens.
          </p>
          <p>
            Deze privacyverklaring is van toepassing op alle diensten die wij aanbieden via onze website en in het kader van onze bedrijfsvoering als aannemer en bouwbedrijf in Zuid-Holland.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Verantwoordelijke</h2>
          <p className="mb-2">
            Weekend Klussen is de verantwoordelijke voor de verwerking van uw persoonsgegevens.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="font-semibold mb-2">Contactgegevens:</p>
            <p>Weekend Klussen</p>
            <p>E-mail: <a href="mailto:info@weekend-klussen.nl" className="text-indigo-600 hover:underline">info@weekend-klussen.nl</a></p>
            <p>Telefoon: <a href="tel:+31642502442" className="text-indigo-600 hover:underline">+31642502442</a></p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Welke persoonsgegevens verzamelen wij?</h2>
          <p className="mb-4">Wij verzamelen de volgende categorieën van persoonsgegevens:</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1 Gegevens die u aan ons verstrekt</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Contactgegevens:</strong> naam, e-mailadres, telefoonnummer, adres</li>
            <li><strong>Offerteaanvragen:</strong> informatie over uw project, gewenste diensten, locatie, omschrijving van het project</li>
            <li><strong>Communicatie:</strong> correspondentie via e-mail, telefoon of andere communicatiekanalen</li>
            <li><strong>Contractgegevens:</strong> gegevens die nodig zijn voor de uitvoering van opdrachten, zoals factuurgegevens en betalingsinformatie</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2 Gegevens die automatisch worden verzameld</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Technische gegevens:</strong> IP-adres, browsertype, besturingssysteem, apparaatinformatie</li>
            <li><strong>Gebruiksgegevens:</strong> informatie over hoe u onze website gebruikt, bezochte pagina's, tijdstip van bezoek</li>
            <li><strong>Cookies:</strong> wij gebruiken cookies en vergelijkbare technologieën (zie paragraaf 8)</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Waarom verzamelen wij persoonsgegevens?</h2>
          <p className="mb-4">Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
          
          <div className="space-y-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">4.1 Uitvoering van overeenkomsten</h3>
              <p>Voor het behandelen en uitvoeren van offerteaanvragen, het opstellen van offertes, het uitvoeren van opdrachten en het leveren van onze diensten als aannemer.</p>
              <p className="text-sm text-gray-600 mt-2"><strong>Rechtmatige grondslag:</strong> Uitvoering van een overeenkomst</p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">4.2 Communicatie</h3>
              <p>Om contact met u op te nemen, vragen te beantwoorden, offertes te bespreken en u te informeren over uw project.</p>
              <p className="text-sm text-gray-600 mt-2"><strong>Rechtmatige grondslag:</strong> Uitvoering van een overeenkomst en gerechtvaardigd belang</p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">4.3 Administratieve doeleinden</h3>
              <p>Voor facturering, boekhouding, administratie en naleving van wettelijke verplichtingen (zoals belastingwetgeving).</p>
              <p className="text-sm text-gray-600 mt-2"><strong>Rechtmatige grondslag:</strong> Wettelijke verplichting</p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">4.4 Verbetering van onze diensten</h3>
              <p>Om onze website en diensten te verbeteren, gebruikerservaring te analyseren en onze bedrijfsvoering te optimaliseren.</p>
              <p className="text-sm text-gray-600 mt-2"><strong>Rechtmatige grondslag:</strong> Gerechtvaardigd belang</p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">4.5 Marketing (met toestemming)</h3>
              <p>Indien u hiervoor toestemming heeft gegeven, kunnen wij u informeren over onze diensten, aanbiedingen en relevante bouwprojecten.</p>
              <p className="text-sm text-gray-600 mt-2"><strong>Rechtmatige grondslag:</strong> Toestemming (u kunt deze altijd intrekken)</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Met wie delen wij uw gegevens?</h2>
          <p className="mb-4">Wij delen uw persoonsgegevens alleen met derden in de volgende gevallen:</p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Dienstverleners:</strong> Wij kunnen gebruikmaken van externe dienstverleners voor hosting, IT-ondersteuning, boekhouding en andere bedrijfsprocessen. Deze partijen zijn contractueel verplicht om uw gegevens vertrouwelijk te behandelen.</li>
            <li><strong>Wettelijke verplichtingen:</strong> Indien wij wettelijk verplicht zijn om gegevens te verstrekken aan overheidsinstanties of andere bevoegde autoriteiten.</li>
            <li><strong>Met uw toestemming:</strong> In alle andere gevallen alleen met uw uitdrukkelijke toestemming.</li>
          </ul>

          <p className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-4">
            <strong>Belangrijk:</strong> Wij verkopen uw persoonsgegevens nooit aan derden voor commerciële doeleinden.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Bewaartermijnen</h2>
          <p className="mb-4">Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Offerteaanvragen:</strong> Maximaal 2 jaar na de laatste contactmoment, tenzij u een opdracht heeft gegeven</li>
            <li><strong>Uitgevoerde opdrachten:</strong> 7 jaar na voltooiing (wettelijke bewaarplicht voor administratieve gegevens)</li>
            <li><strong>Contractgegevens:</strong> 7 jaar na beëindiging van de overeenkomst</li>
            <li><strong>Marketinggegevens:</strong> Totdat u uw toestemming intrekt of u zich afmeldt</li>
            <li><strong>Technische gegevens:</strong> Maximaal 2 jaar</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Beveiliging</h2>
          <p className="mb-4">
            Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies, diefstal, onbevoegde toegang, wijziging of openbaarmaking. Deze maatregelen omvatten onder meer:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Versleuteling van gegevens tijdens verzending (HTTPS/SSL)</li>
            <li>Beveiligde servers en databases</li>
            <li>Toegangsbeperkingen en authenticatie</li>
            <li>Regelmatige beveiligingsupdates</li>
            <li>Beperkte toegang tot persoonsgegevens voor alleen bevoegde medewerkers</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies en vergelijkbare technologieën</h2>
          <p className="mb-4">
            Onze website gebruikt cookies en vergelijkbare technologieën. Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u onze website bezoekt.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Soorten cookies die wij gebruiken:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Functionele cookies:</strong> Noodzakelijk voor het functioneren van de website</li>
            <li><strong>Analytische cookies:</strong> Om te begrijpen hoe bezoekers onze website gebruiken (indien van toepassing)</li>
            <li><strong>Externe content:</strong> Voor het laden van externe content zoals HDR-bestanden voor 3D-visualisaties</li>
          </ul>

          <p className="bg-gray-50 p-4 rounded-lg mt-4">
            U kunt cookies beheren via de instellingen van uw browser. Houd er rekening mee dat het uitschakelen van cookies de functionaliteit van onze website kan beïnvloeden.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Uw rechten</h2>
          <p className="mb-4">U heeft de volgende rechten met betrekking tot uw persoonsgegevens:</p>
          
          <div className="space-y-3">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Inzagerecht</h3>
              <p className="text-sm">U heeft het recht om te weten welke persoonsgegevens wij van u verwerken.</p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Rectificatierecht</h3>
              <p className="text-sm">U heeft het recht om onjuiste of onvolledige gegevens te laten corrigeren.</p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Recht op gegevenswissing</h3>
              <p className="text-sm">U heeft het recht om uw gegevens te laten wissen, tenzij wij wettelijk verplicht zijn deze te bewaren.</p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Recht op beperking van verwerking</h3>
              <p className="text-sm">U heeft het recht om de verwerking van uw gegevens te beperken onder bepaalde omstandigheden.</p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Recht op gegevensoverdraagbaarheid</h3>
              <p className="text-sm">U heeft het recht om uw gegevens in een gestructureerd formaat te ontvangen.</p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Bezwaar tegen verwerking</h3>
              <p className="text-sm">U heeft het recht om bezwaar te maken tegen de verwerking van uw gegevens op basis van gerechtvaardigd belang.</p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Intrekken van toestemming</h3>
              <p className="text-sm">Als wij gegevens verwerken op basis van uw toestemming, heeft u het recht deze toestemming te allen tijde in te trekken.</p>
            </div>
          </div>

          <p className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <strong>Om uw rechten uit te oefenen, kunt u contact met ons opnemen via:</strong><br />
            E-mail: <a href="mailto:info@weekend-klussen.nl" className="text-indigo-600 hover:underline">info@weekend-klussen.nl</a><br />
            Telefoon: <a href="tel:+31642502442" className="text-indigo-600 hover:underline">+31642502442</a>
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Klacht indienen</h2>
          <p className="mb-4">
            Als u van mening bent dat wij uw persoonsgegevens niet correct verwerken, heeft u het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens (AP).
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold mb-2">Autoriteit Persoonsgegevens</p>
            <p>Website: <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">www.autoriteitpersoonsgegevens.nl</a></p>
            <p>Telefoon: 088 - 1805 250</p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Wijzigingen in deze privacyverklaring</h2>
          <p>
            Wij behouden ons het recht voor om deze privacyverklaring te wijzigen. Wijzigingen worden op deze pagina gepubliceerd met vermelding van de datum van de laatste wijziging. Wij raden u aan deze privacyverklaring regelmatig te raadplegen om op de hoogte te blijven van hoe wij uw gegevens beschermen.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact</h2>
          <p className="mb-4">
            Voor vragen over deze privacyverklaring of over de verwerking van uw persoonsgegevens, kunt u contact met ons opnemen:
          </p>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <p className="font-semibold text-lg mb-3">Weekend Klussen</p>
            <p className="mb-2">E-mail: <a href="mailto:info@weekend-klussen.nl" className="text-indigo-600 hover:underline font-medium">info@weekend-klussen.nl</a></p>
            <p>Telefoon: <a href="tel:+31642502442" className="text-indigo-600 hover:underline font-medium">+31642502442</a></p>
          </div>
        </motion.section>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:underline"
        >
          ← Terug naar home
        </Link>
      </motion.div>
    </div>
  );
}
