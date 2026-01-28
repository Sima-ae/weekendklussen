import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aanbouw Alphen aan den Rijn | Weekend Klussen Aanbouw en Uitbouw',
  description:
    'Aanbouw en uitbouw in Alphen aan den Rijn. Weekend Klussen verzorgt complete aanbouwen en uitbouwen in Alphen aan den Rijn en omgeving. Van ontwerp tot oplevering, vaste prijzen en garantie. Gratis offerte voor uw aanbouw.',
};

export default function AanbouwAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Alphen aan den Rijn"
        title="Aanbouw Alphen aan den Rijn"
        description="Weekend Klussen is gespecialiseerd in aanbouw en uitbouw in Alphen aan den Rijn. Wij verzorgen complete aanbouwen van ontwerp tot oplevering, met aandacht voor detail, kwaliteit en bouwvergunningen."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
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
