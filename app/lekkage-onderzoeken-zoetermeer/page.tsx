import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageOnderzoekenContent } from '@/components/pages/LekkageOnderzoekenContent';

export const metadata: Metadata = {
  title: 'Lekkage Onderzoeken Zoetermeer | Weekend Klussen Lekkage Onderzoeken Zoetermeer',
  description:
    'Professioneel lekkage onderzoeken in Zoetermeer. Weekend Klussen verzorgt grondig lekkage onderzoek met moderne technieken in Zoetermeer. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageOnderzoekenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageOnderzoekenContent
        location="Zoetermeer"
        title="Lekkage Onderzoeken Zoetermeer"
        description="Weekend Klussen is uw specialist voor lekkage onderzoeken in Zoetermeer. Wij voeren een systematisch onderzoek uit met moderne technieken om alle aspecten van de lekkage in kaart te brengen in Zoetermeer en omgeving."
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp']}
      />
      <Footer />
    </main>
  );
}
