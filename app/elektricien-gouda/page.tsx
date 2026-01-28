import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Elektricien Gouda | Weekend Klussen Elektricien Gouda',
  description:
    'Elektricien in Gouda. Weekend Klussen is uw betrouwbare elektricien in Gouda en omgeving. Elektra installatie, reparatie, groepenkast, verlichting en meer. Vaste prijzen en garantie. Gratis offerte.',
};

export default function ElektricienGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Gouda"
        title="Elektricien Gouda"
        description="Weekend Klussen is uw betrouwbare elektricien in Gouda. Wij verzorgen alle elektra werkzaamheden, van installatie en reparatie tot groepenkast en verlichting. Ervaren elektricien voor al uw elektra werk."
        nearbyCities={['Rotterdam', 'Zoetermeer', 'Alphen aan den Rijn', 'Utrecht', 'Woerden']}
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
