import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aanbouw Dordrecht | Weekend Klussen Aanbouw en Uitbouw Dordrecht',
  description:
    'Aanbouw en uitbouw in Dordrecht. Weekend Klussen verzorgt complete aanbouwen en uitbouwen in Dordrecht en omgeving. Van ontwerp tot oplevering, vaste prijzen en garantie. Gratis offerte voor uw aanbouw.',
};

export default function AanbouwDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Dordrecht"
        title="Aanbouw Dordrecht"
        description="Weekend Klussen is gespecialiseerd in aanbouw en uitbouw in Dordrecht. Wij verzorgen complete aanbouwen van ontwerp tot oplevering, met aandacht voor detail, kwaliteit en bouwvergunningen."
        nearbyCities={['Papendrecht', 'Sliedrecht', 'Zwijndrecht', 'Rotterdam', 'Barendrecht']}
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
