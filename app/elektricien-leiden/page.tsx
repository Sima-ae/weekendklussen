import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Elektricien Leiden | Weekend Klussen Elektricien Leiden',
  description:
    'Elektricien in Leiden. Weekend Klussen is uw betrouwbare elektricien in Leiden en omgeving. Elektra installatie, reparatie, groepenkast, verlichting en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function ElektricienLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Leiden"
        title="Elektricien Leiden"
        description="Weekend Klussen is uw betrouwbare elektricien in Leiden. Wij verzorgen alle elektra werkzaamheden, van installatie en reparatie tot groepenkast en verlichting. Ervaren elektricien voor al uw elektra werk."
        nearbyCities={['Katwijk', 'Alphen aan den Rijn', 'Zoetermeer', 'Den Haag', 'Voorburg']}
        services={[
          'Elektra installatie en reparatie',
          'Groepenkast en meterkast',
          'Verlichting en armaturen',
          'Stopcontacten en schakelaars',
          'Elektra renovatie en modernisering',
          'Noodservice en storingsdienst',
          'Keuring en certificering'
        ]}
      />
      <Footer />
    </main>
  );
}
