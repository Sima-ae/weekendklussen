'use client';

import { RigidBody } from '@react-three/rapier';
import { BufferGeometry, Float32BufferAttribute, Uint16BufferAttribute } from 'three';

export function RealisticHouse() {
  const wallThickness = 0.25; // Increased to 1.0 to fully enclose pipes (X=4.9-5.1) and T-splits
  const wallHeight = 3;
  const houseWidth = 12;
  const houseDepth = 10;
  const exteriorWallColor = '#d4a574'; // Beige/brick color
  const interiorWallColor = '#f5f5f5'; // Light gray
  const roofColor = '#8b4513'; // Brown roof
  const floorColor = '#e8e8e8'; // Light gray floor

  return (
    <>
      {/* ============================================ */}
      {/* GROUND FLOOR */}
      {/* ============================================ */}
      
      {/* Ground floor - original floor layer */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <boxGeometry args={[houseWidth, houseDepth, 0.2]} />
          <meshStandardMaterial color={floorColor} roughness={0.8} transparent opacity={0.7} />
        </mesh>
      </RigidBody>
      {/* Additional floor layer underneath - to make floor thicker for pipes */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.15, 0]} receiveShadow>
          <boxGeometry args={[houseWidth, houseDepth, 0.3]} />
          <meshStandardMaterial color={floorColor} roughness={0.8} transparent opacity={0.7} />
        </mesh>
      </RigidBody>

      {/* Exterior walls - Ground floor - TRANSPARENT */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight / 2, -houseDepth / 2]} receiveShadow castShadow>
          <boxGeometry args={[houseWidth, wallHeight, wallThickness]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} transparent opacity={0.2} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight / 2, houseDepth / 2]} receiveShadow castShadow>
          <boxGeometry args={[houseWidth, wallHeight, wallThickness]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} transparent opacity={0.2} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-houseWidth / 2, wallHeight / 2, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, houseDepth]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} transparent opacity={0.2} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[houseWidth / 2, wallHeight / 2, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, houseDepth]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} transparent opacity={0.2} />
        </mesh>
      </RigidBody>

      {/* Interior walls - Ground floor - TRANSPARENT */}
      {/* Wall separating kitchen and living room */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[2, wallHeight / 2, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, houseDepth]} />
          <meshStandardMaterial color={interiorWallColor} roughness={0.9} transparent opacity={0.3} />
        </mesh>
      </RigidBody>

      {/* Door frame - Ground floor kitchen to living room */}
      {/* Moved closer to stairs (Z=0 instead of Z=3), but still inside wall */}
      {/* Reduced height to be away from ceiling */}
      {/* Double wide door frame */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Door frame sides - extending from floor (Y=0) to top (Y=2.4) - reduced from ceiling */}
        {/* Left side post - from floor to top, double wide */}
        <mesh position={[2.01, 1.2, 0 - 1.0]} receiveShadow castShadow>
          <boxGeometry args={[0.05, 2.4, 0.05]} />
          <meshStandardMaterial color="#8b7355" roughness={0.6} />
        </mesh>
        {/* Right side post - from floor to top, double wide */}
        <mesh position={[2.01, 1.2, 0 + 1.0]} receiveShadow castShadow>
          <boxGeometry args={[0.05, 2.4, 0.05]} />
          <meshStandardMaterial color="#8b7355" roughness={0.6} />
        </mesh>
        {/* Door frame top - centered between the side posts, double wide */}
        <mesh position={[2.01, 2.4, 0]} receiveShadow castShadow>
          <boxGeometry args={[0.05, 0.05, 2.0]} />
          <meshStandardMaterial color="#8b7355" roughness={0.6} />
        </mesh>
      </RigidBody>

      {/* Toilet room wall - Ground floor (same as first floor behind toilet) - TRANSPARENT */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.7, wallHeight / 2, 1]} receiveShadow castShadow>
          <boxGeometry args={[2.5, wallHeight, wallThickness]} />
          <meshStandardMaterial color={interiorWallColor} roughness={0.9} transparent opacity={0.3} />
        </mesh>
      </RigidBody>
      {/* Wall at pipe location - Ground floor - positioned at Z=0.7 where pipes are (X=4.9-5.1) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5.0, wallHeight / 2, 0.7]} receiveShadow castShadow>
          <boxGeometry args={[0.6, wallHeight, wallThickness]} />
          <meshStandardMaterial color={interiorWallColor} roughness={0.9} transparent opacity={0.3} />
        </mesh>
      </RigidBody>

      {/* ============================================ */}
      {/* FIRST FLOOR */}
      {/* ============================================ */}
      
      {/* First floor - original floor layer */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, wallHeight, 0]} receiveShadow>
          <boxGeometry args={[houseWidth, houseDepth, 0.2]} />
          <meshStandardMaterial color={floorColor} roughness={0.8} transparent opacity={0.7} />
        </mesh>
      </RigidBody>
      {/* Additional floor layer underneath - to make floor thicker for pipes */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, wallHeight - 0.15, 0]} receiveShadow>
          <boxGeometry args={[houseWidth, houseDepth, 0.3]} />
          <meshStandardMaterial color={floorColor} roughness={0.8} transparent opacity={0.7} />
        </mesh>
      </RigidBody>

      {/* Exterior walls - First floor - TRANSPARENT */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight * 1.5, -houseDepth / 2]} receiveShadow castShadow>
          <boxGeometry args={[houseWidth, wallHeight, wallThickness]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} transparent opacity={0.2} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight * 1.5, houseDepth / 2]} receiveShadow castShadow>
          <boxGeometry args={[houseWidth, wallHeight, wallThickness]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} transparent opacity={0.2} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-houseWidth / 2, wallHeight * 1.5, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, houseDepth]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} transparent opacity={0.2} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[houseWidth / 2, wallHeight * 1.5, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, houseDepth]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} transparent opacity={0.2} />
        </mesh>
      </RigidBody>

      {/* Interior walls - First floor - TRANSPARENT */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[2, wallHeight * 1.5, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, houseDepth]} />
          <meshStandardMaterial color={interiorWallColor} roughness={0.9} transparent opacity={0.3} />
        </mesh>
      </RigidBody>

      {/* Door frame - First floor hall to living room (same size as bathroom door frame) */}
      {/* Door frame sides - extending from floor (Y=3) to top (Y=5) */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Left side post - from floor (Y=3) to top (Y=5) */}
        <mesh position={[2.01, wallHeight + 1.0, 0 - 0.5]} receiveShadow castShadow>
          <boxGeometry args={[0.05, 2.0, 0.05]} />
          <meshStandardMaterial color="#8b7355" roughness={0.6} />
        </mesh>
        {/* Right side post - from floor (Y=3) to top (Y=5) */}
        <mesh position={[2.01, wallHeight + 1.0, 0 + 0.5]} receiveShadow castShadow>
          <boxGeometry args={[0.05, 2.0, 0.05]} />
          <meshStandardMaterial color="#8b7355" roughness={0.6} />
        </mesh>
        {/* Door frame top - centered between the side posts */}
        <mesh position={[2.01, wallHeight + 2.0, 0]} receiveShadow castShadow>
          <boxGeometry args={[0.05, 0.05, 1.0]} />
          <meshStandardMaterial color="#8b7355" roughness={0.6} />
        </mesh>
      </RigidBody>
      {/* White door - First floor bedroom (same size as bathroom door) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[2.02, wallHeight + 1.0, 0]} receiveShadow castShadow>
          <boxGeometry args={[0.03, 2.0, 0.95]} />
          <meshStandardMaterial color="#ffffff" roughness={0.7} />
        </mesh>
        {/* Chrome door knob - positioned at typical height (1m above floor) - front side */}
        {/* Door knob base plate */}
        <mesh position={[2.04, wallHeight + 1.0, 0.4]} rotation={[0, 0, Math.PI / 2]} receiveShadow castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.02, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Door knob sphere */}
        <mesh position={[2.05, wallHeight + 1.0, 0.4]} receiveShadow castShadow>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Chrome door knob - back side */}
        {/* Door knob base plate */}
        <mesh position={[2.00, wallHeight + 1.0, 0.4]} rotation={[0, 0, Math.PI / 2]} receiveShadow castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.02, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Door knob sphere */}
        <mesh position={[1.99, wallHeight + 1.0, 0.4]} receiveShadow castShadow>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
      </RigidBody>

      {/* Toilet room walls - First floor (top-right corner) - TRANSPARENT like other interior walls */}
      {/* Wall only extends where needed for bathroom, not into hall where stairs are */}
      {/* Bathroom area is from Z=1 to Z=5, so wall extends from Z=1 to Z=5 (length = 4, center at Z=3) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4, wallHeight * 1.5, 3]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, 4]} />
          <meshStandardMaterial color={interiorWallColor} roughness={0.9} transparent opacity={0.3} />
        </mesh>
      </RigidBody>
      {/* Door frame - First floor toilet room */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Door frame sides - extending from floor to top of door opening */}
        {/* Left side post - from floor (Y=3) to top (Y=5) */}
        <mesh position={[4.01, wallHeight + 1.0, 3 - 0.5]} receiveShadow castShadow>
          <boxGeometry args={[0.05, 2.0, 0.05]} />
          <meshStandardMaterial color="#8b7355" roughness={0.6} />
        </mesh>
        {/* Right side post - from floor (Y=3) to top (Y=5) */}
        <mesh position={[4.01, wallHeight + 1.0, 3 + 0.5]} receiveShadow castShadow>
          <boxGeometry args={[0.05, 2.0, 0.05]} />
          <meshStandardMaterial color="#8b7355" roughness={0.6} />
        </mesh>
        {/* Door frame top - centered between the side posts */}
        <mesh position={[4.01, wallHeight + 2.0, 3]} receiveShadow castShadow>
          <boxGeometry args={[0.05, 0.05, 1.0]} />
          <meshStandardMaterial color="#8b7355" roughness={0.6} />
        </mesh>
      </RigidBody>
      {/* White door - First floor bathroom/toilet room */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.02, wallHeight + 1.0, 3]} receiveShadow castShadow>
          <boxGeometry args={[0.03, 2.0, 0.95]} />
          <meshStandardMaterial color="#ffffff" roughness={0.7} />
        </mesh>
        {/* Chrome door knob - positioned at typical height (1m above floor) - front side */}
        {/* Door knob base plate */}
        <mesh position={[4.04, wallHeight + 1.0, 3.4]} rotation={[0, 0, Math.PI / 2]} receiveShadow castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.02, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Door knob sphere */}
        <mesh position={[4.05, wallHeight + 1.0, 3.4]} receiveShadow castShadow>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Chrome door knob - back side */}
        {/* Door knob base plate */}
        <mesh position={[4.00, wallHeight + 1.0, 3.4]} rotation={[0, 0, Math.PI / 2]} receiveShadow castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.02, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Door knob sphere */}
        <mesh position={[3.99, wallHeight + 1.0, 3.4]} receiveShadow castShadow>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
      </RigidBody>
      {/* Side wall on hall side - shortened to meet main bathroom wall at X=4 for clean corner */}
      {/* Wall extends from X=4 to X=4.7 (width 0.7, center at X=4.35) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.35, wallHeight * 1.5, 1]} receiveShadow castShadow>
          <boxGeometry args={[0.7, wallHeight, wallThickness]} />
          <meshStandardMaterial color={interiorWallColor} roughness={0.9} transparent opacity={0.3} />
        </mesh>
      </RigidBody>
      {/* Wall at pipe location - First floor - positioned at Z=0.7 where pipes are (X=4.9-5.1) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5.0, wallHeight * 1.5, 0.7]} receiveShadow castShadow>
          <boxGeometry args={[0.6, wallHeight, wallThickness]} />
          <meshStandardMaterial color={interiorWallColor} roughness={0.9} transparent opacity={0.3} />
        </mesh>
      </RigidBody>

      {/* ============================================ */}
      {/* SECOND FLOOR */}
      {/* ============================================ */}
      
      {/* Second floor - original floor layer */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, wallHeight * 2, 0]} receiveShadow>
          <boxGeometry args={[houseWidth, houseDepth, 0.2]} />
          <meshStandardMaterial color={floorColor} roughness={0.8} transparent opacity={0.7} />
        </mesh>
      </RigidBody>
      {/* Additional floor layer underneath - to make floor thicker for pipes */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, wallHeight * 2 - 0.15, 0]} receiveShadow>
          <boxGeometry args={[houseWidth, houseDepth, 0.3]} />
          <meshStandardMaterial color={floorColor} roughness={0.8} transparent opacity={0.7} />
        </mesh>
      </RigidBody>

      {/* Exterior walls - Second floor - TRANSPARENT */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight * 2.5, -houseDepth / 2]} receiveShadow castShadow>
          <boxGeometry args={[houseWidth, wallHeight, wallThickness]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} transparent opacity={0.2} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight * 2.5, houseDepth / 2]} receiveShadow castShadow>
          <boxGeometry args={[houseWidth, wallHeight, wallThickness]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} transparent opacity={0.2} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-houseWidth / 2, wallHeight * 2.5, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, houseDepth]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} transparent opacity={0.2} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[houseWidth / 2, wallHeight * 2.5, 0]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, houseDepth]} />
          <meshStandardMaterial color={exteriorWallColor} roughness={0.9} transparent opacity={0.2} />
        </mesh>
      </RigidBody>

      {/* Bathroom walls - Second floor (top-right corner) - TRANSPARENT like other interior walls */}
      {/* Wall only extends where needed for bathroom, not into hall where stairs are */}
      {/* Bathroom area is from Z=1 to Z=5, so wall extends from Z=1 to Z=5 (length = 4, center at Z=3) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4, wallHeight * 2.5, 3]} receiveShadow castShadow>
          <boxGeometry args={[wallThickness, wallHeight, 4]} />
          <meshStandardMaterial color={interiorWallColor} roughness={0.9} transparent opacity={0.3} />
        </mesh>
      </RigidBody>
      {/* Door frame - Second floor bathroom */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Door frame sides - extending from floor to top of door opening */}
        {/* Left side post - from floor (Y=6) to top (Y=8) */}
        <mesh position={[4.01, wallHeight * 2 + 1.0, 3 - 0.5]} receiveShadow castShadow>
          <boxGeometry args={[0.05, 2.0, 0.05]} />
          <meshStandardMaterial color="#8b7355" roughness={0.6} />
        </mesh>
        {/* Right side post - from floor (Y=6) to top (Y=8) */}
        <mesh position={[4.01, wallHeight * 2 + 1.0, 3 + 0.5]} receiveShadow castShadow>
          <boxGeometry args={[0.05, 2.0, 0.05]} />
          <meshStandardMaterial color="#8b7355" roughness={0.6} />
        </mesh>
        {/* Door frame top - centered between the side posts */}
        <mesh position={[4.01, wallHeight * 2 + 2.0, 3]} receiveShadow castShadow>
          <boxGeometry args={[0.05, 0.05, 1.0]} />
          <meshStandardMaterial color="#8b7355" roughness={0.6} />
        </mesh>
      </RigidBody>
      {/* White door - Second floor bathroom */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.02, wallHeight * 2 + 1.0, 3]} receiveShadow castShadow>
          <boxGeometry args={[0.03, 2.0, 0.95]} />
          <meshStandardMaterial color="#ffffff" roughness={0.7} />
        </mesh>
        {/* Chrome door knob - positioned at typical height (1m above floor) - front side */}
        {/* Door knob base plate */}
        <mesh position={[4.04, wallHeight * 2 + 1.0, 3.4]} rotation={[0, 0, Math.PI / 2]} receiveShadow castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.02, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Door knob sphere */}
        <mesh position={[4.05, wallHeight * 2 + 1.0, 3.4]} receiveShadow castShadow>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Chrome door knob - back side */}
        {/* Door knob base plate */}
        <mesh position={[4.00, wallHeight * 2 + 1.0, 3.4]} rotation={[0, 0, Math.PI / 2]} receiveShadow castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.02, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Door knob sphere */}
        <mesh position={[3.99, wallHeight * 2 + 1.0, 3.4]} receiveShadow castShadow>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
      </RigidBody>
      {/* Side wall on hall side - shortened to meet main bathroom wall at X=4 for clean corner */}
      {/* Wall extends from X=4 to X=4.7 (width 0.7, center at X=4.35) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.35, wallHeight * 2.5, 1]} receiveShadow castShadow>
          <boxGeometry args={[0.7, wallHeight, wallThickness]} />
          <meshStandardMaterial color={interiorWallColor} roughness={0.9} transparent opacity={0.3} />
        </mesh>
      </RigidBody>
      {/* Wall at pipe location - Second floor - positioned at Z=0.7 where pipes are (X=4.9-5.1) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5.0, wallHeight * 2.5, 0.7]} receiveShadow castShadow>
          <boxGeometry args={[0.6, wallHeight, wallThickness]} />
          <meshStandardMaterial color={interiorWallColor} roughness={0.9} transparent opacity={0.3} />
        </mesh>
      </RigidBody>

      {/* ============================================ */}
      {/* THIRD FLOOR / ATTIC */}
      {/* ============================================ */}
      
      {/* Attic floor - on top of second floor walls */}
      {/* Second floor walls: center at wallHeight * 2.5 = 7.5, height = 3, so top at 7.5 + 1.5 = 9 */}
      {/* Attic floor sits on top of walls at Y = 9 */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, wallHeight * 3, 0]} receiveShadow>
          <boxGeometry args={[houseWidth, houseDepth, 0.2]} />
          <meshStandardMaterial color={floorColor} roughness={0.8} transparent opacity={0.7} />
        </mesh>
      </RigidBody>
      {/* Additional floor layer underneath - to make floor thicker */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, wallHeight * 3 - 0.15, 0]} receiveShadow>
          <boxGeometry args={[houseWidth, houseDepth, 0.3]} />
          <meshStandardMaterial color={floorColor} roughness={0.8} transparent opacity={0.7} />
        </mesh>
      </RigidBody>

      {/* ============================================ */}
      {/* ROOF */}
      {/* ============================================ */}
      
      {/* Roof - Gabled roof - TRANSPARENT - On top of attic floor */}
      {/* Attic floor is at Y = wallHeight * 3 = 9, roof sits on top */}
      {/* Roof must be positioned HIGHER so bottom edge sits on top of attic floor at Y = 9 */}
      {/* Calculate roof pitch: 30 degrees, apex height = tan(30°) * (houseWidth/2) = 0.577 * 6 = 3.46 */}
      {/* Wall top at Y = 9, so apex at Y = 9 + 3.46 = 12.46 */}
      {/* For proper triangle: left slope from X=-6 to X=0, right slope from X=0 to X=6 */}
      {/* Both slopes meet at apex at X=0, Y=12.46 */}
      {/* Calculate exact positions so rotated boxes meet at center: cos(30°) = 0.866 */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Left roof slope - from left wall edge with overhang to center apex */}
        {/* Positioned to overlap significantly at center to ensure no gap */}
        <mesh 
          position={[-houseWidth / 4 - 0.5, wallHeight * 3 + 1.8, 0]} 
          rotation={[0, 0, Math.PI / 6]}
          receiveShadow 
          castShadow
        >
          <boxGeometry args={[houseWidth / 2 + 1.5, 0.2, houseDepth + 1.0]} />
          <meshStandardMaterial color={roofColor} roughness={0.8} transparent opacity={0.2} />
        </mesh>
        {/* Right roof slope - from center apex to right wall edge with overhang */}
        {/* Positioned to overlap significantly at center to ensure no gap */}
        <mesh 
          position={[houseWidth / 4 + 0.5, wallHeight * 3 + 1.8, 0]} 
          rotation={[0, 0, -Math.PI / 6]}
          receiveShadow 
          castShadow
        >
          <boxGeometry args={[houseWidth / 2 + 1.5, 0.2, houseDepth + 1.0]} />
          <meshStandardMaterial color={roofColor} roughness={0.8} transparent opacity={0.2} />
        </mesh>
        {/* Ridge cap - covers any gap at the apex */}
        {/* Wall top at Y = wallHeight * 2.5 + 1.5 = 9, apex height = 9 + (houseWidth/2) * tan(30°) = 9 + 3.46 = 12.46 */}
        <mesh 
          position={[0, wallHeight * 2.5 + 1.5 + (houseWidth / 2) * Math.tan(Math.PI / 6), 0]} 
          rotation={[0, 0, 0]}
          receiveShadow 
          castShadow
        >
          <boxGeometry args={[0.4, 0.4, houseDepth + 1.0]} />
          <meshStandardMaterial color={roofColor} roughness={0.8} transparent opacity={0.2} />
        </mesh>
        
        {/* Front triangular gable end - closes the front of the roof */}
        {/* Triangle must match roof slope edges exactly at X = ±houseWidth/2 = ±6 */}
        {/* The roof slopes extend to Z = houseDepth/2 + 0.5 for overhang */}
        {/* Base width must match the wall width exactly: houseWidth = 12 */}
        {(() => {
          const baseWidth = houseWidth; // Match wall width exactly
          const triangleHeight = (houseWidth / 2) * Math.tan(Math.PI / 6);
          const roofOverhang = 0.5; // Match roof overhang
          const geometry = new BufferGeometry();
          const vertices = new Float32Array([
            -baseWidth / 2, 0, 0,           // Bottom left (X = -6)
            baseWidth / 2, 0, 0,            // Bottom right (X = 6)
            0, triangleHeight, 0,           // Top center (apex)
          ]);
          const indices = new Uint16Array([0, 1, 2]);
          geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
          geometry.setIndex(new Uint16BufferAttribute(indices, 1));
          geometry.computeVertexNormals();
          
          // Position so base (Y=0 in local) aligns with wall top (Y=9)
          // Position at front wall edge with overhang
          const baseY = wallHeight * 2.5 + 1.5;
          const frontZ = houseDepth / 2 + roofOverhang;
          
          return (
            <mesh 
              position={[0, baseY, frontZ]} 
              rotation={[0, 0, 0]}
              receiveShadow 
              castShadow
            >
              <primitive object={geometry} />
              <meshStandardMaterial color={roofColor} roughness={0.8} transparent opacity={0.2} side={2} />
            </mesh>
          );
        })()}
        
        {/* Back triangular gable end - closes the back of the roof */}
        {(() => {
          const baseWidth = houseWidth; // Match wall width exactly
          const triangleHeight = (houseWidth / 2) * Math.tan(Math.PI / 6);
          const roofOverhang = 0.5; // Match roof overhang
          const geometry = new BufferGeometry();
          const vertices = new Float32Array([
            -baseWidth / 2, 0, 0,           // Bottom left (X = -6)
            baseWidth / 2, 0, 0,            // Bottom right (X = 6)
            0, triangleHeight, 0,           // Top center (apex)
          ]);
          const indices = new Uint16Array([0, 1, 2]);
          geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
          geometry.setIndex(new Uint16BufferAttribute(indices, 1));
          geometry.computeVertexNormals();
          
          // Position so base (Y=0 in local) aligns with wall top (Y=9)
          // Position at back wall edge with overhang
          const baseY = wallHeight * 2.5 + 1.5;
          const backZ = -houseDepth / 2 - roofOverhang;
          
          return (
            <mesh 
              position={[0, baseY, backZ]} 
              rotation={[0, Math.PI, 0]}
              receiveShadow 
              castShadow
            >
              <primitive object={geometry} />
              <meshStandardMaterial color={roofColor} roughness={0.8} transparent opacity={0.2} side={2} />
            </mesh>
          );
        })()}
      </RigidBody>
    </>
  );
}
