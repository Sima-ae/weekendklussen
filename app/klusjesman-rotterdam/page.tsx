import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Klusjesman Rotterdam | Weekend Klussen Klusjesman Rotterdam',
  description:
    'Klusjesman in Rotterdam. Weekend Klussen is uw betrouwbare klusjesman in Rotterdam en omgeving. Alle klusjes, reparaties, montage en kleine werkzaamheden. Vaste prijzen en garantie. Gratis offerte.',
};

export default function KlusjesmanRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Rotterdam"
        title="Klusjesman Rotterdam"
        description="Weekend Klussen is uw betrouwbare klusjesman in Rotterdam. Wij verzorgen alle klusjes en kleine reparaties, van montage tot timmerwerk en schilderwerk. Ervaren klusjesman voor al uw klusjes."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
        services={[
          'Alle klusjes en kleine reparaties',
          'Montage en demontage',
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
