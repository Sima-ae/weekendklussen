import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GlaszetterContent } from '@/components/pages/GlaszetterContent';

export const metadata: Metadata = {
  title: 'Glaszetter Dordrecht | Weekend Klussen Glaszetter Dordrecht',
  description:
    'Professionele glaszetter in Dordrecht. Weekend Klussen verzorgt glas vervangen, ruiten repareren, dubbel glas plaatsen en 24/7 spoedglaszetten in Dordrecht. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function GlaszetterDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <GlaszetterContent
        location="Dordrecht"
        title="Glaszetter Dordrecht"
        description="Weekend Klussen is uw betrouwbare glaszetter in Dordrecht. Wij verzorgen alle glaszetwerkzaamheden van ruitvervanging tot dubbel glas plaatsen, inclusief 24/7 spoedservice in Dordrecht en omgeving."
        nearbyCities={['Rotterdam', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht', 'Gorinchem']}
      />
      <Footer />
    </main>
  );
}
