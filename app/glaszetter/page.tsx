import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GlaszetterContent } from '@/components/pages/GlaszetterContent';

export const metadata: Metadata = {
  title: 'Glaszetter | Weekend Klussen Glaszetter Specialist',
  description:
    'Professionele glaszetter in Zuid-Holland. Weekend Klussen verzorgt glas vervangen, ruiten repareren, dubbel glas plaatsen en 24/7 spoedglaszetten. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function GlaszetterPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <GlaszetterContent
        location="Zuid-Holland"
        title="Glaszetter"
        description="Weekend Klussen is uw betrouwbare glaszetter in Zuid-Holland. Wij verzorgen alle glaszetwerkzaamheden van ruitvervanging tot dubbel glas plaatsen, inclusief 24/7 spoedservice."
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Leiden', 'Dordrecht', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn']}
      />
      <Footer />
    </main>
  );
}
