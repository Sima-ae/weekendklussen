import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Toilet Afkitten Dordrecht | Weekend Klussen Toilet Afkitten Dordrecht',
  description: 'Professioneel toilet afkitten in Dordrecht. Oude kit verwijderen en nieuwe kit aanbrengen rondom toilet. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Dordrecht',
  service: 'toilet afkitten',
  keywords: ['toilet afkitten Dordrecht', 'toilet kit vervangen Dordrecht', 'toilet afkitten service Dordrecht', 'toilet kit verwijderen Dordrecht'],
});

export default function ToiletAfkittenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Dordrecht"
        service="Toilet Afkitten"
        title="Toilet Afkitten Dordrecht"
        description="Professioneel toilet afkitten in Dordrecht. Weekend Klussen verzorgt het verwijderen van oude kit en het aanbrengen van nieuwe kit rondom uw toilet in Dordrecht met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel toilet afkitten in Dordrecht. Of u nu oude, beschadigde of lekkende kit rondom uw toilet heeft - onze ervaren vakmannen verwijderen de oude kit volledig en brengen nieuwe, waterdichte kit aan in Dordrecht. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Oude kit verwijderen rondom toilet Dordrecht',
          'Nieuwe waterdichte kit aanbrengen',
          'Toilet grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom toilet',
          'Toilet afkitten met hoogwaardige kit Dordrecht',
          'Preventief onderhoud en inspectie',
          'Garantie op alle kit werkzaamheden',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Gouda', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige, waterdichte kit',
          'Garantie op alle kit werkzaamheden',
          'Lokale kennis van Dordrecht',
        ]}
      />
      <Footer />
    </main>
  );
}
