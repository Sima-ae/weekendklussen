import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageVerhelpenContent } from '@/components/pages/LekkageVerhelpenContent';

export const metadata: Metadata = {
  title: 'Lekkage Verhelpen Gouda | Weekend Klussen Lekkage Verhelpen Gouda',
  description:
    'Professioneel lekkage verhelpen in Gouda. Weekend Klussen verzorgt lekkage verhelpen en schadeherstel in Gouda. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageVerhelpenGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageVerhelpenContent
        location="Gouda"
        title="Lekkage Verhelpen Gouda"
        description="Weekend Klussen is uw specialist voor lekkage verhelpen in Gouda. Wij verhelpen lekkages professioneel en duurzaam, zodat het probleem definitief is opgelost in Gouda en omgeving."
        nearbyCities={['Zoetermeer', 'Rotterdam', 'Utrecht', 'Woerden', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}
