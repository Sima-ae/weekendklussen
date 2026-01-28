import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Timmerman Leiden | Weekend Klussen Timmerman Leiden',
  description:
    'Timmerman in Leiden. Weekend Klussen is uw betrouwbare timmerman in Leiden en omgeving. Timmerwerk, kozijnen, deuren, trappen en houtbewerking. Vaste prijzen en garantie. Gratis offerte.',
};

export default function TimmermanLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Leiden"
        title="Timmerman Leiden"
        description="Weekend Klussen is uw betrouwbare timmerman in Leiden. Wij verzorgen alle timmerwerkzaamheden, van kozijnen en deuren tot trappen en meubels. Ervaren timmerman voor al uw houtbewerking."
        nearbyCities={['Katwijk', 'Alphen aan den Rijn', 'Zoetermeer', 'Den Haag', 'Voorburg']}
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
