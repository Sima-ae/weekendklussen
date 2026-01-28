'use client';

import Link from 'next/link';
import Image from 'next/image';

const footerDiensten = [
  { name: 'Aanbouw en uitbouw', href: '/diensten#aanbouw' },
  { name: 'Badkamer en toilet', href: '/diensten#badkamer' },
  { name: 'Keuken', href: '/diensten#keuken' },
  { name: 'Onderhoud', href: '/diensten#onderhoud' },
  { name: 'Renovatie', href: '/diensten#renovatie' },
 
];

const footerBedrijf = [
  { name: 'Algemene voorwaarden', href: '/algemene-voorwaarden' },
  { name: 'Contact', href: '/contact' },
  { name: 'Cookiebeleid', href: '/cookies' },
  { name: 'Offerte aanvragen', href: '/offerte' },
  { name: 'Over Weekend Klussen', href: '/over-ons' },
  { name: 'Privacybeleid', href: '/privacy' },
];

const werkgebied = [
  'Rotterdam',
  'Schiedam',
  'Vlaardingen',
  'Maassluis',
  'Westland',
  'Naaldwijk',
  'Honselersdijk',
  'Monster',
  's-Gravenzande',
  'Hoek van Holland',
  'Delft',
  'Schipluiden',
  's-Gravenhage',
  'Den Haag',
  'Rijswijk',
  'Wassenaar',
  'Leiden',
  'Zoetermeer',
  'Voorburg',
  'Berkel en Rodenrijs',
  'Pijnacker',
  'Nootdorp',
  'Katwijk',
  'Waddinxveen',
  'Gouda',
  'Alphen aan den Rijn',
  'Rhoon',
  'Pernis',
  'Portugaal',
  'Hoogvliet',
  'Spijkenisse',
  'Hellevoetsluis',
  'Capelle aan den IJssel',
  'Ridderkerk',
  'Barendrecht',
  'Duivendrecht',
  'Sliedrecht',
  'Papendrecht',
  'Zwijndrecht',
  'Bergen op Zoom',
  'Dordrecht',
  'Breda', 
  'En nog veel meer steden',
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <Link
              href="/"
              className="inline-block hover:opacity-80 transition-opacity mb-4"
            >
              <div className="h-8 sm:h-10 w-auto mx-auto sm:mx-0" style={{ filter: 'brightness(0) invert(1)' }}>
                <Image
                  src="/images/Weblogo.png"
                  alt="Weekend Klussen"
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 w-auto"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Weekend Klussen is voornamelijk actief in de regio Zuid-Holland. Uw vaklieden voor verbouwing,
              renovatie, aanbouw, badkamer, keuken, toilet en meer. Vakmannen met vaste prijzen en garantie.
            </p>
            
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Diensten
            </h3>
            <ul className="space-y-2">
              {footerDiensten.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Informatie
            </h3>
            <ul className="space-y-2">
              {footerBedrijf.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Social Media
            </h3>
            ...
          </div>
        </div>

        <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-gray-800 text-center">
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Werkgebied
          </h3>
          
          <div className="flex flex-wrap gap-1.5 justify-center">
            {werkgebied.map((plaats) => (
              <span
                key={plaats}
                className="text-xs px-2 py-0.5 bg-gray-800 rounded text-gray-400"
              >
                {plaats}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-10 pt-6 sm:pt-8 text-center">
          <p className="text-sm text-gray-500">
            <b>Weekend Klussen &copy; {currentYear}</b> <br />Powered by: <i><Link href="https://fix-web.site" className="text-gray-500 hover:text-white transition-colors" target="_blank">FIX-WEB.site</Link></i>
          </p>
        </div>
      </div>
    </footer>
  );
}
