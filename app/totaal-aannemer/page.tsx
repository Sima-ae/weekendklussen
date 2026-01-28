import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totaal Vaklieden | Weekend Klussen Totaal Vaklieden Service',
  description: 'Totaal vaklieden voor complete bouw- en renovatieprojecten in Zuid-Holland. Van ontwerp tot oplevering, alles uit één hand. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  service: 'totaal vaklieden',
  keywords: ['totaal vaklieden', 'complete vaklieden', 'totaal vaklieden service', 'vaklieden alles uit één hand', 'totaalverbouwing'],
});

export default function TotaalVakliedenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zuid-Holland"
        service="Totaal Vaklieden"
        title="Totaal Vaklieden"
        description="Totaal vaklieden voor complete bouw- en renovatieprojecten. Weekend Klussen verzorgt alles uit één hand: van ontwerp tot oplevering. Ervaren vaklieden met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen is uw totaal vaklieden in heel Zuid-Holland. Wij verzorgen complete bouw- en renovatieprojecten van A tot Z. Van het eerste ontwerp tot de uiteindelijke oplevering - alles wordt door ons geregeld. Of u nu een complete woningverbouwing, totaalrenovatie, of nieuwbouw project heeft - wij staan voor u klaar."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie',
          'Nieuwbouw projecten en uitbreidingen',
          'Badkamer en keuken verbouwing',
          'Aanbouw, uitbouw en dakkapel',
          'Ontwerp, vergunningen en bouwbegeleiding',
          'Alle vakdisciplines onder één dak',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Rotterdam', 'Den Haag', 'Delft', 'Leiden', 'Dordrecht', 'Gouda', 'Zoetermeer']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren vaklieden met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale service in heel Zuid-Holland',
        ]}
      />
      <Footer />
    </main>
  );
}
