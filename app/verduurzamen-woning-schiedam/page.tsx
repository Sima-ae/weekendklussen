import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Verduurzamen Woning Schiedam | Weekend Klussen Woning Verduurzaming Schiedam',
  description:
    'Verduurzamen woning in Schiedam. Weekend Klussen verzorgt complete woning verduurzaming in Schiedam en omgeving. Isolatie, zonnepanelen, warmtepomp, energiebesparing. Vaste prijzen en garantie. Gratis offerte.',
};

export default function VerduurzamenWoningSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Schiedam"
        title="Verduurzamen Woning Schiedam"
        description="Weekend Klussen is gespecialiseerd in verduurzamen woning in Schiedam. Wij verzorgen complete woning verduurzaming met isolatie, zonnepanelen, warmtepompen en energiebesparende maatregelen voor een duurzame en energiezuinige woning."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Capelle aan den IJssel']}
        services={[
          'Complete woning verduurzaming',
          'Woning isolatie (spouwmuur, dak, vloer)',
          'Zonnepanelen installatie',
          'Warmtepomp plaatsen',
          'HR++ glas en kozijnen',
          'Ventilatie systemen',
          'Energieadvies en subsidie aanvragen'
        ]}
      />
      <Footer />
    </main>
  );
}
