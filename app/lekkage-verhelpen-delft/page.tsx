import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageVerhelpenContent } from '@/components/pages/LekkageVerhelpenContent';

export const metadata: Metadata = {
  title: 'Lekkage Verhelpen Delft | Weekend Klussen Lekkage Verhelpen Delft',
  description:
    'Professioneel lekkage verhelpen in Delft. Weekend Klussen verzorgt lekkage verhelpen en schadeherstel in Delft. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageVerhelpenDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageVerhelpenContent
        location="Delft"
        title="Lekkage Verhelpen Delft"
        description="Weekend Klussen is uw specialist voor lekkage verhelpen in Delft. Wij verhelpen lekkages professioneel en duurzaam, zodat het probleem definitief is opgelost in Delft en omgeving."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
      />
      <Footer />
    </main>
  );
}
