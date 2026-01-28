import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Dak Renoveren Rotterdam | Weekend Klussen Dak Renovatie Rotterdam',
  description:
    'Dak renoveren en dakreparatie in Rotterdam. Weekend Klussen verzorgt complete dak renovaties in Rotterdam en omgeving. Dakreparatie, lekkage, houtrot, isolatie en onderhoud. Vaste prijzen en garantie. Gratis offerte.',
};

export default function DakRenoverenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Rotterdam"
        title="Dak Renoveren Rotterdam"
        description="Weekend Klussen is gespecialiseerd in dak renoveren en dakreparatie in Rotterdam. Wij verzorgen complete dak renovaties, lekkage reparatie, houtrot behandeling en dakonderhoud van ontwerp tot oplevering."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
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
