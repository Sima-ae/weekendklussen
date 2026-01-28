import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageVerhelpenContent } from '@/components/pages/LekkageVerhelpenContent';

export const metadata: Metadata = {
  title: 'Lekkage Verhelpen Dordrecht | Weekend Klussen Lekkage Verhelpen Dordrecht',
  description:
    'Professioneel lekkage verhelpen in Dordrecht. Weekend Klussen verzorgt lekkage verhelpen en schadeherstel in Dordrecht. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageVerhelpenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageVerhelpenContent
        location="Dordrecht"
        title="Lekkage Verhelpen Dordrecht"
        description="Weekend Klussen is uw specialist voor lekkage verhelpen in Dordrecht. Wij verhelpen lekkages professioneel en duurzaam, zodat het probleem definitief is opgelost in Dordrecht en omgeving."
        nearbyCities={['Rotterdam', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht', 'Gorinchem']}
      />
      <Footer />
    </main>
  );
}
