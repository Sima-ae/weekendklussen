import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GlaszetterContent } from '@/components/pages/GlaszetterContent';

export const metadata: Metadata = {
  title: 'Glaszetter Gouda | Weekend Klussen Glaszetter Gouda',
  description:
    'Professionele glaszetter in Gouda. Weekend Klussen verzorgt glas vervangen, ruiten repareren, dubbel glas plaatsen en 24/7 spoedglaszetten in Gouda. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function GlaszetterGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <GlaszetterContent
        location="Gouda"
        title="Glaszetter Gouda"
        description="Weekend Klussen is uw betrouwbare glaszetter in Gouda. Wij verzorgen alle glaszetwerkzaamheden van ruitvervanging tot dubbel glas plaatsen, inclusief 24/7 spoedservice in Gouda en omgeving."
        nearbyCities={['Zoetermeer', 'Rotterdam', 'Utrecht', 'Woerden', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}
