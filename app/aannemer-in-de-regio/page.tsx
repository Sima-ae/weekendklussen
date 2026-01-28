import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: 'Aannemer in de Regio | Weekend Klussen Bouwbedrijf Zuid-Holland',
  description:
    'Aannemer voor renovatie en verbouwing in Zuid-Holland en omgeving. Aannemer in de regio Zuid-Holland - Weekend Klussen verzorgt verbouwing, renovatie, aanbouw, badkamer en keuken in heel Zuid-Holland. Vaste prijzen, garantie en snelle service. Gratis offerte.',
};

export default function AannemerInDeRegioPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="de regio"
        title="Aannemer in de Regio"
        description="Weekend Klussen is uw betrouwbare aannemer in de regio Zuid-Holland. Wij verzorgen alle bouw- en renovatiewerkzaamheden in heel Zuid-Holland met lokale kennis, ervaring en vaste prijzen. Van kleine klussen tot grote verbouwingen - wij staan voor u klaar."
        nearbyCities={[
          'Rotterdam', 'Den Haag', 'Leiden', 'Dordrecht', 'Gouda', 'Delft', 
          'Zoetermeer', 'Schiedam', 'Vlaardingen', 'Westland', 'Rijswijk',
          'Capelle aan den IJssel', 'Spijkenisse', 'Katwijk', 'Voorburg',
          'Pijnacker-Nootdorp', 'Barendrecht', 'Ridderkerk', 'Alphen aan den Rijn',
          'Maassluis', 'Hellevoetsluis', 'Papendrecht', 'Sliedrecht', 'Gorinchem',
          'Hardinxveld-Giessendam', 'Zwijndrecht', 'Drechterland'
        ]}
      />
      <Footer />
    </main>
  );
}
