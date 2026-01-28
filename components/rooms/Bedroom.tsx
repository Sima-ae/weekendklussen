'use client';

import { Vector3 } from 'three';
import { Bed } from './Bed';
import { Wardrobe } from './Wardrobe';
import { Nightstand } from './Nightstand';
import { Rug } from './Rug';

interface BedroomProps {
  position: Vector3 | [number, number, number];
}

export function Bedroom({ position }: BedroomProps) {
  const pos = Array.isArray(position) ? position : [position.x, position.y, position.z];

  return (
    <group position={pos as [number, number, number]}>
      {/* Rug under bed */}
      <Rug position={[0, 0, 0]} size={[2.5, 2]} color="#f3f4f6" />
      {/* Bed positioned inside bedroom */}
      <Bed position={[0, 0, 0]} />
      {/* Nightstands */}
      <Nightstand position={[-1.2, 0, 0.9]} />
      <Nightstand position={[1.2, 0, 0.9]} />
      {/* Wardrobe positioned inside bedroom */}
      <Wardrobe position={[1.5, 0, -1.5]} />
    </group>
  );
}
