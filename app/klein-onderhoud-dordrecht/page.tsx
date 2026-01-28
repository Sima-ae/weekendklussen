import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Klein Onderhoud Dordrecht | Weekend Klussen Klein Onderhoud Dordrecht',
  description:
    'Klein onderhoud en reparaties in Dordrecht. Weekend Klussen verzorgt snel en betrouwbaar klein onderhoud in Dordrecht en omgeving. Reparaties, schilderwerk, timmerwerk en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function KleinOnderhoudDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Dordrecht"
        title="Klein Onderhoud Dordrecht"
        description="Weekend Klussen is gespecialiseerd in klein onderhoud en reparaties in Dordrecht. Wij verzorgen snel en betrouwbaar klein onderhoud voor uw woning, van kleine reparaties tot preventief onderhoud."
        nearbyCities={['Papendrecht', 'Sliedrecht', 'Zwijndrecht', 'Rotterdam', 'Barendrecht']}
        services={[
          'Klein onderhoud en reparaties',
          'Schilderwerk en houtrot behandeling',
          'Timmerwerk en metselwerk',
          'Loodgieterswerk en sanitair reparaties',
          'Elektra reparaties en onderhoud',
          'Dakreparatie en lekkage',
          'Snel ter plaatse en vaste prijzen'
        ]}
      />
      <Footer />
    </main>
  );
}
