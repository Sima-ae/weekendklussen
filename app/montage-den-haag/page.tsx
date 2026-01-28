import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Montage Den Haag | Weekend Klussen Montage Service Den Haag',
  description: 'Professionele montage service in Den Haag. Meubelmontage, keukenmontage, badkamer montage en meer. Ervaren monteurs met vaste prijzen. Gratis offerte.',
  location: 'Den Haag',
  service: 'montage',
  keywords: ['montage Den Haag', 'meubelmontage Den Haag', 'keukenmontage Den Haag', 'badkamer montage Den Haag'],
});

export default function MontageDenHaagPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Den Haag"
        service="Montage"
        title="Montage Den Haag"
        description="Professionele montage service in Den Haag. Weekend Klussen verzorgt montage van meubels, keukens, badkamers en meer in Den Haag met ervaren monteurs en vaste prijzen."
        serviceDescription="Weekend Klussen is uw betrouwbare montage specialist in Den Haag. Wij verzorgen professionele montage diensten voor meubels, keukens, badkamers, inbouwkasten en meer. Onze ervaren monteurs komen bij u thuis of op uw bedrijfslocatie in Den Haag."
        serviceDetails={[
          'Meubelmontage in Den Haag (IKEA, JYSK en meer)',
          'Keukenmontage en keuken installatie Den Haag',
          'Badkamer montage en sanitair installatie',
          'Inbouwkasten en kledingkasten monteren',
          'Dakkapel montage en plaatsing',
          'Douchecabine montage Den Haag',
          'Wandmontage en TV bevestiging',
          'Plafondmontage en verlichting',
        ]}
        nearbyCities={['Delft', 'Rijswijk', 'Rotterdam', 'Zoetermeer', 'Leiden', 'Voorburg']}
        serviceBenefits={[
          'Ervaren monteurs met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle montage werkzaamheden',
          'Montage van alle bekende merken',
          'Lokale kennis van Den Haag',
        ]}
      />
      <Footer />
    </main>
  );
}
