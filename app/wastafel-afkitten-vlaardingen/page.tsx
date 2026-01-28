import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Wastafel Afkitten Vlaardingen | Weekend Klussen Wastafel Afkitten Vlaardingen',
  description: 'Professioneel wastafel afkitten in Vlaardingen. Oude kit verwijderen en nieuwe kit aanbrengen rondom wastafel. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Vlaardingen',
  service: 'wastafel afkitten',
  keywords: ['wastafel afkitten Vlaardingen', 'wastafel kit vervangen Vlaardingen', 'wastafel afkitten service Vlaardingen', 'wastafel kit verwijderen Vlaardingen'],
});

export default function WastafelAfkittenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Vlaardingen"
        service="Wastafel Afkitten"
        title="Wastafel Afkitten Vlaardingen"
        description="Professioneel wastafel afkitten in Vlaardingen. Weekend Klussen verzorgt het verwijderen van oude kit en het aanbrengen van nieuwe kit rondom uw wastafel in Vlaardingen met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel wastafel afkitten in Vlaardingen. Of u nu oude, beschadigde of lekkende kit rondom uw wastafel heeft - onze ervaren vakmannen verwijderen de oude kit volledig en brengen nieuwe, waterdichte kit aan in Vlaardingen. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Oude kit verwijderen rondom wastafel Vlaardingen',
          'Nieuwe waterdichte kit aanbrengen',
          'Wastafel grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom wastafel',
          'Wastafel afkitten met hoogwaardige kit Vlaardingen',
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
