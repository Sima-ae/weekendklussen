import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Verduurzamen Woning Maassluis | Weekend Klussen Woning Verduurzaming Maassluis',
  description:
    'Verduurzamen woning in Maassluis. Weekend Klussen verzorgt complete woning verduurzaming in Maassluis en omgeving. Isolatie, zonnepanelen, warmtepomp, energiebesparing. Vaste prijzen en garantie. Gratis offerte.',
};

export default function VerduurzamenWoningMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Maassluis"
        title="Verduurzamen Woning Maassluis"
        description="Weekend Klussen is gespecialiseerd in verduurzamen woning in Maassluis. Wij verzorgen complete woning verduurzaming met isolatie, zonnepanelen, warmtepompen en energiebesparende maatregelen voor een duurzame en energiezuinige woning."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Westland', 'Delft']}
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
