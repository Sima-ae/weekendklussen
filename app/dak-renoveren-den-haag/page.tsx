import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Dak Renoveren Den Haag | Weekend Klussen Dak Renovatie Den Haag',
  description:
    'Dak renoveren en dakreparatie in Den Haag. Weekend Klussen verzorgt complete dak renovaties in Den Haag en omgeving. Dakreparatie, lekkage, houtrot, isolatie en onderhoud. Vaste prijzen en garantie. Gratis offerte.',
};

export default function DakRenoverenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Den Haag"
        title="Dak Renoveren Den Haag"
        description="Weekend Klussen is gespecialiseerd in dak renoveren en dakreparatie in Den Haag. Wij verzorgen complete dak renovaties, lekkage reparatie, houtrot behandeling en dakonderhoud van ontwerp tot oplevering."
        nearbyCities={['Rijswijk', 'Voorburg', 'Zoetermeer', 'Westland', 'Delft', 'Leiden']}
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
