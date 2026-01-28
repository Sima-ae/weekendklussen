import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KeukenMonteurContent } from '@/components/pages/KeukenMonteurContent';

export const metadata: Metadata = {
  title: 'Keuken Monteur Vlaardingen | Weekend Klussen Keuken Monteur Vlaardingen',
  description:
    'Professionele keuken monteur in Vlaardingen. Weekend Klussen verzorgt keuken plaatsen, monteren, apparatuur aansluiten en keukenrenovatie in Vlaardingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function KeukenMonteurVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <KeukenMonteurContent
        location="Vlaardingen"
        title="Keuken Monteur Vlaardingen"
        description="Weekend Klussen is uw betrouwbare keuken monteur in Vlaardingen. Wij verzorgen alle keukenmontage werkzaamheden van plaatsing tot apparatuur aansluiten, inclusief complete keukenrenovatie in Vlaardingen en omgeving."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}
