import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Schilder Schiedam | Weekend Klussen Schilder Schiedam',
  description:
    'Schilder in Schiedam. Weekend Klussen is uw betrouwbare schilder in Schiedam en omgeving. Binnen- en buitenschilderwerk, behangen, houtrot behandeling en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function SchilderSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Schiedam"
        title="Schilder Schiedam"
        description="Weekend Klussen is uw betrouwbare schilder in Schiedam. Wij verzorgen alle schilderwerkzaamheden, van binnen- en buitenschilderwerk tot behangen en houtrot behandeling. Ervaren schilder voor al uw schilderwerk."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Capelle aan den IJssel']}
        services={[
          'Binnenschilderwerk en behangen',
          'Buitenschilderwerk en gevels',
          'Houtrot behandeling en reparatie',
          'Kozijnen en deuren schilderen',
          'Stucwerk en voorstrijken',
          'Spuitwerk en lakken',
          'Onderhoud en periodiek schilderwerk'
        ]}
      />
      <Footer />
    </main>
  );
}
