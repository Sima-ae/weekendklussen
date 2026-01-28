import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageOnderzoekenContent } from '@/components/pages/LekkageOnderzoekenContent';

export const metadata: Metadata = {
  title: 'Lekkage Onderzoeken Dordrecht | Weekend Klussen Lekkage Onderzoeken Dordrecht',
  description:
    'Professioneel lekkage onderzoeken in Dordrecht. Weekend Klussen verzorgt grondig lekkage onderzoek met moderne technieken in Dordrecht. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageOnderzoekenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageOnderzoekenContent
        location="Dordrecht"
        title="Lekkage Onderzoeken Dordrecht"
        description="Weekend Klussen is uw specialist voor lekkage onderzoeken in Dordrecht. Wij voeren een systematisch onderzoek uit met moderne technieken om alle aspecten van de lekkage in kaart te brengen in Dordrecht en omgeving."
        nearbyCities={['Rotterdam', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht', 'Gorinchem']}
      />
      <Footer />
    </main>
  );
}
