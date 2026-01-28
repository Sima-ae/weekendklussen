import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Klein Onderhoud Alphen aan den Rijn | Weekend Klussen Klein Onderhoud',
  description:
    'Klein onderhoud en reparaties in Alphen aan den Rijn. Weekend Klussen verzorgt snel en betrouwbaar klein onderhoud in Alphen aan den Rijn en omgeving. Reparaties, schilderwerk, timmerwerk en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function KleinOnderhoudAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Alphen aan den Rijn"
        title="Klein Onderhoud Alphen aan den Rijn"
        description="Weekend Klussen is gespecialiseerd in klein onderhoud en reparaties in Alphen aan den Rijn. Wij verzorgen snel en betrouwbaar klein onderhoud voor uw woning, van kleine reparaties tot preventief onderhoud."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
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
