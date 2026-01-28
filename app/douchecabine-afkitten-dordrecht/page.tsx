import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchecabine Afkitten Dordrecht | Weekend Klussen Douchecabine Kitwerk Dordrecht',
  description:
    'Douchecabine afkitten en kitwerk in Dordrecht. Weekend Klussen verzorgt professioneel douchecabine afkitten, voegwerk en kitreparatie in Dordrecht. Vochtwerend en schimmelwerend kitwerk voor douchecabines. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DouchecabineAfkittenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Dordrecht"
        title="Douchecabine Afkitten Dordrecht"
        description="Weekend Klussen verzorgt professioneel douchecabine afkitten en kitwerk in Dordrecht. Wij gebruiken hoogwaardige, vochtwerende en schimmelwerende kit voor alle naden en voegen van uw douchecabine. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Rotterdam', 'Papendrecht', 'Sliedrecht', 'Zwijndrecht', 'Barendrecht']}
        services={[
          'Douchecabine afkitten en kitwerk',
          'Kitreparatie en kitvervanging',
          'Vochtwerend en schimmelwerend kitwerk',
          'Voegwerk en voegreparatie douchecabine',
          'Naden afkitten en afdichten',
          'Preventief onderhoud kitwerk',
          'Spoedreparatie lekkende naden',
          'Professioneel afkitten alle douchecabine types'
        ]}
      />
      <Footer />
    </main>
  );
}
