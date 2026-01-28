'use client';

import { Vector3 } from 'three';
import { EnhancedSink } from '../bathroom/EnhancedSink';
import { EnhancedBathtub } from '../bathroom/EnhancedBathtub';

interface BathroomProps {
  position: Vector3 | [number, number, number];
}

export function Bathroom({ position }: BathroomProps) {
  const pos = Array.isArray(position) ? position : [position.x, position.y, position.z];

  return (
    <group position={pos as [number, number, number]}>
      {/* Sink positioned inside bathroom (left side) */}
      <EnhancedSink position={[-2, 1, 1]} />
      {/* Bathtub positioned inside bathroom (right side) */}
      <EnhancedBathtub position={[2, 0.5, -1]} />
    </group>
  );
}
