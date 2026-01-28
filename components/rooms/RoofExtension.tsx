'use client';

import { RigidBody } from '@react-three/rapier';
import { BufferGeometry, Float32BufferAttribute, Uint16BufferAttribute } from 'three';

interface RoofExtensionProps {
  position: [number, number, number];
}

export function RoofExtension({ position }: RoofExtensionProps) {
  // Dormer dimensions - double length with 2 windows
  const dormerWidth = 4.8;
  const dormerDepth = 2.4; // Double the original depth (1.2 * 2 = 2.4)
  const dormerHeight = 1.3;
  const wallThickness = 0.12;
  const roofOverhang = 0.25;
  const dormerColor = '#8b4513'; // Brown - same as roof panel
  const windowFrameColor = '#ffffff'; // White window frames
  const glassColor = '#e8f4f8'; // Light blue-white for window glass

  // Calculate position to sit ON TOP of roof surface (not inside)
  const baseY = 10.65; // Y position on roof surface at X=-3
  const baseX = 0; // Z position (front/back) - adjust to move dormer forward or backward
  const baseZ = -0.7; // X position (left/right) - adjust to move dormer left or right
  const roofThickness = 0.3; // Roof panel thickness
  // Move dormer lower down the slope - reduce Y position by 0.4 to move it down the roof
  const adjustedY = baseY + roofThickness / 2 + 0.40 - 1.0; // Base sits ON TOP of roof, but lower on slope
  const adjustedZ = baseX + position[2]; // Z position (front/back) - can be adjusted with baseX
  const adjustedX = baseZ + position[0]; // X position (left/right) - can be adjusted with baseZ

  // Roof slope angle - 30 degrees (Math.PI / 6)
  const roofSlopeAngle = Math.PI / 6;
  const roofSlopeTan = Math.tan(roofSlopeAngle);
  
  // Window dimensions - two equal windows across the front
  const windowWidth = (dormerWidth - 0.3) / 2; // Two windows with gap
  const windowHeight = dormerHeight * 0.7;
  const windowGap = 0.1;
  const windowFrameThickness = 0.03;
  
  // Create diagonal side wall geometry - FLIPPED: top edge horizontal, bottom edge diagonal
  // Top edge must be horizontal to match the flat dormer roof
  // Bottom edge must be diagonal to match the sloping main roof
  // Left side wall - bottom edge follows roof slope, top edge is horizontal
  const leftSideWallGeometry = (() => {
    const geometry = new BufferGeometry();
    const halfDepth = dormerDepth / 2;
    const wallHeight = dormerHeight;
    // The main roof slopes in X direction (from sides to center at 30°)
    // The bottom edge should follow the roof slope (diagonal)
    // The top edge should be horizontal to match the flat dormer roof
    // Since the wall extends from back to front, the bottom edge slopes up from front to back
    const bottomSlopeHeight = dormerDepth * roofSlopeTan; // Height difference from front to back on bottom (using full depth)
    
    const vertices = new Float32Array([
      // Bottom front corner (left side, bottom, front) - lower, connects to front wall
      -wallThickness / 2, 0, halfDepth,
      // Bottom back corner (left side, bottom, back) - higher due to roof slope
      -wallThickness / 2, bottomSlopeHeight, -halfDepth,
      // Top front corner (left side, top, front) - horizontal top edge
      -wallThickness / 2, wallHeight, halfDepth,
      // Top back corner (left side, top, back) - horizontal top edge (same height as front)
      -wallThickness / 2, wallHeight, -halfDepth,
    ]);
    
    // Create two triangles to form the wall
    const indices = new Uint16Array([
      0, 1, 2, // First triangle
      1, 3, 2, // Second triangle
    ]);
    
    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
    geometry.setIndex(new Uint16BufferAttribute(indices, 1));
    geometry.computeVertexNormals();
    return geometry;
  })();
  
  // Right side wall - bottom edge follows roof slope, top edge is horizontal (mirrored)
  const rightSideWallGeometry = (() => {
    const geometry = new BufferGeometry();
    const halfDepth = dormerDepth / 2;
    const wallHeight = dormerHeight;
    const bottomSlopeHeight = dormerDepth * roofSlopeTan;
    
    const vertices = new Float32Array([
      // Bottom front corner (right side, bottom, front) - lower, connects to front wall
      wallThickness / 2, 0, halfDepth,
      // Bottom back corner (right side, bottom, back) - higher due to roof slope
      wallThickness / 2, bottomSlopeHeight, -halfDepth,
      // Top front corner (right side, top, front) - horizontal top edge
      wallThickness / 2, wallHeight, halfDepth,
      // Top back corner (right side, top, back) - horizontal top edge (same height as front)
      wallThickness / 2, wallHeight, -halfDepth,
    ]);
    
    const indices = new Uint16Array([
      0, 2, 1, // First triangle (reversed for correct normal)
      1, 2, 3, // Second triangle
    ]);
    
    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
    geometry.setIndex(new Uint16BufferAttribute(indices, 1));
    geometry.computeVertexNormals();
    return geometry;
  })();

  return (
    <group position={[adjustedX, adjustedY, adjustedZ]} rotation={[0, 3 * Math.PI / 2, 0]}>
      <RigidBody type="fixed" colliders="cuboid">
        {/* Front wall - brown, straight and vertical, with window openings */}
        {/* Top section of front wall */}
        <mesh 
          position={[0, dormerHeight - (dormerHeight - windowHeight) / 4, dormerDepth / 2 + 0.01]} 
          receiveShadow 
          castShadow
        >
          <boxGeometry args={[dormerWidth, (dormerHeight - windowHeight) / 2, wallThickness]} />
          <meshStandardMaterial color={dormerColor} roughness={0.8} />
        </mesh>
        {/* Bottom section of front wall */}
        <mesh 
          position={[0, (dormerHeight - windowHeight) / 4, dormerDepth / 2 + 0.01]} 
          receiveShadow 
          castShadow
        >
          <boxGeometry args={[dormerWidth, (dormerHeight - windowHeight) / 2, wallThickness]} />
          <meshStandardMaterial color={dormerColor} roughness={0.8} />
        </mesh>
        {/* Left section of front wall (between windows) */}
        <mesh 
          position={[-windowGap / 2, dormerHeight / 2, dormerDepth / 2 + 0.01]} 
          receiveShadow 
          castShadow
        >
          <boxGeometry args={[windowGap, windowHeight, wallThickness]} />
          <meshStandardMaterial color={dormerColor} roughness={0.8} />
        </mesh>
        {/* Right section of front wall (left of left window) */}
        <mesh 
          position={[-dormerWidth / 2 + (dormerWidth - windowWidth * 2 - windowGap) / 2, dormerHeight / 2, dormerDepth / 2 + 0.01]} 
          receiveShadow 
          castShadow
        >
          <boxGeometry args={[(dormerWidth - windowWidth * 2 - windowGap) / 2, windowHeight, wallThickness]} />
          <meshStandardMaterial color={dormerColor} roughness={0.8} />
        </mesh>
        {/* Left section of front wall (right of right window) */}
        <mesh 
          position={[dormerWidth / 2 - (dormerWidth - windowWidth * 2 - windowGap) / 2, dormerHeight / 2, dormerDepth / 2 + 0.01]} 
          receiveShadow 
          castShadow
        >
          <boxGeometry args={[(dormerWidth - windowWidth * 2 - windowGap) / 2, windowHeight, wallThickness]} />
          <meshStandardMaterial color={dormerColor} roughness={0.8} />
        </mesh>

        {/* Left side wall - brown, diagonal to match roof slope, extends to front wall */}
        {/* Positioned so bottom aligns with roof and top aligns with dormer roof */}
        <mesh 
          position={[-dormerWidth / 2, 0, 0]} 
          receiveShadow 
          castShadow
        >
          <primitive object={leftSideWallGeometry} />
          <meshStandardMaterial color={dormerColor} roughness={0.8} side={2} />
        </mesh>

        {/* Right side wall - brown, diagonal to match roof slope, extends to front wall */}
        {/* Positioned so bottom aligns with roof and top aligns with dormer roof */}
        <mesh 
          position={[dormerWidth / 2, 0, 0]} 
          receiveShadow 
          castShadow
        >
          <primitive object={rightSideWallGeometry} />
          <meshStandardMaterial color={dormerColor} roughness={0.8} side={2} />
        </mesh>

        {/* Back wall removed - open to the roof interior */}

        {/* Flat roof - brown, with overhang */}
        <mesh 
          position={[0, dormerHeight + 0.08, 0]} 
          receiveShadow 
          castShadow
        >
          <boxGeometry args={[dormerWidth + roofOverhang * 2, 0.12, dormerDepth + roofOverhang * 2]} />
          <meshStandardMaterial color={dormerColor} roughness={0.8} />
        </mesh>

        {/* Two equal windows across the front wall with proper frames */}
        {/* Left window outer frame - thick frame around opening */}
        <mesh 
          position={[-windowWidth / 2 - windowGap / 2, dormerHeight / 2, dormerDepth / 2 + 0.02]} 
          receiveShadow 
          castShadow
          renderOrder={1}
        >
          <boxGeometry args={[windowWidth + 0.12, windowHeight + 0.12, windowFrameThickness * 2]} />
          <meshStandardMaterial color={windowFrameColor} roughness={0.5} />
        </mesh>
        {/* Left window inner frame - thinner frame inside */}
        <mesh 
          position={[-windowWidth / 2 - windowGap / 2, dormerHeight / 2, dormerDepth / 2 + 0.04]} 
          receiveShadow 
          castShadow
          renderOrder={2}
        >
          <boxGeometry args={[windowWidth + 0.06, windowHeight + 0.06, windowFrameThickness]} />
          <meshStandardMaterial color={windowFrameColor} roughness={0.5} />
        </mesh>
        {/* Left window glass - see-through from both sides, positioned in window opening */}
        <mesh 
          position={[-windowWidth / 2 - windowGap / 2, dormerHeight / 2, dormerDepth / 2 + 0.05]} 
          receiveShadow
          renderOrder={3}
        >
          <boxGeometry args={[windowWidth, windowHeight, 0.02]} />
          <meshStandardMaterial 
            color={glassColor} 
            roughness={0.05} 
            metalness={0.05} 
            transparent 
            opacity={0.25}
            side={2}
          />
        </mesh>
        {/* Diagonal divider in left window */}
        <mesh 
          position={[-windowWidth / 2 - windowGap / 2, dormerHeight / 2, dormerDepth / 2 + 0.092]} 
          rotation={[0, 0, Math.PI / 4]}
          receiveShadow 
          castShadow
          renderOrder={3}
        >
          <boxGeometry args={[0.03, windowHeight * 1.4, 0.05]} />
          <meshStandardMaterial color={windowFrameColor} roughness={0.5} />
        </mesh>

        {/* Right window outer frame - thick frame around opening */}
        <mesh 
          position={[windowWidth / 2 + windowGap / 2, dormerHeight / 2, dormerDepth / 2 + 0.02]} 
          receiveShadow 
          castShadow
          renderOrder={1}
        >
          <boxGeometry args={[windowWidth + 0.12, windowHeight + 0.12, windowFrameThickness * 2]} />
          <meshStandardMaterial color={windowFrameColor} roughness={0.5} />
        </mesh>
        {/* Right window inner frame - thinner frame inside */}
        <mesh 
          position={[windowWidth / 2 + windowGap / 2, dormerHeight / 2, dormerDepth / 2 + 0.04]} 
          receiveShadow 
          castShadow
          renderOrder={2}
        >
          <boxGeometry args={[windowWidth + 0.06, windowHeight + 0.06, windowFrameThickness]} />
          <meshStandardMaterial color={windowFrameColor} roughness={0.5} />
        </mesh>
        {/* Right window glass - see-through from both sides, positioned in window opening */}
        <mesh 
          position={[windowWidth / 2 + windowGap / 2, dormerHeight / 2, dormerDepth / 2 + 0.05]} 
          receiveShadow
          renderOrder={3}
        >
          <boxGeometry args={[windowWidth, windowHeight, 0.02]} />
          <meshStandardMaterial 
            color={glassColor} 
            roughness={0.05} 
            metalness={0.05} 
            transparent 
            opacity={0.25}
            side={2}
          />
        </mesh>
      </RigidBody>
    </group>
  );
}
