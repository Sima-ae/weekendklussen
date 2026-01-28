import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Onderhoud Woning Delft | Weekend Klussen Woning Onderhoud Delft',
  description:
    'Onderhoud woning en klein onderhoud in Delft. Weekend Klussen verzorgt preventief en curatief woningonderhoud in Delft en omgeving. Reparaties, schilderwerk, timmerwerk en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function OnderhoudWoningDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Delft"
        title="Onderhoud Woning Delft"
        description="Weekend Klussen is gespecialiseerd in onderhoud woning en klein onderhoud in Delft. Wij verzorgen preventief en curatief woningonderhoud, reparaties en onderhoudswerkzaamheden om uw woning in perfecte staat te houden."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
        services={[
          'Preventief woningonderhoud',
          'Klein onderhoud en reparaties',
          'Schilderwerk en houtrot behandeling',
          'Timmerwerk en metselwerk',
          'Dakonderhoud en lekkage reparatie',
          'Loodgieterswerk en sanitair',
          'Elektra reparaties en onderhoud'
        ]}
      />
      <Footer />
    </main>
  );
}
