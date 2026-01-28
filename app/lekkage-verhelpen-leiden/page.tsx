import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageVerhelpenContent } from '@/components/pages/LekkageVerhelpenContent';

export const metadata: Metadata = {
  title: 'Lekkage Verhelpen Leiden | Weekend Klussen Lekkage Verhelpen Leiden',
  description:
    'Professioneel lekkage verhelpen in Leiden. Weekend Klussen verzorgt lekkage verhelpen en schadeherstel in Leiden. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageVerhelpenLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageVerhelpenContent
        location="Leiden"
        title="Lekkage Verhelpen Leiden"
        description="Weekend Klussen is uw specialist voor lekkage verhelpen in Leiden. Wij verhelpen lekkages professioneel en duurzaam, zodat het probleem definitief is opgelost in Leiden en omgeving."
        nearbyCities={['Den Haag', 'Zoetermeer', 'Alphen aan den Rijn', 'Katwijk', 'Oegstgeest']}
      />
      <Footer />
    </main>
  );
}
