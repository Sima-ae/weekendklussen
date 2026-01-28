import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Toilet Kitten Schiedam | Weekend Klussen Toilet Kitten Schiedam',
  description: 'Professioneel toilet kitten in Schiedam. Nieuwe kit aanbrengen rondom toilet voor waterdichte afdichting. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Schiedam',
  service: 'toilet kitten',
  keywords: ['toilet kitten Schiedam', 'toilet kit aanbrengen Schiedam', 'toilet kitten service Schiedam', 'toilet afkitten Schiedam'],
});

export default function ToiletKittenSchiedamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Schiedam"
        service="Toilet Kitten"
        title="Toilet Kitten Schiedam"
        description="Professioneel toilet kitten in Schiedam. Weekend Klussen verzorgt het aanbrengen van nieuwe, waterdichte kit rondom uw toilet in Schiedam met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel toilet kitten in Schiedam. Of u nu een nieuw toilet heeft geplaatst, oude kit wilt vervangen, of een lekkage wilt voorkomen - onze ervaren vakmannen brengen nieuwe, waterdichte kit aan rondom uw toilet in Schiedam. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Nieuwe waterdichte kit aanbrengen rondom toilet Schiedam',
          'Oude kit verwijderen en voorbereiden',
          'Toilet grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom toilet',
          'Toilet kitten met hoogwaardige kit Schiedam',
          'Preventief onderhoud en inspectie',
          'Garantie op alle kit werkzaamheden',
        ]}
        nearbyCities={['Rotterdam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Dordrecht']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige, waterdichte kit',
          'Garantie op alle kit werkzaamheden',
          'Lokale kennis van Schiedam',
        ]}
      />
      <Footer />
    </main>
  );
}
