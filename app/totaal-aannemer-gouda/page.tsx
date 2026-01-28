import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totaal Aannemer Gouda | Weekend Klussen Totaal Aannemer Gouda',
  description: 'Totaal aannemer voor complete bouw- en renovatieprojecten in Gouda. Van ontwerp tot oplevering, alles uit één hand. Ervaren aannemer met vaste prijzen. Gratis offerte.',
  location: 'Gouda',
  service: 'totaal aannemer',
  keywords: ['totaal aannemer Gouda', 'complete aannemer Gouda', 'totaal aannemer service Gouda', 'aannemer alles uit één hand Gouda'],
});

export default function TotaalAannemerGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Gouda"
        service="Totaal Aannemer"
        title="Totaal Aannemer Gouda"
        description="Totaal aannemer voor complete bouw- en renovatieprojecten in Gouda. Weekend Klussen verzorgt alles uit één hand: van ontwerp tot oplevering. Ervaren aannemer met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen is uw totaal aannemer in Gouda. Wij verzorgen complete bouw- en renovatieprojecten van A tot Z in Gouda. Van het eerste ontwerp tot de uiteindelijke oplevering - alles wordt door ons geregeld. Of u nu een complete woningverbouwing, totaalrenovatie, of nieuwbouw project heeft - wij staan voor u klaar in Gouda."
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
          'Ervaren aannemer met jarenlange expertise',
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
