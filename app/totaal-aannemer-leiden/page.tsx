import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totaal Aannemer Leiden | Weekend Klussen Totaal Aannemer Leiden',
  description: 'Totaal aannemer voor complete bouw- en renovatieprojecten in Leiden. Van ontwerp tot oplevering, alles uit één hand. Ervaren aannemer met vaste prijzen. Gratis offerte.',
  location: 'Leiden',
  service: 'totaal aannemer',
  keywords: ['totaal aannemer Leiden', 'complete aannemer Leiden', 'totaal aannemer service Leiden', 'aannemer alles uit één hand Leiden'],
});

export default function TotaalAannemerLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Leiden"
        service="Totaal Aannemer"
        title="Totaal Aannemer Leiden"
        description="Totaal aannemer voor complete bouw- en renovatieprojecten in Leiden. Weekend Klussen verzorgt alles uit één hand: van ontwerp tot oplevering. Ervaren aannemer met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen is uw totaal aannemer in Leiden. Wij verzorgen complete bouw- en renovatieprojecten van A tot Z in Leiden. Van het eerste ontwerp tot de uiteindelijke oplevering - alles wordt door ons geregeld. Of u nu een complete woningverbouwing, totaalrenovatie, of nieuwbouw project heeft - wij staan voor u klaar in Leiden."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Leiden',
          'Nieuwbouw projecten en uitbreidingen',
          'Badkamer en keuken verbouwing Leiden',
          'Aanbouw, uitbouw en dakkapel',
          'Ontwerp, vergunningen en bouwbegeleiding',
          'Alle vakdisciplines onder één dak',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn', 'Katwijk']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren aannemer met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Leiden',
        ]}
      />
      <Footer />
    </main>
  );
}
