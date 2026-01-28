import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Bouwbedrijf Delft | Weekend Klussen Bouwbedrijf Delft',
  description:
    'Bouwbedrijf in Delft. Weekend Klussen is uw betrouwbare bouwbedrijf in Delft en omgeving. Onderhoud, verbouwing, renovatie en aanbouw. Vaste prijzen en garantie. Gratis offerte.',
};

export default function BouwbedrijfDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Delft"
        title="Bouwbedrijf Delft"
        description="Weekend Klussen is uw betrouwbare bouwbedrijf in Delft. Wij verzorgen alle bouwwerkzaamheden, van onderhoud tot verbouwing en renovatie. Ervaren bouwvakkers voor al uw bouwprojecten."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
        services={[
          'Onderhoud',
          'Verbouwing en renovatie',
          'Aanbouw en uitbouw',
          'Fundering en constructie',
          'Metselwerk en betonwerk',
          'Dakwerk en gevelwerk',
          'Afbouw en afwerking'
        ]}
      />
      <Footer />
    </main>
  );
}
