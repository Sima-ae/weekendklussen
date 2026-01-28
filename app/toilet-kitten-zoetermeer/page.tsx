import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Toilet Kitten Zoetermeer | Weekend Klussen Toilet Kitten Zoetermeer',
  description: 'Professioneel toilet kitten in Zoetermeer. Nieuwe kit aanbrengen rondom toilet voor waterdichte afdichting. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Zoetermeer',
  service: 'toilet kitten',
  keywords: ['toilet kitten Zoetermeer', 'toilet kit aanbrengen Zoetermeer', 'toilet kitten service Zoetermeer', 'toilet afkitten Zoetermeer'],
});

export default function ToiletKittenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zoetermeer"
        service="Toilet Kitten"
        title="Toilet Kitten Zoetermeer"
        description="Professioneel toilet kitten in Zoetermeer. Weekend Klussen verzorgt het aanbrengen van nieuwe, waterdichte kit rondom uw toilet in Zoetermeer met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel toilet kitten in Zoetermeer. Of u nu een nieuw toilet heeft geplaatst, oude kit wilt vervangen, of een lekkage wilt voorkomen - onze ervaren vakmannen brengen nieuwe, waterdichte kit aan rondom uw toilet in Zoetermeer. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Nieuwe waterdichte kit aanbrengen rondom toilet Zoetermeer',
          'Oude kit verwijderen en voorbereiden',
          'Toilet grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom toilet',
          'Toilet kitten met hoogwaardige kit Zoetermeer',
          'Preventief onderhoud en inspectie',
          'Garantie op alle kit werkzaamheden',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Rijswijk']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige, waterdichte kit',
          'Garantie op alle kit werkzaamheden',
          'Lokale kennis van Zoetermeer',
        ]}
      />
      <Footer />
    </main>
  );
}
