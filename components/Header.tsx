'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Over ons', href: '/over-ons' },
  { name: 'Diensten', href: '/diensten', hasDropdown: true },
  { name: 'Informatie', href: '#', hasDropdown: true },
  { name: 'Contact', href: '/contact' },
];

const informatieDropdownItems = [
  { name: 'Algemene voorwaarden', href: '/algemene-voorwaarden' },
  { name: 'Cookiebeleid', href: '/cookies' },
  { name: 'Privacybeleid', href: '/privacy' },
];

const dienstenDropdownItems = [
  { name: 'Aanbouw en uitbouw', href: '/diensten#aanbouw' },
  { name: 'Badkamer en toilet', href: '/diensten#badkamer' },
  { name: 'Keuken', href: '/diensten#keuken' },
  { name: 'Onderhoud', href: '/diensten#onderhoud' },
  { name: 'Renovatie', href: '/diensten#renovatie' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDienstenDropdownOpen, setIsDienstenDropdownOpen] = useState(false);
  const [isInformatieDropdownOpen, setIsInformatieDropdownOpen] = useState(false);
  const dienstenDropdownRef = useRef<HTMLDivElement>(null);
  const informatieDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dienstenDropdownRef.current && !dienstenDropdownRef.current.contains(event.target as Node)) {
        setIsDienstenDropdownOpen(false);
      }
      if (informatieDropdownRef.current && !informatieDropdownRef.current.contains(event.target as Node)) {
        setIsInformatieDropdownOpen(false);
      }
    };

    if (isDienstenDropdownOpen || isInformatieDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDienstenDropdownOpen, isInformatieDropdownOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Hoofdnavigatie">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link
              href="/"
              className="inline-flex items-center hover:opacity-80 transition-opacity"
              aria-label="Weekend Klussen Home"
            >
              <Image
                src="/images/Weblogo.png"
                alt="Weekend Klussen"
                width={180}
                height={60}
                className="h-12 sm:h-14 w-auto"
                priority
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {item.hasDropdown ? (
                  <div
                    ref={item.name === 'Diensten' ? dienstenDropdownRef : informatieDropdownRef}
                    className="relative"
                    onMouseEnter={() => {
                      if (item.name === 'Diensten') {
                        setIsDienstenDropdownOpen(true);
                      } else if (item.name === 'Informatie') {
                        setIsInformatieDropdownOpen(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.name === 'Diensten') {
                        setIsDienstenDropdownOpen(false);
                      } else if (item.name === 'Informatie') {
                        setIsInformatieDropdownOpen(false);
                      }
                    }}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 text-gray-700 hover:text-brown-600 transition-colors font-medium text-[15px]"
                      aria-expanded={
                        item.name === 'Diensten'
                          ? isDienstenDropdownOpen
                          : item.name === 'Informatie'
                          ? isInformatieDropdownOpen
                          : false
                      }
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          (item.name === 'Diensten' && isDienstenDropdownOpen) ||
                          (item.name === 'Informatie' && isInformatieDropdownOpen)
                            ? 'rotate-180'
                            : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {(item.name === 'Diensten' && isDienstenDropdownOpen) ||
                      (item.name === 'Informatie' && isInformatieDropdownOpen) ? (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        >
                          {(item.name === 'Diensten' ? dienstenDropdownItems : informatieDropdownItems).map(
                            (dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2.5 text-gray-700 hover:text-brown-600 hover:bg-gray-50 transition-colors font-medium text-sm"
                                onClick={() => {
                                  if (item.name === 'Diensten') {
                                    setIsDienstenDropdownOpen(false);
                                  } else if (item.name === 'Informatie') {
                                    setIsInformatieDropdownOpen(false);
                                  }
                                }}
                              >
                                {dropdownItem.name}
                              </Link>
                            )
                          )}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-brown-600 transition-colors font-medium text-[15px]"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/offerte"
                className="inline-block px-4 py-2.5 sm:px-5 bg-brown-600 text-white rounded-lg hover:bg-brown-700 transition-colors font-medium text-sm sm:text-base shadow-sm"
              >
                Offerte aanvragen
              </Link>
            </motion.div>
          </div>

          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-label="Mobilenavigatie"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => {
                            if (item.name === 'Diensten') {
                              setIsDienstenDropdownOpen(!isDienstenDropdownOpen);
                              setIsInformatieDropdownOpen(false);
                            } else if (item.name === 'Informatie') {
                              setIsInformatieDropdownOpen(!isInformatieDropdownOpen);
                              setIsDienstenDropdownOpen(false);
                            }
                          }}
                          className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:text-brown-600 hover:bg-gray-50 font-medium rounded-lg transition-colors"
                        >
                          {item.name}
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              (item.name === 'Diensten' && isDienstenDropdownOpen) ||
                              (item.name === 'Informatie' && isInformatieDropdownOpen)
                                ? 'rotate-180'
                                : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {((item.name === 'Diensten' && isDienstenDropdownOpen) ||
                            (item.name === 'Informatie' && isInformatieDropdownOpen)) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50">
                                {(item.name === 'Diensten' ? dienstenDropdownItems : informatieDropdownItems).map(
                                  (dropdownItem) => (
                                    <Link
                                      key={dropdownItem.name}
                                      href={dropdownItem.href}
                                      className="block py-2 px-2 text-gray-700 hover:text-brown-600 font-medium rounded transition-colors text-sm"
                                      onClick={() => {
                                        if (item.name === 'Diensten') {
                                          setIsDienstenDropdownOpen(false);
                                        } else if (item.name === 'Informatie') {
                                          setIsInformatieDropdownOpen(false);
                                        }
                                        setIsMenuOpen(false);
                                      }}
                                    >
                                      {dropdownItem.name}
                                    </Link>
                                  )
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-3 px-4 text-gray-700 hover:text-brown-600 hover:bg-gray-50 font-medium rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-2 px-4">
                  <Link
                    href="/offerte"
                    className="block w-full py-3 text-center bg-brown-600 text-white rounded-lg font-medium hover:bg-brown-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Offerte aanvragen
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
