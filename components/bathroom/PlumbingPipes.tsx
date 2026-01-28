'use client';

export function PlumbingPipes() {
  return (
    <group>
      {/* Main Vertical Drain/Vent Stack - Center of room */}
      <mesh castShadow position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 3, 16]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Toilet Drain Connection - Curved pipe from toilet to main stack */}
      <group position={[-2, 0, 0]}>
        {/* Horizontal section from toilet */}
        <mesh castShadow position={[1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.06, 0.06, 1.5, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
        {/* Curved elbow connection */}
        <mesh castShadow position={[1.5, 0, 0]}>
          <torusGeometry args={[0.06, 0.06, 8, 16, Math.PI / 2]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
        {/* Vertical drop to main stack */}
        <mesh castShadow position={[1.5, -0.5, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.5, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
      </group>

      {/* Sink P-Trap and Drainage */}
      <group position={[-3, 0.3, 2]}>
        {/* Vertical drain from sink */}
        <mesh castShadow position={[0, -0.1, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.2, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* P-Trap - vertical down section */}
        <mesh castShadow position={[0, -0.3, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.2, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* P-Trap U-shape - bottom curve (semicircle) */}
        <mesh castShadow position={[0.1, -0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.1, 0.04, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* P-Trap - vertical up section */}
        <mesh castShadow position={[0.2, -0.4, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.2, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* P-Trap horizontal section to main stack */}
        <mesh castShadow position={[1.1, -0.3, 0]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 2.2, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* Vertical connection to main stack */}
        <mesh castShadow position={[1.1, -0.1, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.2, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
      </group>

      {/* Loop Vent System - Rectangular loop above toilet (re-vent system) */}
      <group position={[0, 0, 0]}>
        {/* Horizontal branch from main stack at floor level (left side) */}
        <mesh castShadow position={[-1.5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 3, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* Vertical up from left horizontal branch */}
        <mesh castShadow position={[-1.5, 1, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 1, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* Horizontal above toilet (connecting left to right) */}
        <mesh castShadow position={[0, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 3, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* Vertical down from horizontal above toilet (right side) */}
        <mesh castShadow position={[1.5, 1, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 1, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* Horizontal back to main stack (right side, at floor level) */}
        <mesh castShadow position={[1.5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 1.5, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* Vertical connection back to main stack (higher up) */}
        <mesh castShadow position={[0, 1, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 1, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
      </group>

      {/* Bathtub/Shower Drain Connection */}
      <mesh castShadow position={[2, 0, -3]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 2, 16]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Pipe fittings - T-junctions and elbows */}
      {/* T-junction at main stack for toilet */}
      <mesh castShadow position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#2563eb" metalness={0.4} roughness={0.3} />
      </mesh>
      
      {/* T-junction at main stack for sink */}
      <mesh castShadow position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#2563eb" metalness={0.4} roughness={0.3} />
      </mesh>
      
      {/* T-junction at main stack for bathtub */}
      <mesh castShadow position={[0, 0.1, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#2563eb" metalness={0.4} roughness={0.3} />
      </mesh>

      {/* Elbow fittings */}
      {[
        { pos: [-2, 0, 0], rot: [0, 0, 0] },
        { pos: [1.5, -0.6, 2], rot: [0, 0, 0] },
        { pos: [-1.5, -1.5, 0], rot: [0, 0, 0] },
        { pos: [1.5, 0, 0], rot: [0, 0, 0] },
      ].map((fitting, i) => (
        <mesh key={i} castShadow position={fitting.pos as [number, number, number]} rotation={fitting.rot as [number, number, number]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#2563eb" metalness={0.4} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}
