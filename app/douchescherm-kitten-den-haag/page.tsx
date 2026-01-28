import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchescherm Kitten Den Haag | Weekend Klussen Douchescherm Kitwerk Den Haag',
  description:
    'Douchescherm kitten en kitwerk in Den Haag. Weekend Klussen verzorgt professioneel douchescherm kitten, voegwerk en kitreparatie in Den Haag. Vochtwerend en schimmelwerend kitwerk voor doucheschermen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DoucheschermKittenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Den Haag"
        title="Douchescherm Kitten Den Haag"
        description="Weekend Klussen verzorgt professioneel douchescherm kitten en kitwerk in Den Haag. Wij gebruiken hoogwaardige, vochtwerende en schimmelwerende kit voor alle naden en voegen van uw douchescherm. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Rijswijk', 'Delft', 'Rotterdam', 'Zoetermeer', 'Leiden']}
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
