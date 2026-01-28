'use client';

import { Vector3 } from 'three';
import { Sofa } from './Sofa';
import { DiningTable } from './DiningTable';
import { TV } from './TV';
import { CoffeeTable } from './CoffeeTable';
import { Rug } from './Rug';
import { Ottoman } from './Ottoman';
import { ConsoleTable } from './ConsoleTable';

interface LivingRoomProps {
  position: Vector3 | [number, number, number];
}

export function LivingRoom({ position }: LivingRoomProps) {
  const pos = Array.isArray(position) ? position : [position.x, position.y, position.z];

  return (
    <group position={pos as [number, number, number]}>
      {/* Rug under sofa area */}
      <Rug position={[-2, 0, -0.5]} size={[3, 2.5]} color="#e5e7eb" />
      {/* All objects positioned inside living room */}
      <Sofa position={[-2, 0, -1]} />
      <CoffeeTable position={[-2, 0.4, 0]} />
      <Ottoman position={[-0.5, 0, -0.5]} />
      <ConsoleTable position={[-2, 0, 1.2]} />
      <TV position={[-2, 1.2, 1.5]} />
      <DiningTable position={[2, 0, 1]} />
    </group>
  );
}
