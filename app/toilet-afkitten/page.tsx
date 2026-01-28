import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Toilet Afkitten | Weekend Klussen Toilet Afkitten Service',
  description: 'Professioneel toilet afkitten in Zuid-Holland. Oude kit verwijderen en nieuwe kit aanbrengen rondom toilet. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  service: 'toilet afkitten',
  keywords: ['toilet afkitten', 'toilet kit vervangen', 'toilet afkitten service', 'toilet kit verwijderen', 'toilet kitten'],
});

export default function ToiletAfkittenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zuid-Holland"
        service="Toilet Afkitten"
        title="Toilet Afkitten"
        description="Professioneel toilet afkitten en kit vervangen. Weekend Klussen verzorgt het verwijderen van oude kit en het aanbrengen van nieuwe kit rondom uw toilet met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel toilet afkitten in heel Zuid-Holland. Of u nu oude, beschadigde of lekkende kit rondom uw toilet heeft - onze ervaren vakmannen verwijderen de oude kit volledig en brengen nieuwe, waterdichte kit aan. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Oude kit verwijderen rondom toilet',
          'Nieuwe waterdichte kit aanbrengen',
          'Toilet grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom toilet',
          'Toilet afkitten met hoogwaardige kit',
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
