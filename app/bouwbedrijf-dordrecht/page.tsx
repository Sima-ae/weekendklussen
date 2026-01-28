import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Bouwbedrijf Dordrecht | Weekend Klussen Bouwbedrijf Dordrecht',
  description:
    'Bouwbedrijf in Dordrecht. Weekend Klussen is uw betrouwbare bouwbedrijf in Dordrecht en omgeving. Onderhoud, verbouwing, renovatie en aanbouw. Vaste prijzen en garantie. Gratis offerte.',
};

export default function BouwbedrijfDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Dordrecht"
        title="Bouwbedrijf Dordrecht"
        description="Weekend Klussen is uw betrouwbare bouwbedrijf in Dordrecht. Wij verzorgen alle bouwwerkzaamheden, van onderhoud tot verbouwing en renovatie. Ervaren bouwvakkers voor al uw bouwprojecten."
        nearbyCities={['Papendrecht', 'Sliedrecht', 'Zwijndrecht', 'Rotterdam', 'Barendrecht']}
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
