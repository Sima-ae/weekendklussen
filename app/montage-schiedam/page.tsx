import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Montage Schiedam | Weekend Klussen Montage Service Schiedam',
  description: 'Professionele montage service in Schiedam. Meubelmontage, keukenmontage, badkamer montage en meer. Ervaren monteurs met vaste prijzen. Gratis offerte.',
  location: 'Schiedam',
  service: 'montage',
  keywords: ['montage Schiedam', 'meubelmontage Schiedam', 'keukenmontage Schiedam', 'badkamer montage Schiedam'],
});

export default function MontageSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Schiedam"
        service="Montage"
        title="Montage Schiedam"
        description="Professionele montage service in Schiedam. Weekend Klussen verzorgt montage van meubels, keukens, badkamers en meer in Schiedam met ervaren monteurs en vaste prijzen."
        serviceDescription="Weekend Klussen is uw betrouwbare montage specialist in Schiedam. Wij verzorgen professionele montage diensten voor meubels, keukens, badkamers, inbouwkasten en meer. Onze ervaren monteurs komen bij u thuis of op uw bedrijfslocatie in Schiedam."
        serviceDetails={[
          'Meubelmontage in Schiedam (IKEA, JYSK en meer)',
          'Keukenmontage en keuken installatie Schiedam',
          'Badkamer montage en sanitair installatie',
          'Inbouwkasten en kledingkasten monteren',
          'Dakkapel montage en plaatsing',
          'Douchecabine montage Schiedam',
          'Wandmontage en TV bevestiging',
          'Plafondmontage en verlichting',
        ]}
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Dordrecht']}
        serviceBenefits={[
          'Ervaren monteurs met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle montage werkzaamheden',
          'Montage van alle bekende merken',
          'Lokale kennis van Schiedam',
        ]}
      />
      <Footer />
    </main>
  );
}
