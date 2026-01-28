import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Voegwerk Herstellen Delft | Weekend Klussen Voegwerk Herstellen Delft',
  description: 'Professioneel voegwerk herstellen in Delft. Voegwerk repareren en vervangen voor tegels, bakstenen en meer. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Delft',
  service: 'voegwerk herstellen',
  keywords: ['voegwerk herstellen Delft', 'voegwerk repareren Delft', 'voegwerk vervangen Delft', 'voegen herstellen Delft'],
});

export default function VoegwerkHerstellenDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Delft"
        service="Voegwerk Herstellen"
        title="Voegwerk Herstellen Delft"
        description="Professioneel voegwerk herstellen in Delft. Weekend Klussen verzorgt voegwerk repareren en vervangen in Delft met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel voegwerk herstellen in Delft. Of u nu los, beschadigd of verweerd voegwerk heeft in uw tegels, bakstenen, of andere metselwerk - onze ervaren vakmannen herstellen uw voegwerk volledig in Delft. Wij verwijderen oud voegwerk en brengen nieuw, waterdicht voegwerk aan dat lang meegaat."
        serviceDetails={[
          'Voegwerk herstellen en repareren Delft',
          'Oud voegwerk verwijderen en voorbereiden',
          'Nieuw voegwerk aanbrengen (cement, epoxy, siliconen)',
          'Voegwerk herstellen voor tegels en tegelwerk',
          'Voegwerk herstellen voor bakstenen en metselwerk',
          'Voegwerk herstellen voor gevels en buitenmuren',
          'Voegwerk waterdicht maken',
          'Garantie op alle voegwerk werkzaamheden',
        ]}
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer', 'Leiden']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige voegmaterialen',
          'Garantie op alle voegwerk werkzaamheden',
          'Lokale kennis van Delft',
        ]}
      />
      <Footer />
    </main>
  );
}
