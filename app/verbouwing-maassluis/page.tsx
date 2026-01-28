import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Verbouwing Maassluis | Weekend Klussen Woningverbouwing Maassluis',
  description:
    'Verbouwing en woningrenovatie in Maassluis. Weekend Klussen verzorgt complete woningverbouwingen in Maassluis en omgeving. Van kleine renovaties tot complete verbouwingen. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function VerbouwingMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Maassluis"
        title="Verbouwing Maassluis"
        description="Weekend Klussen is gespecialiseerd in verbouwing en woningrenovatie in Maassluis. Wij verzorgen complete woningverbouwingen van kleine renovaties tot grote transformaties, met aandacht voor detail, kwaliteit en planning."
        nearbyCities={['Vlaardingen', 'Schiedam', 'Rotterdam', 'Westland', 'Delft']}
        services={[
          'Complete woningverbouwing',
          'Renovatie en modernisering',
          'Sloop en onderhoud',
          'Timmerwerk en metselwerk',
          'Tegelzetter en schilderen',
          'Stucwerk en afwerking',
          'Projectbegeleiding en planning'
        ]}
      />
      <Footer />
    </main>
  );
}
