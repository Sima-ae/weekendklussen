'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function AlgemeneVoorwaardenContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Algemene Voorwaarden</h1>
        <p className="text-sm text-gray-500 mb-6">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </motion.div>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Toepasselijkheid</h2>
          <p className="mb-4">
            Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en uitvoering van werkzaamheden door Weekend Klussen, tenzij schriftelijk anders is overeengekomen.
          </p>
          <p>
            Door het aanvragen van een offerte, het accepteren van een offerte of het aangaan van een overeenkomst met Weekend Klussen, aanvaardt de opdrachtgever deze algemene voorwaarden. Afwijkingen van deze voorwaarden zijn alleen geldig indien deze schriftelijk door Weekend Klussen zijn bevestigd.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Weekend Klussen:</strong> De vaklieden, bouwbedrijf of dienstverlener die de werkzaamheden uitvoert</li>
            <li><strong>Opdrachtgever:</strong> De natuurlijke persoon of rechtspersoon die Weekend Klussen opdracht geeft tot het uitvoeren van werkzaamheden</li>
            <li><strong>Overeenkomst:</strong> De overeenkomst tussen Weekend Klussen en de opdrachtgever betreffende de uitvoering van werkzaamheden</li>
            <li><strong>Werkzaamheden:</strong> Alle door Weekend Klussen uit te voeren werkzaamheden, waaronder maar niet beperkt tot: verbouwing, renovatie, aanbouw, uitbouw, badkamer verbouwen, keukenrenovatie, onderhoud en alle daaraan gerelateerde diensten</li>
            <li><strong>Offerte:</strong> Een schriftelijke of digitale prijsopgave voor de uit te voeren werkzaamheden</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Offertes en prijsopgaven</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1 Vrijblijvendheid</h3>
          <p className="mb-4">
            Alle offertes en prijsopgaven van Weekend Klussen zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld. Een offerte is geldig voor de periode zoals vermeld op de offerte, of bij afwezigheid daarvan, voor een periode van 30 dagen.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2 Inhoud offerte</h3>
          <p className="mb-4">
            Een offerte bevat een omschrijving van de werkzaamheden, de prijs, eventuele voorwaarden en de geldigheidsduur. Indien bepaalde aspecten niet in de offerte zijn opgenomen, behoudt Weekend Klussen zich het recht voor om hierover aanvullende afspraken te maken.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.3 Wijzigingen</h3>
          <p>
            Weekend Klussen behoudt zich het recht voor om offertes te wijzigen of in te trekken, ook na verzending, indien er omstandigheden zijn die een wijziging rechtvaardigen, zoals wijzigingen in materiaalprijzen, loonkosten of andere onvoorziene omstandigheden.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Totstandkoming overeenkomst</h2>
          <p className="mb-4">
            Een overeenkomst komt tot stand door:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Schriftelijke of digitale acceptatie van een offerte door de opdrachtgever</li>
            <li>Bevestiging van een opdracht door Weekend Klussen</li>
            <li>Het aangaan van een schriftelijke of mondelinge overeenkomst</li>
          </ul>
          <p>
            Indien de opdrachtgever de offerte accepteert, is hij verplicht de werkzaamheden te laten uitvoeren tegen de in de offerte vermelde voorwaarden en prijzen.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Prijzen en betaling</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.1 Prijzen</h3>
          <p className="mb-4">
            Alle prijzen zijn exclusief BTW, tenzij anders vermeld. Prijzen zijn gebaseerd op de op het moment van de offerte geldende tarieven voor materialen, arbeid en andere kosten. Wijzigingen in deze tarieven kunnen leiden tot prijswijzigingen.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.2 Betalingsvoorwaarden</h3>
          <p className="mb-4">
            Tenzij anders overeengekomen, gelden de volgende betalingsvoorwaarden:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Bij opdrachtbevestiging: 30% voorschot</li>
            <li>Tijdens de uitvoering: 40% bij 50% gereedheid</li>
            <li>Na oplevering: 30% restant binnen 14 dagen na factuurdatum</li>
          </ul>
          <p className="mb-4">
            Voor kleinere opdrachten kan worden afgeweken van deze voorwaarden. Betaling dient te geschieden binnen de op de factuur vermelde termijn.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.3 Laatbetaling</h3>
          <p className="mb-4">
            Bij niet-tijdige betaling is de opdrachtgever van rechtswege in verzuim. In dat geval is de opdrachtgever een rente verschuldigd van 1% per maand over het openstaande bedrag, waarbij een gedeelte van een maand voor een hele maand telt.
          </p>
          <p>
            Bovendien zijn alle buitengerechtelijke incassokosten verschuldigd, met een minimum van € 40,00. Weekend Klussen behoudt zich het recht voor om de uitvoering van werkzaamheden op te schorten of te beëindigen bij niet-betaling.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Uitvoering werkzaamheden</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.1 Uitvoering</h3>
          <p className="mb-4">
            Weekend Klussen voert de werkzaamheden uit volgens de geldende normen en voorschriften en met de zorg van een goed vaklieden. Weekend Klussen bepaalt de wijze van uitvoering, tenzij anders overeengekomen.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.2 Medewerking opdrachtgever</h3>
          <p className="mb-4">
            De opdrachtgever is verplicht alle medewerking te verlenen die voor een goede uitvoering van de werkzaamheden noodzakelijk is, waaronder:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Het tijdig verstrekken van alle benodigde informatie en documenten</li>
            <li>Het verlenen van toegang tot de locatie waar de werkzaamheden worden uitgevoerd</li>
            <li>Het treffen van voorzieningen voor water, elektriciteit en andere nutsvoorzieningen</li>
            <li>Het verwijderen van meubilair en andere zaken die de uitvoering belemmeren</li>
            <li>Het verkrijgen van benodigde vergunningen en ontheffingen</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.3 Wijzigingen en meerwerk</h3>
          <p className="mb-4">
            Wijzigingen in de opdracht of aanvullende werkzaamheden (meerwerk) dienen schriftelijk te worden overeengekomen. Voor meerwerk worden de daadwerkelijke kosten in rekening gebracht, tenzij anders overeengekomen.
          </p>
          <p>
            Indien wijzigingen of meerwerk leiden tot vertraging of extra kosten, worden deze aan de opdrachtgever doorberekend.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Levering en oplevering</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.1 Levertermijnen</h3>
          <p className="mb-4">
            Levertermijnen zijn indicatief en vormen geen essentiële verplichting, tenzij uitdrukkelijk anders overeengekomen. Vertraging geeft de opdrachtgever geen recht op schadevergoeding of ontbinding van de overeenkomst, tenzij de vertraging het gevolg is van opzet of grove schuld van Weekend Klussen.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.2 Oplevering</h3>
          <p className="mb-4">
            De werkzaamheden worden geacht te zijn opgeleverd wanneer:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>De werkzaamheden zijn voltooid volgens de overeenkomst</li>
            <li>De opdrachtgever heeft de werkzaamheden geaccepteerd</li>
            <li>De werkzaamheden in gebruik zijn genomen door de opdrachtgever</li>
          </ul>
          <p>
            Bij oplevering wordt een opleveringsprotocol opgesteld. Eventuele gebreken dienen binnen 14 dagen na oplevering schriftelijk te worden gemeld.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Garantie en aansprakelijkheid</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.1 Garantie</h3>
          <p className="mb-4">
            Weekend Klussen geeft garantie op de uitgevoerde werkzaamheden voor een periode van 24 maanden na oplevering, tenzij anders overeengekomen. Deze garantie dekt gebreken die het gevolg zijn van ondeugdelijk materiaal of onzorgvuldige uitvoering.
          </p>
          <p className="mb-4">
            De garantie geldt niet voor:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Normale slijtage</li>
            <li>Gebreken veroorzaakt door onjuist gebruik of onderhoud</li>
            <li>Gebreken veroorzaakt door wijzigingen of reparaties door derden</li>
            <li>Schade door overmacht of externe factoren</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.2 Aansprakelijkheid</h3>
          <p className="mb-4">
            Weekend Klussen is alleen aansprakelijk voor schade die direct en uitsluitend het gevolg is van een tekortkoming in de nakoming van de overeenkomst, voor zover deze schade het gevolg is van opzet of grove schuld van Weekend Klussen of haar ondergeschikten.
          </p>
          <p className="mb-4">
            De aansprakelijkheid van Weekend Klussen is beperkt tot het bedrag van de overeenkomst, of indien de schade het gevolg is van verzekerde risico's, tot het bedrag dat in het desbetreffende geval wordt uitgekeerd door de verzekering.
          </p>
          <p className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-4">
            <strong>Belangrijk:</strong> Weekend Klussen is niet aansprakelijk voor indirecte schade, gevolgschade, gederfde winst of gemiste besparingen.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Eigendom en retentierecht</h2>
          <p className="mb-4">
            Tot volledige betaling van alle vorderingen op de opdrachtgever, behoudt Weekend Klussen eigendom van alle geleverde materialen en uitgevoerde werkzaamheden. De opdrachtgever is niet bevoegd deze te verkopen, te verpanden of anderszins te vervreemden.
          </p>
          <p>
            Weekend Klussen heeft het recht om de uitgevoerde werkzaamheden en geleverde materialen terug te nemen indien de opdrachtgever niet tijdig betaalt, zonder dat dit de verplichting tot betaling opheft.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Opzegging en ontbinding</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">10.1 Opzegging door opdrachtgever</h3>
          <p className="mb-4">
            De opdrachtgever kan de overeenkomst alleen opzeggen indien Weekend Klussen daarmee schriftelijk instemt. Bij opzegging door de opdrachtgever zijn alle reeds gemaakte kosten en een redelijke vergoeding voor gederfde winst verschuldigd.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">10.2 Opzegging door Weekend Klussen</h3>
          <p className="mb-4">
            Weekend Klussen kan de overeenkomst ontbinden of de uitvoering opschorten indien:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>De opdrachtgever zijn betalingsverplichtingen niet nakomt</li>
            <li>De opdrachtgever zijn medewerkingsverplichtingen niet nakomt</li>
            <li>Er sprake is van omstandigheden die de uitvoering onmogelijk of onredelijk bezwaarlijk maken</li>
            <li>Er gegronde vrees bestaat voor wanbetaling</li>
          </ul>
          <p>
            In geval van ontbinding of opschorting zijn alle reeds gemaakte kosten en een redelijke vergoeding voor gederfde winst verschuldigd.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Overmacht</h2>
          <p className="mb-4">
            Weekend Klussen is niet gehouden tot nakoming van enige verplichting indien zij daartoe wordt verhinderd door een omstandigheid die niet aan haar te wijten is en noch krachtens de wet, noch krachtens de overeenkomst voor haar rekening komt.
          </p>
          <p className="mb-4">
            Onder overmacht wordt in ieder geval verstaan: oorlog, terrorisme, natuurrampen, brand, overstroming, stakingen, werkonderbrekingen, tekorten aan materialen, overheidsmaatregelen, uitval van nutsvoorzieningen en andere omstandigheden buiten de invloedssfeer van Weekend Klussen.
          </p>
          <p>
            Bij overmacht kan Weekend Klussen de uitvoering van de overeenkomst opschorten of ontbinden zonder verplichting tot schadevergoeding.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Intellectueel eigendom</h2>
          <p className="mb-4">
            Alle tekeningen, ontwerpen, berekeningen, bestekken en andere documenten die door Weekend Klussen zijn gemaakt, blijven eigendom van Weekend Klussen, ook indien kosten hiervoor aan de opdrachtgever zijn doorberekend.
          </p>
          <p>
            De opdrachtgever verkrijgt alleen gebruiksrecht voor het doel waarvoor deze documenten zijn gemaakt. Zonder schriftelijke toestemming van Weekend Klussen mogen deze documenten niet worden gekopieerd, gebruikt of aan derden worden verstrekt.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Geschillen en toepasselijk recht</h2>
          <p className="mb-4">
            Op alle overeenkomsten tussen Weekend Klussen en de opdrachtgever is Nederlands recht van toepassing.
          </p>
          <p className="mb-4">
            Geschillen zullen in eerste aanleg worden voorgelegd aan de bevoegde rechter in het arrondissement waar Weekend Klussen is gevestigd, tenzij partijen gezamenlijk besluiten tot bemiddeling of arbitrage.
          </p>
          <p>
            Voor consumenten blijft het recht bestaan om een geschil voor te leggen aan de rechter van hun woonplaats, of om gebruik te maken van het Europese Online Dispute Resolution platform.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Algemene bepalingen</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">14.1 Wijzigingen</h3>
          <p className="mb-4">
            Weekend Klussen behoudt zich het recht voor om deze algemene voorwaarden te wijzigen. Wijzigingen treden in werking na publicatie op de website. Voor lopende overeenkomsten blijven de oorspronkelijke voorwaarden van kracht, tenzij partijen anders overeenkomen.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">14.2 Deelbaarheid</h3>
          <p className="mb-4">
            Indien een bepaling in deze algemene voorwaarden nietig of vernietigbaar blijkt te zijn, blijven de overige bepalingen van kracht. De nietige of vernietigbare bepaling wordt vervangen door een bepaling die het dichtst bij de bedoeling van de oorspronkelijke bepaling komt.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">14.3 Schriftelijke bevestiging</h3>
          <p>
            Alle afspraken en wijzigingen dienen schriftelijk te worden bevestigd om geldig te zijn. E-mail wordt beschouwd als schriftelijke vorm.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="bg-white p-6 rounded-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact</h2>
          <p className="mb-4">
            Voor vragen over deze algemene voorwaarden of over onze diensten, kunt u contact met ons opnemen:
          </p>
          <div className="bg-brown-50 p-6 rounded-lg">
            <p className="font-semibold text-lg mb-3">Weekend Klussen</p>
            <p className="mb-2">E-mail: <a href="mailto:info@weekend-klussen.nl" className="text-brown-600 hover:underline font-medium">info@weekend-klussen.nl</a></p>
            <p>Telefoon: <a href="tel:+31103112884" className="text-brown-600 hover:underline font-medium">+31103112884</a></p>
            <p className="mt-4 text-sm text-gray-600">
              Werkgebied: Zuid-Holland (Rotterdam, Den Haag, Leiden, Dordrecht, Gouda, Delft en omgeving)
            </p>
          </div>
        </motion.section>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="mt-8"
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
