import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Lekdetectie Den Haag | Weekend Klussen 24/7 Lekdetectie Service',
  description:
    '24/7 lekdetectie in Den Haag. Weekend Klussen biedt 24 uur per dag, 7 dagen per week lekdetectie service in Den Haag. Professionele lekkage opsporing met moderne apparatuur. Direct beschikbaar.',
};

export default function LekdetectieDenHaag24Page() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Den Haag"
        title="24/7 Lekdetectie Den Haag"
        description="Weekend Klussen biedt 24/7 lekdetectie en lekkage opsporing in Den Haag. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor professionele lekkage opsporing met moderne detectie apparatuur, van waterlekkages tot verwarmingslekkages."
        nearbyCities={['Rijswijk', 'Voorburg', 'Zoetermeer', 'Westland', 'Delft', 'Leiden']}
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
