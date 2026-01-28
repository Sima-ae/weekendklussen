import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageVerhelpenContent } from '@/components/pages/LekkageVerhelpenContent';

export const metadata: Metadata = {
  title: 'Lekkage Verhelpen Zoetermeer | Weekend Klussen Lekkage Verhelpen Zoetermeer',
  description:
    'Professioneel lekkage verhelpen in Zoetermeer. Weekend Klussen verzorgt lekkage verhelpen en schadeherstel in Zoetermeer. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageVerhelpenZoetermeerPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageVerhelpenContent
        location="Zoetermeer"
        title="Lekkage Verhelpen Zoetermeer"
        description="Weekend Klussen is uw specialist voor lekkage verhelpen in Zoetermeer. Wij verhelpen lekkages professioneel en duurzaam, zodat het probleem definitief is opgelost in Zoetermeer en omgeving."
        nearbyCities={['Den Haag', 'Delft', 'Leiden', 'Gouda', 'Pijnacker-Nootdorp']}
      />
      <Footer />
    </main>
  );
}
