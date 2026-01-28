import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Montage Delft | Weekend Klussen Montage Service Delft',
  description: 'Professionele montage service in Delft. Meubelmontage, keukenmontage, badkamer montage en meer. Ervaren monteurs met vaste prijzen. Gratis offerte.',
  location: 'Delft',
  service: 'montage',
  keywords: ['montage Delft', 'meubelmontage Delft', 'keukenmontage Delft', 'badkamer montage Delft'],
});

export default function MontageDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Delft"
        service="Montage"
        title="Montage Delft"
        description="Professionele montage service in Delft. Weekend Klussen verzorgt montage van meubels, keukens, badkamers en meer in Delft met ervaren monteurs en vaste prijzen."
        serviceDescription="Weekend Klussen is uw betrouwbare montage specialist in Delft. Wij verzorgen professionele montage diensten voor meubels, keukens, badkamers, inbouwkasten en meer. Onze ervaren monteurs komen bij u thuis of op uw bedrijfslocatie in Delft."
        serviceDetails={[
          'Meubelmontage in Delft (IKEA, JYSK en meer)',
          'Keukenmontage en keuken installatie Delft',
          'Badkamer montage en sanitair installatie',
          'Inbouwkasten en kledingkasten monteren',
          'Dakkapel montage en plaatsing',
          'Douchecabine montage Delft',
          'Wandmontage en TV bevestiging',
          'Plafondmontage en verlichting',
        ]}
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer', 'Leiden']}
        serviceBenefits={[
          'Ervaren monteurs met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle montage werkzaamheden',
          'Montage van alle bekende merken',
          'Lokale kennis van Delft',
        ]}
      />
      <Footer />
    </main>
  );
}
