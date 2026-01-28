'use client';

import { RigidBody } from '@react-three/rapier';

interface AnnexRoomProps {
  position: [number, number, number];
}

export function AnnexRoom({ position }: AnnexRoomProps) {
  const wallThickness = 0.2;
  const wallHeight = 3;
  const annexWidth = 4;
  const annexDepth = 5;
  const exteriorWallColor = '#d4a574'; // Beige/brick color
  const roofColor = '#8b4513'; // Brown roof
  const floorColor = '#e8e8e8'; // Light gray floor

  return (
    <group position={position}>
      {/* Ground floor */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <boxGeometry args={[annexWidth, annexDepth, 0.1]} />
          <meshStandardMaterial color={floorColor} roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Exterior walls - Ground floor - TRANSPARENT */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight / 2, -annexDepth / 2]} receiveShadow castShadow>
          <boxGeometry args={[annexWidth, wallHeight, wallThickness]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} transparent opacity={0.2} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight / 2, annexDepth / 2]} receiveShadow castShadow>
          <boxGeometry args={[annexWidth, wallHeight, wallThickness]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} transparent opacity={0.2} />
        </mesh>
      </RigidBody>
      {/* Left wall removed - connects to main house */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[annexWidth / 2, wallHeight / 2, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, annexDepth]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} transparent opacity={0.2} />
        </mesh>
      </RigidBody>

      {/* Roof - Gabled roof - TRANSPARENT */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Left roof slope */}
        <mesh 
          position={[-annexWidth / 4, wallHeight + 1, 0]} 
          rotation={[0, 0, Math.PI / 6]}
          receiveShadow 
          castShadow
        >
          <boxGeometry args={[annexWidth * 0.7, 0.2, annexDepth + 0.5]} />
          <meshStandardMaterial color={roofColor} roughness={0.8} transparent opacity={0.2} />
        </mesh>
        {/* Right roof slope */}
        <mesh 
          position={[annexWidth / 4, wallHeight + 1, 0]} 
          rotation={[0, 0, -Math.PI / 6]}
          receiveShadow 
          castShadow
        >
          <boxGeometry args={[annexWidth * 0.7, 0.2, annexDepth + 0.5]} />
          <meshStandardMaterial color={roofColor} roughness={0.8} transparent opacity={0.2} />
        </mesh>
      </RigidBody>
    </group>
  );
}
