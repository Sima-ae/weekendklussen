import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Wastafel Kitten Maassluis | Weekend Klussen Wastafel Kitten Maassluis',
  description: 'Professioneel wastafel kitten in Maassluis. Nieuwe kit aanbrengen rondom wastafel voor waterdichte afdichting. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Maassluis',
  service: 'wastafel kitten',
  keywords: ['wastafel kitten Maassluis', 'wastafel kit aanbrengen Maassluis', 'wastafel kitten service Maassluis', 'wastafel afkitten Maassluis'],
});

export default function WastafelKittenMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Maassluis"
        service="Wastafel Kitten"
        title="Wastafel Kitten Maassluis"
        description="Professioneel wastafel kitten in Maassluis. Weekend Klussen verzorgt het aanbrengen van nieuwe, waterdichte kit rondom uw wastafel in Maassluis met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel wastafel kitten in Maassluis. Of u nu een nieuwe wastafel heeft geplaatst, oude kit wilt vervangen, of een lekkage wilt voorkomen - onze ervaren vakmannen brengen nieuwe, waterdichte kit aan rondom uw wastafel in Maassluis. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Nieuwe waterdichte kit aanbrengen rondom wastafel Maassluis',
          'Oude kit verwijderen en voorbereiden',
          'Wastafel grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom wastafel',
          'Wastafel kitten met hoogwaardige kit Maassluis',
          'Preventief onderhoud en inspectie',
          'Garantie op alle kit werkzaamheden',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige, waterdichte kit',
          'Garantie op alle kit werkzaamheden',
          'Lokale kennis van Maassluis',
        ]}
      />
      <Footer />
    </main>
  );
}
