import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchescherm Kitten Schiedam | Weekend Klussen Douchescherm Kitwerk Schiedam',
  description:
    'Douchescherm kitten en kitwerk in Schiedam. Weekend Klussen verzorgt professioneel douchescherm kitten, voegwerk en kitreparatie in Schiedam. Vochtwerend en schimmelwerend kitwerk voor doucheschermen. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DoucheschermKittenSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Schiedam"
        title="Douchescherm Kitten Schiedam"
        description="Weekend Klussen verzorgt professioneel douchescherm kitten en kitwerk in Schiedam. Wij gebruiken hoogwaardige, vochtwerende en schimmelwerende kit voor alle naden en voegen van uw douchescherm. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag']}
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
