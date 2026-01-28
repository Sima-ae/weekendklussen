import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Voegwerk Herstellen Leiden | Weekend Klussen Voegwerk Herstellen Leiden',
  description: 'Professioneel voegwerk herstellen in Leiden. Voegwerk repareren en vervangen voor tegels, bakstenen en meer. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Leiden',
  service: 'voegwerk herstellen',
  keywords: ['voegwerk herstellen Leiden', 'voegwerk repareren Leiden', 'voegwerk vervangen Leiden', 'voegen herstellen Leiden'],
});

export default function VoegwerkHerstellenLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Leiden"
        service="Voegwerk Herstellen"
        title="Voegwerk Herstellen Leiden"
        description="Professioneel voegwerk herstellen in Leiden. Weekend Klussen verzorgt voegwerk repareren en vervangen in Leiden met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel voegwerk herstellen in Leiden. Of u nu los, beschadigd of verweerd voegwerk heeft in uw tegels, bakstenen, of andere metselwerk - onze ervaren vakmannen herstellen uw voegwerk volledig in Leiden. Wij verwijderen oud voegwerk en brengen nieuw, waterdicht voegwerk aan dat lang meegaat."
        serviceDetails={[
          'Voegwerk herstellen en repareren Leiden',
          'Oud voegwerk verwijderen en voorbereiden',
          'Nieuw voegwerk aanbrengen (cement, epoxy, siliconen)',
          'Voegwerk herstellen voor tegels en tegelwerk',
          'Voegwerk herstellen voor bakstenen en metselwerk',
          'Voegwerk herstellen voor gevels en buitenmuren',
          'Voegwerk waterdicht maken',
          'Garantie op alle voegwerk werkzaamheden',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn', 'Katwijk']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige voegmaterialen',
          'Garantie op alle voegwerk werkzaamheden',
          'Lokale kennis van Leiden',
        ]}
      />
      <Footer />
    </main>
  );
}
