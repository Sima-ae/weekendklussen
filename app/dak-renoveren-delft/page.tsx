import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Dak Renoveren Delft | Weekend Klussen Dak Renovatie Delft',
  description:
    'Dak renoveren en dakreparatie in Delft. Weekend Klussen verzorgt complete dak renovaties in Delft en omgeving. Dakreparatie, lekkage, houtrot, isolatie en onderhoud. Vaste prijzen en garantie. Gratis offerte.',
};

export default function DakRenoverenDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Delft"
        title="Dak Renoveren Delft"
        description="Weekend Klussen is gespecialiseerd in dak renoveren en dakreparatie in Delft. Wij verzorgen complete dak renovaties, lekkage reparatie, houtrot behandeling en dakonderhoud van ontwerp tot oplevering."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
        services={[
          'Complete dak renovatie',
          'Daklekkage reparatie en lekdetectie',
          'Houtrot behandeling en reparatie',
          'Dak isolatie en energiebesparing',
          'Dakbedekking vervangen',
          'Dakgoot reinigen en repareren',
          'Dakonderhoud en inspectie'
        ]}
      />
      <Footer />
    </main>
  );
}
