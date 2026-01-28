'use client';

import { Vector3 } from 'three';

interface KitchenCabinetsProps {
  position: Vector3 | [number, number, number];
}

export function KitchenCabinets({ position }: KitchenCabinetsProps) {
  const pos = Array.isArray(position) ? position : [position.x, position.y, position.z];

  return (
    <group position={pos as [number, number, number]}>
      {/* Upper cabinets - white */}
      {[-2, 0, 2].map((x, i) => (
        <mesh key={`upper-${i}`} castShadow position={[x, 1.5, 0]}>
          <boxGeometry args={[0.65, 0.85, 0.38]} />
          <meshStandardMaterial color="#ffffff" roughness={0.4} metalness={0.1} />
        </mesh>
      ))}
      {/* Upper cabinet doors */}
      {[-2, 0, 2].map((x, i) => (
        <mesh key={`upper-door-${i}`} castShadow position={[x, 1.5, 0.2]}>
          <boxGeometry args={[0.63, 0.83, 0.02]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.3} />
        </mesh>
      ))}
      {/* Lower cabinets - light wood */}
      {[-2, 0, 2].map((x, i) => (
        <mesh key={`lower-${i}`} castShadow receiveShadow position={[x, 0.45, 0]}>
          <boxGeometry args={[0.65, 0.9, 0.6]} />
          <meshStandardMaterial color="#fef3c7" roughness={0.6} metalness={0.05} />
        </mesh>
      ))}
      {/* Lower cabinet doors */}
      {[-2, 0, 2].map((x, i) => (
        <mesh key={`lower-door-${i}`} castShadow position={[x, 0.45, 0.31]}>
          <boxGeometry args={[0.63, 0.88, 0.02]} />
          <meshStandardMaterial color="#fde68a" roughness={0.5} />
        </mesh>
      ))}
      {/* Cabinet handles */}
      {[-2, 0, 2].map((x, i) => (
        <mesh key={`handle-${i}`} castShadow position={[x, 0.45, 0.32]}>
          <cylinderGeometry args={[0.01, 0.01, 0.08, 16]} />
          <meshStandardMaterial color="#6b7280" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}
