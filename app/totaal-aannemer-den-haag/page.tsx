import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totaal Vaklieden Den Haag | Weekend Klussen Totaal Vaklieden Den Haag',
  description: 'Totaal vaklieden voor complete bouw- en renovatieprojecten in Den Haag. Van ontwerp tot oplevering, alles uit één hand. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Den Haag',
  service: 'totaal vaklieden',
  keywords: ['totaal vaklieden Den Haag', 'complete vaklieden Den Haag', 'totaal vaklieden service Den Haag', 'vaklieden alles uit één hand Den Haag'],
});

export default function TotaalVakliedenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Den Haag"
        service="Totaal Vaklieden"
        title="Totaal Vaklieden Den Haag"
        description="Totaal vaklieden voor complete bouw- en renovatieprojecten in Den Haag. Weekend Klussen verzorgt alles uit één hand: van ontwerp tot oplevering. Ervaren vaklieden met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen is uw totaal vaklieden in Den Haag. Wij verzorgen complete bouw- en renovatieprojecten van A tot Z in Den Haag. Van het eerste ontwerp tot de uiteindelijke oplevering - alles wordt door ons geregeld. Of u nu een complete woningverbouwing, totaalrenovatie, of nieuwbouw project heeft - wij staan voor u klaar in Den Haag."
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
          'Ervaren vaklieden met jarenlange expertise',
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
