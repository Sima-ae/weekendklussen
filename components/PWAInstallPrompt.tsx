'use client';

import { useState, useEffect } from 'react';
import { Download, X, Smartphone, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PWAInstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // Check if app is already installed/running in standalone mode
        const standalone = window.matchMedia('(display-mode: standalone)').matches ||
            (window.navigator as any).standalone === true;

        setIsStandalone(standalone);

        if (standalone) return;

        // Detect iOS
        const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        setIsIOS(ios);

        const handler = (e: Event) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e as BeforeInstallPromptEvent);

            // Delay visibility for PWA-enabled browsers
            setTimeout(() => {
                setIsVisible(true);
            }, 3000);
        };

        window.addEventListener('beforeinstallprompt', handler);

        // For iOS, we show the prompt manually after some time since there's no event
        if (ios) {
            setTimeout(() => {
                setIsVisible(true);
            }, 5000);
        }

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const handleInstallClick = async () => {
        if (isIOS) {
            // iOS doesn't support deferredPrompt.prompt()
            // We already show instructions in the UI for iOS
            return;
        }

        if (!deferredPrompt) return;

        // Show the install prompt
        await deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            console.log('User accepted the install prompt');
            setDeferredPrompt(null);
            setIsVisible(false);
        } else {
            console.log('User dismissed the install prompt');
        }
    };

    const dismissPrompt = () => {
        setIsVisible(false);
        // Don't show again in this session
        sessionStorage.setItem('pwa-prompt-dismissed', 'true');
    };

    useEffect(() => {
        const dismissed = sessionStorage.getItem('pwa-prompt-dismissed');
        if (dismissed === 'true') {
            setIsVisible(false);
        }
    }, []);

    if (isStandalone || !isVisible) return null;

    // Only show if we have a prompt event OR if it's iOS
    if (!deferredPrompt && !isIOS) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="fixed bottom-6 left-6 right-6 z-[100] sm:left-auto sm:right-8 sm:w-[380px]"
            >
                <div className="bg-white/95 backdrop-blur-xl border border-blue-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden p-6 flex flex-col gap-4 text-gray-900 ring-1 ring-black/5">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 overflow-hidden">
                                <img src="/images/favicon.png" alt="App Icon" className="w-10 h-10 object-contain" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl leading-tight">Weekend Klussen</h3>
                                <p className="text-sm text-gray-500">Installeer onze App</p>
                            </div>
                        </div>
                        <button
                            onClick={dismissPrompt}
                            className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
                            aria-label="Sluiten"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="space-y-3">
                        {isIOS ? (
                            <div className="bg-blue-50/50 rounded-2xl p-4 border border-blue-100/50">
                                <p className="text-sm text-blue-900 font-medium mb-3">Installatie op iPhone/iPad:</p>
                                <ol className="text-xs text-blue-800 space-y-2 list-decimal ml-4">
                                    <li>Tik op de <strong>Deel-knop</strong> (vierkant met pijltje omhoog) onderaan.</li>
                                    <li>Scroll omlaag en tik op <strong>Zet op beginscherm</strong>.</li>
                                    <li>Tik rechtsboven op <strong>Voeg toe</strong>.</li>
                                </ol>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2.5">
                                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium px-1">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                                        <Smartphone size={14} className="text-blue-600" />
                                    </div>
                                    <span>Snelle toegang vanaf uw beginscherm</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium px-1">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                                        <Monitor size={14} className="text-blue-600" />
                                    </div>
                                    <span>Offline functies en snellere laadtijd</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {!isIOS && (
                        <button
                            onClick={handleInstallClick}
                            className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group"
                        >
                            <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                            <span>Nu Installeren</span>
                        </button>
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
