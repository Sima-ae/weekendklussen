import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Lekdetectie | Weekend Klussen 24/7 Spoed Lekdetectie Service',
  description: '24/7 spoed lekdetectie service in Zuid-Holland. Spoed lekdetectie voor lekkages, waterlekkage opsporen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  service: 'spoed lekdetectie',
  keywords: ['spoed lekdetectie', '24/7 lekdetectie', 'spoed lekdetectie service', 'lekdetectie spoed', 'waterlekkage opsporen', 'lekkage detectie'],
});

export default function SpoedLekdetectiePage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Zuid-Holland"
        service="Spoed Lekdetectie"
        title="Spoed Lekdetectie 24/7"
        description="24/7 spoed lekdetectie service voor alle lekkage problemen. Weekend Klussen staat dag en nacht voor u klaar bij lekkages, waterlekkage opsporen en andere spoedgevallen. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed lekdetectie service in heel Zuid-Holland. Of u nu een lekkage heeft die u niet kunt vinden, waterlekkage in uw woning, of een andere spoedsituatie - onze ervaren lekdetectie specialisten staan dag en nacht voor u klaar. Wij gebruiken moderne detectie apparatuur om lekkages snel en nauwkeurig op te sporen."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen',
          'Waterlekkage opsporen en detecteren',
          'Lekkage detectie met moderne apparatuur',
          'Verborgen lekkages vinden',
          'Dak lekkage detectie',
          'Riolering lekkage detectie',
          'Waterleiding lekkage opsporen',
          'Lekkage rapportage en advies',
        ]}
        nearbyCities={['Rotterdam', 'Den Haag', 'Delft', 'Leiden', 'Dordrecht', 'Gouda', 'Zoetermeer']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren lekdetectie specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle lekdetectie werkzaamheden',
          'Lokale service in heel Zuid-Holland',
        ]}
      />
      <Footer />
    </main>
  );
}
