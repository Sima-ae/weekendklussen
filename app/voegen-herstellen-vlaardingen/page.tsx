import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Voegen Herstellen Vlaardingen | Weekend Klussen Voegen Herstellen Vlaardingen',
  description: 'Professioneel voegen herstellen in Vlaardingen. Voegen repareren en vervangen voor tegels, bakstenen en meer. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Vlaardingen',
  service: 'voegen herstellen',
  keywords: ['voegen herstellen Vlaardingen', 'voegen repareren Vlaardingen', 'voegen vervangen Vlaardingen', 'voegwerk herstellen Vlaardingen'],
});

export default function VoegenHerstellenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Vlaardingen"
        service="Voegen Herstellen"
        title="Voegen Herstellen Vlaardingen"
        description="Professioneel voegen herstellen in Vlaardingen. Weekend Klussen verzorgt voegen repareren en vervangen in Vlaardingen met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel voegen herstellen in Vlaardingen. Of u nu losse, beschadigde of verweerde voegen heeft in uw tegels, bakstenen, of andere metselwerk - onze ervaren vakmannen herstellen uw voegen volledig in Vlaardingen. Wij verwijderen oude voegen en brengen nieuwe, waterdichte voegen aan die lang meegaan."
        serviceDetails={[
          'Voegen herstellen en repareren Vlaardingen',
          'Oude voegen verwijderen en voorbereiden',
          'Nieuwe voegen aanbrengen (cement, epoxy, siliconen)',
          'Voegen herstellen voor tegels en tegelwerk',
          'Voegen herstellen voor bakstenen en metselwerk',
          'Voegen herstellen voor gevels en buitenmuren',
          'Voegen waterdicht maken',
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
