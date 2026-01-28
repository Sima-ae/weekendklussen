import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Badkamer Kitten Rotterdam | Weekend Klussen Badkamer Kitwerk Rotterdam',
  description:
    'Badkamer kitten en kitwerk in Rotterdam. Weekend Klussen verzorgt professioneel badkamer kitten, voegwerk en kitreparatie in Rotterdam. Vochtwerend en schimmelwerend kitwerk voor douche, bad en wastafel. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function BadkamerKittenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Rotterdam"
        title="Badkamer Kitten Rotterdam"
        description="Weekend Klussen verzorgt professioneel badkamer kitten en kitwerk in Rotterdam. Wij gebruiken hoogwaardige, vochtwerende en schimmelwerende kit voor douche, bad, wastafel en alle andere naden in uw badkamer. Vakkundig uitgevoerd met garantie."
        nearbyCities={['Schiedam', 'Vlaardingen', 'Maassluis', 'Capelle aan den IJssel', 'Spijkenisse']}
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
