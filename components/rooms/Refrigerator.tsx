'use client';

import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { Plane, Raycaster, Vector2, Vector3 as ThreeVector3 } from 'three';

interface RefrigeratorProps {
  position: Vector3 | [number, number, number];
}

export function Refrigerator({ position }: RefrigeratorProps) {
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
          {/* Refrigerator body - more realistic */}
          <mesh castShadow receiveShadow position={[0, 0.95, 0]}>
            <boxGeometry args={[0.75, 1.9, 0.7]} />
            <meshStandardMaterial color="#ffffff" roughness={0.15} metalness={0.15} />
          </mesh>
          {/* Door - with frame detail */}
          <mesh castShadow position={[0, 0.95, 0.36]}>
            <boxGeometry args={[0.73, 1.88, 0.02]} />
            <meshStandardMaterial color="#f8f9fa" roughness={0.2} metalness={0.1} />
          </mesh>
          {/* Door frame */}
          <mesh castShadow position={[0, 0.95, 0.35]}>
            <boxGeometry args={[0.74, 1.89, 0.01]} />
            <meshStandardMaterial color="#e5e7eb" roughness={0.3} />
          </mesh>
          {/* Handle - more detailed */}
          <mesh castShadow position={[0.38, 0.95, 0.37]}>
            <boxGeometry args={[0.05, 0.35, 0.03]} />
            <meshStandardMaterial color="#4b5563" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Freezer section - visible separation */}
          <mesh castShadow position={[0, 1.75, 0.35]}>
            <boxGeometry args={[0.7, 0.05, 0.02]} />
            <meshStandardMaterial color="#d1d5db" roughness={0.4} />
          </mesh>
        </group>
      </RigidBody>
    </group>
  );
}
