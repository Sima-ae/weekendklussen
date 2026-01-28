import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Klein Onderhoud Maassluis | Weekend Klussen Klein Onderhoud Maassluis',
  description:
    'Klein onderhoud en reparaties in Maassluis. Weekend Klussen verzorgt snel en betrouwbaar klein onderhoud in Maassluis en omgeving. Reparaties, schilderwerk, timmerwerk en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function KleinOnderhoudMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Maassluis"
        title="Klein Onderhoud Maassluis"
        description="Weekend Klussen is gespecialiseerd in klein onderhoud en reparaties in Maassluis. Wij verzorgen snel en betrouwbaar klein onderhoud voor uw woning, van kleine reparaties tot preventief onderhoud."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Westland', 'Delft']}
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
