'use client';

import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { Plane, Raycaster, Vector2, Vector3 as ThreeVector3 } from 'three';

interface KitchenSinkProps {
  position: Vector3 | [number, number, number];
}

export function KitchenSink({ position }: KitchenSinkProps) {
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
          {/* Countertop */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <boxGeometry args={[1.2, 0.1, 0.6]} />
            <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.05} />
          </mesh>
          {/* Sink basin - double sink */}
          {[-0.3, 0.3].map((x, i) => (
            <group key={i} position={[x, -0.05, 0]}>
              <mesh receiveShadow>
                <cylinderGeometry args={[0.25, 0.3, 0.2, 32]} />
                <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.2} />
              </mesh>
            </group>
          ))}
          {/* Faucet */}
          <mesh castShadow position={[0, 0.05, 0.2]}>
            <cylinderGeometry args={[0.04, 0.04, 0.15, 16]} />
            <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh castShadow position={[0, 0, 0.15]}>
            <cylinderGeometry args={[0.03, 0.03, 0.1, 16]} />
            <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      </RigidBody>
      {/* Drain outlet - horizontal connection point at pipe level */}
      <mesh castShadow position={[0, 0.3, 0]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.05, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.3} roughness={0.4} />
      </mesh>
      {/* Water supply connection points - horizontal at pipe level */}
      <mesh castShadow position={[0, 0.3, 0.2]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.05, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh castShadow position={[0, 0.3, 0.18]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.05, 16]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
}
