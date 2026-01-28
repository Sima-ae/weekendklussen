import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Voegwerk Herstellen Alphen aan den Rijn | Weekend Klussen Voegwerk Herstellen Alphen aan den Rijn',
  description: 'Professioneel voegwerk herstellen in Alphen aan den Rijn. Voegwerk repareren en vervangen voor tegels, bakstenen en meer. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Alphen aan den Rijn',
  service: 'voegwerk herstellen',
  keywords: ['voegwerk herstellen Alphen aan den Rijn', 'voegwerk repareren Alphen aan den Rijn', 'voegwerk vervangen Alphen aan den Rijn', 'voegen herstellen Alphen aan den Rijn'],
});

export default function VoegwerkHerstellenAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Alphen aan den Rijn"
        service="Voegwerk Herstellen"
        title="Voegwerk Herstellen Alphen aan den Rijn"
        description="Professioneel voegwerk herstellen in Alphen aan den Rijn. Weekend Klussen verzorgt voegwerk repareren en vervangen in Alphen aan den Rijn met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel voegwerk herstellen in Alphen aan den Rijn. Of u nu los, beschadigd of verweerd voegwerk heeft in uw tegels, bakstenen, of andere metselwerk - onze ervaren vakmannen herstellen uw voegwerk volledig in Alphen aan den Rijn. Wij verwijderen oud voegwerk en brengen nieuw, waterdicht voegwerk aan dat lang meegaat."
        serviceDetails={[
          'Voegwerk herstellen en repareren Alphen aan den Rijn',
          'Oud voegwerk verwijderen en voorbereiden',
          'Nieuw voegwerk aanbrengen (cement, epoxy, siliconen)',
          'Voegwerk herstellen voor tegels en tegelwerk',
          'Voegwerk herstellen voor bakstenen en metselwerk',
          'Voegwerk herstellen voor gevels en buitenmuren',
          'Voegwerk waterdicht maken',
          'Garantie op alle voegwerk werkzaamheden',
        ]}
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Woerden', 'Utrecht']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige voegmaterialen',
          'Garantie op alle voegwerk werkzaamheden',
          'Lokale kennis van Alphen aan den Rijn',
        ]}
      />
      <Footer />
    </main>
  );
}
