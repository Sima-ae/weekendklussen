'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { PhysicsScene } from '@/components/PhysicsScene';
import { UIOverlay } from '@/components/UIOverlay';
import { PopupOverlay } from '@/components/PopupOverlay';

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Adjust camera and controls based on device
  // Camera positioned to center the house perfectly with a slightly downward isometric view
  // Zoomed out more for better overview
  const cameraPosition = isMobile ? [12, 12, 24] : isTablet ? [11.5, 11.5, 23] : [11, 11, 22];
  const cameraFov = isMobile ? 65 : isTablet ? 62 : 60;
  // Allow much closer zooming to see inside the house through walls
  const minDistance = isMobile ? 3 : isTablet ? 3 : 3;
  const maxDistance = isMobile ? 50 : isTablet ? 50 : 50;
  // Target centered on the house (ground floor center, slightly elevated)
  const targetPosition = [0, 3, 0];

  return (
    <section id="home" className="relative w-full h-[85vh] min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden gradient-bg">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 webgl-container">
        <Canvas
          className="webgl-canvas"
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance',
            stencil: false,
            depth: true,
          }}
          shadows
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={cameraPosition as [number, number, number]} fov={cameraFov} />
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 8, 5]} intensity={1.5} castShadow shadow-mapSize-width={isMobile ? 1024 : 2048} shadow-mapSize-height={isMobile ? 1024 : 2048} />
            <directionalLight position={[-5, 5, -5]} intensity={0.6} />
            <pointLight position={[0, 3, 0]} intensity={1} />
            <pointLight position={[-7, 2, 4]} intensity={0.5} />
            <pointLight position={[5, 2, 4]} intensity={0.5} />
            
            <Physics gravity={[0, -9.81, 0]} timeStep={1 / 60}>
              <PhysicsScene />
            </Physics>
            
            <OrbitControls
              enablePan={!isMobile}
              enableZoom={true}
              enableRotate={true}
              minDistance={minDistance}
              maxDistance={maxDistance}
              enableDamping={true}
              dampingFactor={0.05}
              rotateSpeed={isMobile ? 0.3 : 0.5}
              minPolarAngle={0}
              maxPolarAngle={Math.PI}
              makeDefault
              target={targetPosition as [number, number, number]}
            />
            {/* Environment lighting - using local lights instead of external HDR to avoid CSP issues */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} />
            <hemisphereLight intensity={0.6} />
          </Suspense>
        </Canvas>
      </div>
      
      <UIOverlay />
      <PopupOverlay />
    </section>
  );
}
