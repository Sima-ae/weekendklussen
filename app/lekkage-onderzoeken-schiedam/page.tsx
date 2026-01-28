import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageOnderzoekenContent } from '@/components/pages/LekkageOnderzoekenContent';

export const metadata: Metadata = {
  title: 'Lekkage Onderzoeken Schiedam | Weekend Klussen Lekkage Onderzoeken Schiedam',
  description:
    'Professioneel lekkage onderzoeken in Schiedam. Weekend Klussen verzorgt grondig lekkage onderzoek met moderne technieken in Schiedam. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageOnderzoekenSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageOnderzoekenContent
        location="Schiedam"
        title="Lekkage Onderzoeken Schiedam"
        description="Weekend Klussen is uw specialist voor lekkage onderzoeken in Schiedam. Wij voeren een systematisch onderzoek uit met moderne technieken om alle aspecten van de lekkage in kaart te brengen in Schiedam en omgeving."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}
