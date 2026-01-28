'use client';

import { RigidBody } from '@react-three/rapier';

export function SimpleHouseLayout() {
  const wallThickness = 0.2;
  const wallHeight = 3;
  const exteriorWallColor = '#87ceeb'; // Light blue
  const interiorWallColor = '#f0f0f0'; // Light gray/white

  return (
    <>
      {/* EXTERIOR WALLS - Light Blue */}
      {/* Back wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight / 2, -8]} receiveShadow castShadow>
          <boxGeometry args={[20, wallHeight, wallThickness]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} />
        </mesh>
      </RigidBody>

      {/* Front wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight / 2, 8]} receiveShadow castShadow>
          <boxGeometry args={[20, wallHeight, wallThickness]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} />
        </mesh>
      </RigidBody>

      {/* Left wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-10, wallHeight / 2, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, 16]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} />
        </mesh>
      </RigidBody>

      {/* Right wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[10, wallHeight / 2, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, 16]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} />
        </mesh>
      </RigidBody>

      {/* INTERIOR WALLS - Light Gray/White, Full Height */}
      {/* Wall separating bedrooms/bathroom from main living area (horizontal) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight / 2, -2]} receiveShadow castShadow>
          <boxGeometry args={[20, wallHeight, wallThickness]} />
          <meshStandardMaterial color={interiorWallColor} roughness={0.9} />
        </mesh>
      </RigidBody>

      {/* Wall separating bedroom 1 and bathroom (vertical) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-4, wallHeight / 2, -5]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, 6]} />
          <meshStandardMaterial color={interiorWallColor} roughness={0.9} />
        </mesh>
      </RigidBody>

      {/* Wall separating bedroom 2 and bathroom (vertical) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4, wallHeight / 2, -5]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, 6]} />
          <meshStandardMaterial color={interiorWallColor} roughness={0.9} />
        </mesh>
      </RigidBody>

      {/* NO WALL between living room and kitchen - open plan */}
    </>
  );
}
