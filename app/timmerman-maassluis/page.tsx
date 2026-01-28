import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Timmerman Maassluis | Weekend Klussen Timmerman Maassluis',
  description:
    'Timmerman in Maassluis. Weekend Klussen is uw betrouwbare timmerman in Maassluis en omgeving. Timmerwerk, kozijnen, deuren, trappen en houtbewerking. Vaste prijzen en garantie. Gratis offerte.',
};

export default function TimmermanMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Maassluis"
        title="Timmerman Maassluis"
        description="Weekend Klussen is uw betrouwbare timmerman in Maassluis. Wij verzorgen alle timmerwerkzaamheden, van kozijnen en deuren tot trappen en meubels. Ervaren timmerman voor al uw houtbewerking."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Westland', 'Delft']}
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
