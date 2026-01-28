'use client';

import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { Plane, Raycaster, Vector2, Vector3 as ThreeVector3 } from 'three';

interface DiningTableProps {
  position: Vector3 | [number, number, number];
}

export function DiningTable({ position }: DiningTableProps) {
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
          {/* Table top - white, more realistic */}
          <mesh castShadow receiveShadow position={[0, 0.75, 0]}>
            <boxGeometry args={[1.6, 0.06, 0.9]} />
            <meshStandardMaterial color="#ffffff" roughness={0.4} metalness={0.05} />
          </mesh>
          {/* Table edge */}
          <mesh castShadow position={[0, 0.78, 0]}>
            <boxGeometry args={[1.62, 0.02, 0.92]} />
            <meshStandardMaterial color="#f3f4f6" roughness={0.3} />
          </mesh>
          {/* Table legs - white */}
          {[
            [-0.6, -0.35], [0.6, -0.35],
            [-0.6, 0.35], [0.6, 0.35]
          ].map(([x, z], i) => (
            <mesh key={i} castShadow position={[x ?? 0, 0.375, z ?? 0]}>
              <cylinderGeometry args={[0.04, 0.04, 0.75, 16]} />
              <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
            </mesh>
          ))}
        </group>
      </RigidBody>
      {/* Chairs - white to match table */}
      {[0, Math.PI / 2, Math.PI, -Math.PI / 2].map((rot, i) => (
        <group key={i} position={[
          Math.cos(rot) * 0.9,
          0,
          Math.sin(rot) * 0.7
        ]} rotation={[0, rot, 0]}>
          {/* Chair back */}
          <mesh castShadow position={[0, 0.5, 0.15]}>
            <boxGeometry args={[0.42, 0.7, 0.05]} />
            <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
          </mesh>
          {/* Chair seat */}
          <mesh castShadow position={[0, 0.4, 0]}>
            <boxGeometry args={[0.42, 0.05, 0.42]} />
            <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
          </mesh>
          {/* Chair legs */}
          {[-0.15, 0.15].map((x, j) =>
            [-0.15, 0.15].map((z, k) => (
              <mesh key={`${j}-${k}`} castShadow position={[x, 0.2, z]}>
                <cylinderGeometry args={[0.02, 0.02, 0.4, 16]} />
                <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
              </mesh>
            ))
          )}
        </group>
      ))}
    </group>
  );
}
