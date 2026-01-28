'use client';

import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { Plane, Raycaster, Vector2, Vector3 as ThreeVector3 } from 'three';

interface BedProps {
  position: Vector3 | [number, number, number];
}

export function Bed({ position }: BedProps) {
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
          {/* Bed frame - more realistic */}
          <mesh castShadow receiveShadow position={[0, 0.25, 0]}>
            <boxGeometry args={[2.1, 0.5, 1.9]} />
            <meshStandardMaterial color="#374151" roughness={0.6} metalness={0.2} />
          </mesh>
          {/* Mattress - more detailed */}
          <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
            <boxGeometry args={[2, 0.4, 1.8]} />
            <meshStandardMaterial color="#1f2937" roughness={0.8} />
          </mesh>
          {/* Bedding/duvet */}
          <mesh castShadow receiveShadow position={[0, 0.52, 0]}>
            <boxGeometry args={[1.95, 0.05, 1.75]} />
            <meshStandardMaterial color="#4b5563" roughness={0.7} />
          </mesh>
          {/* Pillows - more realistic */}
          {[-0.6, 0.6].map((x, i) => (
            <mesh key={i} castShadow receiveShadow position={[x, 0.75, 0.7]}>
              <boxGeometry args={[0.5, 0.2, 0.7]} />
              <meshStandardMaterial color={i === 0 ? "#fbbf24" : "#ffffff"} roughness={0.6} />
            </mesh>
          ))}
          {/* Headboard - more detailed */}
          <mesh castShadow position={[0, 0.85, 0.9]}>
            <boxGeometry args={[2.1, 0.7, 0.15]} />
            <meshStandardMaterial color="#1f2937" roughness={0.5} metalness={0.1} />
          </mesh>
          {/* Headboard slats detail */}
          {[-0.8, -0.4, 0, 0.4, 0.8].map((x, i) => (
            <mesh key={i} castShadow position={[x, 0.85, 0.98]}>
              <boxGeometry args={[0.15, 0.6, 0.02]} />
              <meshStandardMaterial color="#111827" roughness={0.4} />
            </mesh>
          ))}
        </group>
      </RigidBody>
    </group>
  );
}
