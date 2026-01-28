import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchehoek Afkitten Den Haag | Weekend Klussen Douchehoek Kitwerk Den Haag',
  description:
    'Douchehoek afkitten en kitwerk in Den Haag. Weekend Klussen verzorgt professioneel douchehoek afkitten, voegwerk en kitreparatie in Den Haag. Vochtwerend en schimmelwerend kitwerk voor douchehoeken. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DouchehoekAfkittenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Den Haag"
        title="Douchehoek Afkitten Den Haag"
        description="Weekend Klussen verzorgt professioneel douchehoek afkitten en kitwerk in Den Haag. Wij gebruiken hoogwaardige, vochtwerende en schimmelwerende kit voor alle naden en voegen van uw douchehoek. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Rijswijk', 'Delft', 'Rotterdam', 'Zoetermeer', 'Leiden']}
        services={[
          'Douchehoek afkitten en kitwerk',
          'Kitreparatie en kitvervanging',
          'Vochtwerend en schimmelwerend kitwerk',
          'Voegwerk en voegreparatie douchehoek',
          'Naden afkitten en afdichten',
          'Preventief onderhoud kitwerk',
          'Spoedreparatie lekkende naden',
          'Professioneel afkitten alle douchehoek types'
        ]}
      />
      <Footer />
    </main>
  );
}
