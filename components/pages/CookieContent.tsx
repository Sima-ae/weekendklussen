'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function CookieContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Cookiebeleid</h1>
        <p className="text-sm text-gray-500 mb-6">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </motion.div>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Wat zijn cookies?</h2>
          <p className="mb-4">
            Cookies zijn kleine tekstbestanden die op uw computer, tablet of smartphone worden geplaatst wanneer u een website bezoekt. Cookies bevatten informatie die door de website kan worden gelezen wanneer u de website opnieuw bezoekt.
          </p>
          <p>
            Weekend Klussen gebruikt cookies om de functionaliteit van onze website te verbeteren, uw gebruikerservaring te optimaliseren en om te begrijpen hoe bezoekers onze website gebruiken.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Soorten cookies die wij gebruiken</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.1 Functionele cookies (noodzakelijk)</h3>
          <p className="mb-4">
            Deze cookies zijn noodzakelijk voor het functioneren van de website en kunnen niet worden uitgeschakeld. Zij worden meestal alleen ingesteld als reactie op acties die u uitvoert, zoals het instellen van uw privacyvoorkeuren, inloggen of het invullen van formulieren.
          </p>
          <div className="bg-indigo-50 p-4 rounded-lg mb-4">
            <p className="font-semibold mb-2">Voorbeelden:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Sessiebeheer en beveiliging</li>
              <li>Onthouden van uw voorkeuren</li>
              <li>Functionaliteit van formulieren</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Analytische cookies</h3>
          <p className="mb-4">
            Deze cookies helpen ons te begrijpen hoe bezoekers onze website gebruiken door informatie te verzamelen over het aantal bezoekers, welke pagina's het meest worden bezocht en hoe lang bezoekers op de website blijven. Deze informatie wordt gebruikt om onze website te verbeteren.
          </p>
          <div className="bg-indigo-50 p-4 rounded-lg mb-4">
            <p className="font-semibold mb-2">Doel:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Website-analyse en statistieken</li>
              <li>Verbetering van gebruikerservaring</li>
              <li>Optimalisatie van websitefunctionaliteit</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.3 Prestatie cookies</h3>
          <p className="mb-4">
            Deze cookies verzamelen informatie over hoe u onze website gebruikt, zoals welke pagina's u bezoekt en of u foutmeldingen krijgt. Deze cookies helpen ons de prestaties van de website te verbeteren.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.4 Externe content cookies</h3>
          <p className="mb-4">
            Onze website gebruikt externe content voor 3D-visualisaties en andere functionaliteiten. Deze kunnen cookies plaatsen van externe diensten zoals:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>raw.githack.com / raw.githubusercontent.com:</strong> Voor het laden van HDR-bestanden voor 3D-omgevingen</li>
            <li>Andere externe diensten die nodig zijn voor de functionaliteit van onze website</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Doeleinden van cookies</h2>
          <p className="mb-4">Wij gebruiken cookies voor de volgende doeleinden:</p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">3.1 Essentiële functionaliteit</h3>
              <p className="text-sm">Zorgen dat de website correct functioneert en dat u gebruik kunt maken van alle functionaliteiten.</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">3.2 Gebruikerservaring</h3>
              <p className="text-sm">Onthouden van uw voorkeuren en instellingen om uw bezoek aan onze website te vergemakkelijken.</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">3.3 Website-analyse</h3>
              <p className="text-sm">Begrijpen hoe bezoekers onze website gebruiken om de inhoud en functionaliteit te verbeteren.</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">3.4 Prestatie-optimalisatie</h3>
              <p className="text-sm">Verbeteren van de snelheid en prestaties van de website.</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Bewaartermijn van cookies</h2>
          <p className="mb-4">
            De bewaartermijn van cookies varieert afhankelijk van het type cookie:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Sessiecookies:</strong> Deze worden automatisch verwijderd wanneer u uw browser sluit</li>
            <li><strong>Persistente cookies:</strong> Deze blijven op uw apparaat staan voor een bepaalde periode (maximaal 2 jaar) of totdat u ze handmatig verwijdert</li>
            <li><strong>Functionele cookies:</strong> Deze kunnen langer blijven staan om uw voorkeuren te onthouden</li>
          </ul>

          <p className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-4">
            <strong>Let op:</strong> De exacte bewaartermijn kan per cookie verschillen. U kunt altijd uw cookies beheren via uw browserinstellingen.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies beheren en verwijderen</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.1 Via uw browser</h3>
          <p className="mb-4">
            U kunt cookies op elk moment beheren, uitschakelen of verwijderen via de instellingen van uw browser. De manier waarop u dit doet, verschilt per browser:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><strong>Chrome:</strong> Instellingen → Privacy en beveiliging → Cookies en andere sitegegevens</li>
              <li><strong>Firefox:</strong> Opties → Privacy & Beveiliging → Cookies en sitegegevens</li>
              <li><strong>Safari:</strong> Voorkeuren → Privacy → Cookies en websitegegevens</li>
              <li><strong>Edge:</strong> Instellingen → Cookies en sitemachtigingen → Cookies en sitegegevens</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.2 Gevolgen van uitschakelen</h3>
          <p className="mb-4">
            Houd er rekening mee dat het uitschakelen of verwijderen van cookies gevolgen kan hebben voor de functionaliteit van onze website:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sommige functionaliteiten kunnen niet meer werken</li>
            <li>Uw voorkeuren worden niet meer onthouden</li>
            <li>U moet mogelijk opnieuw informatie invoeren</li>
            <li>3D-visualisaties en andere geavanceerde functies kunnen niet correct werken</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies van derden</h2>
          <p className="mb-4">
            Onze website kan cookies van derden gebruiken voor specifieke functionaliteiten. Deze cookies worden geplaatst door externe diensten die wij gebruiken:
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
            <p className="font-semibold mb-2">Externe diensten:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>raw.githack.com / raw.githubusercontent.com:</strong> Voor het laden van HDR-bestanden voor 3D-omgevingen in onze interactieve visualisaties</li>
              <li>Andere technische diensten die nodig zijn voor de werking van de website</li>
            </ul>
          </div>

          <p className="mb-4">
            Deze externe diensten kunnen hun eigen cookies plaatsen. Wij hebben geen controle over deze cookies en raden u aan het cookiebeleid van deze diensten te raadplegen.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Toestemming voor cookies</h2>
          <p className="mb-4">
            Voor niet-noodzakelijke cookies vragen wij uw toestemming voordat deze worden geplaatst. Functionele cookies die noodzakelijk zijn voor het functioneren van de website, worden geplaatst zonder uw toestemming.
          </p>
          
          <div className="bg-indigo-50 p-4 rounded-lg mb-4">
            <p className="font-semibold mb-2">Uw rechten:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>U kunt uw toestemming voor cookies op elk moment intrekken</li>
              <li>U kunt cookies via uw browserinstellingen beheren</li>
              <li>U kunt specifieke cookies verwijderen of blokkeren</li>
            </ul>
          </div>

          <p>
            Door gebruik te blijven maken van onze website na het zien van onze cookiebanner of door cookies in te schakelen in uw browserinstellingen, gaat u akkoord met het gebruik van cookies zoals beschreven in dit cookiebeleid.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies en persoonsgegevens</h2>
          <p className="mb-4">
            Sommige cookies kunnen persoonsgegevens bevatten of verzamelen. In dat geval is ons{' '}
            <Link href="/privacy" className="text-indigo-600 hover:underline font-medium">
              privacybeleid
            </Link>{' '}
            van toepassing op de verwerking van deze gegevens.
          </p>
          <p>
            Wij verwerken persoonsgegevens die via cookies worden verzameld in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR) en onze privacyverklaring.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Wijzigingen in dit cookiebeleid</h2>
          <p className="mb-4">
            Weekend Klussen behoudt zich het recht voor om dit cookiebeleid te wijzigen. Wijzigingen worden op deze pagina gepubliceerd met vermelding van de datum van de laatste wijziging.
          </p>
          <p>
            Wij raden u aan dit cookiebeleid regelmatig te raadplegen om op de hoogte te blijven van hoe wij cookies gebruiken. Door gebruik te blijven maken van onze website na wijzigingen, gaat u akkoord met het bijgewerkte cookiebeleid.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Meer informatie</h2>
          <p className="mb-4">
            Voor meer informatie over cookies en hoe u deze kunt beheren, kunt u de volgende websites raadplegen:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.autoriteitpersoonsgegevens.nl" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-600 hover:underline"
                >
                  Autoriteit Persoonsgegevens (AP)
                </a> - Informatie over privacy en gegevensbescherming
              </li>
              <li>
                <a 
                  href="https://www.allaboutcookies.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-600 hover:underline"
                >
                  All About Cookies
                </a> - Algemene informatie over cookies
              </li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact</h2>
          <p className="mb-4">
            Voor vragen over dit cookiebeleid of over het gebruik van cookies op onze website, kunt u contact met ons opnemen:
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
        transition={{ duration: 0.5, delay: 1.2 }}
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
