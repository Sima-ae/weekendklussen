import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totaal Aannemer Dordrecht | Weekend Klussen Totaal Aannemer Dordrecht',
  description: 'Totaal aannemer voor complete bouw- en renovatieprojecten in Dordrecht. Van ontwerp tot oplevering, alles uit één hand. Ervaren aannemer met vaste prijzen. Gratis offerte.',
  location: 'Dordrecht',
  service: 'totaal aannemer',
  keywords: ['totaal aannemer Dordrecht', 'complete aannemer Dordrecht', 'totaal aannemer service Dordrecht', 'aannemer alles uit één hand Dordrecht'],
});

export default function TotaalAannemerDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Dordrecht"
        service="Totaal Aannemer"
        title="Totaal Aannemer Dordrecht"
        description="Totaal aannemer voor complete bouw- en renovatieprojecten in Dordrecht. Weekend Klussen verzorgt alles uit één hand: van ontwerp tot oplevering. Ervaren aannemer met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen is uw totaal aannemer in Dordrecht. Wij verzorgen complete bouw- en renovatieprojecten van A tot Z in Dordrecht. Van het eerste ontwerp tot de uiteindelijke oplevering - alles wordt door ons geregeld. Of u nu een complete woningverbouwing, totaalrenovatie, of nieuwbouw project heeft - wij staan voor u klaar in Dordrecht."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Dordrecht',
          'Nieuwbouw projecten en uitbreidingen',
          'Badkamer en keuken verbouwing Dordrecht',
          'Aanbouw, uitbouw en dakkapel',
          'Ontwerp, vergunningen en bouwbegeleiding',
          'Alle vakdisciplines onder één dak',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Gouda', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren aannemer met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Dordrecht',
        ]}
      />
      <Footer />
    </main>
  );
}
