import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totaal Vaklieden Alphen aan den Rijn | Weekend Klussen Totaal Vaklieden Alphen aan den Rijn',
  description: 'Totaal vaklieden voor complete bouw- en renovatieprojecten in Alphen aan den Rijn. Van ontwerp tot oplevering, alles uit één hand. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Alphen aan den Rijn',
  service: 'totaal vaklieden',
  keywords: ['totaal vaklieden Alphen aan den Rijn', 'complete vaklieden Alphen aan den Rijn', 'totaal vaklieden service Alphen aan den Rijn', 'vaklieden alles uit één hand Alphen aan den Rijn'],
});

export default function TotaalVakliedenAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Alphen aan den Rijn"
        service="Totaal Vaklieden"
        title="Totaal Vaklieden Alphen aan den Rijn"
        description="Totaal vaklieden voor complete bouw- en renovatieprojecten in Alphen aan den Rijn. Weekend Klussen verzorgt alles uit één hand: van ontwerp tot oplevering. Ervaren vaklieden met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen is uw totaal vaklieden in Alphen aan den Rijn. Wij verzorgen complete bouw- en renovatieprojecten van A tot Z in Alphen aan den Rijn. Van het eerste ontwerp tot de uiteindelijke oplevering - alles wordt door ons geregeld. Of u nu een complete woningverbouwing, totaalrenovatie, of nieuwbouw project heeft - wij staan voor u klaar in Alphen aan den Rijn."
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
          'Ervaren vaklieden met jarenlange expertise',
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
