import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Totaal Vaklieden Rotterdam | Weekend Klussen Totaal Vaklieden Rotterdam',
  description: 'Totaal vaklieden voor complete bouw- en renovatieprojecten in Rotterdam. Van ontwerp tot oplevering, alles uit één hand. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Rotterdam',
  service: 'totaal vaklieden',
  keywords: ['totaal vaklieden Rotterdam', 'complete vaklieden Rotterdam', 'totaal vaklieden service Rotterdam', 'vaklieden alles uit één hand Rotterdam'],
});

export default function TotaalVakliedenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Rotterdam"
        service="Totaal Vaklieden"
        title="Totaal Vaklieden Rotterdam"
        description="Totaal vaklieden voor complete bouw- en renovatieprojecten in Rotterdam. Weekend Klussen verzorgt alles uit één hand: van ontwerp tot oplevering. Ervaren vaklieden met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen is uw totaal vaklieden in Rotterdam. Wij verzorgen complete bouw- en renovatieprojecten van A tot Z in Rotterdam. Van het eerste ontwerp tot de uiteindelijke oplevering - alles wordt door ons geregeld. Of u nu een complete woningverbouwing, totaalrenovatie, of nieuwbouw project heeft - wij staan voor u klaar in Rotterdam."
        serviceDetails={[
          'Complete woningverbouwing en totaalrenovatie Rotterdam',
          'Nieuwbouw projecten en uitbreidingen',
          'Badkamer en keuken verbouwing Rotterdam',
          'Aanbouw, uitbouw en dakkapel',
          'Ontwerp, vergunningen en bouwbegeleiding',
          'Alle vakdisciplines onder één dak',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Schiedam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Capelle aan den IJssel', 'Ridderkerk']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren vaklieden met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Rotterdam',
        ]}
      />
      <Footer />
    </main>
  );
}
