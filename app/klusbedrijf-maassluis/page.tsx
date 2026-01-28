import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Klusbedrijf Maassluis | Weekend Klussen Klusbedrijf Maassluis',
  description:
    'Klusbedrijf in Maassluis. Weekend Klussen is uw betrouwbare klusbedrijf in Maassluis en omgeving. Alle klussen, reparaties, montage en onderhoud. Vaste prijzen en garantie. Gratis offerte.',
};

export default function KlusbedrijfMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Maassluis"
        title="Klusbedrijf Maassluis"
        description="Weekend Klussen is uw betrouwbare klusbedrijf in Maassluis. Wij verzorgen alle klussen, van kleine reparaties tot grote verbouwingen. Ervaren klussers voor al uw kluswerkzaamheden."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Westland', 'Delft']}
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
