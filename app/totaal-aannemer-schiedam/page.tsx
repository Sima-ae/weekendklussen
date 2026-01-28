import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totaal Vaklieden Schiedam | Weekend Klussen Totaal Vaklieden Schiedam',
  description: 'Totaal vaklieden voor complete bouw- en renovatieprojecten in Schiedam. Van ontwerp tot oplevering, alles uit één hand. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Schiedam',
  service: 'totaal vaklieden',
  keywords: ['totaal vaklieden Schiedam', 'complete vaklieden Schiedam', 'totaal vaklieden service Schiedam', 'vaklieden alles uit één hand Schiedam'],
});

export default function TotaalVakliedenSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Schiedam"
        service="Totaal Vaklieden"
        title="Totaal Vaklieden Schiedam"
        description="Totaal vaklieden voor complete bouw- en renovatieprojecten in Schiedam. Weekend Klussen verzorgt alles uit één hand: van ontwerp tot oplevering. Ervaren vaklieden met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen is uw totaal vaklieden in Schiedam. Wij verzorgen complete bouw- en renovatieprojecten van A tot Z in Schiedam. Van het eerste ontwerp tot de uiteindelijke oplevering - alles wordt door ons geregeld. Of u nu een complete woningverbouwing, totaalrenovatie, of nieuwbouw project heeft - wij staan voor u klaar in Schiedam."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Schiedam',
          'Nieuwbouw projecten en uitbreidingen',
          'Badkamer en keuken verbouwing Schiedam',
          'Aanbouw, uitbouw en dakkapel',
          'Ontwerp, vergunningen en bouwbegeleiding',
          'Alle vakdisciplines onder één dak',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Dordrecht']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren vaklieden met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Schiedam',
        ]}
      />
      <Footer />
    </main>
  );
}
