'use client';

import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';

interface RealisticPlantProps {
  position: Vector3 | [number, number, number];
  cornerRotation?: number; // Rotation in radians to point leaves inward (0 = no rotation)
}

// Simple hash function to generate consistent random seed from position
function hashPosition(x: number, y: number, z: number): number {
  return Math.abs(Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453) % 1;
}

// Random function using seed
function seededRandom(seed: number): number {
  return (Math.sin(seed * 10000) * 10000) % 1;
}

export function RealisticPlant({ position, cornerRotation = 0 }: RealisticPlantProps) {
  const pos: [number, number, number] = Array.isArray(position) 
    ? [position[0], position[1], position[2]]
    : [position.x, position.y, position.z];
  
  // Generate unique seed for this plant based on position
  const seed = hashPosition(pos[0], pos[1], pos[2]);
  
  // Base height multiplier - similar for all plants (0.9 to 1.1 for small variation)
  const baseHeightMultiplier = 0.9 + seededRandom(seed) * 0.2;
  
  // Check if this is one of the 3 smallest plants based on height multiplier
  // Plant positions: [-5.3, 3.1, 4.3], [1.3, 3.1, 4.3], [-5.3, 3.1, -4.3], [1.3, 3.1, -4.3]
  const plantPositions: [number, number, number][] = [
    [-5.3, 3.1, 4.3],
    [1.3, 3.1, 4.3],
    [-5.3, 3.1, -4.3],
    [1.3, 3.1, -4.3],
  ];
  const plantHeights = plantPositions.map(p => {
    const pSeed = hashPosition(p[0], p[1], p[2]);
    return 0.9 + seededRandom(pSeed) * 0.2;
  });
  const sortedHeights = [...plantHeights].sort((a, b) => a - b);
  const thirdSmallestHeight = sortedHeights[2] ?? 1.0; // Height of the 3rd smallest (fallback to 1.0 if undefined)
  const isSmallest = baseHeightMultiplier <= thirdSmallestHeight;
  
  // Adjust height and add more fronds for smallest plants
  const heightMultiplier = isSmallest ? baseHeightMultiplier * 1.15 : baseHeightMultiplier;
  
  // Leaflet size variation multiplier (0.6 to 1.4 for big/small variation)
  const leafletSizeMultiplier = 0.6 + seededRandom(seed + 0.5) * 0.8;

  return (
    <group position={pos as [number, number, number]} rotation={[0, cornerRotation, 0]}>
      <RigidBody type="fixed" colliders="cuboid">
        {/* Pot - simple black cylindrical pot */}
        <mesh castShadow receiveShadow position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.22, 0.2, 0.3, 32]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.9} metalness={0.1} />
        </mesh>
        {/* Pot rim */}
        <mesh castShadow position={[0, 0.3, 0]}>
          <torusGeometry args={[0.22, 0.015, 16, 32]} />
          <meshStandardMaterial color="#0f0f0f" roughness={0.8} />
        </mesh>
        {/* Pot base */}
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.04, 32]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.9} />
        </mesh>

        {/* Soil/pebbles visible in pot */}
        <mesh castShadow receiveShadow position={[0, 0.16, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.02, 32]} />
          <meshStandardMaterial color="#3a2518" roughness={0.9} />
        </mesh>

        {/* Textured trunk/caudex - gnarled and organic (taller) */}
        <mesh castShadow position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.08, 0.12, 0.4 * heightMultiplier, 8]} />
          <meshStandardMaterial color="#5a3a2a" roughness={0.95} metalness={0.05} />
        </mesh>
        {/* Trunk texture details - irregular bumps */}
        {[
          { x: 0.06, z: 0.02, y: 0.45, scale: 0.03 },
          { x: -0.05, z: 0.04, y: 0.5, scale: 0.025 },
          { x: 0.04, z: -0.06, y: 0.55, scale: 0.028 },
          { x: -0.03, z: -0.04, y: 0.48, scale: 0.022 },
        ].map((bump, i) => (
          <mesh key={`bump-${i}`} castShadow position={[bump.x, bump.y * heightMultiplier, bump.z]}>
            <sphereGeometry args={[bump.scale, 8, 8]} />
            <meshStandardMaterial color="#4a2f1f" roughness={0.9} />
          </mesh>
        ))}

        {/* Main trunk extension (much taller) */}
        <mesh castShadow position={[0, 0.65 + 0.3 * (heightMultiplier - 1), 0]}>
          <cylinderGeometry args={[0.07, 0.08, 0.5 * heightMultiplier, 8]} />
          <meshStandardMaterial color="#5a3a2a" roughness={0.95} />
        </mesh>
        
        {/* Additional trunk segment for extra height */}
        <mesh castShadow position={[0, 0.9 + 0.4 * (heightMultiplier - 1), 0]}>
          <cylinderGeometry args={[0.06, 0.07, 0.3 * heightMultiplier, 8]} />
          <meshStandardMaterial color="#5a3a2a" roughness={0.95} />
        </mesh>

        {/* Pinnate fronds - many more fronds for a round, bushy top (much taller) */}
        {[
          // Large outer fronds - main canopy (moved much higher)
          { baseY: 1.3, angle: 0, tilt: 0.2, leaflets: 9, length: 0.75 },
          { baseY: 1.35, angle: Math.PI / 8, tilt: -0.15, leaflets: 8, length: 0.7 },
          { baseY: 1.32, angle: Math.PI / 4, tilt: 0.25, leaflets: 10, length: 0.78 },
          { baseY: 1.37, angle: (3 * Math.PI) / 8, tilt: -0.2, leaflets: 9, length: 0.73 },
          { baseY: 1.31, angle: Math.PI / 2, tilt: 0.18, leaflets: 8, length: 0.71 },
          { baseY: 1.36, angle: (5 * Math.PI) / 8, tilt: -0.22, leaflets: 9, length: 0.76 },
          { baseY: 1.33, angle: (3 * Math.PI) / 4, tilt: 0.2, leaflets: 10, length: 0.79 },
          { baseY: 1.38, angle: (7 * Math.PI) / 8, tilt: -0.18, leaflets: 8, length: 0.72 },
          { baseY: 1.34, angle: Math.PI, tilt: 0.22, leaflets: 9, length: 0.74 },
          { baseY: 1.39, angle: (9 * Math.PI) / 8, tilt: -0.2, leaflets: 8, length: 0.7 },
          { baseY: 1.32, angle: (5 * Math.PI) / 4, tilt: 0.19, leaflets: 9, length: 0.75 },
          { baseY: 1.37, angle: (11 * Math.PI) / 8, tilt: -0.21, leaflets: 10, length: 0.77 },
          { baseY: 1.35, angle: (3 * Math.PI) / 2, tilt: 0.2, leaflets: 9, length: 0.73 },
          { baseY: 1.4, angle: (13 * Math.PI) / 8, tilt: -0.17, leaflets: 8, length: 0.71 },
          { baseY: 1.33, angle: (7 * Math.PI) / 4, tilt: 0.23, leaflets: 9, length: 0.76 },
          { baseY: 1.38, angle: (15 * Math.PI) / 8, tilt: -0.19, leaflets: 8, length: 0.74 },
          // Medium-large fronds - second layer
          { baseY: 1.2, angle: Math.PI / 12, tilt: 0.15, leaflets: 7, length: 0.65 },
          { baseY: 1.22, angle: Math.PI / 6, tilt: -0.12, leaflets: 8, length: 0.68 },
          { baseY: 1.21, angle: Math.PI / 4, tilt: 0.18, leaflets: 7, length: 0.66 },
          { baseY: 1.23, angle: Math.PI / 3, tilt: -0.14, leaflets: 8, length: 0.69 },
          { baseY: 1.2, angle: (5 * Math.PI) / 12, tilt: 0.16, leaflets: 7, length: 0.67 },
          { baseY: 1.22, angle: (2 * Math.PI) / 3, tilt: -0.13, leaflets: 8, length: 0.7 },
          { baseY: 1.21, angle: (3 * Math.PI) / 4, tilt: 0.17, leaflets: 7, length: 0.68 },
          { baseY: 1.23, angle: (5 * Math.PI) / 6, tilt: -0.15, leaflets: 8, length: 0.71 },
          // Medium fronds - third layer
          { baseY: 1.1, angle: Math.PI / 10, tilt: 0.12, leaflets: 6, length: 0.58 },
          { baseY: 1.12, angle: Math.PI / 5, tilt: -0.11, leaflets: 7, length: 0.61 },
          { baseY: 1.11, angle: (3 * Math.PI) / 10, tilt: 0.13, leaflets: 6, length: 0.59 },
          { baseY: 1.13, angle: (2 * Math.PI) / 5, tilt: -0.12, leaflets: 7, length: 0.62 },
          { baseY: 1.1, angle: Math.PI / 2, tilt: 0.14, leaflets: 6, length: 0.6 },
          { baseY: 1.12, angle: (3 * Math.PI) / 5, tilt: -0.13, leaflets: 7, length: 0.63 },
          { baseY: 1.11, angle: (7 * Math.PI) / 10, tilt: 0.15, leaflets: 6, length: 0.61 },
          { baseY: 1.13, angle: (4 * Math.PI) / 5, tilt: -0.14, leaflets: 7, length: 0.64 },
          // Smaller inner fronds - fourth layer
          { baseY: 1.05, angle: Math.PI / 16, tilt: 0.1, leaflets: 5, length: 0.5 },
          { baseY: 1.06, angle: (3 * Math.PI) / 16, tilt: -0.09, leaflets: 6, length: 0.53 },
          { baseY: 1.05, angle: (5 * Math.PI) / 16, tilt: 0.11, leaflets: 5, length: 0.51 },
          { baseY: 1.06, angle: (7 * Math.PI) / 16, tilt: -0.1, leaflets: 6, length: 0.54 },
          { baseY: 1.05, angle: Math.PI / 2, tilt: 0.12, leaflets: 5, length: 0.52 },
          { baseY: 1.06, angle: (9 * Math.PI) / 16, tilt: -0.11, leaflets: 6, length: 0.55 },
          // Extra fronds for smallest plants
          ...(isSmallest ? [
            { baseY: 1.15, angle: Math.PI / 9, tilt: 0.13, leaflets: 6, length: 0.6 },
            { baseY: 1.17, angle: (2 * Math.PI) / 9, tilt: -0.12, leaflets: 7, length: 0.63 },
            { baseY: 1.16, angle: (4 * Math.PI) / 9, tilt: 0.14, leaflets: 6, length: 0.61 },
            { baseY: 1.18, angle: (5 * Math.PI) / 9, tilt: -0.13, leaflets: 7, length: 0.64 },
            { baseY: 1.14, angle: (7 * Math.PI) / 9, tilt: 0.15, leaflets: 6, length: 0.62 },
            { baseY: 1.19, angle: (8 * Math.PI) / 9, tilt: -0.14, leaflets: 7, length: 0.65 },
            { baseY: 1.13, angle: Math.PI / 11, tilt: 0.11, leaflets: 5, length: 0.57 },
            { baseY: 1.2, angle: (3 * Math.PI) / 11, tilt: -0.1, leaflets: 6, length: 0.59 },
          ] : []),
        ].map((frond, frondIndex) => {
          // Apply height multiplier
          const adjustedBaseY = frond.baseY * heightMultiplier;
          const adjustedLength = frond.length * heightMultiplier;
          
          return (
            <group key={`frond-${frondIndex}`} position={[0, adjustedBaseY, 0]}>
              {/* Central stem of frond */}
              <mesh
                castShadow
                position={[0, 0, 0]}
                rotation={[frond.tilt, frond.angle, 0]}
              >
                <boxGeometry args={[0.008, 0.008, adjustedLength]} />
                <meshStandardMaterial color="#2d4a1a" roughness={0.6} />
              </mesh>
              {/* Leaflets along the frond stem with random sizes */}
              {Array.from({ length: frond.leaflets }).map((_, leafletIndex) => {
                const t = (leafletIndex + 1) / (frond.leaflets + 1);
                // Base leaflet size with random variation per plant
                const baseLeafletLength = 0.15 + (0.1 * (1 - Math.abs(t - 0.5) * 2));
                const leafletLength = baseLeafletLength * leafletSizeMultiplier;
                const leafletWidth = 0.02 * leafletSizeMultiplier;
                const offset = (t - 0.5) * adjustedLength;
                const leafletAngle = (leafletIndex % 2 === 0 ? 1 : -1) * 0.3;
                
                return (
                  <mesh
                    key={`leaflet-${leafletIndex}`}
                    castShadow
                    position={[0, 0, offset]}
                    rotation={[frond.tilt, frond.angle, leafletAngle]}
                  >
                    <planeGeometry args={[leafletWidth, leafletLength, 4, 8]} />
                    <meshStandardMaterial 
                      color="#1e3a0f" 
                      roughness={0.4} 
                      metalness={0.01}
                      side={2}
                      emissive="#0a1a05"
                      emissiveIntensity={0.02}
                    />
                  </mesh>
                );
              })}
            </group>
          );
        })}

        {/* Additional smaller fronds for extra fullness and round bush appearance (moved higher) */}
        {[
          { baseY: 1.0, angle: Math.PI / 7, tilt: 0.1, leaflets: 5, length: 0.48 },
          { baseY: 1.01, angle: (2 * Math.PI) / 7, tilt: -0.09, leaflets: 5, length: 0.5 },
          { baseY: 1.0, angle: (3 * Math.PI) / 7, tilt: 0.11, leaflets: 4, length: 0.46 },
          { baseY: 1.01, angle: (4 * Math.PI) / 7, tilt: -0.1, leaflets: 5, length: 0.49 },
          { baseY: 1.0, angle: (5 * Math.PI) / 7, tilt: 0.12, leaflets: 4, length: 0.47 },
          { baseY: 1.01, angle: (6 * Math.PI) / 7, tilt: -0.11, leaflets: 5, length: 0.51 },
          { baseY: 0.98, angle: Math.PI / 9, tilt: 0.08, leaflets: 4, length: 0.44 },
          { baseY: 0.99, angle: (2 * Math.PI) / 9, tilt: -0.08, leaflets: 4, length: 0.45 },
          { baseY: 0.98, angle: (4 * Math.PI) / 9, tilt: 0.09, leaflets: 4, length: 0.46 },
          { baseY: 0.99, angle: (5 * Math.PI) / 9, tilt: -0.09, leaflets: 4, length: 0.47 },
          // Extra small fronds for smallest plants
          ...(isSmallest ? [
            { baseY: 1.02, angle: Math.PI / 13, tilt: 0.1, leaflets: 5, length: 0.52 },
            { baseY: 1.03, angle: (2 * Math.PI) / 13, tilt: -0.09, leaflets: 5, length: 0.54 },
            { baseY: 1.02, angle: (4 * Math.PI) / 13, tilt: 0.11, leaflets: 4, length: 0.5 },
            { baseY: 1.03, angle: (5 * Math.PI) / 13, tilt: -0.1, leaflets: 5, length: 0.53 },
          ] : []),
        ].map((frond, frondIndex) => {
          const adjustedBaseY = frond.baseY * heightMultiplier;
          const adjustedLength = frond.length * heightMultiplier;
          
          return (
            <group key={`small-frond-${frondIndex}`} position={[0, adjustedBaseY, 0]}>
              <mesh
                castShadow
                position={[0, 0, 0]}
                rotation={[frond.tilt, frond.angle, 0]}
              >
                <boxGeometry args={[0.006, 0.006, adjustedLength]} />
                <meshStandardMaterial color="#2d4a1a" roughness={0.6} />
              </mesh>
              {Array.from({ length: frond.leaflets }).map((_, leafletIndex) => {
                const t = (leafletIndex + 1) / (frond.leaflets + 1);
                const baseLeafletLength = 0.12 + (0.08 * (1 - Math.abs(t - 0.5) * 2));
                const leafletLength = baseLeafletLength * leafletSizeMultiplier;
                const leafletWidth = 0.018 * leafletSizeMultiplier;
                const offset = (t - 0.5) * adjustedLength;
                const leafletAngle = (leafletIndex % 2 === 0 ? 1 : -1) * 0.25;
                
                return (
                  <mesh
                    key={`small-leaflet-${leafletIndex}`}
                    castShadow
                    position={[0, 0, offset]}
                    rotation={[frond.tilt, frond.angle, leafletAngle]}
                  >
                    <planeGeometry args={[leafletWidth, leafletLength, 4, 6]} />
                    <meshStandardMaterial 
                      color="#1f3b10" 
                      roughness={0.4} 
                      side={2}
                      emissive="#0a1a05"
                      emissiveIntensity={0.02}
                    />
                  </mesh>
                );
              })}
            </group>
          );
        })}
      </RigidBody>
    </group>
  );
}
