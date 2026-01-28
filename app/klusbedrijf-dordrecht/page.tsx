import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Klusbedrijf Dordrecht | Weekend Klussen Klusbedrijf Dordrecht',
  description:
    'Klusbedrijf in Dordrecht. Weekend Klussen is uw betrouwbare klusbedrijf in Dordrecht en omgeving. Alle klussen, reparaties, montage en onderhoud. Vaste prijzen en garantie. Gratis offerte.',
};

export default function KlusbedrijfDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Dordrecht"
        title="Klusbedrijf Dordrecht"
        description="Weekend Klussen is uw betrouwbare klusbedrijf in Dordrecht. Wij verzorgen alle klussen, van kleine reparaties tot grote verbouwingen. Ervaren klussers voor al uw kluswerkzaamheden."
        nearbyCities={['Papendrecht', 'Sliedrecht', 'Zwijndrecht', 'Rotterdam', 'Barendrecht']}
        services={[
          'Alle klussen en reparaties',
          'Montage en demontage werkzaamheden',
          'Timmerwerk en houtbewerking',
          'Schilderwerk en behangen',
          'Loodgieterswerk en sanitair',
          'Elektra werkzaamheden',
          'Vloeren leggen en tegelen'
        ]}
      />
      <Footer />
    </main>
  );
}
