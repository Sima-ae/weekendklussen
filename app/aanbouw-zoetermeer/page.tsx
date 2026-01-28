import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aanbouw Zoetermeer | Weekend Klussen Aanbouw en Uitbouw Zoetermeer',
  description:
    'Aanbouw en uitbouw in Zoetermeer. Weekend Klussen verzorgt complete aanbouwen en uitbouwen in Zoetermeer en omgeving. Van ontwerp tot oplevering, vaste prijzen en garantie. Gratis offerte voor uw aanbouw.',
};

export default function AanbouwZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zoetermeer"
        title="Aanbouw Zoetermeer"
        description="Weekend Klussen is gespecialiseerd in aanbouw en uitbouw in Zoetermeer. Wij verzorgen complete aanbouwen van ontwerp tot oplevering, met aandacht voor detail, kwaliteit en bouwvergunningen."
        nearbyCities={['Den Haag', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Voorburg']}
        services={[
          'Complete aanbouw en uitbouw',
          'Aanbouw ontwerp en advies',
          'Bouwvergunning aanvragen',
          'Fundering en constructie',
          'Dakkapel plaatsen',
          'Aanbouw afwerking en isolatie',
          'Elektra en wateraansluitingen aanbouw'
        ]}
      />
      <Footer />
    </main>
  );
}
