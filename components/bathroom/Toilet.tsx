'use client';

import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { Plane, Raycaster, Vector2, Vector3 as ThreeVector3 } from 'three';

interface ToiletProps {
  position: Vector3 | [number, number, number];
}

export function Toilet({ position: _position }: ToiletProps) {
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
        const mouse = new Vector2();
        mouse.x = (x / size.width) * 2 - 1;
        mouse.y = -(y / size.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(dragPlane, intersectionPoint);

        if (intersectionPoint) {
          rigidBodyRef.current.setNextKinematicTranslation({
            x: intersectionPoint.x,
            y: intersectionPoint.y,
            z: intersectionPoint.z,
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

  return (
    <group position={[-2, 0.5, 0]}>
      <RigidBody
        ref={rigidBodyRef}
        type="fixed"
        colliders="cuboid"
        position={[0, 0, 0]}
      >
        <group {...(bind() as any)}>
          {/* Toilet base - more detailed */}
          <mesh castShadow receiveShadow position={[0, 0.15, 0]}>
            <boxGeometry args={[0.5, 0.3, 0.45]} />
            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
          </mesh>
          
          {/* Base rounded edges */}
          <mesh castShadow receiveShadow position={[0, 0.15, 0.225]}>
            <cylinderGeometry args={[0.25, 0.25, 0.3, 32]} />
            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
          </mesh>

          {/* Toilet bowl - outer rim */}
          <mesh castShadow receiveShadow position={[0, 0.35, 0.15]}>
            <cylinderGeometry args={[0.28, 0.32, 0.15, 32]} />
            <meshStandardMaterial color="#ffffff" roughness={0.15} metalness={0.15} />
          </mesh>

          {/* Toilet bowl - inner basin */}
          <mesh receiveShadow position={[0, 0.35, 0.15]}>
            <cylinderGeometry args={[0.22, 0.26, 0.2, 32]} />
            <meshStandardMaterial color="#f0f9ff" roughness={0.1} metalness={0.2} />
          </mesh>

          {/* Bowl rim detail */}
          <mesh castShadow position={[0, 0.42, 0.15]}>
            <torusGeometry args={[0.25, 0.015, 16, 32]} />
            <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.2} />
          </mesh>

          {/* Toilet seat - more realistic */}
          <mesh castShadow receiveShadow position={[0, 0.48, 0.15]} rotation={[0.15, 0, 0]}>
            <torusGeometry args={[0.24, 0.025, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#f8f9fa" roughness={0.4} />
          </mesh>

          {/* Seat hinge */}
          <mesh castShadow position={[-0.2, 0.45, 0.15]}>
            <boxGeometry args={[0.04, 0.06, 0.04]} />
            <meshStandardMaterial color="#9ca3af" metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh castShadow position={[0.2, 0.45, 0.15]}>
            <boxGeometry args={[0.04, 0.06, 0.04]} />
            <meshStandardMaterial color="#9ca3af" metalness={0.7} roughness={0.3} />
          </mesh>

          {/* Toilet lid */}
          <mesh castShadow receiveShadow position={[0, 0.55, 0.15]} rotation={[0.15, 0, 0]}>
            <torusGeometry args={[0.24, 0.02, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
          </mesh>

          {/* Lid handle */}
          <mesh castShadow position={[0, 0.6, 0.15]}>
            <boxGeometry args={[0.06, 0.03, 0.02]} />
            <meshStandardMaterial color="#d1d5db" roughness={0.3} />
          </mesh>

          {/* Tank base */}
          <mesh castShadow receiveShadow position={[0, 0.7, -0.12]}>
            <boxGeometry args={[0.45, 0.35, 0.25]} />
            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
          </mesh>

          {/* Tank top */}
          <mesh castShadow receiveShadow position={[0, 0.95, -0.12]}>
            <boxGeometry args={[0.47, 0.05, 0.27]} />
            <meshStandardMaterial color="#f8f9fa" roughness={0.15} />
          </mesh>

          {/* Tank lid edge detail */}
          <mesh castShadow position={[0, 0.925, -0.12]}>
            <boxGeometry args={[0.45, 0.02, 0.25]} />
            <meshStandardMaterial color="#e5e7eb" roughness={0.2} />
          </mesh>

          {/* Flush handle - more detailed */}
          <group position={[0.22, 0.85, -0.12]}>
            <mesh castShadow>
              <boxGeometry args={[0.08, 0.12, 0.04]} />
              <meshStandardMaterial color="#6b7280" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh castShadow position={[0, 0.06, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.08, 16]} />
              <meshStandardMaterial color="#4b5563" metalness={0.9} roughness={0.1} />
            </mesh>
          </group>

          {/* Tank mounting bolts */}
          {[-0.15, 0.15].map((x, i) => (
            <mesh key={i} castShadow position={[x, 0.5, 0.1]}>
              <cylinderGeometry args={[0.015, 0.015, 0.3, 16]} />
              <meshStandardMaterial color="#9ca3af" metalness={0.6} roughness={0.3} />
            </mesh>
          ))}
        </group>
      </RigidBody>

      {/* Toilet drain outlet - connects to main stack */}
      <group position={[0, 0, 0]}>
        {/* Drain outlet from toilet base */}
        <mesh castShadow position={[0, 0.1, 0.25]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.2, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
}
