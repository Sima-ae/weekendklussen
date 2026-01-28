'use client';

import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { Plane, Raycaster, Vector2, Vector3 as ThreeVector3 } from 'three';

interface ConsoleTableProps {
  position: Vector3 | [number, number, number];
}

export function ConsoleTable({ position }: ConsoleTableProps) {
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
          {/* Console table top */}
          <mesh castShadow receiveShadow position={[0, 0.4, 0]}>
            <boxGeometry args={[2, 0.05, 0.4]} />
            <meshStandardMaterial color="#374151" roughness={0.5} metalness={0.1} />
          </mesh>
          {/* Console table body */}
          <mesh castShadow receiveShadow position={[0, 0.2, 0]}>
            <boxGeometry args={[2, 0.35, 0.35]} />
            <meshStandardMaterial color="#1f2937" roughness={0.6} metalness={0.1} />
          </mesh>
          {/* Decorative items - books */}
          {[-0.6, 0, 0.6].map((x, i) => (
            <mesh key={i} castShadow position={[x, 0.45, 0]}>
              <boxGeometry args={[0.15, 0.1, 0.2]} />
              <meshStandardMaterial color={['#ef4444', '#3b82f6', '#10b981'][i]} roughness={0.5} />
            </mesh>
          ))}
          {/* Plant */}
          <mesh castShadow position={[0.8, 0.45, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.3, 16]} />
            <meshStandardMaterial color="#92400e" roughness={0.6} />
          </mesh>
          <mesh castShadow position={[0.8, 0.65, 0]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#10b981" roughness={0.8} />
          </mesh>
        </group>
      </RigidBody>
    </group>
  );
}
