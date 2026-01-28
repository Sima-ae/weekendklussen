import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Verbouwing Gouda | Weekend Klussen Woningverbouwing Gouda',
  description:
    'Verbouwing en woningrenovatie in Gouda. Weekend Klussen verzorgt complete woningverbouwingen in Gouda en omgeving. Van kleine renovaties tot complete verbouwingen. Vaste prijzen, garantie en lokale kennis. Gratis offerte.',
};

export default function VerbouwingGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Gouda"
        title="Verbouwing Gouda"
        description="Weekend Klussen is gespecialiseerd in verbouwing en woningrenovatie in Gouda. Wij verzorgen complete woningverbouwingen van kleine renovaties tot grote transformaties, met aandacht voor detail, kwaliteit en planning."
        nearbyCities={['Rotterdam', 'Zoetermeer', 'Alphen aan den Rijn', 'Utrecht', 'Woerden']}
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
