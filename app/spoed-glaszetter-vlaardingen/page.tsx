import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Glaszetter Vlaardingen | Weekend Klussen 24/7 Spoed Glaszetter Vlaardingen',
  description: '24/7 spoed glaszetter service in Vlaardingen. Spoed glaszetter voor gebroken ruiten, ramen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Vlaardingen',
  service: 'spoed glaszetter',
  keywords: ['spoed glaszetter Vlaardingen', '24/7 glaszetter Vlaardingen', 'spoed glaszetter service Vlaardingen', 'glaszetter spoed Vlaardingen'],
});

export default function SpoedGlaszetterVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Vlaardingen"
        service="Spoed Glaszetter"
        title="Spoed Glaszetter Vlaardingen 24/7"
        description="24/7 spoed glaszetter service in Vlaardingen. Weekend Klussen staat dag en nacht voor u klaar bij gebroken ruiten, ramen en andere spoedgevallen in Vlaardingen. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed glaszetter service in Vlaardingen. Of u nu een gebroken ruit heeft, een kapot raam, inbraakschade, of een andere spoedsituatie - onze ervaren glaszetters staan dag en nacht voor u klaar in Vlaardingen. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Vlaardingen',
          'Gebroken ruit vervangen en repareren',
          'Raam reparatie en vervanging Vlaardingen',
          'Inbraakschade glas reparatie',
          'Deur glas vervangen',
          'Dubbel glas reparatie en vervanging',
          'Spiegel reparatie en plaatsing',
          'Glas beveiliging installeren',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren glaszetters met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle glaszetter werkzaamheden',
          'Lokale kennis van Vlaardingen',
        ]}
      />
      <Footer />
    </main>
  );
}
