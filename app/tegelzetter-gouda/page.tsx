import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Tegelzetter Gouda | Weekend Klussen Tegelzetter Gouda',
  description:
    'Tegelzetter in Gouda. Weekend Klussen is uw betrouwbare tegelzetter in Gouda en omgeving. Badkamer tegelen, keuken tegelen, vloertegels en wandtegels. Vaste prijzen en garantie. Gratis offerte.',
};

export default function TegelzetterGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Gouda"
        title="Tegelzetter Gouda"
        description="Weekend Klussen is uw betrouwbare tegelzetter in Gouda. Wij verzorgen alle tegelwerkzaamheden, van badkamer en keuken tegelen tot vloer- en wandtegels. Ervaren tegelzetter voor al uw tegelwerk."
        nearbyCities={['Rotterdam', 'Zoetermeer', 'Alphen aan den Rijn', 'Utrecht', 'Woerden']}
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
