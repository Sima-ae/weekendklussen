import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AlgemeneVoorwaardenContent } from '@/components/pages/AlgemeneVoorwaardenContent';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | Weekend Klussen Vaklieden',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Algemene voorwaarden van Weekend Klussen. Bekijk onze voorwaarden voor offertes, opdrachten, betaling, garantie en aansprakelijkheid.',
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <AlgemeneVoorwaardenContent />
      <Footer />
    </main>
  );
}
