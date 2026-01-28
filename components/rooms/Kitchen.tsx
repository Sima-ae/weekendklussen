'use client';

import { Vector3 } from 'three';
import { KitchenSink } from './KitchenSink';
import { Stove } from './Stove';
import { Refrigerator } from './Refrigerator';
import { KitchenCabinets } from './KitchenCabinets';

interface KitchenProps {
  position: Vector3 | [number, number, number];
}

export function Kitchen({ position }: KitchenProps) {
  const pos = Array.isArray(position) ? position : [position.x, position.y, position.z];

  return (
    <group position={pos as [number, number, number]}>
      {/* All objects positioned inside kitchen boundaries */}
      <KitchenCabinets position={[-2, 0, 0]} />
      <KitchenSink position={[-1, 0.9, 0]} />
      <Stove position={[1, 0.9, 0]} />
      <Refrigerator position={[2.5, 0, 0]} />
    </group>
  );
}
