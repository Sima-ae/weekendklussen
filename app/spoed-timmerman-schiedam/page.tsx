import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Timmerman Schiedam | Weekend Klussen 24/7 Spoed Timmerman Schiedam',
  description: '24/7 spoed timmerman service in Schiedam. Spoed timmerman voor houtwerk reparatie, deuren, ramen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Schiedam',
  service: 'spoed timmerman',
  keywords: ['spoed timmerman Schiedam', '24/7 timmerman Schiedam', 'spoed timmerman service Schiedam', 'timmerman spoed Schiedam'],
});

export default function SpoedTimmermanSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Schiedam"
        service="Spoed Timmerman"
        title="Spoed Timmerman Schiedam 24/7"
        description="24/7 spoed timmerman service in Schiedam. Weekend Klussen staat dag en nacht voor u klaar bij houtwerk reparatie, deuren, ramen en andere spoedgevallen in Schiedam. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed timmerman service in Schiedam. Of u nu een kapotte deur heeft, losse kozijnen, houtrot, of een andere spoedsituatie - onze ervaren timmerlieden staan dag en nacht voor u klaar in Schiedam. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Schiedam',
          'Deur reparatie en deur vervanging',
          'Raam reparatie en kozijn reparatie Schiedam',
          'Houtrot reparatie en behandeling',
          'Trap reparatie en trap renovatie',
          'Vloer reparatie en vloer renovatie',
          'Plafond reparatie en plafond renovatie',
          'Houtwerk onderhoud en behandeling',
        ]}
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Dordrecht']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren timmerlieden met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle timmerwerk werkzaamheden',
          'Lokale kennis van Schiedam',
        ]}
      />
      <Footer />
    </main>
  );
}
