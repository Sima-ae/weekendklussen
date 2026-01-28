'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { usePopupStore } from '@/lib/popupStore';

interface ToiletIconProps {
  position: [number, number, number];
}

export function ToiletIcon({ position }: ToiletIconProps) {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null);
  const showPopup = usePopupStore((s) => s.showPopup);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.lookAt(state.camera.position);
    }
  });

  const handleClick = (e: any) => {
    e.stopPropagation();
    showPopup('Toilet installatie, renovatie en verbouwing');
  };

  return (
    <group ref={groupRef} position={position} renderOrder={1000}>
      <mesh
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        renderOrder={1000}
      >
        <circleGeometry args={[0.42, 32]} />
        <meshStandardMaterial
          color={hovered ? '#4a90e2' : '#2a2a2a'}
          metalness={0.3}
          roughness={0.4}
          depthWrite={false}
          depthTest={false}
        />
      </mesh>
      <group renderOrder={1001}>
        {/* Horizontal line of + */}
        <mesh position={[0, 0, 0.2]} renderOrder={1001}>
          <boxGeometry args={[0.25, 0.067, 0.02]} />
          <meshStandardMaterial color="#ffffff" depthWrite={false} depthTest={false} />
        </mesh>
        {/* Vertical line of + */}
        <mesh position={[0, 0, 0.2]} renderOrder={1001}>
          <boxGeometry args={[0.067, 0.25, 0.02]} />
          <meshStandardMaterial color="#ffffff" depthWrite={false} depthTest={false} />
        </mesh>
      </group>
    </group>
  );
}
