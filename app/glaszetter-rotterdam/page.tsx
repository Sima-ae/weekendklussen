import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GlaszetterContent } from '@/components/pages/GlaszetterContent';

export const metadata: Metadata = {
  title: 'Glaszetter Rotterdam | Weekend Klussen Glaszetter Rotterdam',
  description:
    'Professionele glaszetter in Rotterdam. Weekend Klussen verzorgt glas vervangen, ruiten repareren, dubbel glas plaatsen en 24/7 spoedglaszetten in Rotterdam. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function GlaszetterRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <GlaszetterContent
        location="Rotterdam"
        title="Glaszetter Rotterdam"
        description="Weekend Klussen is uw betrouwbare glaszetter in Rotterdam. Wij verzorgen alle glaszetwerkzaamheden van ruitvervanging tot dubbel glas plaatsen, inclusief 24/7 spoedservice in Rotterdam en omgeving."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
      />
      <Footer />
    </main>
  );
}
