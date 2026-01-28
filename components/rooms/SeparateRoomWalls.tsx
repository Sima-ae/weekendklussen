'use client';

import { RigidBody } from '@react-three/rapier';

export function SeparateRoomWalls() {
  const wallThickness = 0.15;
  const wallHeight = 3; // Exterior walls full height
  const interiorWallHeight = 1.5; // Interior walls half-height for visibility

  return (
    <>
      {/* Exterior walls */}
      {/* Back wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight / 2, -10]} receiveShadow castShadow>
          <boxGeometry args={[24, wallHeight, wallThickness]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Front wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight / 2, 10]} receiveShadow castShadow>
          <boxGeometry args={[24, wallHeight, wallThickness]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Left wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-12, wallHeight / 2, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, 20]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Right wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[12, wallHeight / 2, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, 20]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* ROOM 1: BATHROOM (Bottom Left) - 4 complete walls - HALF HEIGHT */}
      {/* Bathroom back wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-7, interiorWallHeight / 2, -8]} receiveShadow castShadow>
          <boxGeometry args={[6, interiorWallHeight, wallThickness]} />
          <meshStandardMaterial color="#e0e7ff" roughness={0.8} />
        </mesh>
      </RigidBody>
      {/* Bathroom front wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-7, interiorWallHeight / 2, -4]} receiveShadow castShadow>
          <boxGeometry args={[6, interiorWallHeight, wallThickness]} />
          <meshStandardMaterial color="#e0e7ff" roughness={0.8} />
        </mesh>
      </RigidBody>
      {/* Bathroom left wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-10, interiorWallHeight / 2, -6]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, interiorWallHeight, 4]} />
          <meshStandardMaterial color="#e0e7ff" roughness={0.8} />
        </mesh>
      </RigidBody>
      {/* Bathroom right wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-4, interiorWallHeight / 2, -6]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, interiorWallHeight, 4]} />
          <meshStandardMaterial color="#e0e7ff" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* ROOM 2: KITCHEN (Top Left) - 4 complete walls - HALF HEIGHT */}
      {/* Kitchen back wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-7, interiorWallHeight / 2, 2]} receiveShadow castShadow>
          <boxGeometry args={[6, interiorWallHeight, wallThickness]} />
          <meshStandardMaterial color="#fef3c7" roughness={0.8} />
        </mesh>
      </RigidBody>
      {/* Kitchen front wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-7, interiorWallHeight / 2, 6]} receiveShadow castShadow>
          <boxGeometry args={[6, interiorWallHeight, wallThickness]} />
          <meshStandardMaterial color="#fef3c7" roughness={0.8} />
        </mesh>
      </RigidBody>
      {/* Kitchen left wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-10, interiorWallHeight / 2, 4]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, interiorWallHeight, 4]} />
          <meshStandardMaterial color="#fef3c7" roughness={0.8} />
        </mesh>
      </RigidBody>
      {/* Kitchen right wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-4, interiorWallHeight / 2, 4]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, interiorWallHeight, 4]} />
          <meshStandardMaterial color="#fef3c7" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* ROOM 3: LIVING ROOM (Top Right) - 4 complete walls - HALF HEIGHT */}
      {/* Living room back wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, interiorWallHeight / 2, 2]} receiveShadow castShadow>
          <boxGeometry args={[6, interiorWallHeight, wallThickness]} />
          <meshStandardMaterial color="#fce7f3" roughness={0.8} />
        </mesh>
      </RigidBody>
      {/* Living room front wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, interiorWallHeight / 2, 6]} receiveShadow castShadow>
          <boxGeometry args={[6, interiorWallHeight, wallThickness]} />
          <meshStandardMaterial color="#fce7f3" roughness={0.8} />
        </mesh>
      </RigidBody>
      {/* Living room left wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[2, interiorWallHeight / 2, 4]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, interiorWallHeight, 4]} />
          <meshStandardMaterial color="#fce7f3" roughness={0.8} />
        </mesh>
      </RigidBody>
      {/* Living room right wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[8, interiorWallHeight / 2, 4]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, interiorWallHeight, 4]} />
          <meshStandardMaterial color="#fce7f3" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* ROOM 4: TOILET ROOM (Bottom Right) - 4 complete walls - HALF HEIGHT */}
      {/* Toilet room back wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[7, interiorWallHeight / 2, -8]} receiveShadow castShadow>
          <boxGeometry args={[4, interiorWallHeight, wallThickness]} />
          <meshStandardMaterial color="#d1fae5" roughness={0.8} />
        </mesh>
      </RigidBody>
      {/* Toilet room front wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[7, interiorWallHeight / 2, -4]} receiveShadow castShadow>
          <boxGeometry args={[4, interiorWallHeight, wallThickness]} />
          <meshStandardMaterial color="#d1fae5" roughness={0.8} />
        </mesh>
      </RigidBody>
      {/* Toilet room left wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, interiorWallHeight / 2, -6]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, interiorWallHeight, 4]} />
          <meshStandardMaterial color="#d1fae5" roughness={0.8} />
        </mesh>
      </RigidBody>
      {/* Toilet room right wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[9, interiorWallHeight / 2, -6]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, interiorWallHeight, 4]} />
          <meshStandardMaterial color="#d1fae5" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* ROOM 5: BEDROOM (Bottom Center) - 4 complete walls - HALF HEIGHT */}
      {/* Bedroom back wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, interiorWallHeight / 2, -8]} receiveShadow castShadow>
          <boxGeometry args={[6, interiorWallHeight, wallThickness]} />
          <meshStandardMaterial color="#e9d5ff" roughness={0.8} />
        </mesh>
      </RigidBody>
      {/* Bedroom front wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, interiorWallHeight / 2, -4]} receiveShadow castShadow>
          <boxGeometry args={[6, interiorWallHeight, wallThickness]} />
          <meshStandardMaterial color="#e9d5ff" roughness={0.8} />
        </mesh>
      </RigidBody>
      {/* Bedroom left wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[2, interiorWallHeight / 2, -6]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, interiorWallHeight, 4]} />
          <meshStandardMaterial color="#e9d5ff" roughness={0.8} />
        </mesh>
      </RigidBody>
      {/* Bedroom right wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[8, interiorWallHeight / 2, -6]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, interiorWallHeight, 4]} />
          <meshStandardMaterial color="#e9d5ff" roughness={0.8} />
        </mesh>
      </RigidBody>
    </>
  );
}
