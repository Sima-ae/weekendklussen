import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totaal Vaklieden Dordrecht | Weekend Klussen Totaal Vaklieden Dordrecht',
  description: 'Totaal vaklieden voor complete bouw- en renovatieprojecten in Dordrecht. Van ontwerp tot oplevering, alles uit één hand. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Dordrecht',
  service: 'totaal vaklieden',
  keywords: ['totaal vaklieden Dordrecht', 'complete vaklieden Dordrecht', 'totaal vaklieden service Dordrecht', 'vaklieden alles uit één hand Dordrecht'],
});

export default function TotaalVakliedenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Dordrecht"
        service="Totaal Vaklieden"
        title="Totaal Vaklieden Dordrecht"
        description="Totaal vaklieden voor complete bouw- en renovatieprojecten in Dordrecht. Weekend Klussen verzorgt alles uit één hand: van ontwerp tot oplevering. Ervaren vaklieden met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen is uw totaal vaklieden in Dordrecht. Wij verzorgen complete bouw- en renovatieprojecten van A tot Z in Dordrecht. Van het eerste ontwerp tot de uiteindelijke oplevering - alles wordt door ons geregeld. Of u nu een complete woningverbouwing, totaalrenovatie, of nieuwbouw project heeft - wij staan voor u klaar in Dordrecht."
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
          'Ervaren vaklieden met jarenlange expertise',
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
