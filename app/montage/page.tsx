import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Montage | Weekend Klussen Montage Service',
  description: 'Professionele montage service voor meubels, keukens, badkamers en meer. Weekend Klussen verzorgt montage in heel Zuid-Holland met ervaren monteurs en vaste prijzen. Gratis offerte.',
  service: 'montage',
  keywords: ['montage', 'meubelmontage', 'keukenmontage', 'badkamer montage', 'inbouwmontage'],
});

export default function MontagePage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zuid-Holland"
        service="Montage"
        title="Montage Service"
        description="Professionele montage service voor al uw meubels, keukens, badkamers en inbouwkasten. Ervaren monteurs met vaste prijzen en garantie."
        serviceDescription="Weekend Klussen verzorgt professionele montage diensten voor particulieren en bedrijven in heel Zuid-Holland. Of u nu een nieuwe keuken heeft gekocht, meubels wilt laten monteren of inbouwkasten wilt plaatsen - onze ervaren monteurs zorgen voor een perfecte uitvoering."
        serviceDetails={[
          'Meubelmontage (IKEA, JYSK, Leen Bakker en meer)',
          'Keukenmontage en keuken installatie',
          'Badkamer montage en sanitair installatie',
          'Inbouwkasten en kledingkasten monteren',
          'Dakkapel montage en plaatsing',
          'Douchecabine montage',
          'Wandmontage en TV bevestiging',
          'Plafondmontage en verlichting',
        ]}
        nearbyCities={['Rotterdam', 'Den Haag', 'Delft', 'Leiden', 'Dordrecht', 'Gouda', 'Zoetermeer']}
        serviceBenefits={[
          'Ervaren monteurs met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle montage werkzaamheden',
          'Montage van alle bekende merken',
          'Lokale service in heel Zuid-Holland',
        ]}
      />
      <Footer />
    </main>
  );
}
