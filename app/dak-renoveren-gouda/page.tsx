import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Dak Renoveren Gouda | Weekend Klussen Dak Renovatie Gouda',
  description:
    'Dak renoveren en dakreparatie in Gouda. Weekend Klussen verzorgt complete dak renovaties in Gouda en omgeving. Dakreparatie, lekkage, houtrot, isolatie en onderhoud. Vaste prijzen en garantie. Gratis offerte.',
};

export default function DakRenoverenGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Gouda"
        title="Dak Renoveren Gouda"
        description="Weekend Klussen is gespecialiseerd in dak renoveren en dakreparatie in Gouda. Wij verzorgen complete dak renovaties, lekkage reparatie, houtrot behandeling en dakonderhoud van ontwerp tot oplevering."
        nearbyCities={['Rotterdam', 'Zoetermeer', 'Alphen aan den Rijn', 'Utrecht', 'Woerden']}
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
