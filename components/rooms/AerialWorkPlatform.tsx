'use client';

import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

interface AerialWorkPlatformProps {
  position: [number, number, number];
  targetPosition: [number, number, number]; // Roof corner position
  isActive: boolean;
}

export function AerialWorkPlatform({ position, targetPosition, isActive }: AerialWorkPlatformProps) {
  const groupRef = useRef<THREE.Group>(null);

  if (!isActive) return null;

  // Colors - blue theme
  const boomBlue = '#0066cc';
  const platformBlue = '#0052a3';
  const baseBlue = '#004d99';
  const wheelBlack = '#1a1a1a';
  const hydraulicSilver = '#c0c0c0';

  // Calculate direction to target
  const dx = targetPosition[0] - position[0];
  const dz = targetPosition[2] - position[2];
  const horizontalDistance = Math.sqrt(dx * dx + dz * dz);
  
  // Calculate rotation to face target (horizontal angle)
  const baseRotation = Math.atan2(dx, dz);
  
  // Main arm angle - extends UPWARD at moderate angle (50 degrees) - less high than before
  // Use a moderate upward angle to ensure it goes UP next to house, not through it
  const mainArmAngle = -Math.PI / 3.8; // -50 degrees (moderate upward, less high)
  
  // Calculate exact arm lengths to reach target precisely
  // Use a shorter main arm so platform ends exactly at roof height (not too high)
  // Main arm should be about 45% of horizontal distance
  const mainArmLength = horizontalDistance * 0.46; // Shorter main arm - ensures platform at correct height
  
  // Calculate where main arm ends (in local coordinates after rotation)
  const mainArmEndZ = mainArmLength * Math.cos(-mainArmAngle);
  
  // Top bend extends from main arm end to target - L shape (bends downward)
  // Calculate remaining distance needed
  const remainingHorizontal = horizontalDistance - mainArmEndZ;
  
  // For L shape: top bend should angle downward to bring platform to roof height
  // The main arm goes up, then top bend angles down (creating L shape)
  // We want the platform to end above the roof, not inside it
  // Use a steeper downward angle (45 degrees) so basket bends down more towards the roof
  const topBendAngle = Math.PI / 3.8; // 45 degrees downward (bends down more towards roof)
  
  // Calculate top bend length to stop at roof corner (not go through)
  // Make it much shorter (about half) so safety bucket hangs above roof, not inside house
  // Use 30% of the calculated distance to make it shorter
  const topBendLength = (remainingHorizontal / Math.cos(topBendAngle)) * 0.15;
  
  // Hydraulic cylinder positioning - SHORT, THICK cylinder at BASE of arm (like real crane)
  // Connects from base (near turntable) to underside of main arm at its base
  const hydraulicBaseY = 0.1; // At base level
  const hydraulicBaseZ = 0.2; // Slightly forward from base
  const hydraulicArmZ = 0.8; // Short distance along arm (at base of arm)
  const hydraulicArmY = hydraulicArmZ * Math.tan(-mainArmAngle); // Height at that point
  
  // Calculate hydraulic length and angle - should be SHORT and THICK
  const hydraulicDz = hydraulicArmZ - hydraulicBaseZ;
  const hydraulicDy = hydraulicArmY - hydraulicBaseY;
  const hydraulicLength = Math.sqrt(hydraulicDz * hydraulicDz + hydraulicDy * hydraulicDy);
  const hydraulicAngle = Math.atan2(hydraulicDy, hydraulicDz);

  return (
    <group ref={groupRef}>
      {/* Base with Outriggers/Stabilizers - blue */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Main base chassis - blue */}
        <mesh position={[position[0], position[1] + 0.2, position[2]]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 0.4, 3.8]} />
          <meshStandardMaterial color={baseBlue} roughness={0.8} />
        </mesh>
        
        {/* Wheels - black, two sets */}
        <mesh position={[position[0], position[1] - 0.3, position[2] - 0.8]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 16]} />
          <meshStandardMaterial color={wheelBlack} roughness={0.9} />
        </mesh>
        <mesh position={[position[0], position[1] - 0.3, position[2] + 0.8]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 16]} />
          <meshStandardMaterial color={wheelBlack} roughness={0.9} />
        </mesh>
        
        {/* Outriggers/Stabilizers - yellow, extended outward */}
        {[
          { x: -1.8, z: -2.2, rotY: 0 }, // Front-left
          { x: 1.8, z: -2.2, rotY: 0 },  // Front-right
          { x: -1.8, z: 2.2, rotY: 0 },  // Back-left
          { x: 1.8, z: 2.2, rotY: 0 },   // Back-right
        ].map((outrigger, i) => (
          <group key={i} position={[position[0] + outrigger.x, position[1] + 0.1, position[2] + outrigger.z]}>
            {/* Outrigger arm - extends outward */}
            <mesh castShadow>
              <boxGeometry args={[0.3, 0.2, 1.5]} />
              <meshStandardMaterial color={baseBlue} roughness={0.8} />
            </mesh>
            {/* Outrigger foot - flat square at end */}
            <mesh position={[0, -0.15, 0.75]} castShadow>
              <boxGeometry args={[0.4, 0.1, 0.4]} />
              <meshStandardMaterial color={baseBlue} roughness={0.8} />
            </mesh>
          </group>
        ))}
      </RigidBody>

      {/* Engine/Main Body - blue, CENTERED at position */}
      <group position={position}>
        {/* Engine body - blue, centered */}
        <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.2, 1.2, 3.5]} />
          <meshStandardMaterial color={baseBlue} roughness={0.8} />
        </mesh>
        
        {/* Orange light/sensor */}
        <mesh position={[1.1, 1, 0.5]} castShadow>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color="#ff6b00" />
        </mesh>

        {/* Turntable - CENTERED on body - blue */}
        <mesh position={[0, 1.1, 0]} castShadow>
          <cylinderGeometry args={[0.9, 0.9, 0.4, 16]} />
          <meshStandardMaterial color={boomBlue} roughness={0.7} metalness={0.2} />
        </mesh>
        
        {/* Connection hub - CENTERED at [0, 1.3, 0] - EXACT CENTER of crane body - blue */}
        <mesh position={[0, 1.3, 0]} castShadow>
          <cylinderGeometry args={[0.6, 0.6, 0.25, 16]} />
          <meshStandardMaterial color={boomBlue} roughness={0.6} metalness={0.3} />
        </mesh>

        {/* Single Main Arm - attached to CENTER of connection hub at [0, 1.3, 0] */}
        <group
          position={[0, 1.3, 0]} // EXACT CENTER - same as connection hub
          rotation={[0, baseRotation, 0]}
        >
          {/* Main arm section - rotates around center point, extends UPWARD at steep angle */}
          <group rotation={[mainArmAngle, 0, 0]}>
            {/* Arm base - starts EXACTLY at center [0, 0, 0] of this group - blue */}
            <mesh position={[0, 0, 0]} castShadow>
              <cylinderGeometry args={[0.5, 0.55, 0.5, 16]} />
              <meshStandardMaterial color={boomBlue} roughness={0.6} metalness={0.1} />
            </mesh>
            
            {/* Single continuous main arm - extends UPWARD from center - blue */}
            <mesh 
              position={[0, 0, mainArmLength * 0.5]} 
              rotation={[0, 0, 0]}
              castShadow
            >
              <boxGeometry args={[0.5, 0.5, mainArmLength]} />
              <meshStandardMaterial color={boomBlue} roughness={0.6} metalness={0.1} />
            </mesh>

            {/* Hydraulic cylinder - SHORT, THICK lift mechanism at BASE of arm (realistic) */}
            <group position={[0.35, hydraulicBaseY, hydraulicBaseZ]} rotation={[hydraulicAngle, 0, 0]}>
              {/* Hydraulic cylinder body - SHORT and THICK (like real crane) */}
              <mesh castShadow>
                <cylinderGeometry args={[0.1, 0.1, hydraulicLength, 16]} />
                <meshStandardMaterial color={hydraulicSilver} roughness={0.3} metalness={0.8} />
              </mesh>
              {/* Hydraulic piston end (at arm connection) - thicker */}
              <mesh position={[0, 0, hydraulicLength]} castShadow>
                <cylinderGeometry args={[0.12, 0.12, 0.15, 16]} />
                <meshStandardMaterial color={hydraulicSilver} roughness={0.2} metalness={0.9} />
              </mesh>
              {/* Hydraulic base connection */}
              <mesh position={[0, 0, -0.05]} castShadow>
                <cylinderGeometry args={[0.12, 0.12, 0.1, 16]} />
                <meshStandardMaterial color={hydraulicSilver} roughness={0.2} metalness={0.9} />
              </mesh>
            </group>

            {/* Top bend section with work platform - at END of main arm */}
            <group 
              position={[0, 0, mainArmLength]} // At the END of the main arm (along local Z axis)
              rotation={[topBendAngle, 0, 0]}
            >
              {/* Top bend arm segment - L shape, extends downward to reach target - blue */}
              <mesh 
                position={[0, 0, topBendLength * 0.4]} 
                castShadow
              >
                <boxGeometry args={[0.4, 0.4, topBendLength]} />
                <meshStandardMaterial color={boomBlue} roughness={0.6} metalness={0.1} />
              </mesh>

              {/* Work platform - BLUE BASKET with safety bars/cage structure */}
              <group position={[0, 0, topBendLength]}>
                {/* Platform base - grid-like floor (basket floor) - BLUE */}
                <mesh position={[0, 0.1, 0]} castShadow receiveShadow>
                  <boxGeometry args={[1.4, 0.05, 1.1]} />
                  <meshStandardMaterial color={platformBlue} roughness={0.7} />
                </mesh>
                
                {/* Grid pattern on floor (basket floor detail) - BLUE */}
                {[-0.5, -0.25, 0, 0.25, 0.5].map((x, i) => (
                  <mesh key={`grid-x-${i}`} position={[x, 0.1, 0]} castShadow>
                    <boxGeometry args={[0.02, 0.05, 1.1]} />
                    <meshStandardMaterial color={platformBlue} roughness={0.7} />
                  </mesh>
                ))}
                {[-0.5, -0.25, 0, 0.25, 0.5].map((z, i) => (
                  <mesh key={`grid-z-${i}`} position={[0, 0.1, z]} castShadow>
                    <boxGeometry args={[1.4, 0.05, 0.02]} />
                    <meshStandardMaterial color={platformBlue} roughness={0.7} />
                  </mesh>
                ))}
                
                {/* Safety bars/cage structure - BLUE vertical bars around perimeter */}
                {/* Front and back safety bars (horizontal) */}
                <mesh position={[0, 0.6, 0.55]} castShadow>
                  <boxGeometry args={[1.4, 0.08, 0.08]} />
                  <meshStandardMaterial color={boomBlue} roughness={0.6} />
                </mesh>
                <mesh position={[0, 0.6, -0.55]} castShadow>
                  <boxGeometry args={[1.4, 0.08, 0.08]} />
                  <meshStandardMaterial color={boomBlue} roughness={0.6} />
                </mesh>
                {/* Left and right safety bars (horizontal) */}
                <mesh position={[-0.7, 0.6, 0]} castShadow>
                  <boxGeometry args={[0.08, 0.08, 1.1]} />
                  <meshStandardMaterial color={boomBlue} roughness={0.6} />
                </mesh>
                <mesh position={[0.7, 0.6, 0]} castShadow>
                  <boxGeometry args={[0.08, 0.08, 1.1]} />
                  <meshStandardMaterial color={boomBlue} roughness={0.6} />
                </mesh>
                
                {/* Vertical corner posts - taller for safety cage - BLUE */}
                {[
                  { x: -0.7, z: 0.55 },
                  { x: 0.7, z: 0.55 },
                  { x: -0.7, z: -0.55 },
                  { x: 0.7, z: -0.55 },
                ].map((corner, i) => (
                  <mesh key={i} position={[corner.x, 0.35, corner.z]} castShadow>
                    <boxGeometry args={[0.08, 0.7, 0.08]} />
                    <meshStandardMaterial color={boomBlue} roughness={0.6} />
                  </mesh>
                ))}
                
                {/* Additional vertical safety bars between corners (cage structure) - BLUE */}
                {/* Front side vertical bars */}
                {[-0.35, 0, 0.35].map((x, i) => (
                  <mesh key={`front-bar-${i}`} position={[x, 0.35, 0.55]} castShadow>
                    <boxGeometry args={[0.06, 0.7, 0.06]} />
                    <meshStandardMaterial color={boomBlue} roughness={0.6} />
                  </mesh>
                ))}
                {/* Back side vertical bars */}
                {[-0.35, 0, 0.35].map((x, i) => (
                  <mesh key={`back-bar-${i}`} position={[x, 0.35, -0.55]} castShadow>
                    <boxGeometry args={[0.06, 0.7, 0.06]} />
                    <meshStandardMaterial color={boomBlue} roughness={0.6} />
                  </mesh>
                ))}
                {/* Left side vertical bars */}
                {[-0.35, 0, 0.35].map((z, i) => (
                  <mesh key={`left-bar-${i}`} position={[-0.7, 0.35, z]} castShadow>
                    <boxGeometry args={[0.06, 0.7, 0.06]} />
                    <meshStandardMaterial color={boomBlue} roughness={0.6} />
                  </mesh>
                ))}
                {/* Right side vertical bars */}
                {[-0.35, 0, 0.35].map((z, i) => (
                  <mesh key={`right-bar-${i}`} position={[0.7, 0.35, z]} castShadow>
                    <boxGeometry args={[0.06, 0.7, 0.06]} />
                    <meshStandardMaterial color={boomBlue} roughness={0.6} />
                  </mesh>
                ))}
                
                {/* Top safety rail (horizontal bar at top of cage) - BLUE */}
                <mesh position={[0, 1.0, 0.55]} castShadow>
                  <boxGeometry args={[1.4, 0.08, 0.08]} />
                  <meshStandardMaterial color={boomBlue} roughness={0.6} />
                </mesh>
                <mesh position={[0, 1.0, -0.55]} castShadow>
                  <boxGeometry args={[1.4, 0.08, 0.08]} />
                  <meshStandardMaterial color={boomBlue} roughness={0.6} />
                </mesh>
                <mesh position={[-0.7, 1.0, 0]} castShadow>
                  <boxGeometry args={[0.08, 0.08, 1.1]} />
                  <meshStandardMaterial color={boomBlue} roughness={0.6} />
                </mesh>
                <mesh position={[0.7, 1.0, 0]} castShadow>
                  <boxGeometry args={[0.08, 0.08, 1.1]} />
                  <meshStandardMaterial color={boomBlue} roughness={0.6} />
                </mesh>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
