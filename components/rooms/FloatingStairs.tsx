'use client';

import { RigidBody } from '@react-three/rapier';

interface FloatingStairsProps {
  floorLevel: number; // 0 = ground, 1 = first, 2 = second
  wallHeight: number;
  startX?: number; // Optional custom X position
  startZ?: number; // Optional custom Z position
  reverseDirection?: boolean; // If true, stairs go backward (decreasing Z) instead of forward
  rotation?: number; // Optional rotation in radians (around Y axis)
}

export function FloatingStairs({ floorLevel, wallHeight, startX, startZ, reverseDirection = false, rotation = 0 }: FloatingStairsProps) {
  // Realistic floating stairs based on sample images
  const stepCount = 10; // Number of steps per floor transition
  const stepHeight = wallHeight / stepCount; // Height between each step (riser height)
  const stepDepth = 0.3; // Depth of each step (tread depth)
  const stepWidth = 1.0; // Width of each step
  const stepThickness = 0.06; // Thickness of wood tread
  
  // Triangular support dimensions
  const triangleWidth = 0.12; // Width of triangular support
  const triangleHeight = 0.15; // Height of triangular support
  const triangleDepth = 0.08; // Depth of triangular support
  
  // Position on right side of house (X = 5.5, Z = -4 to -2)
  // Use custom positions if provided, otherwise use defaults
  const baseX = startX !== undefined ? startX : 5.5;
  const baseZ = startZ !== undefined ? startZ : -4;
  
  // Starting Y position for this floor's stairs
  // Floor top is at floorLevel * wallHeight + 0.1 (floor thickness 0.2, center at 0, top at 0.1)
  const baseY = floorLevel * wallHeight + 0.1;
  
  // Wood color (dark brown like sample images)
  const woodColor = '#5a3e2b'; // Dark brown wood
  // Metal support color (dark grey)
  const metalColor = '#2a2a2a'; // Dark grey metal

  return (
    <group rotation={[0, rotation, 0]}>
      {/* Steps */}
      {Array.from({ length: stepCount }).map((_, i) => {
        // Each step moves up and forward (or backward if reversed)
        // First step starts at floor level (baseY), subsequent steps go up
        const stepY = baseY + i * stepHeight;
        const stepZ = reverseDirection 
          ? baseZ - i * stepDepth  // Go backward (decreasing Z)
          : baseZ + i * stepDepth; // Go forward (increasing Z)
        
        return (
          <group key={i}>
            {/* Wood tread - top surface of step */}
            <RigidBody type="fixed" colliders="cuboid">
              <mesh 
                position={[baseX, stepY + stepThickness / 2, stepZ + stepDepth / 2]} 
                castShadow 
                receiveShadow
              >
                <boxGeometry args={[stepWidth, stepThickness, stepDepth]} />
                <meshStandardMaterial 
                  color={woodColor} 
                  roughness={0.7} 
                  metalness={0.1}
                />
              </mesh>
            </RigidBody>
            
            {/* Triangular support underneath each step */}
            {/* The support is a wedge that angles downward from the step */}
            <RigidBody type="fixed" colliders="cuboid">
              <mesh 
                position={[baseX, stepY - triangleHeight / 3, stepZ + stepDepth / 2]} 
                rotation={[Math.PI / 6, 0, 0]} // Rotate to create angled wedge
                castShadow 
                receiveShadow
              >
                {/* Create triangular wedge - wider at top, narrow at bottom */}
                <boxGeometry args={[triangleWidth, triangleHeight * 0.8, triangleDepth]} />
                <meshStandardMaterial 
                  color={metalColor} 
                  roughness={0.3} 
                  metalness={0.8}
                />
              </mesh>
            </RigidBody>
          </group>
        );
      })}
    </group>
  );
}
