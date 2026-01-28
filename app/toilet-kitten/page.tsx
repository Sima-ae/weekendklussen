import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Toilet Kitten | Weekend Klussen Toilet Kitten Service',
  description: 'Professioneel toilet kitten in Zuid-Holland. Nieuwe kit aanbrengen rondom toilet voor waterdichte afdichting. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  service: 'toilet kitten',
  keywords: ['toilet kitten', 'toilet kit aanbrengen', 'toilet kitten service', 'toilet afkitten', 'toilet kit plaatsen'],
});

export default function ToiletKittenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zuid-Holland"
        service="Toilet Kitten"
        title="Toilet Kitten"
        description="Professioneel toilet kitten en kit aanbrengen. Weekend Klussen verzorgt het aanbrengen van nieuwe, waterdichte kit rondom uw toilet met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel toilet kitten in heel Zuid-Holland. Of u nu een nieuw toilet heeft geplaatst, oude kit wilt vervangen, of een lekkage wilt voorkomen - onze ervaren vakmannen brengen nieuwe, waterdichte kit aan rondom uw toilet. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Nieuwe waterdichte kit aanbrengen rondom toilet',
          'Oude kit verwijderen en voorbereiden',
          'Toilet grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom toilet',
          'Toilet kitten met hoogwaardige kit',
          'Preventief onderhoud en inspectie',
          'Garantie op alle kit werkzaamheden',
        ]}
        nearbyCities={['Rotterdam', 'Den Haag', 'Delft', 'Leiden', 'Dordrecht', 'Gouda', 'Zoetermeer']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige, waterdichte kit',
          'Garantie op alle kit werkzaamheden',
          'Lokale service in heel Zuid-Holland',
        ]}
      />
      <Footer />
    </main>
  );
}
