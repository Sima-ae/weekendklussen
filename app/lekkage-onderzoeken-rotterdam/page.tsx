import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LekkageOnderzoekenContent } from '@/components/pages/LekkageOnderzoekenContent';

export const metadata: Metadata = {
  title: 'Lekkage Onderzoeken Rotterdam | Weekend Klussen Lekkage Onderzoeken Rotterdam',
  description:
    'Professioneel lekkage onderzoeken in Rotterdam. Weekend Klussen verzorgt grondig lekkage onderzoek met moderne technieken in Rotterdam. 24/7 spoedservice. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function LekkageOnderzoekenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LekkageOnderzoekenContent
        location="Rotterdam"
        title="Lekkage Onderzoeken Rotterdam"
        description="Weekend Klussen is uw specialist voor lekkage onderzoeken in Rotterdam. Wij voeren een systematisch onderzoek uit met moderne technieken om alle aspecten van de lekkage in kaart te brengen in Rotterdam en omgeving."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse']}
      />
      <Footer />
    </main>
  );
}
