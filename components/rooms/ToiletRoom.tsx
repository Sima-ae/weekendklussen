'use client';

import { Vector3 } from 'three';
import { EnhancedToilet } from '../bathroom/EnhancedToilet';

interface ToiletRoomProps {
  position: Vector3 | [number, number, number];
}

export function ToiletRoom({ position }: ToiletRoomProps) {
  const pos = Array.isArray(position) ? position : [position.x, position.y, position.z];

  return (
    <group position={pos as [number, number, number]}>
      {/* Toilet positioned inside toilet room */}
      <EnhancedToilet position={[0, 0.5, 0]} />
    </group>
  );
}
