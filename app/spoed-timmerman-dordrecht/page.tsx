import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Timmerman Dordrecht | Weekend Klussen 24/7 Spoed Timmerman Dordrecht',
  description: '24/7 spoed timmerman service in Dordrecht. Spoed timmerman voor houtwerk reparatie, deuren, ramen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Dordrecht',
  service: 'spoed timmerman',
  keywords: ['spoed timmerman Dordrecht', '24/7 timmerman Dordrecht', 'spoed timmerman service Dordrecht', 'timmerman spoed Dordrecht'],
});

export default function SpoedTimmermanDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Dordrecht"
        service="Spoed Timmerman"
        title="Spoed Timmerman Dordrecht 24/7"
        description="24/7 spoed timmerman service in Dordrecht. Weekend Klussen staat dag en nacht voor u klaar bij houtwerk reparatie, deuren, ramen en andere spoedgevallen in Dordrecht. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed timmerman service in Dordrecht. Of u nu een kapotte deur heeft, losse kozijnen, houtrot, of een andere spoedsituatie - onze ervaren timmerlieden staan dag en nacht voor u klaar in Dordrecht. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Dordrecht',
          'Deur reparatie en deur vervanging',
          'Raam reparatie en kozijn reparatie Dordrecht',
          'Houtrot reparatie en behandeling',
          'Trap reparatie en trap renovatie',
          'Vloer reparatie en vloer renovatie',
          'Plafond reparatie en plafond renovatie',
          'Houtwerk onderhoud en behandeling',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Gouda', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren timmerlieden met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle timmerwerk werkzaamheden',
          'Lokale kennis van Dordrecht',
        ]}
      />
      <Footer />
    </main>
  );
}
