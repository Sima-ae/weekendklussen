import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Verduurzamen Woning Rotterdam | Weekend Klussen Woning Verduurzaming Rotterdam',
  description:
    'Verduurzamen woning in Rotterdam. Weekend Klussen verzorgt complete woning verduurzaming in Rotterdam en omgeving. Isolatie, zonnepanelen, warmtepomp, energiebesparing. Vaste prijzen en garantie. Gratis offerte.',
};

export default function VerduurzamenWoningRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Rotterdam"
        title="Verduurzamen Woning Rotterdam"
        description="Weekend Klussen is gespecialiseerd in verduurzamen woning in Rotterdam. Wij verzorgen complete woning verduurzaming met isolatie, zonnepanelen, warmtepompen en energiebesparende maatregelen voor een duurzame en energiezuinige woning."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
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
