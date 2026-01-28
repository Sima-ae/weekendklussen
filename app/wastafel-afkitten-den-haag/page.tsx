import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Wastafel Afkitten Den Haag | Weekend Klussen Wastafel Afkitten Den Haag',
  description: 'Professioneel wastafel afkitten in Den Haag. Oude kit verwijderen en nieuwe kit aanbrengen rondom wastafel. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Den Haag',
  service: 'wastafel afkitten',
  keywords: ['wastafel afkitten Den Haag', 'wastafel kit vervangen Den Haag', 'wastafel afkitten service Den Haag', 'wastafel kit verwijderen Den Haag'],
});

export default function WastafelAfkittenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Den Haag"
        service="Wastafel Afkitten"
        title="Wastafel Afkitten Den Haag"
        description="Professioneel wastafel afkitten in Den Haag. Weekend Klussen verzorgt het verwijderen van oude kit en het aanbrengen van nieuwe kit rondom uw wastafel in Den Haag met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel wastafel afkitten in Den Haag. Of u nu oude, beschadigde of lekkende kit rondom uw wastafel heeft - onze ervaren vakmannen verwijderen de oude kit volledig en brengen nieuwe, waterdichte kit aan in Den Haag. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Oude kit verwijderen rondom wastafel Den Haag',
          'Nieuwe waterdichte kit aanbrengen',
          'Wastafel grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom wastafel',
          'Wastafel afkitten met hoogwaardige kit Den Haag',
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
