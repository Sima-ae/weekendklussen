import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Glaszetter Dordrecht | Weekend Klussen 24/7 Spoed Glaszetter Dordrecht',
  description: '24/7 spoed glaszetter service in Dordrecht. Spoed glaszetter voor gebroken ruiten, ramen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Dordrecht',
  service: 'spoed glaszetter',
  keywords: ['spoed glaszetter Dordrecht', '24/7 glaszetter Dordrecht', 'spoed glaszetter service Dordrecht', 'glaszetter spoed Dordrecht'],
});

export default function SpoedGlaszetterDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Dordrecht"
        service="Spoed Glaszetter"
        title="Spoed Glaszetter Dordrecht 24/7"
        description="24/7 spoed glaszetter service in Dordrecht. Weekend Klussen staat dag en nacht voor u klaar bij gebroken ruiten, ramen en andere spoedgevallen in Dordrecht. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed glaszetter service in Dordrecht. Of u nu een gebroken ruit heeft, een kapot raam, inbraakschade, of een andere spoedsituatie - onze ervaren glaszetters staan dag en nacht voor u klaar in Dordrecht. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Dordrecht',
          'Gebroken ruit vervangen en repareren',
          'Raam reparatie en vervanging Dordrecht',
          'Inbraakschade glas reparatie',
          'Deur glas vervangen',
          'Dubbel glas reparatie en vervanging',
          'Spiegel reparatie en plaatsing',
          'Glas beveiliging installeren',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Gouda', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren glaszetters met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle glaszetter werkzaamheden',
          'Lokale kennis van Dordrecht',
        ]}
      />
      <Footer />
    </main>
  );
}
