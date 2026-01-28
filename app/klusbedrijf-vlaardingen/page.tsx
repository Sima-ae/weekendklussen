import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Klusbedrijf Vlaardingen | Weekend Klussen Klusbedrijf Vlaardingen',
  description:
    'Klusbedrijf in Vlaardingen. Weekend Klussen is uw betrouwbare klusbedrijf in Vlaardingen en omgeving. Alle klussen, reparaties, montage en onderhoud. Vaste prijzen en garantie. Gratis offerte.',
};

export default function KlusbedrijfVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Vlaardingen"
        title="Klusbedrijf Vlaardingen"
        description="Weekend Klussen is uw betrouwbare klusbedrijf in Vlaardingen. Wij verzorgen alle klussen, van kleine reparaties tot grote verbouwingen. Ervaren klussers voor al uw kluswerkzaamheden."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Westland', 'Delft']}
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
