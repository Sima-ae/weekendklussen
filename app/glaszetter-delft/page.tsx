import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GlaszetterContent } from '@/components/pages/GlaszetterContent';

export const metadata: Metadata = {
  title: 'Glaszetter Delft | Weekend Klussen Glaszetter Delft',
  description:
    'Professionele glaszetter in Delft. Weekend Klussen verzorgt glas vervangen, ruiten repareren, dubbel glas plaatsen en 24/7 spoedglaszetten in Delft. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function GlaszetterDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <GlaszetterContent
        location="Delft"
        title="Glaszetter Delft"
        description="Weekend Klussen is uw betrouwbare glaszetter in Delft. Wij verzorgen alle glaszetwerkzaamheden van ruitvervanging tot dubbel glas plaatsen, inclusief 24/7 spoedservice in Delft en omgeving."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
      />
      <Footer />
    </main>
  );
}
