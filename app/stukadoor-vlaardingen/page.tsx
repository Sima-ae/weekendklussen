import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Stukadoor Vlaardingen | Weekend Klussen Stukadoor Vlaardingen',
  description:
    'Stukadoor in Vlaardingen. Weekend Klussen is uw betrouwbare stukadoor in Vlaardingen en omgeving. Stucwerk, gipsplaten, spachtelputz, sierpleister en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function StukadoorVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Vlaardingen"
        title="Stukadoor Vlaardingen"
        description="Weekend Klussen is uw betrouwbare stukadoor in Vlaardingen. Wij verzorgen alle stucwerkzaamheden, van gipsplaten en spachtelputz tot sierpleister en afwerking. Ervaren stukadoor voor al uw stucwerk."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Westland', 'Delft']}
        services={[
          'Stucwerk en gipsplaten',
          'Spachtelputz en structuurpleister',
          'Sierpleister en decoratief stucwerk',
          'Wand- en plafondstucwerk',
          'Renovatie en reparatie stucwerk',
          'Voorstrijken en voorbehandeling',
          'Afwerking en schilderwerk voorbereiding'
        ]}
      />
      <Footer />
    </main>
  );
}
