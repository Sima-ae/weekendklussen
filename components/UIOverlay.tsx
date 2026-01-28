'use client';

import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Settings } from 'lucide-react';
import { useState } from 'react';

export function UIOverlay() {
  const [isPaused, setIsPaused] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Control buttons - top right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute top-4 right-2 sm:right-4 flex items-center gap-2 sm:gap-3 pointer-events-auto"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPaused(!isPaused)}
          className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors shadow-lg"
          aria-label={isPaused ? 'Hervatten' : 'Pauzeren'}
        >
          {isPaused ? <Play size={20} /> : <Pause size={20} />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.reload()}
          className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors shadow-lg"
          aria-label="Scène opnieuw laden"
        >
          <RotateCcw size={20} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowSettings(!showSettings)}
          className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors shadow-lg"
          aria-label="Instellingen"
        >
          <Settings size={20} />
        </motion.button>
      </motion.div>

      {/* Bottom info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 pointer-events-auto"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 text-white text-xs sm:text-sm"
          >
            <p className="text-center">
              <span className="hidden sm:inline">Klik op + voor meer informatie • Scroll om in/uit te zoomen • </span>Klik en sleep om te roteren
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Settings panel */}
      {showSettings && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="absolute top-16 sm:top-20 right-2 sm:right-6 bg-white/20 backdrop-blur-md rounded-lg p-4 sm:p-6 text-white pointer-events-auto w-[calc(100%-1rem)] sm:w-auto sm:min-w-[300px] max-w-[90vw] sm:max-w-none"
        >
          <h2 className="text-xl font-bold mb-4">Instellingen</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Zwaartekracht</label>
              <input
                type="range"
                min="0"
                max="20"
                defaultValue="9.81"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Snelheid</label>
              <input
                type="range"
                min="0.1"
                max="2"
                step="0.1"
                defaultValue="1"
                className="w-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
