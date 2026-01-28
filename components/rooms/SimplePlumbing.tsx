'use client';

export function SimplePlumbing() {
  // Pipes embedded in floor - horizontal only, realistic AutoCAD style
  const pipeHeight = 0.08; // Embedded in floor
  
  // Sink positions:
  // Kitchen sink: [5, 0.95, 6]
  // Bathroom sink: [0, 0.8, -6.5]

  return (
    <group>
      {/* ============================================ */}
      {/* HOT WATER PIPES - Red, Horizontal Only */}
      {/* ============================================ */}
      
      {/* Main hot water line - horizontal along back wall (X-axis) */}
      <mesh castShadow position={[0, pipeHeight, -8]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 20, 8]} />
        <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Hot water: Main line → Kitchen sink (horizontal Z-axis) */}
      <mesh castShadow position={[5, pipeHeight, -8]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 14, 8]} />
        <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Hot water: Kitchen sink → Bathroom sink (horizontal X-axis, then Z-axis) */}
      {/* Horizontal section along X-axis from kitchen to center */}
      <mesh castShadow position={[2.5, pipeHeight, 6]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 5, 8]} />
        <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Horizontal section along Z-axis from center to bathroom */}
      <mesh castShadow position={[0, pipeHeight, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 13, 8]} />
        <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Hot water: Final connection to bathroom sink (horizontal X-axis) */}
      <mesh castShadow position={[0, pipeHeight, -6.5]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 2, 8]} />
        <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* ============================================ */}
      {/* COLD WATER PIPES - Blue, Horizontal Only */}
      {/* ============================================ */}
      
      {/* Main cold water line - horizontal along back wall (X-axis) */}
      <mesh castShadow position={[0, pipeHeight, -7.7]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 20, 8]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Cold water: Main line → Kitchen sink (horizontal Z-axis) */}
      <mesh castShadow position={[5, pipeHeight, -7.7]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 14, 8]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Cold water: Kitchen sink → Bathroom sink (horizontal X-axis, then Z-axis) */}
      {/* Horizontal section along X-axis from kitchen to center */}
      <mesh castShadow position={[2.5, pipeHeight, 5.7]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 5, 8]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Horizontal section along Z-axis from center to bathroom */}
      <mesh castShadow position={[0, pipeHeight, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 13, 8]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Cold water: Final connection to bathroom sink (horizontal X-axis) */}
      <mesh castShadow position={[0, pipeHeight, -6.2]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 2, 8]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* ============================================ */}
      {/* DRAIN PIPES - Orange, Horizontal Only */}
      {/* ============================================ */}
      
      {/* Main drain line - horizontal along back wall (X-axis) */}
      <mesh castShadow position={[0, pipeHeight, -7.4]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 20, 8]} />
        <meshStandardMaterial color="#f97316" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Drain: Kitchen sink → Main drain (horizontal Z-axis) */}
      <mesh castShadow position={[5, pipeHeight, -7.4]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 14, 8]} />
        <meshStandardMaterial color="#f97316" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Drain: Kitchen sink → Bathroom sink (horizontal X-axis, then Z-axis) */}
      {/* Horizontal section along X-axis from kitchen to center */}
      <mesh castShadow position={[2.5, pipeHeight, 5.4]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 5, 8]} />
        <meshStandardMaterial color="#f97316" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Horizontal section along Z-axis from center to bathroom */}
      <mesh castShadow position={[0, pipeHeight, -0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 13, 8]} />
        <meshStandardMaterial color="#f97316" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Drain: Final connection to bathroom sink (horizontal X-axis) */}
      <mesh castShadow position={[0, pipeHeight, -5.9]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
        <meshStandardMaterial color="#f97316" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Drain: Bathroom sink → Main drain (horizontal X-axis) */}
      <mesh castShadow position={[0, pipeHeight, -7.4]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.5, 8]} />
        <meshStandardMaterial color="#f97316" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* ============================================ */}
      {/* PIPE FITTINGS - T-junctions and connectors */}
      {/* ============================================ */}
      {[
        // Kitchen sink connections
        { pos: [5, pipeHeight, -8], color: '#ef4444', size: 0.06 },
        { pos: [5, pipeHeight, -7.7], color: '#3b82f6', size: 0.06 },
        { pos: [5, pipeHeight, -7.4], color: '#f97316', size: 0.08 },
        
        // Connection points (kitchen to bathroom routing)
        { pos: [2.5, pipeHeight, 6], color: '#ef4444', size: 0.06 },
        { pos: [2.5, pipeHeight, 5.7], color: '#3b82f6', size: 0.06 },
        { pos: [2.5, pipeHeight, 5.4], color: '#f97316', size: 0.08 },
        { pos: [0, pipeHeight, 0.5], color: '#ef4444', size: 0.06 },
        { pos: [0, pipeHeight, 0.2], color: '#3b82f6', size: 0.06 },
        { pos: [0, pipeHeight, -0.1], color: '#f97316', size: 0.08 },
        
        // Bathroom sink connections
        { pos: [0, pipeHeight, -6.5], color: '#ef4444', size: 0.06 },
        { pos: [0, pipeHeight, -6.2], color: '#3b82f6', size: 0.06 },
        { pos: [0, pipeHeight, -5.9], color: '#f97316', size: 0.08 },
        { pos: [0, pipeHeight, -7.4], color: '#f97316', size: 0.08 },
      ].map((fitting, i) => (
        <mesh key={i} castShadow position={fitting.pos as [number, number, number]}>
          <boxGeometry args={[fitting.size, fitting.size, fitting.size]} />
          <meshStandardMaterial color={fitting.color} metalness={0.7} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}
