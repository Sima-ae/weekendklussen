import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchescherm Kitten Delft | Weekend Klussen Douchescherm Kitwerk Delft',
  description:
    'Douchescherm kitten en kitwerk in Delft. Weekend Klussen verzorgt professioneel douchescherm kitten, voegwerk en kitreparatie in Delft. Vochtwerend en schimmelwerend kitwerk voor doucheschermen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DoucheschermKittenDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Delft"
        title="Douchescherm Kitten Delft"
        description="Weekend Klussen verzorgt professioneel douchescherm kitten en kitwerk in Delft. Wij gebruiken hoogwaardige, vochtwerende en schimmelwerende kit voor alle naden en voegen van uw douchescherm. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer']}
        services={[
          'Douchescherm kitten en kitwerk',
          'Kitreparatie en kitvervanging',
          'Vochtwerend en schimmelwerend kitwerk',
          'Voegwerk en voegreparatie douchescherm',
          'Naden kitten en afdichten',
          'Preventief onderhoud kitwerk',
          'Spoedreparatie lekkende naden',
          'Professioneel kitten alle douchescherm types'
        ]}
      />
      <Footer />
    </main>
  );
}
