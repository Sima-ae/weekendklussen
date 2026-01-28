import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Verbouwing Alphen aan den Rijn | Weekend Klussen Woningverbouwing',
  description:
    'Verbouwing en woningrenovatie in Alphen aan den Rijn. Weekend Klussen verzorgt complete woningverbouwingen in Alphen aan den Rijn en omgeving. Van kleine renovaties tot complete verbouwingen. Vaste prijzen, garantie. Gratis offerte.',
};

export default function VerbouwingAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Alphen aan den Rijn"
        title="Verbouwing Alphen aan den Rijn"
        description="Weekend Klussen is gespecialiseerd in verbouwing en woningrenovatie in Alphen aan den Rijn. Wij verzorgen complete woningverbouwingen van kleine renovaties tot grote transformaties, met aandacht voor detail, kwaliteit en planning."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
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
