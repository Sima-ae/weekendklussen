import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aanbouw Gouda | Weekend Klussen Aanbouw en Uitbouw Gouda',
  description:
    'Aanbouw en uitbouw in Gouda. Weekend Klussen verzorgt complete aanbouwen en uitbouwen in Gouda en omgeving. Van ontwerp tot oplevering, vaste prijzen en garantie. Gratis offerte voor uw aanbouw.',
};

export default function AanbouwGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Gouda"
        title="Aanbouw Gouda"
        description="Weekend Klussen is gespecialiseerd in aanbouw en uitbouw in Gouda. Wij verzorgen complete aanbouwen van ontwerp tot oplevering, met aandacht voor detail, kwaliteit en bouwvergunningen."
        nearbyCities={['Rotterdam', 'Zoetermeer', 'Alphen aan den Rijn', 'Utrecht', 'Woerden']}
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
