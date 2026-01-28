import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Badkamer Kitten Den Haag | Weekend Klussen Badkamer Kitwerk Den Haag',
  description:
    'Badkamer kitten en kitwerk in Den Haag. Weekend Klussen verzorgt professioneel badkamer kitten, voegwerk en kitreparatie in Den Haag. Vochtwerend en schimmelwerend kitwerk voor douche, bad en wastafel. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function BadkamerKittenDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Den Haag"
        title="Badkamer Kitten Den Haag"
        description="Weekend Klussen verzorgt professioneel badkamer kitten en kitwerk in Den Haag. Wij gebruiken hoogwaardige, vochtwerende en schimmelwerende kit voor douche, bad, wastafel en alle andere naden in uw badkamer. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Rijswijk', 'Delft', 'Rotterdam', 'Zoetermeer', 'Leiden']}
        services={[
          'Badkamer kitten douche en douchecabine',
          'Badkamer kitten bad en wastafel',
          'Kitreparatie en kitvervanging',
          'Vochtwerend en schimmelwerend kitwerk',
          'Voegwerk en voegreparatie',
          'Naden kitten en afdichten',
          'Preventief onderhoud kitwerk',
          'Spoedreparatie lekkende naden'
        ]}
      />
      <Footer />
    </main>
  );
}
