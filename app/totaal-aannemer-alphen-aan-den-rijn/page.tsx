import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totaal Aannemer Alphen aan den Rijn | Weekend Klussen Totaal Aannemer Alphen aan den Rijn',
  description: 'Totaal aannemer voor complete bouw- en renovatieprojecten in Alphen aan den Rijn. Van ontwerp tot oplevering, alles uit één hand. Ervaren aannemer met vaste prijzen. Gratis offerte.',
  location: 'Alphen aan den Rijn',
  service: 'totaal aannemer',
  keywords: ['totaal aannemer Alphen aan den Rijn', 'complete aannemer Alphen aan den Rijn', 'totaal aannemer service Alphen aan den Rijn', 'aannemer alles uit één hand Alphen aan den Rijn'],
});

export default function TotaalAannemerAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Alphen aan den Rijn"
        service="Totaal Aannemer"
        title="Totaal Aannemer Alphen aan den Rijn"
        description="Totaal aannemer voor complete bouw- en renovatieprojecten in Alphen aan den Rijn. Weekend Klussen verzorgt alles uit één hand: van ontwerp tot oplevering. Ervaren aannemer met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen is uw totaal aannemer in Alphen aan den Rijn. Wij verzorgen complete bouw- en renovatieprojecten van A tot Z in Alphen aan den Rijn. Van het eerste ontwerp tot de uiteindelijke oplevering - alles wordt door ons geregeld. Of u nu een complete woningverbouwing, totaalrenovatie, of nieuwbouw project heeft - wij staan voor u klaar in Alphen aan den Rijn."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Alphen aan den Rijn',
          'Nieuwbouw projecten en uitbreidingen',
          'Badkamer en keuken verbouwing Alphen aan den Rijn',
          'Aanbouw, uitbouw en dakkapel',
          'Ontwerp, vergunningen en bouwbegeleiding',
          'Alle vakdisciplines onder één dak',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Woerden', 'Utrecht']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren aannemer met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Alphen aan den Rijn',
        ]}
      />
      <Footer />
    </main>
  );
}
