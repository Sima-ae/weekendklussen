import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Klein Onderhoud Zoetermeer | Weekend Klussen Klein Onderhoud Zoetermeer',
  description:
    'Klein onderhoud en reparaties in Zoetermeer. Weekend Klussen verzorgt snel en betrouwbaar klein onderhoud in Zoetermeer en omgeving. Reparaties, schilderwerk, timmerwerk en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function KleinOnderhoudZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zoetermeer"
        title="Klein Onderhoud Zoetermeer"
        description="Weekend Klussen is gespecialiseerd in klein onderhoud en reparaties in Zoetermeer. Wij verzorgen snel en betrouwbaar klein onderhoud voor uw woning, van kleine reparaties tot preventief onderhoud."
        nearbyCities={['Den Haag', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Voorburg']}
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
