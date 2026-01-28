import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Wastafel Kitten Vlaardingen | Weekend Klussen Wastafel Kitten Vlaardingen',
  description: 'Professioneel wastafel kitten in Vlaardingen. Nieuwe kit aanbrengen rondom wastafel voor waterdichte afdichting. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Vlaardingen',
  service: 'wastafel kitten',
  keywords: ['wastafel kitten Vlaardingen', 'wastafel kit aanbrengen Vlaardingen', 'wastafel kitten service Vlaardingen', 'wastafel afkitten Vlaardingen'],
});

export default function WastafelKittenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Vlaardingen"
        service="Wastafel Kitten"
        title="Wastafel Kitten Vlaardingen"
        description="Professioneel wastafel kitten in Vlaardingen. Weekend Klussen verzorgt het aanbrengen van nieuwe, waterdichte kit rondom uw wastafel in Vlaardingen met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel wastafel kitten in Vlaardingen. Of u nu een nieuwe wastafel heeft geplaatst, oude kit wilt vervangen, of een lekkage wilt voorkomen - onze ervaren vakmannen brengen nieuwe, waterdichte kit aan rondom uw wastafel in Vlaardingen. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Nieuwe waterdichte kit aanbrengen rondom wastafel Vlaardingen',
          'Oude kit verwijderen en voorbereiden',
          'Wastafel grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom wastafel',
          'Wastafel kitten met hoogwaardige kit Vlaardingen',
          'Preventief onderhoud en inspectie',
          'Garantie op alle kit werkzaamheden',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige, waterdichte kit',
          'Garantie op alle kit werkzaamheden',
          'Lokale kennis van Vlaardingen',
        ]}
      />
      <Footer />
    </main>
  );
}
