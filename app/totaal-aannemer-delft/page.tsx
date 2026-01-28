import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totaal Vaklieden Delft | Weekend Klussen Totaal Vaklieden Delft',
  description: 'Totaal vaklieden voor complete bouw- en renovatieprojecten in Delft. Van ontwerp tot oplevering, alles uit één hand. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Delft',
  service: 'totaal vaklieden',
  keywords: ['totaal vaklieden Delft', 'complete vaklieden Delft', 'totaal vaklieden service Delft', 'vaklieden alles uit één hand Delft'],
});

export default function TotaalVakliedenDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Delft"
        service="Totaal Vaklieden"
        title="Totaal Vaklieden Delft"
        description="Totaal vaklieden voor complete bouw- en renovatieprojecten in Delft. Weekend Klussen verzorgt alles uit één hand: van ontwerp tot oplevering. Ervaren vaklieden met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen is uw totaal vaklieden in Delft. Wij verzorgen complete bouw- en renovatieprojecten van A tot Z in Delft. Van het eerste ontwerp tot de uiteindelijke oplevering - alles wordt door ons geregeld. Of u nu een complete woningverbouwing, totaalrenovatie, of nieuwbouw project heeft - wij staan voor u klaar in Delft."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Delft',
          'Nieuwbouw projecten en uitbreidingen',
          'Badkamer en keuken verbouwing Delft',
          'Aanbouw, uitbouw en dakkapel',
          'Ontwerp, vergunningen en bouwbegeleiding',
          'Alle vakdisciplines onder één dak',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer', 'Leiden']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren vaklieden met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Delft',
        ]}
      />
      <Footer />
    </main>
  );
}
