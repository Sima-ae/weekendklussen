import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageOnderzoekenContent } from '@/components/pages/LekkageOnderzoekenContent';

export const metadata: Metadata = {
  title: 'Lekkage Onderzoeken | Weekend Klussen Lekkage Onderzoeken Specialist',
  description:
    'Professioneel lekkage onderzoeken in Zuid-Holland. Weekend Klussen verzorgt grondig lekkage onderzoek met moderne technieken. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageOnderzoekenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageOnderzoekenContent
        location="Zuid-Holland"
        title="Lekkage Onderzoeken"
        description="Weekend Klussen is uw specialist voor lekkage onderzoeken in Zuid-Holland. Wij voeren een systematisch onderzoek uit met moderne technieken om alle aspecten van de lekkage in kaart te brengen."
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Leiden', 'Dordrecht', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn']}
      />
      <Footer />
    </main>
  );
}
