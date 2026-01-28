import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageVerhelpenContent } from '@/components/pages/LekkageVerhelpenContent';

export const metadata: Metadata = {
  title: 'Lekkage Verhelpen Schiedam | Weekend Klussen Lekkage Verhelpen Schiedam',
  description:
    'Professioneel lekkage verhelpen in Schiedam. Weekend Klussen verzorgt lekkage verhelpen en schadeherstel in Schiedam. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageVerhelpenSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageVerhelpenContent
        location="Schiedam"
        title="Lekkage Verhelpen Schiedam"
        description="Weekend Klussen is uw specialist voor lekkage verhelpen in Schiedam. Wij verhelpen lekkages professioneel en duurzaam, zodat het probleem definitief is opgelost in Schiedam en omgeving."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}
