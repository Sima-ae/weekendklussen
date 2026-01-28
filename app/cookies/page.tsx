import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieContent } from '@/components/pages/CookieContent';

export const metadata: Metadata = {
  title: 'Cookiebeleid | Weekend Klussen Vaklieden',
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Cookiebeleid van Weekend Klussen. Informatie over welke cookies wij gebruiken, waarom wij deze gebruiken en hoe u cookies kunt beheren.',
};

export default function CookiesPage() {
  return (
    <main className="relative w-full flex-1 flex flex-col pt-14 sm:pt-16">
      <Header />
      <CookieContent />
      <Footer />
    </main>
  );
}
