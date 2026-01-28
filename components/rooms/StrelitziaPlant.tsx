'use client';

import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';

interface StrelitziaPlantProps {
  position: Vector3 | [number, number, number];
  cornerRotation?: number; // Rotation in radians to point leaves inward (0 = no rotation)
}

export function StrelitziaPlant({ position, cornerRotation = 0 }: StrelitziaPlantProps) {
  const pos = Array.isArray(position) ? position : [position.x, position.y, position.z];

  return (
    <group position={pos as [number, number, number]} rotation={[0, cornerRotation, 0]}>
      <RigidBody type="fixed" colliders="cuboid">
        {/* Pot - cylindrical, neutral beige/brown */}
        <mesh castShadow receiveShadow position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.25, 0.22, 0.4, 32]} />
          <meshStandardMaterial color="#a0826d" roughness={0.8} metalness={0.1} />
        </mesh>
        {/* Pot rim */}
        <mesh castShadow position={[0, 0.4, 0]}>
          <torusGeometry args={[0.25, 0.02, 16, 32]} />
          <meshStandardMaterial color="#8b6f5e" roughness={0.7} />
        </mesh>
        {/* Pot base */}
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.05, 32]} />
          <meshStandardMaterial color="#7a5f4e" roughness={0.8} />
        </mesh>

        {/* Stems - taller, sturdier dark green to reddish-brown stems */}
        {[
          { x: -0.08, z: 0.05, height: 1.2, baseRadius: 0.04, topRadius: 0.035 },
          { x: 0.06, z: -0.04, height: 1.35, baseRadius: 0.042, topRadius: 0.037 },
          { x: 0.04, z: 0.08, height: 1.15, baseRadius: 0.038, topRadius: 0.033 },
          { x: -0.05, z: -0.06, height: 1.4, baseRadius: 0.045, topRadius: 0.04 },
          { x: 0.02, z: 0.03, height: 1.0, baseRadius: 0.032, topRadius: 0.028 },
        ].map((stem, i) => (
          <mesh key={`stem-${i}`} castShadow position={[stem.x, 0.4 + stem.height / 2, stem.z]}>
            <cylinderGeometry args={[stem.baseRadius, stem.topRadius, stem.height, 16]} />
            <meshStandardMaterial color={i < 2 ? "#3a4d1a" : "#4a5d23"} roughness={0.7} metalness={0.1} />
          </mesh>
        ))}

        {/* Leaves - more realistic with organic shapes, kept smaller to stay inside walls */}
        {[
          // Large tall leaves - main canopy (reduced size to stay inside)
          { x: -0.08, z: 0.08, y: 1.6, rotY: -0.2, rotZ: 0.08, rotX: 0.04, width: 0.4, length: 0.9, color: "#1e3a0f" },
          { x: 0.1, z: -0.06, y: 1.75, rotY: 0.3, rotZ: -0.12, rotX: -0.06, width: 0.42, length: 0.95, color: "#1f3d10" },
          { x: 0.06, z: 0.1, y: 1.55, rotY: -0.15, rotZ: 0.15, rotX: 0.08, width: 0.38, length: 0.85, color: "#1e3a0f" },
          { x: -0.07, z: -0.08, y: 1.85, rotY: 0.25, rotZ: -0.08, rotX: -0.04, width: 0.4, length: 0.9, color: "#1f3d10" },
          // Medium-large leaves
          { x: -0.04, z: 0.12, y: 1.4, rotY: -0.4, rotZ: 0.2, rotX: 0.1, width: 0.34, length: 0.75, color: "#203e11" },
          { x: 0.08, z: -0.1, y: 1.5, rotY: 0.4, rotZ: -0.15, rotX: -0.08, width: 0.36, length: 0.8, color: "#1e3a0f" },
          { x: 0.04, z: 0.08, y: 1.35, rotY: -0.3, rotZ: 0.25, rotX: 0.12, width: 0.32, length: 0.7, color: "#203e11" },
          { x: -0.06, z: -0.06, y: 1.45, rotY: 0.3, rotZ: -0.15, rotX: -0.1, width: 0.33, length: 0.72, color: "#1f3d10" },
          // Medium leaves
          { x: -0.07, z: 0, y: 1.2, rotY: 0.15, rotZ: 0.08, rotX: 0.06, width: 0.28, length: 0.65, color: "#223f12" },
          { x: 0.06, z: 0.04, y: 1.28, rotY: -0.25, rotZ: -0.12, rotX: -0.08, width: 0.29, length: 0.68, color: "#213e11" },
          { x: 0.02, z: -0.05, y: 1.15, rotY: 0.2, rotZ: 0.15, rotX: 0.08, width: 0.26, length: 0.6, color: "#223f12" },
          // Smaller/younger leaves
          { x: -0.05, z: 0.06, y: 1.0, rotY: -0.12, rotZ: 0.12, rotX: 0.04, width: 0.22, length: 0.5, color: "#244013" },
          { x: 0.03, z: 0.02, y: 1.05, rotY: 0.15, rotZ: -0.1, rotX: -0.06, width: 0.24, length: 0.55, color: "#234012" },
        ].map((leaf, i) => (
          <mesh
            key={`leaf-${i}`}
            castShadow
            position={[leaf.x, leaf.y, leaf.z]}
            rotation={[leaf.rotX || 0, leaf.rotY, leaf.rotZ]}
          >
            {/* More realistic leaf shape - using planeGeometry for organic oval shape */}
            <planeGeometry args={[leaf.width, leaf.length, 8, 16]} />
            <meshStandardMaterial 
              color={leaf.color} 
              roughness={0.4} 
              metalness={0.01}
              emissive="#0a1a05"
              emissiveIntensity={0.03}
              side={2} // DoubleSide for better visibility
            />
          </mesh>
        ))}

        {/* Leaf veins - more prominent venation patterns on larger leaves */}
        {[
          { x: -0.08, z: 0.08, y: 1.6, rotY: -0.2, rotZ: 0.08, rotX: 0.04, length: 0.75 },
          { x: 0.1, z: -0.06, y: 1.75, rotY: 0.3, rotZ: -0.12, rotX: -0.06, length: 0.8 },
          { x: 0.06, z: 0.1, y: 1.55, rotY: -0.15, rotZ: 0.15, rotX: 0.08, length: 0.7 },
          { x: -0.07, z: -0.08, y: 1.85, rotY: 0.25, rotZ: -0.08, rotX: -0.04, length: 0.75 },
          { x: -0.04, z: 0.12, y: 1.4, rotY: -0.4, rotZ: 0.2, rotX: 0.1, length: 0.6 },
          { x: 0.08, z: -0.1, y: 1.5, rotY: 0.4, rotZ: -0.15, rotX: -0.08, length: 0.65 },
        ].map((leaf, i) => (
          <mesh
            key={`vein-${i}`}
            castShadow
            position={[leaf.x, leaf.y + 0.01, leaf.z]}
            rotation={[leaf.rotX || 0, leaf.rotY, leaf.rotZ]}
          >
            <boxGeometry args={[0.01, 0.005, leaf.length]} />
            <meshStandardMaterial color="#2a5a15" roughness={0.3} />
          </mesh>
        ))}
        
        {/* Additional side veins for realism on largest leaves */}
        {[
          { x: -0.08, z: 0.08, y: 1.6, rotY: -0.2, rotZ: 0.08, rotX: 0.04 },
          { x: 0.1, z: -0.06, y: 1.75, rotY: 0.3, rotZ: -0.12, rotX: -0.06 },
        ].map((leaf, i) => (
          <group key={`side-veins-${i}`} position={[leaf.x, leaf.y + 0.01, leaf.z]} rotation={[leaf.rotX || 0, leaf.rotY, leaf.rotZ]}>
            {[-0.12, 0, 0.12].map((offset, j) => (
              <mesh key={j} castShadow position={[offset, 0, 0.25]}>
                <boxGeometry args={[0.006, 0.003, 0.3]} />
                <meshStandardMaterial color="#2a5a15" roughness={0.3} />
              </mesh>
            ))}
          </group>
        ))}
      </RigidBody>
    </group>
  );
}
