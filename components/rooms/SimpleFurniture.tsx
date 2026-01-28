'use client';

import { RigidBody } from '@react-three/rapier';

export function SimpleFurniture() {
  return (
    <>
      {/* ============================================ */}
      {/* LIVING ROOM - Biggest room, open plan */}
      {/* ============================================ */}
      
      {/* L-SHAPED COUCH */}
      {/* Main section of L-couch (horizontal) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-5, 0.4, -1]} castShadow receiveShadow>
          <boxGeometry args={[3, 0.8, 1.2]} />
          <meshStandardMaterial color="#8b5a3c" roughness={0.7} />
        </mesh>
      </RigidBody>
      
      {/* Side section of L-couch (vertical, forming the L) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-3.5, 0.4, 0.5]} castShadow receiveShadow>
          <boxGeometry args={[1.2, 0.8, 2]} />
          <meshStandardMaterial color="#8b5a3c" roughness={0.7} />
        </mesh>
      </RigidBody>

      {/* BIG TV ON WALL - Mounted on back wall */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* TV screen */}
        <mesh position={[-5, 1.2, -7.9]} castShadow>
          <boxGeometry args={[3, 1.8, 0.1]} />
          <meshStandardMaterial color="#000000" roughness={0.1} />
        </mesh>
        {/* TV frame/bezel */}
        <mesh position={[-5, 1.2, -7.85]} castShadow>
          <boxGeometry args={[3.1, 1.9, 0.05]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.3} metalness={0.2} />
        </mesh>
      </RigidBody>

      {/* TV STAND/CONSOLE */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-5, 0.2, -7.5]} castShadow receiveShadow>
          <boxGeometry args={[3.5, 0.4, 0.8]} />
          <meshStandardMaterial color="#3a3a3a" roughness={0.6} />
        </mesh>
      </RigidBody>

      {/* COFFEE TABLE - In front of L-couch */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-5, 0.25, 1.5]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 0.5, 0.8]} />
          <meshStandardMaterial color="#d4a574" roughness={0.6} />
        </mesh>
      </RigidBody>

      {/* FLOATING STAIRS - Going up in living room */}
      {/* Stairs positioned along left wall, going up */}
      {Array.from({ length: 8 }).map((_, i) => {
        const stepHeight = i * 0.4; // Each step 0.4 units higher
        const stepDepth = i * 0.3; // Steps extend forward
        const stepWidth = 1.2; // Width of each step
        
        return (
          <RigidBody key={i} type="fixed" colliders="cuboid">
            {/* Step tread */}
            <mesh 
              position={[-8.5, stepHeight + 0.1, -4 + stepDepth]} 
              castShadow 
              receiveShadow
            >
              <boxGeometry args={[stepWidth, 0.1, 0.3]} />
              <meshStandardMaterial color="#d4a574" roughness={0.6} />
            </mesh>
            {/* Step riser (optional, for visual depth) */}
            <mesh 
              position={[-8.5, stepHeight - 0.05, -4 + stepDepth + 0.15]} 
              castShadow
            >
              <boxGeometry args={[stepWidth, 0.2, 0.05]} />
              <meshStandardMaterial color="#8b5a3c" roughness={0.7} />
            </mesh>
          </RigidBody>
        );
      })}

      {/* DINING TABLE - In living room area */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 0.4, 2]} castShadow receiveShadow>
          <boxGeometry args={[2, 0.8, 1.2]} />
          <meshStandardMaterial color="#e8e8e8" roughness={0.2} metalness={0.1} />
        </mesh>
      </RigidBody>

      {/* Table base */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 0.2, 2]} castShadow>
          <boxGeometry args={[0.3, 0.4, 0.3]} />
          <meshStandardMaterial color="#ffffff" roughness={0.6} />
        </mesh>
      </RigidBody>

      {/* Dining chairs */}
      {[
        { x: -0.8, z: 2.8 },
        { x: 0.8, z: 2.8 },
        { x: -0.8, z: 1.2 },
        { x: 0.8, z: 1.2 },
      ].map((pos, i) => (
        <RigidBody key={i} type="fixed" colliders="cuboid">
          <mesh position={[pos.x, 0.25, pos.z]} castShadow receiveShadow>
            <boxGeometry args={[0.4, 0.5, 0.4]} />
            <meshStandardMaterial color="#3b82f6" roughness={0.7} />
          </mesh>
        </RigidBody>
      ))}

      {/* ============================================ */}
      {/* OPEN KITCHEN - Top right corner */}
      {/* ============================================ */}
      
      {/* REFRIGERATOR - Top right corner */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[8, 1, 6]} castShadow receiveShadow>
          <boxGeometry args={[0.8, 2, 0.7]} />
          <meshStandardMaterial color="#4a4a4a" roughness={0.5} metalness={0.3} />
        </mesh>
      </RigidBody>

      {/* KITCHEN COUNTER - Along right wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[6, 0.9, 6]} castShadow receiveShadow>
          <boxGeometry args={[3, 0.1, 0.6]} />
          <meshStandardMaterial color="#5a5a5a" roughness={0.6} />
        </mesh>
      </RigidBody>

      {/* Kitchen cabinets under counter */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[6, 0.45, 6]} castShadow receiveShadow>
          <boxGeometry args={[3, 0.9, 0.5]} />
          <meshStandardMaterial color="#d0d0d0" roughness={0.7} />
        </mesh>
      </RigidBody>

      {/* SINK - In kitchen counter */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 0.95, 6]} castShadow>
          <boxGeometry args={[0.6, 0.1, 0.4]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.3} metalness={0.7} />
        </mesh>
      </RigidBody>

      {/* COOKING ISLAND - In center of kitchen area */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Island counter top */}
        <mesh position={[6, 0.9, 3]} castShadow receiveShadow>
          <boxGeometry args={[2.5, 0.1, 1.2]} />
          <meshStandardMaterial color="#5a5a5a" roughness={0.6} />
        </mesh>
        {/* Island base/cabinets */}
        <mesh position={[6, 0.45, 3]} castShadow receiveShadow>
          <boxGeometry args={[2.5, 0.9, 1.2]} />
          <meshStandardMaterial color="#d0d0d0" roughness={0.7} />
        </mesh>
        {/* Stovetop on island */}
        <mesh position={[6, 0.95, 3]} castShadow>
          <boxGeometry args={[0.8, 0.1, 0.6]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} />
        </mesh>
      </RigidBody>

      {/* ============================================ */}
      {/* BEDROOMS AND BATHROOM - Keep existing */}
      {/* ============================================ */}

      {/* BEDROOM 1 (Top-left) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-6, 0.3, -5]} castShadow receiveShadow>
          <boxGeometry args={[2, 0.6, 1.5]} />
          <meshStandardMaterial color="#4a5568" roughness={0.7} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-6, 1, -6.5]} castShadow receiveShadow>
          <boxGeometry args={[1.2, 2, 0.6]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.6} />
        </mesh>
      </RigidBody>

      {/* BEDROOM 2 (Top-right) */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[6, 0.3, -5]} castShadow receiveShadow>
          <boxGeometry args={[2, 0.6, 1.5]} />
          <meshStandardMaterial color="#4a5568" roughness={0.7} />
        </mesh>
      </RigidBody>

      {/* ============================================ */}
      {/* BATHROOM - Small room between bedrooms */}
      {/* ============================================ */}
      
      {/* TOILET - Left side of bathroom */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Toilet bowl */}
        <mesh position={[-2.5, 0.3, -5]} castShadow receiveShadow>
          <boxGeometry args={[0.5, 0.6, 0.6]} />
          <meshStandardMaterial color="#ffffff" roughness={0.6} />
        </mesh>
        {/* Toilet tank */}
        <mesh position={[-2.5, 0.7, -4.5]} castShadow>
          <boxGeometry args={[0.5, 0.4, 0.3]} />
          <meshStandardMaterial color="#ffffff" roughness={0.6} />
        </mesh>
      </RigidBody>

      {/* BATHTUB - Right side of bathroom */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Bathtub outer shell */}
        <mesh position={[2.5, 0.3, -5]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 0.6, 0.8]} />
          <meshStandardMaterial color="#ffffff" roughness={0.5} />
        </mesh>
        {/* Bathtub inner basin */}
        <mesh position={[2.5, 0.45, -5]} castShadow>
          <boxGeometry args={[1.3, 0.3, 0.7]} />
          <meshStandardMaterial color="#e0e0e0" roughness={0.4} />
        </mesh>
      </RigidBody>

      {/* SINK - Center wall, between toilet and bathtub */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Sink basin */}
        <mesh position={[0, 0.8, -6.5]} castShadow>
          <boxGeometry args={[0.6, 0.2, 0.4]} />
          <meshStandardMaterial color="#ffffff" roughness={0.5} />
        </mesh>
        {/* Sink counter/vanity */}
        <mesh position={[0, 0.65, -6.5]} castShadow receiveShadow>
          <boxGeometry args={[0.8, 0.3, 0.5]} />
          <meshStandardMaterial color="#ffffff" roughness={0.6} />
        </mesh>
        {/* Faucet */}
        <mesh position={[0, 0.95, -6.5]} castShadow>
          <boxGeometry args={[0.1, 0.3, 0.1]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.3} metalness={0.8} />
        </mesh>
      </RigidBody>

      {/* MIRROR - Above sink */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 1.3, -6.6]} castShadow>
          <boxGeometry args={[0.7, 0.5, 0.05]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.8} />
        </mesh>
      </RigidBody>
    </>
  );
}
