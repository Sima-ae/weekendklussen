'use client';

import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { Plane, Raycaster, Vector2, Vector3 as ThreeVector3 } from 'three';

interface TVProps {
  position: Vector3 | [number, number, number];
}

export function TV({ position }: TVProps) {
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
          {/* TV screen - more realistic */}
          <mesh castShadow position={[0, 0, 0]}>
            <boxGeometry args={[1.8, 1, 0.08]} />
            <meshStandardMaterial color="#000000" roughness={0.05} metalness={0.2} />
          </mesh>
          {/* Screen bezel - thinner */}
          <mesh castShadow position={[0, 0, -0.05]}>
            <boxGeometry args={[1.82, 1.02, 0.02]} />
            <meshStandardMaterial color="#111827" roughness={0.2} metalness={0.3} />
          </mesh>
          {/* TV stand - more detailed */}
          <mesh castShadow position={[0, -0.55, 0]}>
            <boxGeometry args={[1.6, 0.1, 0.4]} />
            <meshStandardMaterial color="#1f2937" roughness={0.4} metalness={0.2} />
          </mesh>
          {/* Stand legs */}
          {[-0.7, 0.7].map((x, i) => (
            <mesh key={i} castShadow position={[x, -0.6, 0]}>
              <boxGeometry args={[0.05, 0.1, 0.4]} />
              <meshStandardMaterial color="#111827" roughness={0.3} metalness={0.3} />
            </mesh>
          ))}
        </group>
      </RigidBody>
    </group>
  );
}
