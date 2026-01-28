'use client';

import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { Plane, Raycaster, Vector2, Vector3 as ThreeVector3 } from 'three';

interface BathtubProps {
  position: Vector3 | [number, number, number];
}

export function Bathtub({ position: _position }: BathtubProps) {
  const rigidBodyRef = useRef<any>(null);
  const { camera, size, get } = useThree();
  const dragPlane = new Plane(new ThreeVector3(0, 1, 0), 0);
  const intersectionPoint = new ThreeVector3();
  const raycaster = new Raycaster();

  const bind = useDrag(
    ({ offset: [x, y], first, last, event }) => {
      if (!rigidBodyRef.current) return;

      if (first) {
        const currentPos = rigidBodyRef.current.translation();
        dragPlane.constant = -currentPos.y;
        const state = get();
        try {
          if (state.controls && typeof state.controls !== 'boolean' && typeof state.controls === 'object' && state.controls !== null && 'enabled' in state.controls) {
            (state.controls as any).enabled = false;
          }
        } catch (e) {
          // Ignore errors when setting controls
        }
        event?.stopPropagation();
      }

      if (!last) {
        const mouse = new Vector2();
        mouse.x = (x / size.width) * 2 - 1;
        mouse.y = -(y / size.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(dragPlane, intersectionPoint);

        if (intersectionPoint) {
          rigidBodyRef.current.setNextKinematicTranslation({
            x: intersectionPoint.x,
            y: intersectionPoint.y,
            z: intersectionPoint.z,
          });
        }
      } else {
        const state = get();
        try {
          if (state.controls && typeof state.controls !== 'boolean' && typeof state.controls === 'object' && state.controls !== null && 'enabled' in state.controls) {
            (state.controls as any).enabled = true;
          }
        } catch (e) {
          // Ignore errors when setting controls
        }
      }
    },
    { pointerEvents: true, filterTaps: true, threshold: 3 }
  );

  return (
    <group position={[2, 0.5, -3]}>
      <RigidBody
        ref={rigidBodyRef}
        type="fixed"
        colliders="cuboid"
        position={[0, 0, 0]}
      >
        <group {...(bind() as any)}>
          {/* Bathtub outer shell - more detailed */}
          <mesh castShadow receiveShadow position={[0, 0.3, 0]}>
            <boxGeometry args={[1.6, 0.65, 0.85]} />
            <meshStandardMaterial color="#e5e7eb" roughness={0.6} />
          </mesh>
          
          {/* Bathtub rim */}
          <mesh castShadow position={[0, 0.625, 0]}>
            <boxGeometry args={[1.62, 0.05, 0.87]} />
            <meshStandardMaterial color="#d1d5db" roughness={0.5} metalness={0.1} />
          </mesh>

          {/* Bathtub inner basin - more realistic shape */}
          <mesh receiveShadow position={[0, 0.35, 0]}>
            <boxGeometry args={[1.5, 0.55, 0.75]} />
            <meshStandardMaterial color="#dbeafe" roughness={0.4} metalness={0.15} />
          </mesh>
          
          {/* Inner basin bottom - sloped */}
          <mesh receiveShadow position={[0, 0.1, 0.1]}>
            <boxGeometry args={[1.48, 0.2, 0.73]} />
            <meshStandardMaterial color="#bfdbfe" roughness={0.35} metalness={0.2} />
          </mesh>

          {/* Water surface */}
          <mesh receiveShadow position={[0, 0.4, 0]}>
            <boxGeometry args={[1.48, 0.1, 0.73]} />
            <meshStandardMaterial color="#3b82f6" opacity={0.6} transparent roughness={0.1} metalness={0.3} />
          </mesh>

          {/* Shower head - more detailed */}
          <group position={[0, 1.2, 0]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.16, 0.16, 0.12, 16]} />
              <meshStandardMaterial color="#9ca3af" metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Shower head face with holes */}
            <mesh castShadow position={[0, 0.06, 0]}>
              <cylinderGeometry args={[0.14, 0.14, 0.02, 16]} />
              <meshStandardMaterial color="#6b7280" metalness={0.9} roughness={0.1} />
            </mesh>
            
            {/* Shower arm connection */}
            <mesh castShadow position={[0, -0.1, 0]}>
              <cylinderGeometry args={[0.04, 0.04, 0.2, 16]} />
              <meshStandardMaterial color="#9ca3af" metalness={0.7} roughness={0.3} />
            </mesh>
          </group>

          {/* Shower arm - vertical pipe */}
          <mesh castShadow position={[0, 0.9, 0]}>
            <cylinderGeometry args={[0.035, 0.035, 0.3, 16]} />
            <meshStandardMaterial color="#9ca3af" metalness={0.7} roughness={0.3} />
          </mesh>
          
          {/* Shower wall mount */}
          <mesh castShadow position={[0, 0.75, 0.425]}>
            <boxGeometry args={[0.1, 0.15, 0.05]} />
            <meshStandardMaterial color="#6b7280" metalness={0.6} roughness={0.4} />
          </mesh>

          {/* Faucet - more detailed */}
          <group position={[0.4, 0.6, 0]}>
            {/* Faucet base */}
            <mesh castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.2, 16]} />
              <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Faucet body */}
            <mesh castShadow position={[0, 0.1, 0]}>
              <cylinderGeometry args={[0.025, 0.025, 0.1, 16]} />
              <meshStandardMaterial color="#3b82f6" metalness={0.85} roughness={0.15} />
            </mesh>
            
            {/* Faucet spout */}
            <mesh castShadow position={[0, 0.05, 0.1]}>
              <cylinderGeometry args={[0.025, 0.025, 0.12, 16]} />
              <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Spout tip */}
            <mesh castShadow position={[0, 0, 0.16]}>
              <cylinderGeometry args={[0.02, 0.02, 0.05, 16]} />
              <meshStandardMaterial color="#2563eb" metalness={0.9} roughness={0.1} />
            </mesh>
          </group>

          {/* Bathtub overflow drain */}
          <mesh castShadow position={[0.5, 0.5, 0.35]}>
            <boxGeometry args={[0.08, 0.1, 0.02]} />
            <meshStandardMaterial color="#6b7280" metalness={0.5} roughness={0.4} />
          </mesh>
        </group>
      </RigidBody>

      {/* Bathtub drain outlet - connects to main stack */}
      <group position={[0, 0, 0]}>
        {/* Drain outlet from bathtub */}
        <mesh castShadow position={[0, -0.1, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.2, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
}
