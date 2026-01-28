import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totaal Vaklieden Gouda | Weekend Klussen Totaal Vaklieden Gouda',
  description: 'Totaal vaklieden voor complete bouw- en renovatieprojecten in Gouda. Van ontwerp tot oplevering, alles uit één hand. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Gouda',
  service: 'totaal vaklieden',
  keywords: ['totaal vaklieden Gouda', 'complete vaklieden Gouda', 'totaal vaklieden service Gouda', 'vaklieden alles uit één hand Gouda'],
});

export default function TotaalVakliedenGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Gouda"
        service="Totaal Vaklieden"
        title="Totaal Vaklieden Gouda"
        description="Totaal vaklieden voor complete bouw- en renovatieprojecten in Gouda. Weekend Klussen verzorgt alles uit één hand: van ontwerp tot oplevering. Ervaren vaklieden met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen is uw totaal vaklieden in Gouda. Wij verzorgen complete bouw- en renovatieprojecten van A tot Z in Gouda. Van het eerste ontwerp tot de uiteindelijke oplevering - alles wordt door ons geregeld. Of u nu een complete woningverbouwing, totaalrenovatie, of nieuwbouw project heeft - wij staan voor u klaar in Gouda."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Gouda',
          'Nieuwbouw projecten en uitbreidingen',
          'Badkamer en keuken verbouwing Gouda',
          'Aanbouw, uitbouw en dakkapel',
          'Ontwerp, vergunningen en bouwbegeleiding',
          'Alle vakdisciplines onder één dak',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Rotterdam', 'Dordrecht', 'Leiden', 'Zoetermeer', 'Utrecht', 'Woerden']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren vaklieden met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Gouda',
        ]}
      />
      <Footer />
    </main>
  );
}
