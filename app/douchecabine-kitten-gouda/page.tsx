import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchecabine Kitten Gouda | Weekend Klussen Douchecabine Kitwerk Gouda',
  description:
    'Douchecabine kitten en kitwerk in Gouda. Weekend Klussen verzorgt professioneel douchecabine kitten, voegwerk en kitreparatie in Gouda. Vochtwerend en schimmelwerend kitwerk voor douchecabines. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DouchecabineKittenGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Gouda"
        title="Douchecabine Kitten Gouda"
        description="Weekend Klussen verzorgt professioneel douchecabine kitten en kitwerk in Gouda. Wij gebruiken hoogwaardige, vochtwerende en schimmelwerende kit voor alle naden en voegen van uw douchecabine. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Rotterdam', 'Leiden', 'Zoetermeer', 'Utrecht', 'Woerden']}
        services={[
          'Douchecabine kitten en kitwerk',
          'Kitreparatie en kitvervanging',
          'Vochtwerend en schimmelwerend kitwerk',
          'Voegwerk en voegreparatie douchecabine',
          'Naden kitten en afdichten',
          'Preventief onderhoud kitwerk',
          'Spoedreparatie lekkende naden',
          'Professioneel kitten alle douchecabine types'
        ]}
      />
      <Footer />
    </main>
  );
}
