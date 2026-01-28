import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Verbouwing Dordrecht | Weekend Klussen Woningverbouwing Dordrecht',
  description:
    'Verbouwing en woningrenovatie in Dordrecht. Weekend Klussen verzorgt complete woningverbouwingen in Dordrecht en omgeving. Van kleine renovaties tot complete verbouwingen. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function VerbouwingDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Dordrecht"
        title="Verbouwing Dordrecht"
        description="Weekend Klussen is gespecialiseerd in verbouwing en woningrenovatie in Dordrecht. Wij verzorgen complete woningverbouwingen van kleine renovaties tot grote transformaties, met aandacht voor detail, kwaliteit en planning."
        nearbyCities={['Papendrecht', 'Sliedrecht', 'Zwijndrecht', 'Rotterdam', 'Barendrecht']}
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
