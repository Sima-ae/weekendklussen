'use client';

import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { Plane, Raycaster, Vector2, Vector3 as ThreeVector3 } from 'three';

interface EnhancedToiletProps {
  position: Vector3 | [number, number, number];
}

export function EnhancedToilet({ position }: EnhancedToiletProps) {
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
          {/* Base - more realistic */}
          <mesh castShadow receiveShadow position={[0, 0.15, 0]}>
            <boxGeometry args={[0.55, 0.32, 0.48]} />
            <meshStandardMaterial color="#ffffff" roughness={0.15} metalness={0.15} />
          </mesh>
          <mesh castShadow receiveShadow position={[0, 0.15, 0.24]}>
            <cylinderGeometry args={[0.26, 0.26, 0.32, 32]} />
            <meshStandardMaterial color="#ffffff" roughness={0.15} metalness={0.15} />
          </mesh>
          {/* Bowl */}
          <mesh castShadow receiveShadow position={[0, 0.35, 0.15]}>
            <cylinderGeometry args={[0.28, 0.32, 0.15, 32]} />
            <meshStandardMaterial color="#ffffff" roughness={0.15} metalness={0.15} />
          </mesh>
          <mesh receiveShadow position={[0, 0.35, 0.15]}>
            <cylinderGeometry args={[0.22, 0.26, 0.2, 32]} />
            <meshStandardMaterial color="#f0f9ff" roughness={0.1} metalness={0.2} />
          </mesh>
          <mesh castShadow position={[0, 0.42, 0.15]}>
            <torusGeometry args={[0.25, 0.015, 16, 32]} />
            <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.2} />
          </mesh>
          {/* Seat */}
          <mesh castShadow receiveShadow position={[0, 0.48, 0.15]} rotation={[0.15, 0, 0]}>
            <torusGeometry args={[0.24, 0.025, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#f8f9fa" roughness={0.4} />
          </mesh>
          {/* Lid */}
          <mesh castShadow receiveShadow position={[0, 0.55, 0.15]} rotation={[0.15, 0, 0]}>
            <torusGeometry args={[0.24, 0.02, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
          </mesh>
          {/* Tank */}
          <mesh castShadow receiveShadow position={[0, 0.7, -0.12]}>
            <boxGeometry args={[0.45, 0.35, 0.25]} />
            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
          </mesh>
          <mesh castShadow receiveShadow position={[0, 0.95, -0.12]}>
            <boxGeometry args={[0.47, 0.05, 0.27]} />
            <meshStandardMaterial color="#f8f9fa" roughness={0.15} />
          </mesh>
          {/* Flush handle */}
          <group position={[0.22, 0.85, -0.12]}>
            <mesh castShadow>
              <boxGeometry args={[0.08, 0.12, 0.04]} />
              <meshStandardMaterial color="#6b7280" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        </group>
      </RigidBody>
      {/* Drain outlet - horizontal connection point at pipe level */}
      <mesh castShadow position={[0, 0.3, 0.25]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.05, 16]} />
        <meshStandardMaterial color="#f97316" metalness={0.3} roughness={0.4} />
      </mesh>
      {/* Cold water supply connection point - horizontal at pipe level */}
      <mesh castShadow position={[0, 0.3, 0.2]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.05, 16]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
}
