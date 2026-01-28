import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Toilet Afkitten Leiden | Weekend Klussen Toilet Afkitten Leiden',
  description: 'Professioneel toilet afkitten in Leiden. Oude kit verwijderen en nieuwe kit aanbrengen rondom toilet. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Leiden',
  service: 'toilet afkitten',
  keywords: ['toilet afkitten Leiden', 'toilet kit vervangen Leiden', 'toilet afkitten service Leiden', 'toilet kit verwijderen Leiden'],
});

export default function ToiletAfkittenLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Leiden"
        service="Toilet Afkitten"
        title="Toilet Afkitten Leiden"
        description="Professioneel toilet afkitten in Leiden. Weekend Klussen verzorgt het verwijderen van oude kit en het aanbrengen van nieuwe kit rondom uw toilet in Leiden met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel toilet afkitten in Leiden. Of u nu oude, beschadigde of lekkende kit rondom uw toilet heeft - onze ervaren vakmannen verwijderen de oude kit volledig en brengen nieuwe, waterdichte kit aan in Leiden. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Oude kit verwijderen rondom toilet Leiden',
          'Nieuwe waterdichte kit aanbrengen',
          'Toilet grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom toilet',
          'Toilet afkitten met hoogwaardige kit Leiden',
          'Preventief onderhoud en inspectie',
          'Garantie op alle kit werkzaamheden',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn', 'Katwijk']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige, waterdichte kit',
          'Garantie op alle kit werkzaamheden',
          'Lokale kennis van Leiden',
        ]}
      />
      <Footer />
    </main>
  );
}
