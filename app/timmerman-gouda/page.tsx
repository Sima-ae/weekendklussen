import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Timmerman Gouda | Weekend Klussen Timmerman Gouda',
  description:
    'Timmerman in Gouda. Weekend Klussen is uw betrouwbare timmerman in Gouda en omgeving. Timmerwerk, kozijnen, deuren, trappen en houtbewerking. Vaste prijzen en garantie. Gratis offerte.',
};

export default function TimmermanGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Gouda"
        title="Timmerman Gouda"
        description="Weekend Klussen is uw betrouwbare timmerman in Gouda. Wij verzorgen alle timmerwerkzaamheden, van kozijnen en deuren tot trappen en meubels. Ervaren timmerman voor al uw houtbewerking."
        nearbyCities={['Rotterdam', 'Zoetermeer', 'Alphen aan den Rijn', 'Utrecht', 'Woerden']}
        services={[
          'Kozijnen en deuren',
          'Trappen en trapleuningen',
          'Meubels en kasten',
          'Houtbewerking en fineerwerk',
          'Dakkapellen en zolder verbouwing',
          'Schuttingen en tuinhuisjes',
          'Renovatie en restauratie'
        ]}
      />
      <Footer />
    </main>
  );
}
