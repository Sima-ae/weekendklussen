'use client';

export function MultiRoomPlumbing() {
  return (
    <group>
      {/* Main vertical stacks along exterior walls */}
      {/* Hot water (red) - left wall */}
      <mesh castShadow position={[-14.5, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 25, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Cold water (green) - left wall */}
      <mesh castShadow position={[-14.3, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 25, 16]} />
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Drainage (orange) - left wall */}
      <mesh castShadow position={[-14.1, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 25, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Right wall pipes */}
      <mesh castShadow position={[14.5, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 25, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh castShadow position={[14.3, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 25, 16]} />
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh castShadow position={[14.1, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 25, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* BATHROOM connections */}
      {/* Hot water to bathtub */}
      <mesh castShadow position={[-10, 1.5, -8]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 2, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Cold water to bathtub */}
      <mesh castShadow position={[-10, 1.3, -8]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 2, 16]} />
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Hot water to sink */}
      <mesh castShadow position={[-10, 1.5, -6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 4, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Cold water to sink */}
      <mesh castShadow position={[-10, 1.3, -6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 4, 16]} />
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Drainage from bathtub */}
      <mesh castShadow position={[-8, 0.5, -8]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 2, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* Drainage from sink */}
      <mesh castShadow position={[-8, 0.5, -6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 2, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* KITCHEN connections */}
      {/* Hot water to kitchen sink */}
      <mesh castShadow position={[-10, 1.5, 5]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 8, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Cold water to kitchen sink */}
      <mesh castShadow position={[-10, 1.3, 5]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 8, 16]} />
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Drainage from kitchen sink */}
      <mesh castShadow position={[-8, 0.5, 5]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 2, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* TOILET ROOM connections */}
      {/* Cold water to toilet */}
      <mesh castShadow position={[14.3, 1.5, -8]} rotation={[0, -Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 4, 16]} />
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Drainage from toilet */}
      <mesh castShadow position={[12, 0.5, -8]} rotation={[0, -Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Main drainage stack - center */}
      <mesh castShadow position={[0, 0, -12.5]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 3, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Connections to main stack */}
      {/* From bathroom */}
      <mesh castShadow position={[-6, 0.5, -8]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 4.5, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* From kitchen */}
      <mesh castShadow position={[-6, 0.5, 5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 17.5, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* From toilet */}
      <mesh castShadow position={[6, 0.5, -8]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 4.5, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* P-traps */}
      {/* Bathroom sink P-trap */}
      <group position={[-8, 0.3, -6]}>
        <mesh castShadow position={[0, -0.2, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.2, 16]} />
          <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh castShadow position={[0.1, -0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.1, 0.03, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
        </mesh>
      </group>

      {/* Kitchen sink P-trap */}
      <group position={[-8, 0.3, 5]}>
        <mesh castShadow position={[0, -0.2, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.2, 16]} />
          <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh castShadow position={[0.1, -0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.1, 0.03, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
}
