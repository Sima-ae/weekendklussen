import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totaal Aannemer Vlaardingen | Weekend Klussen Totaal Aannemer Vlaardingen',
  description: 'Totaal aannemer voor complete bouw- en renovatieprojecten in Vlaardingen. Van ontwerp tot oplevering, alles uit één hand. Ervaren aannemer met vaste prijzen. Gratis offerte.',
  location: 'Vlaardingen',
  service: 'totaal aannemer',
  keywords: ['totaal aannemer Vlaardingen', 'complete aannemer Vlaardingen', 'totaal aannemer service Vlaardingen', 'aannemer alles uit één hand Vlaardingen'],
});

export default function TotaalAannemerVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Vlaardingen"
        service="Totaal Aannemer"
        title="Totaal Aannemer Vlaardingen"
        description="Totaal aannemer voor complete bouw- en renovatieprojecten in Vlaardingen. Weekend Klussen verzorgt alles uit één hand: van ontwerp tot oplevering. Ervaren aannemer met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen is uw totaal aannemer in Vlaardingen. Wij verzorgen complete bouw- en renovatieprojecten van A tot Z in Vlaardingen. Van het eerste ontwerp tot de uiteindelijke oplevering - alles wordt door ons geregeld. Of u nu een complete woningverbouwing, totaalrenovatie, of nieuwbouw project heeft - wij staan voor u klaar in Vlaardingen."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Vlaardingen',
          'Nieuwbouw projecten en uitbreidingen',
          'Badkamer en keuken verbouwing Vlaardingen',
          'Aanbouw, uitbouw en dakkapel',
          'Ontwerp, vergunningen en bouwbegeleiding',
          'Alle vakdisciplines onder één dak',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren aannemer met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Vlaardingen',
        ]}
      />
      <Footer />
    </main>
  );
}
