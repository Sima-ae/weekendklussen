import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Wastafel Kitten Zoetermeer | Weekend Klussen Wastafel Kitten Zoetermeer',
  description: 'Professioneel wastafel kitten in Zoetermeer. Nieuwe kit aanbrengen rondom wastafel voor waterdichte afdichting. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Zoetermeer',
  service: 'wastafel kitten',
  keywords: ['wastafel kitten Zoetermeer', 'wastafel kit aanbrengen Zoetermeer', 'wastafel kitten service Zoetermeer', 'wastafel afkitten Zoetermeer'],
});

export default function WastafelKittenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zoetermeer"
        service="Wastafel Kitten"
        title="Wastafel Kitten Zoetermeer"
        description="Professioneel wastafel kitten in Zoetermeer. Weekend Klussen verzorgt het aanbrengen van nieuwe, waterdichte kit rondom uw wastafel in Zoetermeer met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel wastafel kitten in Zoetermeer. Of u nu een nieuwe wastafel heeft geplaatst, oude kit wilt vervangen, of een lekkage wilt voorkomen - onze ervaren vakmannen brengen nieuwe, waterdichte kit aan rondom uw wastafel in Zoetermeer. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Nieuwe waterdichte kit aanbrengen rondom wastafel Zoetermeer',
          'Oude kit verwijderen en voorbereiden',
          'Wastafel grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom wastafel',
          'Wastafel kitten met hoogwaardige kit Zoetermeer',
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
