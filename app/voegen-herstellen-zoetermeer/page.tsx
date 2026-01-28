import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Voegen Herstellen Zoetermeer | Weekend Klussen Voegen Herstellen Zoetermeer',
  description: 'Professioneel voegen herstellen in Zoetermeer. Voegen repareren en vervangen voor tegels, bakstenen en meer. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Zoetermeer',
  service: 'voegen herstellen',
  keywords: ['voegen herstellen Zoetermeer', 'voegen repareren Zoetermeer', 'voegen vervangen Zoetermeer', 'voegwerk herstellen Zoetermeer'],
});

export default function VoegenHerstellenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zoetermeer"
        service="Voegen Herstellen"
        title="Voegen Herstellen Zoetermeer"
        description="Professioneel voegen herstellen in Zoetermeer. Weekend Klussen verzorgt voegen repareren en vervangen in Zoetermeer met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel voegen herstellen in Zoetermeer. Of u nu losse, beschadigde of verweerde voegen heeft in uw tegels, bakstenen, of andere metselwerk - onze ervaren vakmannen herstellen uw voegen volledig in Zoetermeer. Wij verwijderen oude voegen en brengen nieuwe, waterdichte voegen aan die lang meegaan."
        serviceDetails={[
          'Voegen herstellen en repareren Zoetermeer',
          'Oude voegen verwijderen en voorbereiden',
          'Nieuwe voegen aanbrengen (cement, epoxy, siliconen)',
          'Voegen herstellen voor tegels en tegelwerk',
          'Voegen herstellen voor bakstenen en metselwerk',
          'Voegen herstellen voor gevels en buitenmuren',
          'Voegen waterdicht maken',
          'Garantie op alle voegwerk werkzaamheden',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Rijswijk']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige voegmaterialen',
          'Garantie op alle voegwerk werkzaamheden',
          'Lokale kennis van Zoetermeer',
        ]}
      />
      <Footer />
    </main>
  );
}
