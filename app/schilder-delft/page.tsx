import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Schilder Delft | Weekend Klussen Schilder Delft',
  description:
    'Schilder in Delft. Weekend Klussen is uw betrouwbare schilder in Delft en omgeving. Binnen- en buitenschilderwerk, behangen, houtrot behandeling en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function SchilderDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Delft"
        title="Schilder Delft"
        description="Weekend Klussen is uw betrouwbare schilder in Delft. Wij verzorgen alle schilderwerkzaamheden, van binnen- en buitenschilderwerk tot behangen en houtrot behandeling. Ervaren schilder voor al uw schilderwerk."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
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
