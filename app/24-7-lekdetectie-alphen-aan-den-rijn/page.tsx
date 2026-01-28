import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Lekdetectie Alphen aan den Rijn | Weekend Klussen 24/7 Lekdetectie Service',
  description:
    '24/7 lekdetectie in Alphen aan den Rijn. Weekend Klussen biedt 24 uur per dag, 7 dagen per week lekdetectie service in Alphen aan den Rijn. Professionele lekkage opsporing met moderne apparatuur. Direct beschikbaar.',
};

export default function LekdetectieAlphenAanDenRijn24Page() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Alphen aan den Rijn"
        title="24/7 Lekdetectie Alphen aan den Rijn"
        description="Weekend Klussen biedt 24/7 lekdetectie en lekkage opsporing in Alphen aan den Rijn. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor professionele lekkage opsporing met moderne detectie apparatuur, van waterlekkages tot verwarmingslekkages."
        nearbyCities={['Leiden', 'Gouda', 'Zoetermeer', 'Bodegraven', 'Waddinxveen']}
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
