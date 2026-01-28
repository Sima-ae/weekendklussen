'use client';

import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { Plane, Raycaster, Vector2, Vector3 as ThreeVector3 } from 'three';

interface WardrobeProps {
  position: Vector3 | [number, number, number];
}

export function Wardrobe({ position }: WardrobeProps) {
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
          {/* Wardrobe body */}
          <mesh castShadow receiveShadow position={[0, 1, 0]}>
            <boxGeometry args={[1.2, 2, 0.6]} />
            <meshStandardMaterial color="#f3f4f6" roughness={0.6} metalness={0.05} />
          </mesh>
          {/* Doors */}
          {[-0.3, 0.3].map((x, i) => (
            <mesh key={i} castShadow position={[x, 1, 0.31]}>
              <boxGeometry args={[0.55, 1.9, 0.02]} />
              <meshStandardMaterial color="#e9ecef" roughness={0.5} />
            </mesh>
          ))}
          {/* Handles */}
          {[-0.3, 0.3].map((x, i) => (
            <mesh key={i} castShadow position={[x, 1, 0.32]}>
              <cylinderGeometry args={[0.015, 0.015, 0.05, 16]} />
              <meshStandardMaterial color="#6b7280" metalness={0.7} roughness={0.3} />
            </mesh>
          ))}
        </group>
      </RigidBody>
    </group>
  );
}
