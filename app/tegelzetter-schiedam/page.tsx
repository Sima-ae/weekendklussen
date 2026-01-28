import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Tegelzetter Schiedam | Weekend Klussen Tegelzetter Schiedam',
  description:
    'Tegelzetter in Schiedam. Weekend Klussen is uw betrouwbare tegelzetter in Schiedam en omgeving. Badkamer tegelen, keuken tegelen, vloertegels en wandtegels. Vaste prijzen en garantie. Gratis offerte.',
};

export default function TegelzetterSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Schiedam"
        title="Tegelzetter Schiedam"
        description="Weekend Klussen is uw betrouwbare tegelzetter in Schiedam. Wij verzorgen alle tegelwerkzaamheden, van badkamer en keuken tegelen tot vloer- en wandtegels. Ervaren tegelzetter voor al uw tegelwerk."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Capelle aan den IJssel']}
        services={[
          'Badkamer tegelen en sanitair',
          'Keuken tegelen en achterwand',
          'Vloertegels en wandtegels',
          'Tegelrenovatie en vervanging',
          'Douchecabine en badkamer',
          'Voegwerk en afwerking',
          'Vloerverwarming en isolatie'
        ]}
      />
      <Footer />
    </main>
  );
}
