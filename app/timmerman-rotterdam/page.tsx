import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Timmerman Rotterdam | Weekend Klussen Timmerman Rotterdam',
  description:
    'Timmerman in Rotterdam. Weekend Klussen is uw betrouwbare timmerman in Rotterdam en omgeving. Timmerwerk, kozijnen, deuren, trappen en houtbewerking. Vaste prijzen en garantie. Gratis offerte.',
};

export default function TimmermanRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Rotterdam"
        title="Timmerman Rotterdam"
        description="Weekend Klussen is uw betrouwbare timmerman in Rotterdam. Wij verzorgen alle timmerwerkzaamheden, van kozijnen en deuren tot trappen en meubels. Ervaren timmerman voor al uw houtbewerking."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
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
