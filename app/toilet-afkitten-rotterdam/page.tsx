import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceLocationContent } from '@/components/pages/ServiceLocationContent';
import { generatePageMetadata } from '@/lib/metadata-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Toilet Afkitten Rotterdam | Weekend Klussen Toilet Afkitten Rotterdam',
  description: 'Professioneel toilet afkitten in Rotterdam. Oude kit verwijderen en nieuwe kit aanbrengen rondom toilet. Ervaren vakmannen met vaste prijzen. Gratis offerte.',
  location: 'Rotterdam',
  service: 'toilet afkitten',
  keywords: ['toilet afkitten Rotterdam', 'toilet kit vervangen Rotterdam', 'toilet afkitten service Rotterdam', 'toilet kit verwijderen Rotterdam'],
});

export default function ToiletAfkittenRotterdamPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <ServiceLocationContent
        location="Rotterdam"
        service="Toilet Afkitten"
        title="Toilet Afkitten Rotterdam"
        description="Professioneel toilet afkitten in Rotterdam. Weekend Klussen verzorgt het verwijderen van oude kit en het aanbrengen van nieuwe kit rondom uw toilet in Rotterdam met ervaren vakmannen en vaste prijzen."
        serviceDescription="Weekend Klussen verzorgt professioneel toilet afkitten in Rotterdam. Of u nu oude, beschadigde of lekkende kit rondom uw toilet heeft - onze ervaren vakmannen verwijderen de oude kit volledig en brengen nieuwe, waterdichte kit aan in Rotterdam. Wij zorgen voor een perfecte afwerking die lang meegaat."
        serviceDetails={[
          'Oude kit verwijderen rondom toilet Rotterdam',
          'Nieuwe waterdichte kit aanbrengen',
          'Toilet grondig reinigen voorafgaand aan kitten',
          'Kit reparatie en kit vervanging',
          'Voegwerk reparatie rondom toilet',
          'Toilet afkitten met hoogwaardige kit Rotterdam',
          'Preventief onderhoud en inspectie',
          'Garantie op alle kit werkzaamheden',
        ]}
        nearbyCities={['Schiedam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Capelle aan den IJssel', 'Ridderkerk']}
        serviceBenefits={[
          'Ervaren vakmannen met jarenlange expertise',
          'Snelle service, vaak dezelfde dag',
          'Vaste prijzen zonder verrassingen',
          'Gebruik van hoogwaardige, waterdichte kit',
          'Garantie op alle kit werkzaamheden',
          'Lokale kennis van Rotterdam',
        ]}
      />
      <Footer />
    </main>
  );
}
