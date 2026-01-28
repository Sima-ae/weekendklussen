import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spoed Lekdetectie Rotterdam | Weekend Klussen 24/7 Spoed Lekdetectie Rotterdam',
  description: '24/7 spoed lekdetectie service in Rotterdam. Spoed lekdetectie voor lekkages, waterlekkage opsporen en andere spoedgevallen. Snelle service, vaste prijzen. Gratis offerte.',
  location: 'Rotterdam',
  service: 'spoed lekdetectie',
  keywords: ['spoed lekdetectie Rotterdam', '24/7 lekdetectie Rotterdam', 'spoed lekdetectie service Rotterdam', 'lekdetectie spoed Rotterdam'],
});

export default function SpoedLekdetectieRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Rotterdam"
        service="Spoed Lekdetectie"
        title="Spoed Lekdetectie Rotterdam 24/7"
        description="24/7 spoed lekdetectie service in Rotterdam. Weekend Klussen staat dag en nacht voor u klaar bij lekkages, waterlekkage opsporen en andere spoedgevallen in Rotterdam. Snelle service met vaste prijzen."
        serviceDescription="Weekend Klussen biedt 24/7 spoed lekdetectie service in Rotterdam. Of u nu een lekkage heeft die u niet kunt vinden, waterlekkage in uw woning, of een andere spoedsituatie - onze ervaren lekdetectie specialisten staan dag en nacht voor u klaar in Rotterdam. Wij gebruiken moderne detectie apparatuur om lekkages snel en nauwkeurig op te sporen."
        serviceDetails={[
          '24/7 beschikbaar voor spoedgevallen in Rotterdam',
          'Waterlekkage opsporen en detecteren',
          'Lekkage detectie met moderne apparatuur',
          'Verborgen lekkages vinden',
          'Dak lekkage detectie Rotterdam',
          'Riolering lekkage detectie',
          'Waterleiding lekkage opsporen',
          'Lekkage rapportage en advies',
        ]}
        nearbyCities={['Schiedam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Capelle aan den IJssel', 'Ridderkerk']}
        serviceBenefits={[
          '24/7 beschikbaar, ook in het weekend',
          'Snelle reactietijd bij spoedgevallen',
          'Ervaren lekdetectie specialisten met moderne apparatuur',
          'Vaste prijzen, geen verrassingen',
          'Garantie op alle lekdetectie werkzaamheden',
          'Lokale kennis van Rotterdam',
        ]}
      />
      <Footer />
    </main>
  );
}
