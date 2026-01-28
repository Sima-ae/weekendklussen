'use client';

import { RigidBody } from '@react-three/rapier';

interface AnnexDoorProps {
  showDoor: boolean;
}

export function AnnexDoor({ showDoor }: AnnexDoorProps) {
  if (!showDoor) return null;

  const doorColor = '#ffffff'; // White door color
  const frameColor = '#ffffff'; // White frame color

  // Door position: Right wall of main house at X = 6 (houseWidth/2)
  // Door is centered vertically (Y = 1.1) and horizontally (Z = 0)
  // Door opens inward to annexroom (swinging from left to right, positive X direction)
  // Hinge is on the left side of the door (at X = 6 - 0.5 = 5.5)

  return (
    <RigidBody type="fixed" colliders="cuboid">
      {/* Door frame - proper frame with side posts and top */}
      {/* Frame positioned on right wall at X = 6, extending slightly forward (positive X) */}
      {/* Frame height: 2.08 (slightly larger than door height 2.0 for proper fit) */}
      {/* Bottom side post (left side in Z) - from floor (Y=0.06) to top (Y=2.14) */}
      <mesh position={[6 + 0.01, 1.1, -0.5]} receiveShadow castShadow>
        <boxGeometry args={[0.05, 2.08, 0.05]} />
        <meshStandardMaterial color={frameColor} roughness={0.6} />
      </mesh>
      {/* Top side post (right side in Z) - from floor (Y=0.06) to top (Y=2.14) */}
      <mesh position={[6 + 0.01, 1.1, 0.5]} receiveShadow castShadow>
        <boxGeometry args={[0.05, 2.08, 0.05]} />
        <meshStandardMaterial color={frameColor} roughness={0.6} />
      </mesh>
      {/* Top frame - centered between the side posts */}
      <mesh position={[6 + 0.01, 2.14, 0]} receiveShadow castShadow>
        <boxGeometry args={[0.05, 0.05, 1.0]} />
        <meshStandardMaterial color={frameColor} roughness={0.6} />
      </mesh>
      
      {/* Door - white, opens half-way (90 degrees) inward to annexroom when showDoor is true */}
      {/* Door rotates around left edge (hinge at X = 6, Z = -0.5) */}
      {/* When open: rotates 90 degrees around Y axis, swinging into annexroom (positive X direction) */}
      <group position={[6, 1.1, -0.5]} rotation={[0, showDoor ? Math.PI / 2 : 0, 0]}>
        <mesh position={[0, 0, 0.5]} receiveShadow castShadow>
          <boxGeometry args={[0.03, 2.0, 1.0]} />
          <meshStandardMaterial color={doorColor} roughness={0.7} metalness={0.1} side={2} />
        </mesh>
        
        {/* Door handle - same position on both sides, like a real door */}
        {/* Handle position: right side of door (Z=0.9 in door's local space) */}
        {/* Hall side handle (backward side - negative X) */}
        <mesh position={[-0.02, 0, 0.9]} receiveShadow castShadow>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Hall side handle base plate */}
        <mesh position={[-0.015, 0, 0.9]} rotation={[0, 0, Math.PI / 2]} receiveShadow castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.01, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        
        {/* Annexroom side handle (forward side - positive X) */}
        <mesh position={[0.02, 0, 0.9]} receiveShadow castShadow>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Annexroom side handle base plate */}
        <mesh position={[0.015, 0, 0.9]} rotation={[0, 0, Math.PI / 2]} receiveShadow castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.01, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
      </group>
    </RigidBody>
  );
}
