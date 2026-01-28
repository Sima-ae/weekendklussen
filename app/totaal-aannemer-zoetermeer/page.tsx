import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totaal Aannemer Zoetermeer | Weekend Klussen Totaal Aannemer Zoetermeer',
  description: 'Totaal aannemer voor complete bouw- en renovatieprojecten in Zoetermeer. Van ontwerp tot oplevering, alles uit één hand. Ervaren aannemer met vaste prijzen. Gratis offerte.',
  location: 'Zoetermeer',
  service: 'totaal aannemer',
  keywords: ['totaal aannemer Zoetermeer', 'complete aannemer Zoetermeer', 'totaal aannemer service Zoetermeer', 'aannemer alles uit één hand Zoetermeer'],
});

export default function TotaalAannemerZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zoetermeer"
        service="Totaal Aannemer"
        title="Totaal Aannemer Zoetermeer"
        description="Totaal aannemer voor complete bouw- en renovatieprojecten in Zoetermeer. Weekend Klussen verzorgt alles uit één hand: van ontwerp tot oplevering. Ervaren aannemer met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen is uw totaal aannemer in Zoetermeer. Wij verzorgen complete bouw- en renovatieprojecten van A tot Z in Zoetermeer. Van het eerste ontwerp tot de uiteindelijke oplevering - alles wordt door ons geregeld. Of u nu een complete woningverbouwing, totaalrenovatie, of nieuwbouw project heeft - wij staan voor u klaar in Zoetermeer."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Zoetermeer',
          'Nieuwbouw projecten en uitbreidingen',
          'Badkamer en keuken verbouwing Zoetermeer',
          'Aanbouw, uitbouw en dakkapel',
          'Ontwerp, vergunningen en bouwbegeleiding',
          'Alle vakdisciplines onder één dak',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Rijswijk']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren aannemer met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Zoetermeer',
        ]}
      />
      <Footer />
    </main>
  );
}
