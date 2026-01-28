import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Toilet Afkitten Delft | Weekend Klussen Toilet Afkitten Delft',
  description: 'Professioneel toilet afkitten in Delft. Oude kit verwijderen en nieuwe kit aanbrengen rondom toilet. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Delft',
  service: 'toilet afkitten',
  keywords: ['toilet afkitten Delft', 'toilet kit vervangen Delft', 'toilet afkitten service Delft', 'toilet kit verwijderen Delft'],
});

export default function ToiletAfkittenDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Delft"
        service="Toilet Afkitten"
        title="Toilet Afkitten Delft"
        description="Professioneel toilet afkitten in Delft. Weekend Klussen verzorgt het verwijderen van oude kit en het aanbrengen van nieuwe kit rondom uw toilet in Delft met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel toilet afkitten in Delft. Of u nu oude, beschadigde of lekkende kit rondom uw toilet heeft - onze ervaren vakmannen verwijderen de oude kit volledig en brengen nieuwe, waterdichte kit aan in Delft. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Oude kit verwijderen rondom toilet Delft',
          'Nieuwe waterdichte kit aanbrengen',
          'Toilet grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom toilet',
          'Toilet afkitten met hoogwaardige kit Delft',
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
