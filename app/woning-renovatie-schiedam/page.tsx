import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Woning Renovatie Schiedam | Weekend Klussen Woning Renovatie Schiedam',
  description: 'Woning renovatie in Schiedam. Complete woningverbouwing en renovatie van uw woning. Ervaren vaklieden met vaste prijzen. Gratis offerte.',
  location: 'Schiedam',
  service: 'woning renovatie',
  keywords: ['woning renovatie Schiedam', 'woning verbouwing Schiedam', 'woningrenovatie Schiedam', 'woning verbouwen Schiedam'],
});

export default function WoningRenovatieSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Schiedam"
        service="Woning Renovatie"
        title="Woning Renovatie Schiedam"
        description="Woning renovatie in Schiedam. Weekend Klussen verzorgt complete woningrenovatie en woningverbouwing in Schiedam van A tot Z met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt woning renovatie in Schiedam. Of u nu uw hele woning wilt renoveren, een woningverbouwing nodig heeft, of uw woning wilt opknappen - wij verzorgen alles uit één hand in Schiedam. Van het eerste ontwerp tot de uiteindelijke oplevering, wij zorgen voor een perfecte uitvoering van uw woning renovatie project."
        serviceDetails={[
          'Complete woningverbouwing en woningrenovatie Schiedam',
          'Badkamer renovatie en keuken renovatie',
          'Vloeren, muren, plafonds en deuren',
          'Elektra, verwarming en sanitair Schiedam',
          'Isolatie en energiebesparende maatregelen',
          'Schilderwerk, behang en vloerbedekking',
          'Projectmanagement en coördinatie',
          'Van ontwerp tot oplevering',
        ]}
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Dordrecht']}
        serviceBenefits={[
          'Alles uit één hand, geen gedoe met meerdere partijen',
          'Ervaren vaklieden met jarenlange expertise',
          'Vaste prijzen zonder verrassingen',
          'Garantie op alle renovatie werkzaamheden',
          'Projectmanagement en bouwbegeleiding',
          'Lokale kennis van Schiedam',
        ]}
      />
      <Footer />
    </main>
  );
}
