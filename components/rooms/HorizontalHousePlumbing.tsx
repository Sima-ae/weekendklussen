'use client';

import { useState } from 'react';
import { RigidBody } from '@react-three/rapier';
import { usePopupStore } from '@/lib/popupStore';

interface ClickablePipeProps {
  position: [number, number, number];
  radius: number;
  length: number;
  color: string;
  text: string;
  roughness?: number;
  metalness?: number;
}

function lightenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, Math.floor((num >> 16) + (255 - (num >> 16)) * percent));
  const g = Math.min(255, Math.floor(((num >> 8) & 0x00FF) + (255 - ((num >> 8) & 0x00FF)) * percent));
  const b = Math.min(255, Math.floor((num & 0x0000FF) + (255 - (num & 0x0000FF)) * percent));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

function ClickablePipe({ position, radius, length, color, text, roughness = 0.3, metalness = 0.7 }: ClickablePipeProps) {
  const [hovered, setHovered] = useState(false);
  const showPopup = usePopupStore((s) => s.showPopup);
  const hoverColor = lightenColor(color, 0.3);

  const handleClick = (e: any) => {
    e.stopPropagation();
    showPopup(text);
  };

  return (
    <group>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh
          position={position}
          castShadow
          onClick={handleClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <cylinderGeometry args={[radius, radius, length, 16]} />
          <meshStandardMaterial
            color={hovered ? hoverColor : color}
            roughness={roughness}
            metalness={metalness}
          />
        </mesh>
      </RigidBody>
    </group>
  );
}

export function HorizontalHousePlumbing() {
  const pipeRadius = 0.03; // Small pipe radius
  const waterBlue = '#0066cc'; // Blue for cold water supply
  const waterRed = '#ef4444'; // Red for hot water supply
  const drainGrey = '#4a4a4a'; // Dark grey for drain pipe
  
  // Fixture positions:
  // First floor: toilet at [5, 3.3, 1.3], bathtub at [5, 3.3, 4.7]
  // Second floor: toilet at [5, 6.3, 1.3], sink at [5, 6.8, 4.7]
  // Main vertical stack at X=5, Z=0.7 (in wall)
  
  return (
    <group>
      {/* ============================================ */}
      {/* COLD WATER PIPE (BLUE) */}
      {/* ============================================ */}
      
      {/* Main vertical cold water pipe from ground to floor level - CLICKABLE */}
      {/* Pipe goes from Y=-0.5 (ground) up to Y=0 (floor level) */}
      {/* Length = 0 - (-0.5) = 0.5, center at Y = -0.25 */}
      {/* Positioned at X=4.9 (swapped with drain pipe) */}
      <ClickablePipe 
        position={[4.9, -0.25, 0.7]} 
        radius={pipeRadius} 
        length={0.5} 
        color={waterBlue}
        text="Koud water"
        roughness={0.3}
        metalness={0.7}
      />
      
      {/* Main vertical cold water pipe from floor level to first floor toilet level */}
      {/* Pipe goes from Y=0 (floor) up to Y=3.7 (first floor toilet level) */}
      {/* Length = 3.7 - 0 = 3.7, center at Y = 1.85 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 1.85, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius, pipeRadius, 3.7, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* FIRST FLOOR - TOILET CONNECTION */}
      {/* T-split at first floor toilet level (Y=3.7, Z=0.7) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 3.7, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.5, pipeRadius * 1.5, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Main vertical cold water pipe from first floor toilet level to second floor sink level */}
      {/* Pipe goes from Y=3.7 to Y=6 (second floor sink level) */}
      {/* Length = 6 - 3.7 = 2.3, center at Y = 4.85 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 4.85, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius, pipeRadius, 2.3, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Horizontal connection from T-split to first floor toilet cistern */}
      {/* Toilet tank back is at Z=0.85, T-split is at Z=0.7, so horizontal section from Z=0.7 to Z=0.85 (length = 0.15) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh 
          position={[4.9, 3.7, 0.775]} 
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[pipeRadius, pipeRadius, 0.15, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* FIRST FLOOR - BATHTUB CONNECTION (COLD WATER) - NEW T-SPLIT FROM MAIN PIPE INSIDE FLOOR */}
      {/* T-split at first floor level (Y=3.0, Z=0.7) on main pipe - inside the floor, lower to be less visible */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 3.0, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.5, pipeRadius * 1.5, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Horizontal connection from T-split to bathtub - INSIDE FLOOR, UNDER TOILET */}
      {/* Bathtub is at Z=4.7, T-split is at Z=0.7, so horizontal section from Z=0.7 to Z=4.7 (length = 4) */}
      {/* Positioned at Y=3.0 (center of first floor, which is at Y=2.9-3.1) - lower to be less visible */}
      {/* Toilet is at Z=1.3, so pipes pass under it */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh 
          position={[4.9, 3.0, 2.7]} 
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[pipeRadius, pipeRadius, 4, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* T-split fitting at bathtub connection point (Z=4.7, Y=3.0) - inside floor */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 3.0, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.5, pipeRadius * 1.5, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Short vertical connection from floor level up to bathtub level */}
      {/* From Y=3.0 (floor center) up to Y=3.3 (bathtub level) at Z=4.7 */}
      {/* Length = 3.3 - 3.0 = 0.3, center at Y = 3.15 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 3.15, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius, pipeRadius, 0.3, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* T-split fitting at bathtub level (Z=4.7, Y=3.3) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 3.3, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.5, pipeRadius * 1.5, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Short vertical connection from T-split up to bathtub faucet */}
      {/* Bathtub faucet is at Y=3.6, pipe starts at Y=3.3, so length = 0.3 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 3.45, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius, pipeRadius, 0.3, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* GROUND FLOOR - KITCHEN SINK CONNECTION (COLD WATER) */}
      {/* Horizontal connection from existing T-split to kitchen area - INSIDE FLOOR */}
      {/* Straight horizontal line from T-split (X=4.9, Z=0.7) to kitchen area (X=4.9, Z=4.6) */}
      {/* Horizontal section from Z=0.7 to Z=4.6 (length = 3.9) at X=4.9, Y=0 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh 
          position={[4.9, 0, 2.65]} 
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[pipeRadius, pipeRadius, 3.9, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Vertical connection from floor to kitchen sink */}
      {/* From Y=0 (floor) up to Y=0.85 (below counter level) at X=4.9, Z=4.6 */}
      {/* Length = 0.85 - 0 = 0.85, center at Y = 0.425 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 0.425, 4.6]} castShadow>
          <cylinderGeometry args={[pipeRadius, pipeRadius, 0.85, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* T-split fitting at kitchen sink connection point (Z=4.6, Y=0.85) - inside counter */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 0.85, 4.6]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.5, pipeRadius * 1.5, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* HIDDEN: Horizontal connection from T-split to first floor bathtub - INSIDE FLOOR, UNDER TOILET */}
      {/* Bathtub is at Z=4.7, T-split is at Z=0.7, so horizontal section from Z=0.7 to Z=4.7 (length = 4) */}
      {/* Positioned at Y=0 (inside floor, under toilet at Z=1.3) */}
      {/* Pipes hidden to avoid visible exposure between kitchen counter and bathtub */}
      {/* <RigidBody type="fixed" colliders="cuboid">
        <mesh 
          position={[4.9, 0, 2.7]} 
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[pipeRadius, pipeRadius, 4, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody> */}
      
      {/* HIDDEN: Vertical connection from floor level up to bathtub level */}
      {/* From Y=0 (floor) up to Y=3.3 (bathtub level) at Z=4.7 */}
      {/* Length = 3.3 - 0 = 3.3, center at Y = 1.65 */}
      {/* <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 1.65, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius, pipeRadius, 3.3, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody> */}
      
      {/* HIDDEN: T-split fitting at first floor bathtub connection point (Z=4.7, Y=3.3) */}
      {/* <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 3.3, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.5, pipeRadius * 1.5, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody> */}
      
      {/* HIDDEN: Vertical connection from T-split up to first floor bathtub faucet */}
      {/* Bathtub faucet is at Y=3.5, pipe starts at Y=3.3, so length = 0.2 */}
      {/* <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 3.4, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius, pipeRadius, 0.2, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody> */}
      
      {/* SECOND FLOOR - SINK CONNECTION */}
      {/* T-split at second floor sink level (Y=6, Z=0.7) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 6, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.5, pipeRadius * 1.5, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Main vertical cold water pipe from second floor sink level to second floor toilet level */}
      {/* Pipe goes from Y=6 to Y=6.7 (second floor toilet level) */}
      {/* Length = 6.7 - 6 = 0.7, center at Y = 6.35 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 6.35, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius, pipeRadius, 0.7, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* SECOND FLOOR - TOILET CONNECTION */}
      {/* T-split at second floor toilet level (Y=6.7, Z=0.7) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 6.7, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.5, pipeRadius * 1.5, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Horizontal connection from T-split to second floor toilet cistern */}
      {/* Toilet tank back is at Z=0.85, T-split is at Z=0.7, so horizontal section from Z=0.7 to Z=0.85 (length = 0.15) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh 
          position={[4.9, 6.7, 0.775]} 
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[pipeRadius, pipeRadius, 0.15, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Horizontal connection from T-split to second floor sink */}
      {/* Sink is at Z=4.7, T-split is at Z=0.7, so horizontal section from Z=0.7 to Z=4.7 (length = 4) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh 
          position={[4.9, 6, 2.7]} 
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[pipeRadius, pipeRadius, 4, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* T-split fitting at second floor sink connection point (Z=4.7) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 6, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.5, pipeRadius * 1.5, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Vertical connection from T-split up to second floor sink */}
      {/* Sink is at Y=6.8, pipe starts at Y=6, so length = 0.8 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.9, 6.4, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius, pipeRadius, 0.8, 16]} />
          <meshStandardMaterial color={waterBlue} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* ============================================ */}
      {/* HOT WATER PIPE (RED) - Parallel to cold water pipe */}
      {/* ============================================ */}
      
      {/* Main vertical hot water pipe from ground to floor level - CLICKABLE */}
      {/* Pipe goes from Y=-0.5 (ground) up to Y=0 (floor level) */}
      {/* Length = 0 - (-0.5) = 0.5, center at Y = -0.25 */}
      {/* Offset by 0.1 units in X direction (X=5.1) */}
      <ClickablePipe 
        position={[5.1, -0.25, 0.7]} 
        radius={pipeRadius} 
        length={0.5} 
        color={waterRed}
        text="Warm water"
        roughness={0.3}
        metalness={0.7}
      />
      
      {/* Main vertical hot water pipe from floor level to second floor */}
      {/* Pipe goes from Y=0 (floor) up to Y=6 (second floor) */}
      {/* Length = 6 - 0 = 6, center at Y = 3 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5.1, 3, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius, pipeRadius, 6, 16]} />
          <meshStandardMaterial color={waterRed} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* GROUND FLOOR - KITCHEN SINK CONNECTION (HOT WATER) */}
      {/* Horizontal connection from existing T-split to kitchen area - INSIDE FLOOR */}
      {/* Straight horizontal line from T-split (X=5.1, Z=0.7) to kitchen area (X=5.1, Z=4.6) */}
      {/* Horizontal section from Z=0.7 to Z=4.6 (length = 3.9) at X=5.1, Y=0 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh 
          position={[5.1, 0, 2.65]} 
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[pipeRadius, pipeRadius, 3.9, 16]} />
          <meshStandardMaterial color={waterRed} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Vertical connection from floor to kitchen sink */}
      {/* From Y=0 (floor) up to Y=0.85 (below counter level) at X=5.1, Z=4.6 */}
      {/* Length = 0.85 - 0 = 0.85, center at Y = 0.425 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5.1, 0.425, 4.6]} castShadow>
          <cylinderGeometry args={[pipeRadius, pipeRadius, 0.85, 16]} />
          <meshStandardMaterial color={waterRed} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* T-split fitting at kitchen sink connection point (Z=4.6, Y=0.85) - inside counter */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5.1, 0.85, 4.6]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.5, pipeRadius * 1.5, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={waterRed} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* FIRST FLOOR - BATHTUB CONNECTION (HOT WATER) - NEW T-SPLIT FROM MAIN PIPE INSIDE FLOOR */}
      {/* T-split at first floor level (Y=3.0, Z=0.7) on main pipe - inside the floor, lower to be less visible */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5.1, 3.0, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.5, pipeRadius * 1.5, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={waterRed} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Horizontal connection from T-split to bathtub - INSIDE FLOOR, UNDER TOILET */}
      {/* Bathtub is at Z=4.7, T-split is at Z=0.7, so horizontal section from Z=0.7 to Z=4.7 (length = 4) */}
      {/* Positioned at Y=3.0 (center of first floor, which is at Y=2.9-3.1) - lower to be less visible */}
      {/* Toilet is at Z=1.3, so pipes pass under it */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh 
          position={[5.1, 3.0, 2.7]} 
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[pipeRadius, pipeRadius, 4, 16]} />
          <meshStandardMaterial color={waterRed} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* T-split fitting at bathtub connection point (Z=4.7, Y=3.0) - inside floor */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5.1, 3.0, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.5, pipeRadius * 1.5, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={waterRed} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Short vertical connection from floor level up to bathtub level */}
      {/* From Y=3.0 (floor center) up to Y=3.3 (bathtub level) at Z=4.7 */}
      {/* Length = 3.3 - 3.0 = 0.3, center at Y = 3.15 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5.1, 3.15, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius, pipeRadius, 0.3, 16]} />
          <meshStandardMaterial color={waterRed} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* T-split fitting at bathtub level (Z=4.7, Y=3.3) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5.1, 3.3, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.5, pipeRadius * 1.5, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={waterRed} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Short vertical connection from T-split up to bathtub faucet */}
      {/* Bathtub faucet is at Y=3.6, pipe starts at Y=3.3, so length = 0.3 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5.1, 3.45, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius, pipeRadius, 0.3, 16]} />
          <meshStandardMaterial color={waterRed} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* SECOND FLOOR - SINK CONNECTION */}
      {/* T-split at second floor sink level (Y=6, Z=0.7) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5.1, 6, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.5, pipeRadius * 1.5, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={waterRed} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Horizontal connection from T-split to second floor sink */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh 
          position={[5.1, 6, 2.7]} 
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[pipeRadius, pipeRadius, 4, 16]} />
          <meshStandardMaterial color={waterRed} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* T-split fitting at second floor sink connection point (Z=4.7) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5.1, 6, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.5, pipeRadius * 1.5, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={waterRed} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Vertical connection from T-split up to second floor sink */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5.1, 6.4, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius, pipeRadius, 0.8, 16]} />
          <meshStandardMaterial color={waterRed} roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* ============================================ */}
      {/* DRAIN PIPE (DARK GREY) - Swapped position with blue pipe */}
      {/* ============================================ */}
      
      {/* Main vertical drain pipe from ground to floor level - CLICKABLE */}
      {/* Pipe goes from Y=-0.5 (ground) up to Y=0 (floor level) */}
      {/* Length = 0 - (-0.5) = 0.5, center at Y = -0.25 */}
      <ClickablePipe 
        position={[5, -0.25, 0.7]} 
        radius={pipeRadius * 1.2} 
        length={0.5} 
        color={drainGrey}
        text="Afvoer"
        roughness={0.5}
        metalness={0.2}
      />
      
      {/* FIRST FLOOR - TOILET CONNECTION */}
      {/* T-split at toilet level (Y=3.3, Z=0.7) for toilet connection */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 3.3, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.8, pipeRadius * 1.8, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* GROUND FLOOR - KITCHEN SINK DRAIN CONNECTION */}
      {/* Horizontal connection from existing T-split to kitchen area - INSIDE FLOOR */}
      {/* Straight horizontal line from T-split (X=5, Z=0.7) to kitchen area (X=5, Z=4.6) */}
      {/* Horizontal section from Z=0.7 to Z=4.6 (length = 3.9) at X=5, Y=0 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh 
          position={[5, 0, 2.65]} 
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[pipeRadius * 1.2, pipeRadius * 1.2, 3.9, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* Vertical connection from floor to kitchen sink drain */}
      {/* From Y=0 (floor) up to Y=0.85 (below counter level) at X=5, Z=4.6 */}
      {/* Length = 0.85 - 0 = 0.85, center at Y = 0.425 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 0.425, 4.6]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.2, pipeRadius * 1.2, 0.85, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* T-split fitting at kitchen sink drain connection point (Z=4.6, Y=0.85) - inside counter */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 0.85, 4.6]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.8, pipeRadius * 1.8, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* Main vertical drain pipe from floor level to second floor */}
      {/* Pipe goes from Y=0 (floor) up to Y=6 (second floor) */}
      {/* Length = 6 - 0 = 6, center at Y = 3 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 3, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.2, pipeRadius * 1.2, 6, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* FIRST FLOOR - TOILET CONNECTION */}
      {/* T-split at toilet level (Y=3.3, Z=0.7) for toilet connection */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 3.3, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.8, pipeRadius * 1.8, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* Horizontal connection from T-split to first floor toilet */}
      {/* Toilet is at Z=1.3, T-split is at Z=0.7, so horizontal section from Z=0.7 to Z=1.3 (length = 0.6) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh 
          position={[5, 3.3, 1.0]} 
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[pipeRadius * 1.2, pipeRadius * 1.2, 0.6, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* FIRST FLOOR - BATHTUB CONNECTION (DRAIN) - NEW T-SPLIT FROM MAIN PIPE INSIDE FLOOR */}
      {/* T-split at first floor level (Y=3.0, Z=0.7) on main pipe - inside the floor, lower to be less visible */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 3.0, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.8, pipeRadius * 1.8, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* Horizontal connection from T-split to bathtub - INSIDE FLOOR, UNDER TOILET */}
      {/* Bathtub is at Z=4.7, T-split is at Z=0.7, so horizontal section from Z=0.7 to Z=4.7 (length = 4) */}
      {/* Positioned at Y=3.0 (center of first floor, which is at Y=2.9-3.1) - lower to be less visible */}
      {/* Toilet is at Z=1.3, so pipes pass under it */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh 
          position={[5, 3.0, 2.7]} 
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[pipeRadius * 1.2, pipeRadius * 1.2, 4, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* T-split fitting at bathtub connection point (Z=4.7, Y=3.0) - inside floor */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 3.0, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.8, pipeRadius * 1.8, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* Short vertical connection from floor level up to bathtub level */}
      {/* From Y=3.0 (floor center) up to Y=3.3 (bathtub level) at Z=4.7 */}
      {/* Length = 3.3 - 3.0 = 0.3, center at Y = 3.15 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 3.15, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.2, pipeRadius * 1.2, 0.3, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* T-split fitting at bathtub level (Z=4.7, Y=3.3) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 3.3, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.8, pipeRadius * 1.8, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* Short vertical connection from T-split down to first floor bathtub drain */}
      {/* Bathtub drain is at Y=3.3, minimal vertical connection */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 3.3, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.2, pipeRadius * 1.2, 0.1, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* SECOND FLOOR - SINK CONNECTION */}
      {/* T-split at second floor sink level (Y=6, Z=0.7) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 6, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.8, pipeRadius * 1.8, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* Main vertical drain pipe from second floor sink level to second floor toilet level */}
      {/* Pipe goes from Y=6 to Y=6.3 (second floor toilet level) */}
      {/* Length = 6.3 - 6 = 0.3, center at Y = 6.15 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 6.15, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.2, pipeRadius * 1.2, 0.3, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* SECOND FLOOR - TOILET CONNECTION */}
      {/* T-split at second floor toilet level (Y=6.3, Z=0.7) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 6.3, 0.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.8, pipeRadius * 1.8, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* Horizontal connection from T-split to second floor toilet */}
      {/* Toilet is at Z=1.3, T-split is at Z=0.7, so horizontal section from Z=0.7 to Z=1.3 (length = 0.6) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh 
          position={[5, 6.3, 1.0]} 
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[pipeRadius * 1.2, pipeRadius * 1.2, 0.6, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* Horizontal connection from T-split to second floor sink */}
      {/* Sink is at Z=4.7, T-split is at Z=0.7, so horizontal section from Z=0.7 to Z=4.7 (length = 4) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh 
          position={[5, 6, 2.7]} 
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[pipeRadius * 1.2, pipeRadius * 1.2, 4, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* T-split fitting at second floor sink connection point (Z=4.7) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 6, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.8, pipeRadius * 1.8, pipeRadius * 2, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
      
      {/* Vertical connection from T-split up to second floor sink */}
      {/* Sink is at Y=6.8, pipe starts at Y=6, so length = 0.8 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 6.4, 4.7]} castShadow>
          <cylinderGeometry args={[pipeRadius * 1.2, pipeRadius * 1.2, 0.8, 16]} />
          <meshStandardMaterial color={drainGrey} roughness={0.5} metalness={0.2} />
        </mesh>
      </RigidBody>
    </group>
  );
}
