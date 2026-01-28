import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Toilet Kitten Den Haag | Weekend Klussen Toilet Kitten Den Haag',
  description: 'Professioneel toilet kitten in Den Haag. Nieuwe kit aanbrengen rondom toilet voor waterdichte afdichting. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Den Haag',
  service: 'toilet kitten',
  keywords: ['toilet kitten Den Haag', 'toilet kit aanbrengen Den Haag', 'toilet kitten service Den Haag', 'toilet afkitten Den Haag'],
});

export default function ToiletKittenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Den Haag"
        service="Toilet Kitten"
        title="Toilet Kitten Den Haag"
        description="Professioneel toilet kitten in Den Haag. Weekend Klussen verzorgt het aanbrengen van nieuwe, waterdichte kit rondom uw toilet in Den Haag met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel toilet kitten in Den Haag. Of u nu een nieuw toilet heeft geplaatst, oude kit wilt vervangen, of een lekkage wilt voorkomen - onze ervaren vakmannen brengen nieuwe, waterdichte kit aan rondom uw toilet in Den Haag. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Nieuwe waterdichte kit aanbrengen rondom toilet Den Haag',
          'Oude kit verwijderen en voorbereiden',
          'Toilet grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom toilet',
          'Toilet kitten met hoogwaardige kit Den Haag',
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
