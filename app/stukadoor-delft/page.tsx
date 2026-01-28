import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Stukadoor Delft | Weekend Klussen Stukadoor Delft',
  description:
    'Stukadoor in Delft. Weekend Klussen is uw betrouwbare stukadoor in Delft en omgeving. Stucwerk, gipsplaten, spachtelputz, sierpleister en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function StukadoorDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Delft"
        title="Stukadoor Delft"
        description="Weekend Klussen is uw betrouwbare stukadoor in Delft. Wij verzorgen alle stucwerkzaamheden, van gipsplaten en spachtelputz tot sierpleister en afwerking. Ervaren stukadoor voor al uw stucwerk."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
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
