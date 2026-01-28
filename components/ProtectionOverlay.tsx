'use client';

import { useState, useEffect } from 'react';

export function ProtectionOverlay() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Prevent right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
      return false;
    };

    // Prevent copy (Ctrl+C, Ctrl+A, Ctrl+X)
    const handleCopy = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C' || e.key === 'a' || e.key === 'A' || e.key === 'x' || e.key === 'X')) {
        e.preventDefault();
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
        return false;
      }
    };

    // Prevent view source (Ctrl+U, Ctrl+S, F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C)
    const handleViewSource = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S') ||
        e.key === 'F12' ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c'))
      ) {
        e.preventDefault();
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
        return false;
      }
    };

    // Prevent text selection
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Prevent drag
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleCopy);
    document.addEventListener('keydown', handleViewSource);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleCopy);
      document.removeEventListener('keydown', handleViewSource);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
          <p className="text-2xl font-semibold" style={{ color: '#4F46E5' }}>
            FIX-WEB.site © 2026
          </p>
        </div>
      )}
    </>
  );
}
