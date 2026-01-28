import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageVerhelpenContent } from '@/components/pages/LekkageVerhelpenContent';

export const metadata: Metadata = {
  title: 'Lekkage Verhelpen | Weekend Klussen Lekkage Verhelpen Specialist',
  description:
    'Professioneel lekkage verhelpen in Zuid-Holland. Weekend Klussen verzorgt lekkage verhelpen en schadeherstel. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageVerhelpenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageVerhelpenContent
        location="Zuid-Holland"
        title="Lekkage Verhelpen"
        description="Weekend Klussen is uw specialist voor lekkage verhelpen in Zuid-Holland. Wij verhelpen lekkages professioneel en duurzaam, zodat het probleem definitief is opgelost."
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Leiden', 'Dordrecht', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn']}
      />
      <Footer />
    </main>
  );
}
