import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Keuken Plaatsen Alphen aan den Rijn | Weekend Klussen Keuken Installatie',
  description:
    'Keuken plaatsen en installatie in Alphen aan den Rijn. Weekend Klussen verzorgt complete keuken installaties in Alphen aan den Rijn en omgeving. Van ontwerp tot oplevering, vaste prijzen en garantie. Gratis offerte voor uw keuken plaatsen.',
};

export default function KeukenPlaatsenAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Alphen aan den Rijn"
        title="Keuken Plaatsen Alphen aan den Rijn"
        description="Weekend Klussen is gespecialiseerd in keuken plaatsen en installatie in Alphen aan den Rijn. Wij verzorgen complete keuken installaties van ontwerp tot oplevering, met aandacht voor detail en kwaliteit."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
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
