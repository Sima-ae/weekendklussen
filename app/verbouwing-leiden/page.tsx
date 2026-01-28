import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Verbouwing Leiden | Weekend Klussen Woningverbouwing Leiden',
  description:
    'Verbouwing en woningrenovatie in Leiden. Weekend Klussen verzorgt complete woningverbouwingen in Leiden en omgeving. Van kleine renovaties tot complete verbouwingen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function VerbouwingLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Leiden"
        title="Verbouwing Leiden"
        description="Weekend Klussen is gespecialiseerd in verbouwing en woningrenovatie in Leiden. Wij verzorgen complete woningverbouwingen van kleine renovaties tot grote transformaties, met aandacht voor detail, kwaliteit en planning."
        nearbyCities={['Katwijk', 'Alphen aan den Rijn', 'Zoetermeer', 'Den Haag', 'Voorburg']}
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
