import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PrivacyContent } from '@/components/pages/PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacyverklaring | Weekend Klussen Aannemer',
  description:
    'Aannemer voor renovatie en verbouwing in Zuid-Holland en omgeving. Privacyverklaring van Weekend Klussen. Informatie over hoe wij uw persoonsgegevens verzamelen, gebruiken en beschermen in overeenstemming met de AVG/GDPR.',
};

export default function PrivacyPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
