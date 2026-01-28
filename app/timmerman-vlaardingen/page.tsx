import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Timmerman Vlaardingen | Weekend Klussen Timmerman Vlaardingen',
  description:
    'Timmerman in Vlaardingen. Weekend Klussen is uw betrouwbare timmerman in Vlaardingen en omgeving. Timmerwerk, kozijnen, deuren, trappen en houtbewerking. Vaste prijzen en garantie. Gratis offerte.',
};

export default function TimmermanVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Vlaardingen"
        title="Timmerman Vlaardingen"
        description="Weekend Klussen is uw betrouwbare timmerman in Vlaardingen. Wij verzorgen alle timmerwerkzaamheden, van kozijnen en deuren tot trappen en meubels. Ervaren timmerman voor al uw houtbewerking."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Westland', 'Delft']}
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
