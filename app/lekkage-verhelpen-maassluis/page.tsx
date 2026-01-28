import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageVerhelpenContent } from '@/components/pages/LekkageVerhelpenContent';

export const metadata: Metadata = {
  title: 'Lekkage Verhelpen Maassluis | Weekend Klussen Lekkage Verhelpen Maassluis',
  description:
    'Professioneel lekkage verhelpen in Maassluis. Weekend Klussen verzorgt lekkage verhelpen en schadeherstel in Maassluis. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageVerhelpenMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageVerhelpenContent
        location="Maassluis"
        title="Lekkage Verhelpen Maassluis"
        description="Weekend Klussen is uw specialist voor lekkage verhelpen in Maassluis. Wij verhelpen lekkages professioneel en duurzaam, zodat het probleem definitief is opgelost in Maassluis en omgeving."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Delft', 'Den Haag']}
      />
      <Footer />
    </main>
  );
}
