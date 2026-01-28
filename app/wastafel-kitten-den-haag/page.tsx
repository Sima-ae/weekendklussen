import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Wastafel Kitten Den Haag | Weekend Klussen Wastafel Kitten Den Haag',
  description: 'Professioneel wastafel kitten in Den Haag. Nieuwe kit aanbrengen rondom wastafel voor waterdichte afdichting. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Den Haag',
  service: 'wastafel kitten',
  keywords: ['wastafel kitten Den Haag', 'wastafel kit aanbrengen Den Haag', 'wastafel kitten service Den Haag', 'wastafel afkitten Den Haag'],
});

export default function WastafelKittenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Den Haag"
        service="Wastafel Kitten"
        title="Wastafel Kitten Den Haag"
        description="Professioneel wastafel kitten in Den Haag. Weekend Klussen verzorgt het aanbrengen van nieuwe, waterdichte kit rondom uw wastafel in Den Haag met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel wastafel kitten in Den Haag. Of u nu een nieuwe wastafel heeft geplaatst, oude kit wilt vervangen, of een lekkage wilt voorkomen - onze ervaren vakmannen brengen nieuwe, waterdichte kit aan rondom uw wastafel in Den Haag. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Nieuwe waterdichte kit aanbrengen rondom wastafel Den Haag',
          'Oude kit verwijderen en voorbereiden',
          'Wastafel grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom wastafel',
          'Wastafel kitten met hoogwaardige kit Den Haag',
          'Preventief onderhoud en inspectie',
          'Garantie op alle kit werkzaamheden',
        ]}
        nearbyCities={['Delft', 'Rijswijk', 'Rotterdam', 'Zoetermeer', 'Leiden', 'Voorburg']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige, waterdichte kit',
          'Garantie op alle kit werkzaamheden',
          'Lokale kennis van Den Haag',
        ]}
      />
      <Footer />
    </main>
  );
}
