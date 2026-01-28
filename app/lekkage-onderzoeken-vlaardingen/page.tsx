import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageOnderzoekenContent } from '@/components/pages/LekkageOnderzoekenContent';

export const metadata: Metadata = {
  title: 'Lekkage Onderzoeken Vlaardingen | Weekend Klussen Lekkage Onderzoeken Vlaardingen',
  description:
    'Professioneel lekkage onderzoeken in Vlaardingen. Weekend Klussen verzorgt grondig lekkage onderzoek met moderne technieken in Vlaardingen. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageOnderzoekenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageOnderzoekenContent
        location="Vlaardingen"
        title="Lekkage Onderzoeken Vlaardingen"
        description="Weekend Klussen is uw specialist voor lekkage onderzoeken in Vlaardingen. Wij voeren een systematisch onderzoek uit met moderne technieken om alle aspecten van de lekkage in kaart te brengen in Vlaardingen en omgeving."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}
