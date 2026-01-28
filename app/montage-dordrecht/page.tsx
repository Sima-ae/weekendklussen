import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Montage Dordrecht | Weekend Klussen Montage Service Dordrecht',
  description: 'Professionele montage service in Dordrecht. Meubelmontage, keukenmontage, badkamer montage en meer. Ervaren monteurs met vaste prijzen. Gratis offerte.',
  location: 'Dordrecht',
  service: 'montage',
  keywords: ['montage Dordrecht', 'meubelmontage Dordrecht', 'keukenmontage Dordrecht', 'badkamer montage Dordrecht'],
});

export default function MontageDordrechtPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Dordrecht"
        service="Montage"
        title="Montage Dordrecht"
        description="Professionele montage service in Dordrecht. Weekend Klussen verzorgt montage van meubels, keukens, badkamers en meer in Dordrecht met ervaren monteurs en vaste prijzen."
        serviceDescription="Weekend Klussen is uw betrouwbare montage specialist in Dordrecht. Wij verzorgen professionele montage diensten voor meubels, keukens, badkamers, inbouwkasten en meer. Onze ervaren monteurs komen bij u thuis of op uw bedrijfslocatie in Dordrecht."
        serviceDetails={[
          'Meubelmontage in Dordrecht (IKEA, JYSK en meer)',
          'Keukenmontage en keuken installatie Dordrecht',
          'Badkamer montage en sanitair installatie',
          'Inbouwkasten en kledingkasten monteren',
          'Dakkapel montage en plaatsing',
          'Douchecabine montage Dordrecht',
          'Wandmontage en TV bevestiging',
          'Plafondmontage en verlichting',
        ]}
        nearbyCities={['Rotterdam', 'Schiedam', 'Gouda', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht']}
        serviceBenefits={[
          'Ervaren monteurs met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle montage werkzaamheden',
          'Montage van alle bekende merken',
          'Lokale kennis van Dordrecht',
        ]}
      />
      <Footer />
    </main>
  );
}
