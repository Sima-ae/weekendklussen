import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totaal Aannemer Maassluis | Weekend Klussen Totaal Aannemer Maassluis',
  description: 'Totaal aannemer voor complete bouw- en renovatieprojecten in Maassluis. Van ontwerp tot oplevering, alles uit één hand. Ervaren aannemer met vaste prijzen. Gratis offerte.',
  location: 'Maassluis',
  service: 'totaal aannemer',
  keywords: ['totaal aannemer Maassluis', 'complete aannemer Maassluis', 'totaal aannemer service Maassluis', 'aannemer alles uit één hand Maassluis'],
});

export default function TotaalAannemerMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Maassluis"
        service="Totaal Aannemer"
        title="Totaal Aannemer Maassluis"
        description="Totaal aannemer voor complete bouw- en renovatieprojecten in Maassluis. Weekend Klussen verzorgt alles uit één hand: van ontwerp tot oplevering. Ervaren aannemer met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen is uw totaal aannemer in Maassluis. Wij verzorgen complete bouw- en renovatieprojecten van A tot Z in Maassluis. Van het eerste ontwerp tot de uiteindelijke oplevering - alles wordt door ons geregeld. Of u nu een complete woningverbouwing, totaalrenovatie, of nieuwbouw project heeft - wij staan voor u klaar in Maassluis."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Maassluis',
          'Nieuwbouw projecten en uitbreidingen',
          'Badkamer en keuken verbouwing Maassluis',
          'Aanbouw, uitbouw en dakkapel',
          'Ontwerp, vergunningen en bouwbegeleiding',
          'Alle vakdisciplines onder één dak',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren aannemer met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Maassluis',
        ]}
      />
      <Footer />
    </main>
  );
}
