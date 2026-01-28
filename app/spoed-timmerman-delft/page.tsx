import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Timmerman Delft | Weekend Klussen 24/7 Spoed Timmerman Delft',
  description: '24/7 spoed timmerman service in Delft. Spoed timmerman voor houtwerk reparatie, deuren, ramen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Delft',
  service: 'spoed timmerman',
  keywords: ['spoed timmerman Delft', '24/7 timmerman Delft', 'spoed timmerman service Delft', 'timmerman spoed Delft'],
});

export default function SpoedTimmermanDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Delft"
        service="Spoed Timmerman"
        title="Spoed Timmerman Delft 24/7"
        description="24/7 spoed timmerman service in Delft. Weekend Klussen staat dag en nacht voor u klaar bij houtwerk reparatie, deuren, ramen en andere spoedgevallen in Delft. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed timmerman service in Delft. Of u nu een kapotte deur heeft, losse kozijnen, houtrot, of een andere spoedsituatie - onze ervaren timmerlieden staan dag en nacht voor u klaar in Delft. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Delft',
          'Deur reparatie en deur vervanging',
          'Raam reparatie en kozijn reparatie Delft',
          'Houtrot reparatie en behandeling',
          'Trap reparatie en trap renovatie',
          'Vloer reparatie en vloer renovatie',
          'Plafond reparatie en plafond renovatie',
          'Houtwerk onderhoud en behandeling',
        ]}
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer', 'Leiden']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren timmerlieden met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle timmerwerk werkzaamheden',
          'Lokale kennis van Delft',
        ]}
      />
      <Footer />
    </main>
  );
}
