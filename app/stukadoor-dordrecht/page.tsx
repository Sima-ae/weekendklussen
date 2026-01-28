import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Stukadoor Dordrecht | Weekend Klussen Stukadoor Dordrecht',
  description:
    'Stukadoor in Dordrecht. Weekend Klussen is uw betrouwbare stukadoor in Dordrecht en omgeving. Stucwerk, gipsplaten, spachtelputz, sierpleister en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function StukadoorDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Dordrecht"
        title="Stukadoor Dordrecht"
        description="Weekend Klussen is uw betrouwbare stukadoor in Dordrecht. Wij verzorgen alle stucwerkzaamheden, van gipsplaten en spachtelputz tot sierpleister en afwerking. Ervaren stukadoor voor al uw stucwerk."
        nearbyCities={['Papendrecht', 'Sliedrecht', 'Zwijndrecht', 'Rotterdam', 'Barendrecht']}
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
