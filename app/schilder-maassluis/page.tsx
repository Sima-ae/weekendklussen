import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Schilder Maassluis | Weekend Klussen Schilder Maassluis',
  description:
    'Schilder in Maassluis. Weekend Klussen is uw betrouwbare schilder in Maassluis en omgeving. Binnen- en buitenschilderwerk, behangen, houtrot behandeling en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function SchilderMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Maassluis"
        title="Schilder Maassluis"
        description="Weekend Klussen is uw betrouwbare schilder in Maassluis. Wij verzorgen alle schilderwerkzaamheden, van binnen- en buitenschilderwerk tot behangen en houtrot behandeling. Ervaren schilder voor al uw schilderwerk."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Westland', 'Delft']}
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
