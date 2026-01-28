'use client';

import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { Plane, Raycaster, Vector2, Vector3 as ThreeVector3 } from 'three';

interface NightstandProps {
  position: Vector3 | [number, number, number];
}

export function Nightstand({ position }: NightstandProps) {
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
          {/* Nightstand body */}
          <mesh castShadow receiveShadow position={[0, 0.35, 0]}>
            <boxGeometry args={[0.5, 0.7, 0.4]} />
            <meshStandardMaterial color="#f3f4f6" roughness={0.6} metalness={0.05} />
          </mesh>
          {/* Drawer */}
          <mesh castShadow position={[0, 0.35, 0.21]}>
            <boxGeometry args={[0.48, 0.3, 0.02]} />
            <meshStandardMaterial color="#e9ecef" roughness={0.5} />
          </mesh>
          {/* Drawer handle */}
          <mesh castShadow position={[0, 0.35, 0.22]}>
            <cylinderGeometry args={[0.015, 0.015, 0.05, 16]} />
            <meshStandardMaterial color="#6b7280" metalness={0.7} roughness={0.3} />
          </mesh>
          {/* Lamp base */}
          <mesh castShadow position={[0, 0.7, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 0.15, 16]} />
            <meshStandardMaterial color="#374151" metalness={0.3} roughness={0.4} />
          </mesh>
          {/* Lamp shade */}
          <mesh castShadow receiveShadow position={[0, 0.85, 0]}>
            <coneGeometry args={[0.12, 0.2, 8]} />
            <meshStandardMaterial color="#f8f9fa" roughness={0.8} opacity={0.9} transparent />
          </mesh>
        </group>
      </RigidBody>
    </group>
  );
}
