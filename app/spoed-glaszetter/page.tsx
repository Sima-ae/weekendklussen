import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Glaszetter | Weekend Klussen 24/7 Spoed Glaszetter Service',
  description: '24/7 spoed glaszetter service in Zuid-Holland. Spoed glaszetter voor gebroken ruiten, ramen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  service: 'spoed glaszetter',
  keywords: ['spoed glaszetter', '24/7 glaszetter', 'spoed glaszetter service', 'glaszetter spoed', 'gebroken ruit vervangen', 'spoed ruit reparatie'],
});

export default function SpoedGlaszetterPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zuid-Holland"
        service="Spoed Glaszetter"
        title="Spoed Glaszetter 24/7"
        description="24/7 spoed glaszetter service voor alle glas problemen. Weekend Klussen staat dag en nacht voor u klaar bij gebroken ruiten, ramen en andere spoedgevallen. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed glaszetter service in heel Zuid-Holland. Of u nu een gebroken ruit heeft, een kapot raam, inbraakschade, of een andere spoedsituatie - onze ervaren glaszetters staan dag en nacht voor u klaar. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen',
          'Gebroken ruit vervangen en repareren',
          'Raam reparatie en vervanging',
          'Inbraakschade glas reparatie',
          'Deur glas vervangen',
          'Dubbel glas reparatie en vervanging',
          'Spiegel reparatie en plaatsing',
          'Glas beveiliging installeren',
        ]}
        nearbyCities={['Rotterdam', 'Den Haag', 'Delft', 'Leiden', 'Dordrecht', 'Gouda', 'Zoetermeer']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren glaszetters met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle glaszetter werkzaamheden',
          'Lokale service in heel Zuid-Holland',
        ]}
      />
      <Footer />
    </main>
  );
}
