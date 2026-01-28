'use client';

import { RigidBody } from '@react-three/rapier';

export function Walls() {
  const wallThickness = 0.15;
  const wallHeight = 3;
  const roomSize = 10;

  return (
    <>
      {/* Back wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight / 2, -roomSize / 2]} receiveShadow castShadow>
          <boxGeometry args={[roomSize, wallHeight, wallThickness]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
        {/* Wall baseboard */}
        <mesh position={[0, 0.05, -roomSize / 2 + 0.08]} receiveShadow castShadow>
          <boxGeometry args={[roomSize, 0.1, 0.02]} />
          <meshStandardMaterial color="#e9ecef" roughness={0.6} />
        </mesh>
      </RigidBody>

      {/* Front wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight / 2, roomSize / 2]} receiveShadow castShadow>
          <boxGeometry args={[roomSize, wallHeight, wallThickness]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
        {/* Wall baseboard */}
        <mesh position={[0, 0.05, roomSize / 2 - 0.08]} receiveShadow castShadow>
          <boxGeometry args={[roomSize, 0.1, 0.02]} />
          <meshStandardMaterial color="#e9ecef" roughness={0.6} />
        </mesh>
      </RigidBody>

      {/* Left wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-roomSize / 2, wallHeight / 2, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, roomSize]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
        {/* Wall baseboard */}
        <mesh position={[-roomSize / 2 + 0.08, 0.05, 0]} receiveShadow castShadow>
          <boxGeometry args={[0.02, 0.1, roomSize]} />
          <meshStandardMaterial color="#e9ecef" roughness={0.6} />
        </mesh>
      </RigidBody>

      {/* Right wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[roomSize / 2, wallHeight / 2, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, roomSize]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
        {/* Wall baseboard */}
        <mesh position={[roomSize / 2 - 0.08, 0.05, 0]} receiveShadow castShadow>
          <boxGeometry args={[0.02, 0.1, roomSize]} />
          <meshStandardMaterial color="#e9ecef" roughness={0.6} />
        </mesh>
      </RigidBody>
    </>
  );
}
