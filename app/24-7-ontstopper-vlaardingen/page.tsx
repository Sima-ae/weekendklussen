import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocationContent } from '@/components/pages/LocationContent';

export const metadata: Metadata = {
  title: '24/7 Ontstopper Vlaardingen | Weekend Klussen 24/7 Ontstopper Service',
  description:
    '24/7 ontstopper in Vlaardingen. Weekend Klussen biedt 24 uur per dag, 7 dagen per week ontstopper service in Vlaardingen. Verstoppingen, riool ontstoppen, afvoer ontstoppen en meer. Direct beschikbaar.',
};

export default function OntstopperVlaardingen24Page() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <LocationContent
        location="Vlaardingen"
        title="24/7 Ontstopper Vlaardingen"
        description="Weekend Klussen biedt 24/7 ontstopper service en riool ontstoppen in Vlaardingen. Wij zijn 24 uur per dag, 7 dagen per week beschikbaar voor alle verstoppingen, van riool ontstoppen tot afvoer ontstoppen en spoedreparaties."
        nearbyCities={['Rotterdam', 'Schiedam', 'Maassluis', 'Westland', 'Delft']}
        services={[
          '24/7 ontstopper en noodservice',
          'Riool ontstoppen en verstoppingen',
          'Afvoer ontstoppen en reinigen',
          'Wc ontstoppen en toilet ontstoppen',
          'Vuilwaterafvoer ontstoppen',
          'Camera inspectie en diagnose',
          'Direct beschikbaar, dag en nacht'
        ]}
      />
      <Footer />
    </main>
  );
}
