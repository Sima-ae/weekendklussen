import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Voegwerk Herstellen Vlaardingen | Weekend Klussen Voegwerk Herstellen Vlaardingen',
  description: 'Professioneel voegwerk herstellen in Vlaardingen. Voegwerk repareren en vervangen voor tegels, bakstenen en meer. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Vlaardingen',
  service: 'voegwerk herstellen',
  keywords: ['voegwerk herstellen Vlaardingen', 'voegwerk repareren Vlaardingen', 'voegwerk vervangen Vlaardingen', 'voegen herstellen Vlaardingen'],
});

export default function VoegwerkHerstellenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Vlaardingen"
        service="Voegwerk Herstellen"
        title="Voegwerk Herstellen Vlaardingen"
        description="Professioneel voegwerk herstellen in Vlaardingen. Weekend Klussen verzorgt voegwerk repareren en vervangen in Vlaardingen met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel voegwerk herstellen in Vlaardingen. Of u nu los, beschadigd of verweerd voegwerk heeft in uw tegels, bakstenen, of andere metselwerk - onze ervaren vakmannen herstellen uw voegwerk volledig in Vlaardingen. Wij verwijderen oud voegwerk en brengen nieuw, waterdicht voegwerk aan dat lang meegaat."
        serviceDetails={[
          'Voegwerk herstellen en repareren Vlaardingen',
          'Oud voegwerk verwijderen en voorbereiden',
          'Nieuw voegwerk aanbrengen (cement, epoxy, siliconen)',
          'Voegwerk herstellen voor tegels en tegelwerk',
          'Voegwerk herstellen voor bakstenen en metselwerk',
          'Voegwerk herstellen voor gevels en buitenmuren',
          'Voegwerk waterdicht maken',
          'Garantie op alle voegwerk werkzaamheden',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige voegmaterialen',
          'Garantie op alle voegwerk werkzaamheden',
          'Lokale kennis van Vlaardingen',
        ]}
      />
      <Footer />
    </main>
  );
}
