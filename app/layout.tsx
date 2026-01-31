import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ProtectionOverlay } from '@/components/ProtectionOverlay';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { PWAInstallPrompt } from '@/components/PWAInstallPrompt';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  applicationName: 'Weekend Klussen',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Weekend Klussen',
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
  },
  title: {
    default: 'Weekend Klussen – Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving',
    template: '%s | Weekend Klussen Vaklieden',
  },
  description:
    'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Weekend Klussen is uw bouwbedrijf en vaklieden in Zuid-Holland. Verbouwing, woningverbouwing, badkamer verbouwen, aanbouw, renovatie. Gratis offerte aanvragen. Werkgebied o.a. Rotterdam, Den Haag, Leiden, Dordrecht, Gouda, Delft, Schiedam, Vlaardingen, Westland, Rijswijk, Capelle aan den IJssel, Spijkenisse, Katwijk, Voorburg, Pijnacker-Nootdorp, Barendrecht, Ridderkerk en overige steden in Zuid-Holland.',
  keywords: [
    'vaklieden',
    'vaklieden nodig',
    'verbouwing',
    'verbouwen',
    'bouwbedrijf',
    'renovatie',
    'klusbedrijf',
    'aanbouw',
    'woningverbouwing',
    'badkamer verbouwen',
    'vaklieden Zuid-Holland',
    'vaklieden Rotterdam',
    'vaklieden Den Haag',
    'vaklieden Leiden',
    'vaklieden Dordrecht',
    'vaklieden Gouda',
    'vaklieden Delft',
    'gratis offerte',
    'betrouwbare vaklieden',
    'verbouwing kosten',
    'bouw vaklieden',
  ],
  authors: [{ name: 'Weekend Klussen' }],
  icons: {
    icon: [
      {
        url: '/images/favicon.png',
        type: 'image/png',
      },
    ],
    apple: [
      { url: '/images/favicon.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/favicon.png', sizes: '152x152', type: 'image/png' },
      { url: '/images/favicon.png', sizes: '167x167', type: 'image/png' },
      { url: '/images/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/favicon.png',
  },
  openGraph: {
    title: 'Weekend Klussen – Betrouwbare vaklieden | Verbouwing & Renovatie Zuid-Holland',
    description: 'Vaklieden voor renovatie en verbouwing in Zuid-Holland en omgeving. Verbouwing, renovatie, aanbouw, badkamer verbouwen. Gratis offerte. Vaklieden in Rotterdam, Den Haag, Leiden en regio.',
    type: 'website',
    images: [
      {
        url: '/images/Weblogo.png',
        width: 1200,
        height: 630,
        alt: 'Weekend Klussen Vaklieden Zuid-Holland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Weblogo.png'],
  },
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#2563eb',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning className="h-full">
      <body className={`${inter.className} min-h-screen flex flex-col w-full antialiased`}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EF1H4JJR37"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EF1H4JJR37');
          `}
        </Script>
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                  },
                  function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
        {/* Meta Pixel - Replace "000" with your actual Pixel ID */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '000');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=000&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <ProtectionOverlay />
        <div className="flex-1 flex flex-col w-full min-h-0">{children}</div>
        <WhatsAppWidget />
        <PWAInstallPrompt />
      </body>
    </html>
  );
}
