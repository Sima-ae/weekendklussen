'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePopupStore } from '@/lib/popupStore';

export function PopupOverlay() {
  const { text, closePopup } = usePopupStore();

  return (
    <AnimatePresence>
      {text && (
        <motion.div
          key="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Subtle backdrop - click to close */}
          <button
            type="button"
            aria-label="Sluiten"
            onClick={closePopup}
            className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
          />
          <div
            className="relative flex flex-col items-center gap-3 max-w-[min(92vw,480px)] w-full"
            role="status"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ type: 'spring', damping: 22, stiffness: 360 }}
              className="
                w-full
                pl-5 pr-5 py-4 rounded-2xl
                bg-white dark:bg-slate-900
                shadow-[0_20px_60px_rgba(0,0,0,0.18),0_4px_16px_rgba(0,0,0,0.1)]
                border border-slate-200/80 dark:border-slate-600/60
                border-l-4 border-l-indigo-500
              "
            >
              <p
                className="
                  text-center text-lg sm:text-xl font-semibold
                  text-slate-800 dark:text-slate-100
                  leading-snug tracking-tight
                  break-words
                "
              >
                {text}
              </p>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.2 }}
              type="button"
              onClick={closePopup}
              className="
                px-5 py-2.5 rounded-xl text-sm font-medium
                bg-white dark:bg-slate-800
                text-slate-700 dark:text-slate-200
                hover:bg-slate-50 dark:hover:bg-slate-700
                border border-slate-200 dark:border-slate-600
                shadow-md
                transition-colors
              "
              aria-label="Sluiten"
            >
              Sluiten
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
