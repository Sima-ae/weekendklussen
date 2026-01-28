import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Montage Maassluis | Weekend Klussen Montage Service Maassluis',
  description: 'Professionele montage service in Maassluis. Meubelmontage, keukenmontage, badkamer montage en meer. Ervaren monteurs met vaste prijzen. Gratis offerte.',
  location: 'Maassluis',
  service: 'montage',
  keywords: ['montage Maassluis', 'meubelmontage Maassluis', 'keukenmontage Maassluis', 'badkamer montage Maassluis'],
});

export default function MontageMaassluisPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Maassluis"
        service="Montage"
        title="Montage Maassluis"
        description="Professionele montage service in Maassluis. Weekend Klussen verzorgt montage van meubels, keukens, badkamers en meer in Maassluis met ervaren monteurs en vaste prijzen."
        serviceDescription="Weekend Klussen is uw betrouwbare montage specialist in Maassluis. Wij verzorgen professionele montage diensten voor meubels, keukens, badkamers, inbouwkasten en meer. Onze ervaren monteurs komen bij u thuis of op uw bedrijfslocatie in Maassluis."
        serviceDetails={[
          'Meubelmontage in Maassluis (IKEA, JYSK en meer)',
          'Keukenmontage en keuken installatie Maassluis',
          'Badkamer montage en sanitair installatie',
          'Inbouwkasten en kledingkasten monteren',
          'Dakkapel montage en plaatsing',
          'Douchecabine montage Maassluis',
          'Wandmontage en TV bevestiging',
          'Plafondmontage en verlichting',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Delft', 'Den Haag', 'Hoek van Holland']}
        serviceBenefits={[
          'Ervaren monteurs met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle montage werkzaamheden',
          'Montage van alle bekende merken',
          'Lokale kennis van Maassluis',
        ]}
      />
      <Footer />
    </main>
  );
}
