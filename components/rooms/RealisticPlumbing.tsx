'use client';

export function RealisticPlumbing() {
  const pipeHeight = 0.3; // All pipes at same horizontal level

  return (
    <group>
      {/* MAIN WATER SUPPLY LINES - Horizontal along back wall */}
      {/* Main hot water supply line - horizontal */}
      <mesh castShadow position={[0, pipeHeight, -10]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 24, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Main cold water supply line - horizontal */}
      <mesh castShadow position={[0, pipeHeight, -9.8]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 24, 16]} />
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* MAIN DRAIN LINE - Horizontal along back wall */}
      <mesh castShadow position={[0, pipeHeight, -9.6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 24, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* KITCHEN CONNECTIONS - All horizontal */}
      {/* Hot water from main line to kitchen sink faucet - horizontal */}
      <mesh castShadow position={[-7, pipeHeight, -10]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 14, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Cold water from main line to kitchen sink faucet - horizontal */}
      <mesh castShadow position={[-7, pipeHeight, -9.8]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 14, 16]} />
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Kitchen sink drain - horizontal to main drain */}
      <mesh castShadow position={[-7, pipeHeight, -9.6]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 14, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* Kitchen sink P-trap - horizontal U-shape */}
      <group position={[-7, pipeHeight, 3]}>
        <mesh castShadow position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.2, 16]} />
          <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh castShadow position={[0.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.1, 0.03, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh castShadow position={[0.2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.2, 16]} />
          <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
        </mesh>
      </group>

      {/* BATHROOM CONNECTIONS - All horizontal */}
      {/* Hot water from kitchen area to bathroom sink faucet - horizontal */}
      <mesh castShadow position={[-7, pipeHeight, -6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 4, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Cold water from kitchen area to bathroom sink faucet - horizontal */}
      <mesh castShadow position={[-7, pipeHeight, -5.8]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 4, 16]} />
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Hot water from bathroom sink to bathtub faucet - horizontal */}
      <mesh castShadow position={[-4, pipeHeight, -6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 2, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Cold water from bathroom sink to bathtub faucet - horizontal */}
      <mesh castShadow position={[-4, pipeHeight, -5.8]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 2, 16]} />
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Bathroom sink drain - horizontal to bathtub drain */}
      <mesh castShadow position={[-7, pipeHeight, -5.6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 3, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* Bathroom sink P-trap - horizontal U-shape */}
      <group position={[-7, pipeHeight, -4]}>
        <mesh castShadow position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.2, 16]} />
          <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh castShadow position={[0.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.1, 0.03, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh castShadow position={[0.2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.2, 16]} />
          <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
        </mesh>
      </group>
      
      {/* Bathtub drain - horizontal connection from bathtub to sink drain */}
      <mesh castShadow position={[-4, pipeHeight, -5.6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 3, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* Bathtub drain connects to bathroom sink drain - horizontal */}
      <mesh castShadow position={[-4, pipeHeight, -4]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 3, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* Combined drain from bathroom to main drain - horizontal */}
      <mesh castShadow position={[-4, pipeHeight, -9.6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 4, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* TOILET CONNECTIONS - All horizontal */}
      {/* Cold water from main line to toilet - horizontal */}
      <mesh castShadow position={[7, pipeHeight, -9.8]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 4, 16]} />
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Toilet drain - horizontal to main drain */}
      <mesh castShadow position={[7, pipeHeight, -9.6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 7, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Pipe fittings - T-junctions - all at same horizontal level */}
      {[
        { pos: [-7, pipeHeight, -10], color: '#ef4444' },
        { pos: [-7, pipeHeight, -9.8], color: '#10b981' },
        { pos: [-7, pipeHeight, -9.6], color: '#f97316' },
        { pos: [-7, pipeHeight, -6], color: '#ef4444' },
        { pos: [-7, pipeHeight, -5.8], color: '#10b981' },
        { pos: [-7, pipeHeight, -5.6], color: '#f97316' },
        { pos: [-4, pipeHeight, -6], color: '#ef4444' },
        { pos: [-4, pipeHeight, -5.8], color: '#10b981' },
        { pos: [-4, pipeHeight, -5.6], color: '#f97316' },
        { pos: [-4, pipeHeight, -4], color: '#f97316' },
        { pos: [7, pipeHeight, -9.8], color: '#10b981' },
        { pos: [7, pipeHeight, -9.6], color: '#f97316' },
      ].map((fitting, i) => (
        <mesh key={i} castShadow position={fitting.pos as [number, number, number]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color={fitting.color} metalness={0.6} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}
