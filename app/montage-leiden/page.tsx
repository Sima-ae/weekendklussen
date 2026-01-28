import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Montage Leiden | Weekend Klussen Montage Service Leiden',
  description: 'Professionele montage service in Leiden. Meubelmontage, keukenmontage, badkamer montage en meer. Ervaren monteurs met vaste prijzen. Gratis offerte.',
  location: 'Leiden',
  service: 'montage',
  keywords: ['montage Leiden', 'meubelmontage Leiden', 'keukenmontage Leiden', 'badkamer montage Leiden'],
});

export default function MontageLeidenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Leiden"
        service="Montage"
        title="Montage Leiden"
        description="Professionele montage service in Leiden. Weekend Klussen verzorgt montage van meubels, keukens, badkamers en meer in Leiden met ervaren monteurs en vaste prijzen."
        serviceDescription="Weekend Klussen is uw betrouwbare montage specialist in Leiden. Wij verzorgen professionele montage diensten voor meubels, keukens, badkamers, inbouwkasten en meer. Onze ervaren monteurs komen bij u thuis of op uw bedrijfslocatie in Leiden."
        serviceDetails={[
          'Meubelmontage in Leiden (IKEA, JYSK en meer)',
          'Keukenmontage en keuken installatie Leiden',
          'Badkamer montage en sanitair installatie',
          'Inbouwkasten en kledingkasten monteren',
          'Dakkapel montage en plaatsing',
          'Douchecabine montage Leiden',
          'Wandmontage en TV bevestiging',
          'Plafondmontage en verlichting',
        ]}
        nearbyCities={['Den Haag', 'Delft', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn', 'Katwijk']}
        serviceBenefits={[
          'Ervaren monteurs met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle montage werkzaamheden',
          'Montage van alle bekende merken',
          'Lokale kennis van Leiden',
        ]}
      />
      <Footer />
    </main>
  );
}
