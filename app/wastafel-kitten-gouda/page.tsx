import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Wastafel Kitten Gouda | Weekend Klussen Wastafel Kitten Gouda',
  description: 'Professioneel wastafel kitten in Gouda. Nieuwe kit aanbrengen rondom wastafel voor waterdichte afdichting. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Gouda',
  service: 'wastafel kitten',
  keywords: ['wastafel kitten Gouda', 'wastafel kit aanbrengen Gouda', 'wastafel kitten service Gouda', 'wastafel afkitten Gouda'],
});

export default function WastafelKittenGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Gouda"
        service="Wastafel Kitten"
        title="Wastafel Kitten Gouda"
        description="Professioneel wastafel kitten in Gouda. Weekend Klussen verzorgt het aanbrengen van nieuwe, waterdichte kit rondom uw wastafel in Gouda met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel wastafel kitten in Gouda. Of u nu een nieuwe wastafel heeft geplaatst, oude kit wilt vervangen, of een lekkage wilt voorkomen - onze ervaren vakmannen brengen nieuwe, waterdichte kit aan rondom uw wastafel in Gouda. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Nieuwe waterdichte kit aanbrengen rondom wastafel Gouda',
          'Oude kit verwijderen en voorbereiden',
          'Wastafel grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom wastafel',
          'Wastafel kitten met hoogwaardige kit Gouda',
          'Preventief onderhoud en inspectie',
          'Garantie op alle kit werkzaamheden',
        ]}
        nearbyCities={['Rotterdam', 'Dordrecht', 'Leiden', 'Zoetermeer', 'Utrecht', 'Woerden']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige, waterdichte kit',
          'Garantie op alle kit werkzaamheden',
          'Lokale kennis van Gouda',
        ]}
      />
      <Footer />
    </main>
  );
}
