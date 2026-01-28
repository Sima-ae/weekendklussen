import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageOnderzoekenContent } from '@/components/pages/LekkageOnderzoekenContent';

export const metadata: Metadata = {
  title: 'Lekkage Onderzoeken Den Haag | Weekend Klussen Lekkage Onderzoeken Den Haag',
  description:
    'Professioneel lekkage onderzoeken in Den Haag. Weekend Klussen verzorgt grondig lekkage onderzoek met moderne technieken in Den Haag. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageOnderzoekenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageOnderzoekenContent
        location="Den Haag"
        title="Lekkage Onderzoeken Den Haag"
        description="Weekend Klussen is uw specialist voor lekkage onderzoeken in Den Haag. Wij voeren een systematisch onderzoek uit met moderne technieken om alle aspecten van de lekkage in kaart te brengen in Den Haag en omgeving."
        nearbyCities={['Rijswijk', 'Delft', 'Zoetermeer', 'Leiden', 'Voorburg']}
      />
      <Footer />
    </main>
  );
}
