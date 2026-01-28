import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Dak Renoveren Zoetermeer | Weekend Klussen Dak Renovatie Zoetermeer',
  description:
    'Dak renoveren en dakreparatie in Zoetermeer. Weekend Klussen verzorgt complete dak renovaties in Zoetermeer en omgeving. Dakreparatie, lekkage, houtrot, isolatie en onderhoud. Vaste prijzen en garantie. Gratis offerte.',
};

export default function DakRenoverenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zoetermeer"
        title="Dak Renoveren Zoetermeer"
        description="Weekend Klussen is gespecialiseerd in dak renoveren en dakreparatie in Zoetermeer. Wij verzorgen complete dak renovaties, lekkage reparatie, houtrot behandeling en dakonderhoud van ontwerp tot oplevering."
        nearbyCities={['Den Haag', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Voorburg']}
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
