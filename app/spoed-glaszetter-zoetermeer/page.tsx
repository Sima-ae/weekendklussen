import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Glaszetter Zoetermeer | Weekend Klussen 24/7 Spoed Glaszetter Zoetermeer',
  description: '24/7 spoed glaszetter service in Zoetermeer. Spoed glaszetter voor gebroken ruiten, ramen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Zoetermeer',
  service: 'spoed glaszetter',
  keywords: ['spoed glaszetter Zoetermeer', '24/7 glaszetter Zoetermeer', 'spoed glaszetter service Zoetermeer', 'glaszetter spoed Zoetermeer'],
});

export default function SpoedGlaszetterZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zoetermeer"
        service="Spoed Glaszetter"
        title="Spoed Glaszetter Zoetermeer 24/7"
        description="24/7 spoed glaszetter service in Zoetermeer. Weekend Klussen staat dag en nacht voor u klaar bij gebroken ruiten, ramen en andere spoedgevallen in Zoetermeer. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed glaszetter service in Zoetermeer. Of u nu een gebroken ruit heeft, een kapot raam, inbraakschade, of een andere spoedsituatie - onze ervaren glaszetters staan dag en nacht voor u klaar in Zoetermeer. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Zoetermeer',
          'Gebroken ruit vervangen en repareren',
          'Raam reparatie en vervanging Zoetermeer',
          'Inbraakschade glas reparatie',
          'Deur glas vervangen',
          'Dubbel glas reparatie en vervanging',
          'Spiegel reparatie en plaatsing',
          'Glas beveiliging installeren',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Rijswijk']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren glaszetters met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle glaszetter werkzaamheden',
          'Lokale kennis van Zoetermeer',
        ]}
      />
      <Footer />
    </main>
  );
}
