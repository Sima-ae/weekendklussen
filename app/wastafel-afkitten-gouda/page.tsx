import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Wastafel Afkitten Gouda | Weekend Klussen Wastafel Afkitten Gouda',
  description: 'Professioneel wastafel afkitten in Gouda. Oude kit verwijderen en nieuwe kit aanbrengen rondom wastafel. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Gouda',
  service: 'wastafel afkitten',
  keywords: ['wastafel afkitten Gouda', 'wastafel kit vervangen Gouda', 'wastafel afkitten service Gouda', 'wastafel kit verwijderen Gouda'],
});

export default function WastafelAfkittenGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Gouda"
        service="Wastafel Afkitten"
        title="Wastafel Afkitten Gouda"
        description="Professioneel wastafel afkitten in Gouda. Weekend Klussen verzorgt het verwijderen van oude kit en het aanbrengen van nieuwe kit rondom uw wastafel in Gouda met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel wastafel afkitten in Gouda. Of u nu oude, beschadigde of lekkende kit rondom uw wastafel heeft - onze ervaren vakmannen verwijderen de oude kit volledig en brengen nieuwe, waterdichte kit aan in Gouda. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Oude kit verwijderen rondom wastafel Gouda',
          'Nieuwe waterdichte kit aanbrengen',
          'Wastafel grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom wastafel',
          'Wastafel afkitten met hoogwaardige kit Gouda',
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
