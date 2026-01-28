'use client';

import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { Plane, Raycaster, Vector2, Vector3 as ThreeVector3 } from 'three';

interface SofaProps {
  position: Vector3 | [number, number, number];
}

export function Sofa({ position }: SofaProps) {
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
          {/* L-shaped sofa base - more realistic */}
          <mesh castShadow receiveShadow position={[0, 0.25, 0]}>
            <boxGeometry args={[2.2, 0.5, 1.6]} />
            <meshStandardMaterial color="#ea580c" roughness={0.7} />
          </mesh>
          <mesh castShadow receiveShadow position={[-0.5, 0.25, 1.3]}>
            <boxGeometry args={[1.2, 0.5, 1.6]} />
            <meshStandardMaterial color="#ea580c" roughness={0.7} />
          </mesh>
          {/* Back cushions - more detailed */}
          <mesh castShadow receiveShadow position={[0, 0.65, -0.65]}>
            <boxGeometry args={[2.1, 0.6, 0.35]} />
            <meshStandardMaterial color="#c2410c" roughness={0.8} />
          </mesh>
          <mesh castShadow receiveShadow position={[-0.5, 0.65, 0.7]}>
            <boxGeometry args={[1.1, 0.6, 0.35]} />
            <meshStandardMaterial color="#c2410c" roughness={0.8} />
          </mesh>
          {/* Seat cushions - more realistic */}
          <mesh castShadow receiveShadow position={[0, 0.35, 0]}>
            <boxGeometry args={[2, 0.12, 1.5]} />
            <meshStandardMaterial color="#f97316" roughness={0.6} />
          </mesh>
          <mesh castShadow receiveShadow position={[-0.5, 0.35, 1.25]}>
            <boxGeometry args={[1, 0.12, 1.5]} />
            <meshStandardMaterial color="#f97316" roughness={0.6} />
          </mesh>
          {/* Cushion seams */}
          {[-0.6, 0, 0.6].map((x, i) => (
            <mesh key={i} castShadow position={[x, 0.35, 0]}>
              <boxGeometry args={[0.02, 0.12, 1.5]} />
              <meshStandardMaterial color="#c2410c" roughness={0.5} />
            </mesh>
          ))}
        </group>
      </RigidBody>
    </group>
  );
}
