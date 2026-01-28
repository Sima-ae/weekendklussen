'use client';

import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { Plane, Raycaster, Vector2, Vector3 as ThreeVector3 } from 'three';

interface StoveProps {
  position: Vector3 | [number, number, number];
}

export function Stove({ position }: StoveProps) {
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
        const mouse = new Vector2((x / size.width) * 2 - 1, -(y / size.height) * 2 + 1);
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(dragPlane, intersectionPoint);
        if (intersectionPoint) {
          rigidBodyRef.current.setNextKinematicTranslation({
            x: intersectionPoint.x, y: intersectionPoint.y, z: intersectionPoint.z,
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

  const pos = Array.isArray(position) ? position : [position.x, position.y, position.z];

  return (
    <group position={pos as [number, number, number]}>
      <RigidBody ref={rigidBodyRef} type="fixed" colliders="cuboid">
        <group {...(bind() as any)}>
          {/* Stove body - more realistic */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <boxGeometry args={[0.9, 0.95, 0.65]} />
            <meshStandardMaterial color="#111827" roughness={0.3} metalness={0.4} />
          </mesh>
          {/* Stove top - stainless steel */}
          <mesh castShadow position={[0, 0.475, 0]}>
            <boxGeometry args={[0.92, 0.06, 0.67]} />
            <meshStandardMaterial color="#6b7280" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Burners - 4 burners */}
          {[-0.25, 0.25].map((x, i) =>
            [-0.2, 0.2].map((z, j) => (
              <group key={`${i}-${j}`} position={[x, 0.48, z]}>
                <mesh castShadow>
                  <cylinderGeometry args={[0.08, 0.08, 0.02, 16]} />
                  <meshStandardMaterial color="#4b5563" metalness={0.7} roughness={0.2} />
                </mesh>
                <mesh castShadow position={[0, 0.01, 0]}>
                  <torusGeometry args={[0.06, 0.01, 8, 16]} />
                  <meshStandardMaterial color="#6b7280" metalness={0.8} roughness={0.1} />
                </mesh>
              </group>
            ))
          )}
          {/* Oven door */}
          <mesh castShadow position={[0, -0.2, 0.31]}>
            <boxGeometry args={[0.75, 0.5, 0.02]} />
            <meshStandardMaterial color="#1f2937" roughness={0.5} metalness={0.2} />
          </mesh>
          {/* Oven handle */}
          <mesh castShadow position={[0, -0.2, 0.33]}>
            <boxGeometry args={[0.3, 0.02, 0.02]} />
            <meshStandardMaterial color="#6b7280" metalness={0.7} roughness={0.3} />
          </mesh>
          {/* Control panel */}
          <mesh castShadow position={[0, 0.5, 0.31]}>
            <boxGeometry args={[0.7, 0.08, 0.02]} />
            <meshStandardMaterial color="#111827" roughness={0.3} metalness={0.1} />
          </mesh>
        </group>
      </RigidBody>
    </group>
  );
}
