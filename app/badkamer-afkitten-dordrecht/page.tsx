import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Badkamer Afkitten Dordrecht | Weekend Klussen Badkamer Kitwerk Dordrecht',
  description:
    'Badkamer afkitten en kitwerk in Dordrecht. Weekend Klussen verzorgt professioneel badkamer afkitten, voegwerk en kitreparatie in Dordrecht. Vochtwerend en schimmelwerend kitwerk voor douche, bad en wastafel. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function BadkamerAfkittenDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Dordrecht"
        title="Badkamer Afkitten Dordrecht"
        description="Weekend Klussen verzorgt professioneel badkamer afkitten en kitwerk in Dordrecht. Wij gebruiken hoogwaardige, vochtwerende en schimmelwerende kit voor douche, bad, wastafel en alle andere naden in uw badkamer. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Rotterdam', 'Papendrecht', 'Sliedrecht', 'Zwijndrecht', 'Barendrecht']}
        services={[
          'Badkamer afkitten douche en douchecabine',
          'Badkamer afkitten bad en wastafel',
          'Kitreparatie en kitvervanging',
          'Vochtwerend en schimmelwerend kitwerk',
          'Voegwerk en voegreparatie',
          'Naden afkitten en afdichten',
          'Preventief onderhoud kitwerk',
          'Spoedreparatie lekkende naden'
        ]}
      />
      <Footer />
    </main>
  );
}
