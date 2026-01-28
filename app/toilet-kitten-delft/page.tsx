import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Toilet Kitten Delft | Weekend Klussen Toilet Kitten Delft',
  description: 'Professioneel toilet kitten in Delft. Nieuwe kit aanbrengen rondom toilet voor waterdichte afdichting. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Delft',
  service: 'toilet kitten',
  keywords: ['toilet kitten Delft', 'toilet kit aanbrengen Delft', 'toilet kitten service Delft', 'toilet afkitten Delft'],
});

export default function ToiletKittenDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Delft"
        service="Toilet Kitten"
        title="Toilet Kitten Delft"
        description="Professioneel toilet kitten in Delft. Weekend Klussen verzorgt het aanbrengen van nieuwe, waterdichte kit rondom uw toilet in Delft met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel toilet kitten in Delft. Of u nu een nieuw toilet heeft geplaatst, oude kit wilt vervangen, of een lekkage wilt voorkomen - onze ervaren vakmannen brengen nieuwe, waterdichte kit aan rondom uw toilet in Delft. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Nieuwe waterdichte kit aanbrengen rondom toilet Delft',
          'Oude kit verwijderen en voorbereiden',
          'Toilet grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom toilet',
          'Toilet kitten met hoogwaardige kit Delft',
          'Preventief onderhoud en inspectie',
          'Garantie op alle kit werkzaamheden',
        ]}
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer', 'Leiden']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige, waterdichte kit',
          'Garantie op alle kit werkzaamheden',
          'Lokale kennis van Delft',
        ]}
      />
      <Footer />
    </main>
  );
}
