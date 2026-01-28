'use client';

import { RigidBody } from '@react-three/rapier';

export function Walls() {
  const wallThickness = 0.15;
  const wallHeight = 3;
  const roomWidth = 20;
  const roomDepth = 16;

  return (
    <>
      {/* Exterior walls */}
      {/* Back wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight / 2, -roomDepth / 2]} receiveShadow castShadow>
          <boxGeometry args={[roomWidth, wallHeight, wallThickness]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Front wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight / 2, roomDepth / 2]} receiveShadow castShadow>
          <boxGeometry args={[roomWidth, wallHeight, wallThickness]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Left wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-roomWidth / 2, wallHeight / 2, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, roomDepth]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Right wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[roomWidth / 2, wallHeight / 2, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, roomDepth]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Interior walls - realistic room separation */}
      {/* Wall between bathroom and kitchen (vertical) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-6, wallHeight / 2, -1]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, 8]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Wall between kitchen and living room (horizontal) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-1, wallHeight / 2, 3]} receiveShadow castShadow>
          <boxGeometry args={[10, wallHeight, wallThickness]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Wall between living room and toilet (vertical) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[6, wallHeight / 2, -1]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, 8]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Wall separating bathroom from hallway (horizontal) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-3, wallHeight / 2, -5]} receiveShadow castShadow>
          <boxGeometry args={[6, wallHeight, wallThickness]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Wall separating toilet from hallway (horizontal) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[3, wallHeight / 2, -5]} receiveShadow castShadow>
          <boxGeometry args={[6, wallHeight, wallThickness]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
      </RigidBody>
    </>
  );
}
