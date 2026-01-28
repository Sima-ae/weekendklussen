import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Groot Onderhoud Zoetermeer | Weekend Klussen Groot Onderhoud Zoetermeer',
  description:
    'Groot onderhoud en periodiek onderhoud in Zoetermeer. Weekend Klussen verzorgt complete groot onderhoud in Zoetermeer en omgeving. Periodiek onderhoud, renovatie, schilderwerk en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function GrootOnderhoudZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zoetermeer"
        title="Groot Onderhoud Zoetermeer"
        description="Weekend Klussen is gespecialiseerd in groot onderhoud en periodiek onderhoud in Zoetermeer. Wij verzorgen complete groot onderhoud voor uw woning, van periodiek onderhoud tot grote renovaties en moderniseringen."
        nearbyCities={['Den Haag', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp', 'Voorburg']}
        services={[
          'Groot onderhoud en periodiek onderhoud',
          'Complete schilderwerk en houtrot behandeling',
          'Dakrenovatie en groot onderhoud',
          'Gevelrenovatie en metselwerk',
          'Timmerwerk en kozijnen vervanging',
          'Loodgieterswerk en sanitair renovatie',
          'Elektra renovatie en modernisering'
        ]}
      />
      <Footer />
    </main>
  );
}
