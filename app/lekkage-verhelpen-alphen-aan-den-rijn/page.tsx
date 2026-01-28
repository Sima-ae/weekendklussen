import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageVerhelpenContent } from '@/components/pages/LekkageVerhelpenContent';

export const metadata: Metadata = {
  title: 'Lekkage Verhelpen Alphen aan den Rijn | Weekend Klussen Lekkage Verhelpen Alphen aan den Rijn',
  description:
    'Professioneel lekkage verhelpen in Alphen aan den Rijn. Weekend Klussen verzorgt lekkage verhelpen en schadeherstel in Alphen aan den Rijn. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageVerhelpenAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageVerhelpenContent
        location="Alphen aan den Rijn"
        title="Lekkage Verhelpen Alphen aan den Rijn"
        description="Weekend Klussen is uw specialist voor lekkage verhelpen in Alphen aan den Rijn. Wij verhelpen lekkages professioneel en duurzaam, zodat het probleem definitief is opgelost in Alphen aan den Rijn en omgeving."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
      />
      <Footer />
    </main>
  );
}
