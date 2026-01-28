import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Lekdetectie Delft | Weekend Klussen 24/7 Spoed Lekdetectie Delft',
  description: '24/7 spoed lekdetectie service in Delft. Spoed lekdetectie voor lekkages, waterlekkage opsporen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Delft',
  service: 'spoed lekdetectie',
  keywords: ['spoed lekdetectie Delft', '24/7 lekdetectie Delft', 'spoed lekdetectie service Delft', 'lekdetectie spoed Delft'],
});

export default function SpoedLekdetectieDelftPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Delft"
        service="Spoed Lekdetectie"
        title="Spoed Lekdetectie Delft 24/7"
        description="24/7 spoed lekdetectie service in Delft. Weekend Klussen staat dag en nacht voor u klaar bij lekkages, waterlekkage opsporen en andere spoedgevallen in Delft. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed lekdetectie service in Delft. Of u nu een lekkage heeft die u niet kunt vinden, waterlekkage in uw woning, of een andere spoedsituatie - onze ervaren lekdetectie specialisten staan dag en nacht voor u klaar in Delft. Wij gebruiken moderne detectie apparatuur om lekkages snel en nauwkeurig op te sporen."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Delft',
          'Waterlekkage opsporen en detecteren',
          'Lekkage detectie met moderne apparatuur',
          'Verborgen lekkages vinden',
          'Dak lekkage detectie Delft',
          'Riolering lekkage detectie',
          'Waterleiding lekkage opsporen',
          'Lekkage rapportage en advies',
        ]}
        nearbyCities={['Den Haag', 'Rijswijk', 'Rotterdam', 'Pijnacker-Nootdorp', 'Zoetermeer', 'Leiden']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren lekdetectie specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle lekdetectie werkzaamheden',
          'Lokale kennis van Delft',
        ]}
      />
      <Footer />
    </main>
  );
}
