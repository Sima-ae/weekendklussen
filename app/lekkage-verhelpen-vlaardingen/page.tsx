import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageVerhelpenContent } from '@/components/pages/LekkageVerhelpenContent';

export const metadata: Metadata = {
  title: 'Lekkage Verhelpen Vlaardingen | Weekend Klussen Lekkage Verhelpen Vlaardingen',
  description:
    'Professioneel lekkage verhelpen in Vlaardingen. Weekend Klussen verzorgt lekkage verhelpen en schadeherstel in Vlaardingen. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageVerhelpenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageVerhelpenContent
        location="Vlaardingen"
        title="Lekkage Verhelpen Vlaardingen"
        description="Weekend Klussen is uw specialist voor lekkage verhelpen in Vlaardingen. Wij verhelpen lekkages professioneel en duurzaam, zodat het probleem definitief is opgelost in Vlaardingen en omgeving."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}
