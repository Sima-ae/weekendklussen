import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Verbouwing Den Haag | Weekend Klussen Woningverbouwing Den Haag',
  description:
    'Verbouwing en woningrenovatie in Den Haag. Weekend Klussen verzorgt complete woningverbouwingen in Den Haag en omgeving. Van kleine renovaties tot complete verbouwingen. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function VerbouwingDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Den Haag"
        title="Verbouwing Den Haag"
        description="Weekend Klussen is gespecialiseerd in verbouwing en woningrenovatie in Den Haag. Wij verzorgen complete woningverbouwingen van kleine renovaties tot grote transformaties, met aandacht voor detail, kwaliteit en planning."
        nearbyCities={['Rijswijk', 'Voorburg', 'Zoetermeer', 'Westland', 'Delft', 'Leiden']}
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
