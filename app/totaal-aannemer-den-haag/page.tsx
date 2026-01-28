import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totaal Aannemer Den Haag | Weekend Klussen Totaal Aannemer Den Haag',
  description: 'Totaal aannemer voor complete bouw- en renovatieprojecten in Den Haag. Van ontwerp tot oplevering, alles uit één hand. Ervaren aannemer met vaste prijzen. Gratis offerte.',
  location: 'Den Haag',
  service: 'totaal aannemer',
  keywords: ['totaal aannemer Den Haag', 'complete aannemer Den Haag', 'totaal aannemer service Den Haag', 'aannemer alles uit één hand Den Haag'],
});

export default function TotaalAannemerDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Den Haag"
        service="Totaal Aannemer"
        title="Totaal Aannemer Den Haag"
        description="Totaal aannemer voor complete bouw- en renovatieprojecten in Den Haag. Weekend Klussen verzorgt alles uit één hand: van ontwerp tot oplevering. Ervaren aannemer met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen is uw totaal aannemer in Den Haag. Wij verzorgen complete bouw- en renovatieprojecten van A tot Z in Den Haag. Van het eerste ontwerp tot de uiteindelijke oplevering - alles wordt door ons geregeld. Of u nu een complete woningverbouwing, totaalrenovatie, of nieuwbouw project heeft - wij staan voor u klaar in Den Haag."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Den Haag',
          'Nieuwbouw projecten en uitbreidingen',
          'Badkamer en keuken verbouwing Den Haag',
          'Aanbouw, uitbouw en dakkapel',
          'Ontwerp, vergunningen en bouwbegeleiding',
          'Alle vakdisciplines onder één dak',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Delft', 'Rijswijk', 'Rotterdam', 'Zoetermeer', 'Leiden', 'Voorburg']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren aannemer met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Den Haag',
        ]}
      />
      <Footer />
    </main>
  );
}
