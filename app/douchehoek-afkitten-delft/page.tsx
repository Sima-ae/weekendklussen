import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchehoek Afkitten Delft | Weekend Klussen Douchehoek Kitwerk Delft',
  description:
    'Douchehoek afkitten en kitwerk in Delft. Weekend Klussen verzorgt professioneel douchehoek afkitten, voegwerk en kitreparatie in Delft. Vochtwerend en schimmelwerend kitwerk voor douchehoeken. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DouchehoekAfkittenDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Delft"
        title="Douchehoek Afkitten Delft"
        description="Weekend Klussen verzorgt professioneel douchehoek afkitten en kitwerk in Delft. Wij gebruiken hoogwaardige, vochtwerende en schimmelwerende kit voor alle naden en voegen van uw douchehoek. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
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
