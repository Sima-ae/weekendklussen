import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Glaszetter Alphen aan den Rijn | Weekend Klussen 24/7 Spoed Glaszetter Alphen aan den Rijn',
  description: '24/7 spoed glaszetter service in Alphen aan den Rijn. Spoed glaszetter voor gebroken ruiten, ramen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Alphen aan den Rijn',
  service: 'spoed glaszetter',
  keywords: ['spoed glaszetter Alphen aan den Rijn', '24/7 glaszetter Alphen aan den Rijn', 'spoed glaszetter service Alphen aan den Rijn', 'glaszetter spoed Alphen aan den Rijn'],
});

export default function SpoedGlaszetterAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Alphen aan den Rijn"
        service="Spoed Glaszetter"
        title="Spoed Glaszetter Alphen aan den Rijn 24/7"
        description="24/7 spoed glaszetter service in Alphen aan den Rijn. Weekend Klussen staat dag en nacht voor u klaar bij gebroken ruiten, ramen en andere spoedgevallen in Alphen aan den Rijn. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed glaszetter service in Alphen aan den Rijn. Of u nu een gebroken ruit heeft, een kapot raam, inbraakschade, of een andere spoedsituatie - onze ervaren glaszetters staan dag en nacht voor u klaar in Alphen aan den Rijn. Wij reageren snel en lossen uw probleem professioneel op."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Alphen aan den Rijn',
          'Gebroken ruit vervangen en repareren',
          'Raam reparatie en vervanging Alphen aan den Rijn',
          'Inbraakschade glas reparatie',
          'Deur glas vervangen',
          'Dubbel glas reparatie en vervanging',
          'Spiegel reparatie en plaatsing',
          'Glas beveiliging installeren',
        ]}
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Woerden', 'Utrecht']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren glaszetters met jarenlange expertise',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle glaszetter werkzaamheden',
          'Lokale kennis van Alphen aan den Rijn',
        ]}
      />
      <Footer />
    </main>
  );
}
