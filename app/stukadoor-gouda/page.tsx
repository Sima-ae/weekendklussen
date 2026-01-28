import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Stukadoor Gouda | Weekend Klussen Stukadoor Gouda',
  description:
    'Stukadoor in Gouda. Weekend Klussen is uw betrouwbare stukadoor in Gouda en omgeving. Stucwerk, gipsplaten, spachtelputz, sierpleister en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function StukadoorGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Gouda"
        title="Stukadoor Gouda"
        description="Weekend Klussen is uw betrouwbare stukadoor in Gouda. Wij verzorgen alle stucwerkzaamheden, van gipsplaten en spachtelputz tot sierpleister en afwerking. Ervaren stukadoor voor al uw stucwerk."
        nearbyCities={['Rotterdam', 'Zoetermeer', 'Alphen aan den Rijn', 'Utrecht', 'Woerden']}
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
