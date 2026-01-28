import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Badkamer Kitten Leiden | Weekend Klussen Badkamer Kitwerk Leiden',
  description:
    'Badkamer kitten en kitwerk in Leiden. Weekend Klussen verzorgt professioneel badkamer kitten, voegwerk en kitreparatie in Leiden. Vochtwerend en schimmelwerend kitwerk voor douche, bad en wastafel. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function BadkamerKittenLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Leiden"
        title="Badkamer Kitten Leiden"
        description="Weekend Klussen verzorgt professioneel badkamer kitten en kitwerk in Leiden. Wij gebruiken hoogwaardige, vochtwerende en schimmelwerende kit voor douche, bad, wastafel en alle andere naden in uw badkamer. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Den Haag', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn', 'Katwijk']}
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
