import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageVerhelpenContent } from '@/components/pages/LekkageVerhelpenContent';

export const metadata: Metadata = {
  title: 'Lekkage Verhelpen Rotterdam | Weekend Klussen Lekkage Verhelpen Rotterdam',
  description:
    'Professioneel lekkage verhelpen in Rotterdam. Weekend Klussen verzorgt lekkage verhelpen en schadeherstel in Rotterdam. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageVerhelpenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageVerhelpenContent
        location="Rotterdam"
        title="Lekkage Verhelpen Rotterdam"
        description="Weekend Klussen is uw specialist voor lekkage verhelpen in Rotterdam. Wij verhelpen lekkages professioneel en duurzaam, zodat het probleem definitief is opgelost in Rotterdam en omgeving."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
      />
      <Footer />
    </main>
  );
}
