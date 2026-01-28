'use client';

import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { Plane, Raycaster, Vector2, Vector3 as ThreeVector3 } from 'three';

interface RugProps {
  position: Vector3 | [number, number, number];
  size?: [number, number];
  color?: string;
}

export function Rug({ position, size = [2, 1.5], color = '#e5e7eb' }: RugProps) {
  const rigidBodyRef = useRef<any>(null);
  const { camera, size: viewSize, get } = useThree();
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
        const mouse = new Vector2((x / viewSize.width) * 2 - 1, -(y / viewSize.height) * 2 + 1);
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
          {/* Rug */}
          <mesh receiveShadow position={[0, 0.01, 0]}>
            <boxGeometry args={[size[0], 0.02, size[1]]} />
            <meshStandardMaterial color={color} roughness={0.9} />
          </mesh>
          {/* Rug border/pattern */}
          <mesh receiveShadow position={[0, 0.011, 0]}>
            <boxGeometry args={[size[0] - 0.1, 0.01, size[1] - 0.1]} />
            <meshStandardMaterial color={color === '#e5e7eb' ? '#d1d5db' : color} roughness={0.8} />
          </mesh>
        </group>
      </RigidBody>
    </group>
  );
}
