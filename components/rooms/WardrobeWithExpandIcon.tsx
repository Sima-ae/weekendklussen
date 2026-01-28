'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';
import { usePopupStore } from '@/lib/popupStore';

// Wardrobe centered on front wall, opposite the bed (bed is at X=-2.2, Z=3.875)
// Front wall inside face is at Z≈-4.875, wardrobe depth is 0.6, so center at Z=-4.575
// First floor is at Y=3, wardrobe height is 2, so center at Y=4 (3 + 1)
const WARDROBE_POS = { x: -2.2, y: 4, z: -4.575 } as const;
const WARDROBE_SIZE = [1.2, 2, 0.6] as const;
const ICON_POS: [number, number, number] = [WARDROBE_POS.x, WARDROBE_POS.y, -4.275];

export function WardrobeWithExpandIcon() {
  const [expanded, setExpanded] = useState(false);
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
    showPopup('Inbouw en montage');
    setExpanded(!expanded);
  };

  const closetPositions = expanded
    ? [
        { x: WARDROBE_POS.x - 1.2, y: WARDROBE_POS.y, z: WARDROBE_POS.z },
        { x: WARDROBE_POS.x, y: WARDROBE_POS.y, z: WARDROBE_POS.z },
        { x: WARDROBE_POS.x + 1.2, y: WARDROBE_POS.y, z: WARDROBE_POS.z },
      ]
    : [{ x: WARDROBE_POS.x, y: WARDROBE_POS.y, z: WARDROBE_POS.z }];

  return (
    <>
      {closetPositions.map((pos, i) => (
        <RigidBody key={i} type="fixed" colliders="cuboid">
          <mesh position={[pos.x, pos.y, pos.z]} castShadow receiveShadow>
            <boxGeometry args={[...WARDROBE_SIZE]} />
            <meshStandardMaterial color="#2a2a2a" roughness={0.6} />
          </mesh>
        </RigidBody>
      ))}
      <group ref={groupRef} position={ICON_POS} renderOrder={1000}>
        <mesh
          onClick={handleClick}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = 'default';
          }}
          renderOrder={1000}
        >
          <circleGeometry args={[0.38, 32]} />
          <meshStandardMaterial
            color={hovered ? '#4a90e2' : '#2a2a2a'}
            metalness={0.3}
            roughness={0.4}
            depthWrite={false}
            depthTest={false}
          />
        </mesh>
        <group renderOrder={1001}>
          <mesh position={[0, 0, 0.2]} renderOrder={1001}>
            <boxGeometry args={[0.25, 0.067, 0.02]} />
            <meshStandardMaterial color="#ffffff" depthWrite={false} depthTest={false} />
          </mesh>
          {!expanded && (
            <mesh position={[0, 0, 0.2]} renderOrder={1001}>
              <boxGeometry args={[0.067, 0.25, 0.02]} />
              <meshStandardMaterial color="#ffffff" depthWrite={false} depthTest={false} />
            </mesh>
          )}
        </group>
      </group>
    </>
  );
}
