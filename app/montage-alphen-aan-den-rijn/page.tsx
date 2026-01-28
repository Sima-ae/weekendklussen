import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Montage Alphen aan den Rijn | Weekend Klussen Montage Service Alphen aan den Rijn',
  description: 'Professionele montage service in Alphen aan den Rijn. Meubelmontage, keukenmontage, badkamer montage en meer. Ervaren monteurs met vaste prijzen. Gratis offerte.',
  location: 'Alphen aan den Rijn',
  service: 'montage',
  keywords: ['montage Alphen aan den Rijn', 'meubelmontage Alphen aan den Rijn', 'keukenmontage Alphen aan den Rijn', 'badkamer montage Alphen aan den Rijn'],
});

export default function MontageAlphenAanDenRijnPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Alphen aan den Rijn"
        service="Montage"
        title="Montage Alphen aan den Rijn"
        description="Professionele montage service in Alphen aan den Rijn. Weekend Klussen verzorgt montage van meubels, keukens, badkamers en meer in Alphen aan den Rijn met ervaren monteurs en vaste prijzen."
        serviceDescription="Weekend Klussen is uw betrouwbare montage specialist in Alphen aan den Rijn. Wij verzorgen professionele montage diensten voor meubels, keukens, badkamers, inbouwkasten en meer. Onze ervaren monteurs komen bij u thuis of op uw bedrijfslocatie in Alphen aan den Rijn."
        serviceDetails={[
          'Meubelmontage in Alphen aan den Rijn (IKEA, JYSK en meer)',
          'Keukenmontage en keuken installatie Alphen aan den Rijn',
          'Badkamer montage en sanitair installatie',
          'Inbouwkasten en kledingkasten monteren',
          'Dakkapel montage en plaatsing',
          'Douchecabine montage Alphen aan den Rijn',
          'Wandmontage en TV bevestiging',
          'Plafondmontage en verlichting',
        ]}
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Woerden', 'Utrecht']}
        serviceBenefits={[
          'Ervaren monteurs met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle montage werkzaamheden',
          'Montage van alle bekende merken',
          'Lokale kennis van Alphen aan den Rijn',
        ]}
      />
      <Footer />
    </main>
  );
}
