import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Lekdetectie Gouda | Weekend Klussen 24/7 Spoed Lekdetectie Gouda',
  description: '24/7 spoed lekdetectie service in Gouda. Spoed lekdetectie voor lekkages, waterlekkage opsporen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Gouda',
  service: 'spoed lekdetectie',
  keywords: ['spoed lekdetectie Gouda', '24/7 lekdetectie Gouda', 'spoed lekdetectie service Gouda', 'lekdetectie spoed Gouda'],
});

export default function SpoedLekdetectieGoudaPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Gouda"
        service="Spoed Lekdetectie"
        title="Spoed Lekdetectie Gouda 24/7"
        description="24/7 spoed lekdetectie service in Gouda. Weekend Klussen staat dag en nacht voor u klaar bij lekkages, waterlekkage opsporen en andere spoedgevallen in Gouda. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed lekdetectie service in Gouda. Of u nu een lekkage heeft die u niet kunt vinden, waterlekkage in uw woning, of een andere spoedsituatie - onze ervaren lekdetectie specialisten staan dag en nacht voor u klaar in Gouda. Wij gebruiken moderne detectie apparatuur om lekkages snel en nauwkeurig op te sporen."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Gouda',
          'Waterlekkage opsporen en detecteren',
          'Lekkage detectie met moderne apparatuur',
          'Verborgen lekkages vinden',
          'Dak lekkage detectie Gouda',
          'Riolering lekkage detectie',
          'Waterleiding lekkage opsporen',
          'Lekkage rapportage en advies',
        ]}
        nearbyCities={['Rotterdam', 'Dordrecht', 'Leiden', 'Zoetermeer', 'Utrecht', 'Woerden']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren lekdetectie specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle lekdetectie werkzaamheden',
          'Lokale kennis van Gouda',
        ]}
      />
      <Footer />
    </main>
  );
}
