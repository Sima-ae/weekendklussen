import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Lekdetectie | Weekend Klussen 24/7 Lekdetectie Service',
  description:
    '24/7 lekdetectie en lekkage opsporing. Weekend Klussen biedt 24 uur per dag, 7 dagen per week lekdetectie service in Zuid-Holland. Professionele lekkage opsporing met moderne apparatuur. Direct beschikbaar.',
};

export default function Lekdetectie24Page() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Zuid-Holland"
        title="24/7 Lekdetectie"
        description="Weekend Klussen biedt 24/7 lekdetectie en lekkage opsporing in Zuid-Holland. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor professionele lekkage opsporing met moderne detectie apparatuur, van waterlekkages tot verwarmingslekkages."
        nearbyCities={['Rotterdam', 'Schiedam', 'Vlaardingen', 'Maassluis', 'Delft', 'Den Haag', 'Leiden', 'Dordrecht', 'Zoetermeer', 'Gouda', 'Alphen aan den Rijn']}
        services={[
          '24/7 lekdetectie en lekkage opsporing',
          'Waterlekkage detectie en opsporing',
          'Verwarmingslekkage detectie',
          'Infrarood camera en thermografie',
          'Akoestische lekkage detectie',
          'Drukproeven en lektesten',
          'Direct beschikbaar, dag en nacht'
        ]}
      />
      <Footer />
    </main>
  );
}
