import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Voegwerk Herstellen Rotterdam | Weekend Klussen Voegwerk Herstellen Rotterdam',
  description: 'Professioneel voegwerk herstellen in Rotterdam. Voegwerk repareren en vervangen voor tegels, bakstenen en meer. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Rotterdam',
  service: 'voegwerk herstellen',
  keywords: ['voegwerk herstellen Rotterdam', 'voegwerk repareren Rotterdam', 'voegwerk vervangen Rotterdam', 'voegen herstellen Rotterdam'],
});

export default function VoegwerkHerstellenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Rotterdam"
        service="Voegwerk Herstellen"
        title="Voegwerk Herstellen Rotterdam"
        description="Professioneel voegwerk herstellen in Rotterdam. Weekend Klussen verzorgt voegwerk repareren en vervangen in Rotterdam met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel voegwerk herstellen in Rotterdam. Of u nu los, beschadigd of verweerd voegwerk heeft in uw tegels, bakstenen, of andere metselwerk - onze ervaren vakmannen herstellen uw voegwerk volledig in Rotterdam. Wij verwijderen oud voegwerk en brengen nieuw, waterdicht voegwerk aan dat lang meegaat."
        serviceDetails={[
          'Voegwerk herstellen en repareren Rotterdam',
          'Oud voegwerk verwijderen en voorbereiden',
          'Nieuw voegwerk aanbrengen (cement, epoxy, siliconen)',
          'Voegwerk herstellen voor tegels en tegelwerk',
          'Voegwerk herstellen voor bakstenen en metselwerk',
          'Voegwerk herstellen voor gevels en buitenmuren',
          'Voegwerk waterdicht maken',
          'Garantie op alle voegwerk werkzaamheden',
        ]}
        nearbyCities={['Schiedam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Capelle aan den IJssel', 'Ridderkerk']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige voegmaterialen',
          'Garantie op alle voegwerk werkzaamheden',
          'Lokale kennis van Rotterdam',
        ]}
      />
      <Footer />
    </main>
  );
}
