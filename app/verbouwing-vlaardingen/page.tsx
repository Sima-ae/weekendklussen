import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Verbouwing Vlaardingen | Weekend Klussen Woningverbouwing Vlaardingen',
  description:
    'Verbouwing en woningrenovatie in Vlaardingen. Weekend Klussen verzorgt complete woningverbouwingen in Vlaardingen en omgeving. Van kleine renovaties tot complete verbouwingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function VerbouwingVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Vlaardingen"
        title="Verbouwing Vlaardingen"
        description="Weekend Klussen is gespecialiseerd in verbouwing en woningrenovatie in Vlaardingen. Wij verzorgen complete woningverbouwingen van kleine renovaties tot grote transformaties, met aandacht voor detail, kwaliteit en planning."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Westland', 'Delft']}
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
