'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Realistic WhatsApp Icon SVG Component
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsAppWidget() {
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  const whatsappNumber = '+31687999505';
  const whatsappMessage = encodeURIComponent('Hallo, ik heb een vraag over uw diensten.');
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  // Show info popup automatically on first visit (after a short delay)
  useEffect(() => {
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShowInfoPopup(true);
        setHasShownPopup(true);
        // Auto-hide after 5 seconds
        setTimeout(() => {
          setShowInfoPopup(false);
        }, 5000);
      }, 1000); // Show after 1 second
      return () => clearTimeout(timer);
    }
  }, [hasShownPopup]);

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleClosePopup = () => {
    setShowInfoPopup(false);
  };

  return (
    <>
      {/* Floating WhatsApp Icon - brown/grey theme */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #5f3813 0%, #4a2b0f 50%, #333333 100%)',
        }}
        aria-label="WhatsApp Chat"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </motion.button>

      {/* Information Popup - brown/grey theme */}
      <AnimatePresence>
        {showInfoPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 max-w-xs w-[calc(100vw-3rem)] sm:w-80"
          >
            <div
              className="relative rounded-xl shadow-2xl overflow-hidden cursor-pointer backdrop-blur-sm"
              style={{
                background: 'linear-gradient(135deg, #5f3813 0%, #4a2b0f 50%, #333333 100%)',
              }}
              onClick={handleWhatsAppClick}
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClosePopup();
                }}
                className="absolute top-2.5 right-2.5 z-10 w-6 h-6 flex items-center justify-center text-white/90 hover:text-white hover:bg-white/20 rounded-full transition-all duration-200"
                aria-label="Sluiten"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Content */}
              <div className="p-3.5 pr-9 pt-4">
                <div className="text-white">
                  <h3 className="font-semibold text-base mb-1 leading-tight">WhatsApp Chat</h3>
                  <p className="text-xs leading-snug text-white/95">
                    Stuur ons een bericht via WhatsApp voor snelle hulp en vragen over renovatie en verbouwing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
