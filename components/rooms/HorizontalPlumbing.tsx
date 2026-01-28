'use client';

export function HorizontalPlumbing() {
  const pipeHeight = 0.3; // All pipes at same horizontal level - STRICTLY HORIZONTAL

  // Calculate absolute positions based on room positions and fixture positions
  // Kitchen at [-7, 0, 4], KitchenSink at [-1, 0.9, 0] relative = [-8, 0.9, 4] absolute
  // Bathroom at [-7, 0, -6], Sink at [-2, 1, 1] relative = [-9, 1, -5] absolute
  // Bathroom at [-7, 0, -6], Bathtub at [2, 0.5, -1] relative = [-5, 0.5, -7] absolute
  // ToiletRoom at [7, 0, -6], Toilet at [0, 0.5, 0] relative = [7, 0.5, -6] absolute

  return (
    <group>
      {/* ============================================ */}
      {/* MAIN WATER SUPPLY LINES - Run along back wall */}
      {/* ============================================ */}
      
      {/* Main HOT water supply line - horizontal along back wall (X-axis) */}
      <mesh castShadow position={[0, pipeHeight, -10]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 24, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Main COLD water supply line - horizontal parallel to hot (X-axis) */}
      <mesh castShadow position={[0, pipeHeight, -9.8]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 24, 16]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Main DRAIN line - horizontal along back wall (X-axis) */}
      <mesh castShadow position={[0, pipeHeight, -9.6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 24, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* ============================================ */}
      {/* KITCHEN SINK CONNECTIONS */}
      {/* Kitchen sink at approximately [-8, 0.9, 4] */}
      {/* ============================================ */}
      
      {/* HOT water: Main line → Kitchen sink faucet (horizontal Z-axis) */}
      <mesh castShadow position={[-8, pipeHeight, -10]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 14, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* COLD water: Main line → Kitchen sink faucet (horizontal Z-axis) */}
      <mesh castShadow position={[-8, pipeHeight, -9.8]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 14, 16]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* DRAIN: Kitchen sink → Main drain (horizontal Z-axis) */}
      <mesh castShadow position={[-8, pipeHeight, -9.6]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 14, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* ============================================ */}
      {/* BATHROOM SINK CONNECTIONS */}
      {/* Bathroom sink at approximately [-9, 1, -5] */}
      {/* ============================================ */}
      
      {/* HOT water: Main line → Bathroom sink faucet (horizontal X-axis) */}
      <mesh castShadow position={[-9, pipeHeight, -6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 4, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* COLD water: Main line → Bathroom sink faucet (horizontal X-axis) */}
      <mesh castShadow position={[-9, pipeHeight, -5.8]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 4, 16]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* DRAIN: Bathroom sink → Bathtub drain connection (horizontal X-axis) */}
      <mesh castShadow position={[-9, pipeHeight, -5.6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 4, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* ============================================ */}
      {/* BATHTUB CONNECTIONS */}
      {/* Bathtub at approximately [-5, 0.5, -7] */}
      {/* ============================================ */}
      
      {/* HOT water: Bathroom sink → Bathtub faucet (horizontal X-axis) */}
      <mesh castShadow position={[-5, pipeHeight, -6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 4, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* COLD water: Bathroom sink → Bathtub faucet (horizontal X-axis) */}
      <mesh castShadow position={[-5, pipeHeight, -5.8]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 4, 16]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* DRAIN: Bathtub → Bathroom sink drain connection (horizontal X-axis) */}
      <mesh castShadow position={[-5, pipeHeight, -5.6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 4, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>
      
      {/* DRAIN: Combined bathroom drains (sink + bathtub) → Main drain (horizontal X-axis) */}
      <mesh castShadow position={[-5, pipeHeight, -9.6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 5, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* ============================================ */}
      {/* TOILET CONNECTIONS */}
      {/* Toilet at approximately [7, 0.5, -6] */}
      {/* ============================================ */}
      
      {/* COLD water: Main line → Toilet supply (horizontal X-axis) */}
      <mesh castShadow position={[7, pipeHeight, -9.8]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 4, 16]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* DRAIN: Toilet → Main drain (horizontal X-axis) */}
      <mesh castShadow position={[7, pipeHeight, -9.6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 7, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* ============================================ */}
      {/* PIPE FITTINGS - T-junctions and connectors */}
      {/* ============================================ */}
      {[
        // Kitchen sink connections
        { pos: [-8, pipeHeight, -10], color: '#ef4444', label: 'Kitchen Hot T' },
        { pos: [-8, pipeHeight, -9.8], color: '#3b82f6', label: 'Kitchen Cold T' },
        { pos: [-8, pipeHeight, -9.6], color: '#f97316', label: 'Kitchen Drain T' },
        
        // Bathroom sink connections
        { pos: [-9, pipeHeight, -6], color: '#ef4444', label: 'Bathroom Sink Hot T' },
        { pos: [-9, pipeHeight, -5.8], color: '#3b82f6', label: 'Bathroom Sink Cold T' },
        { pos: [-9, pipeHeight, -5.6], color: '#f97316', label: 'Bathroom Sink Drain T' },
        
        // Bathtub connections
        { pos: [-5, pipeHeight, -6], color: '#ef4444', label: 'Bathtub Hot T' },
        { pos: [-5, pipeHeight, -5.8], color: '#3b82f6', label: 'Bathtub Cold T' },
        { pos: [-5, pipeHeight, -5.6], color: '#f97316', label: 'Bathtub Drain T' },
        { pos: [-5, pipeHeight, -9.6], color: '#f97316', label: 'Bathroom Drain Merge' },
        
        // Toilet connections
        { pos: [7, pipeHeight, -9.8], color: '#3b82f6', label: 'Toilet Cold T' },
        { pos: [7, pipeHeight, -9.6], color: '#f97316', label: 'Toilet Drain T' },
      ].map((fitting, i) => (
        <mesh key={i} castShadow position={fitting.pos as [number, number, number]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color={fitting.color} metalness={0.6} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}
