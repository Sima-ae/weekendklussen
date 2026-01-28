import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Klusbedrijf Den Haag | Weekend Klussen Klusbedrijf Den Haag',
  description:
    'Klusbedrijf in Den Haag. Weekend Klussen is uw betrouwbare klusbedrijf in Den Haag en omgeving. Alle klussen, reparaties, montage en onderhoud. Vaste prijzen en garantie. Gratis offerte.',
};

export default function KlusbedrijfDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Den Haag"
        title="Klusbedrijf Den Haag"
        description="Weekend Klussen is uw betrouwbare klusbedrijf in Den Haag. Wij verzorgen alle klussen, van kleine reparaties tot grote verbouwingen. Ervaren klussers voor al uw kluswerkzaamheden."
        nearbyCities={['Rijswijk', 'Voorburg', 'Zoetermeer', 'Westland', 'Delft', 'Leiden']}
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
