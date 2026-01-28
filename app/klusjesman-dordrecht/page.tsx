import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Klusjesman Dordrecht | Weekend Klussen Klusjesman Dordrecht',
  description:
    'Klusjesman in Dordrecht. Weekend Klussen is uw betrouwbare klusjesman in Dordrecht en omgeving. Alle klusjes, reparaties, montage en kleine werkzaamheden. Vaste prijzen en garantie. Gratis offerte.',
};

export default function KlusjesmanDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Dordrecht"
        title="Klusjesman Dordrecht"
        description="Weekend Klussen is uw betrouwbare klusjesman in Dordrecht. Wij verzorgen alle klusjes en kleine reparaties, van montage tot timmerwerk en schilderwerk. Ervaren klusjesman voor al uw klusjes."
        nearbyCities={['Papendrecht', 'Sliedrecht', 'Zwijndrecht', 'Rotterdam', 'Barendrecht']}
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
