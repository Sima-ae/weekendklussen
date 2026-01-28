import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageVerhelpenContent } from '@/components/pages/LekkageVerhelpenContent';

export const metadata: Metadata = {
  title: 'Lekkage Verhelpen Den Haag | Weekend Klussen Lekkage Verhelpen Den Haag',
  description:
    'Professioneel lekkage verhelpen in Den Haag. Weekend Klussen verzorgt lekkage verhelpen en schadeherstel in Den Haag. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageVerhelpenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageVerhelpenContent
        location="Den Haag"
        title="Lekkage Verhelpen Den Haag"
        description="Weekend Klussen is uw specialist voor lekkage verhelpen in Den Haag. Wij verhelpen lekkages professioneel en duurzaam, zodat het probleem definitief is opgelost in Den Haag en omgeving."
        nearbyCities={['Rijswijk', 'Delft', 'Zoetermeer', 'Leiden', 'Voorburg']}
      />
      <Footer />
    </main>
  );
}
