import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Montage Rotterdam | Weekend Klussen Montage Service Rotterdam',
  description: 'Professionele montage service in Rotterdam. Meubelmontage, keukenmontage, badkamer montage en meer. Ervaren monteurs met vaste prijzen. Gratis offerte.',
  location: 'Rotterdam',
  service: 'montage',
  keywords: ['montage Rotterdam', 'meubelmontage Rotterdam', 'keukenmontage Rotterdam', 'badkamer montage Rotterdam'],
});

export default function MontageRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Rotterdam"
        service="Montage"
        title="Montage Rotterdam"
        description="Professionele montage service in Rotterdam. Weekend Klussen verzorgt montage van meubels, keukens, badkamers en meer in Rotterdam met ervaren monteurs en vaste prijzen."
        serviceDescription="Weekend Klussen is uw betrouwbare montage specialist in Rotterdam. Wij verzorgen professionele montage diensten voor meubels, keukens, badkamers, inbouwkasten en meer. Onze ervaren monteurs komen bij u thuis of op uw bedrijfslocatie in Rotterdam."
        serviceDetails={[
          'Meubelmontage in Rotterdam (IKEA, JYSK en meer)',
          'Keukenmontage en keuken installatie Rotterdam',
          'Badkamer montage en sanitair installatie',
          'Inbouwkasten en kledingkasten monteren',
          'Dakkapel montage en plaatsing',
          'Douchecabine montage Rotterdam',
          'Wandmontage en TV bevestiging',
          'Plafondmontage en verlichting',
        ]}
        nearbyCities={['Schiedam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Capelle aan den IJssel', 'Ridderkerk']}
        serviceBenefits={[
          'Ervaren monteurs met jarenlange expertise',
          'Snelle service en flexibele planning',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle montage werkzaamheden',
          'Montage van alle bekende merken',
          'Lokale kennis van Rotterdam',
        ]}
      />
      <Footer />
    </main>
  );
}
