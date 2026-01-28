import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Klusbedrijf Gouda | Weekend Klussen Klusbedrijf Gouda',
  description:
    'Klusbedrijf in Gouda. Weekend Klussen is uw betrouwbare klusbedrijf in Gouda en omgeving. Alle klussen, reparaties, montage en onderhoud. Vaste prijzen en garantie. Gratis offerte.',
};

export default function KlusbedrijfGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Gouda"
        title="Klusbedrijf Gouda"
        description="Weekend Klussen is uw betrouwbare klusbedrijf in Gouda. Wij verzorgen alle klussen, van kleine reparaties tot grote verbouwingen. Ervaren klussers voor al uw kluswerkzaamheden."
        nearbyCities={['Rotterdam', 'Zoetermeer', 'Alphen aan den Rijn', 'Utrecht', 'Woerden']}
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
