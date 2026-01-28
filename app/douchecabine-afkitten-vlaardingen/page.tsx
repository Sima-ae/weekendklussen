import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Douchecabine Afkitten Vlaardingen | Weekend Klussen Douchecabine Kitwerk Vlaardingen',
  description:
    'Douchecabine afkitten en kitwerk in Vlaardingen. Weekend Klussen verzorgt professioneel douchecabine afkitten, voegwerk en kitreparatie in Vlaardingen. Vochtwerend en schimmelwerend kitwerk voor douchecabines. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function DouchecabineAfkittenVlaardingenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Vlaardingen"
        title="Douchecabine Afkitten Vlaardingen"
        description="Weekend Klussen verzorgt professioneel douchecabine afkitten en kitwerk in Vlaardingen. Wij gebruiken hoogwaardige, vochtwerende en schimmelwerende kit voor alle naden en voegen van uw douchecabine. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Delft', 'Den Haag']}
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
