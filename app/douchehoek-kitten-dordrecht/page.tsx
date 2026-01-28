import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchehoek Kitten Dordrecht | Weekend Klussen Douchehoek Kitwerk Dordrecht',
  description:
    'Douchehoek kitten en kitwerk in Dordrecht. Weekend Klussen verzorgt professioneel douchehoek kitten, voegwerk en kitreparatie in Dordrecht. Vochtwerend en schimmelwerend kitwerk voor douchehoeken. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DouchehoekKittenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Dordrecht"
        title="Douchehoek Kitten Dordrecht"
        description="Weekend Klussen verzorgt professioneel douchehoek kitten en kitwerk in Dordrecht. Wij gebruiken hoogwaardige, vochtwerende en schimmelwerende kit voor alle naden en voegen van uw douchehoek. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Rotterdam', 'Papendrecht', 'Sliedrecht', 'Zwijndrecht', 'Barendrecht']}
        services={[
          'Douchehoek kitten en kitwerk',
          'Kitreparatie en kitvervanging',
          'Vochtwerend en schimmelwerend kitwerk',
          'Voegwerk en voegreparatie douchehoek',
          'Naden kitten en afdichten',
          'Preventief onderhoud kitwerk',
          'Spoedreparatie lekkende naden',
          'Professioneel kitten alle douchehoek types'
        ]}
      />
      <Footer />
    </main>
  );
}
