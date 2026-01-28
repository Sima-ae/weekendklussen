import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Bouwbedrijf Zoetermeer | Weekend Klussen Bouwbedrijf Zoetermeer',
  description:
    'Bouwbedrijf in Zoetermeer. Weekend Klussen is uw betrouwbare bouwbedrijf in Zoetermeer en omgeving. Onderhoud, verbouwing, renovatie en aanbouw. Vaste prijzen en garantie. Gratis offerte.',
};

export default function BouwbedrijfZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zoetermeer"
        title="Bouwbedrijf Zoetermeer"
        description="Weekend Klussen is uw betrouwbare bouwbedrijf in Zoetermeer. Wij verzorgen alle bouwwerkzaamheden, van onderhoud tot verbouwing en renovatie. Ervaren bouwvakkers voor al uw bouwprojecten."
        nearbyCities={['Den Haag', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Voorburg']}
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
