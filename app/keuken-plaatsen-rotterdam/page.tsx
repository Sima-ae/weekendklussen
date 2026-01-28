import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Keuken Plaatsen Rotterdam | Weekend Klussen Keuken Installatie Rotterdam',
  description:
    'Keuken plaatsen en installatie in Rotterdam. Weekend Klussen verzorgt complete keuken installaties in Rotterdam en omgeving. Van ontwerp tot oplevering, vaste prijzen en garantie. Gratis offerte voor uw keuken plaatsen.',
};

export default function KeukenPlaatsenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Rotterdam"
        title="Keuken Plaatsen Rotterdam"
        description="Weekend Klussen is gespecialiseerd in keuken plaatsen en installatie in Rotterdam. Wij verzorgen complete keuken installaties van ontwerp tot oplevering, met aandacht voor detail en kwaliteit."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
        services={[
          'Complete keuken installatie',
          'Keuken ontwerp en advies',
          'Keukenmontage en plaatsing',
          'Keuken elektra en wateraansluitingen',
          'Keukenapparatuur installatie',
          'Keukenwerkbladen plaatsen',
          'Keuken tegels en achterwand'
        ]}
      />
      <Footer />
    </main>
  );
}
