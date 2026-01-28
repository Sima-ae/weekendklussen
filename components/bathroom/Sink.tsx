'use client';

import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { Plane, Raycaster, Vector2, Vector3 as ThreeVector3 } from 'three';

interface SinkProps {
  position: Vector3 | [number, number, number];
}

export function Sink({ position: _position }: SinkProps) {
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
    <group position={[-3, 1, 2]}>
      <RigidBody
        ref={rigidBodyRef}
        type="fixed"
        colliders="cuboid"
        position={[0, 0, 0]}
      >
        <group {...(bind() as any)}>
          {/* Vanity/Countertop - more detailed */}
          <mesh castShadow receiveShadow position={[0, 0.1, 0]}>
            <boxGeometry args={[1.4, 0.12, 0.65]} />
            <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.05} />
          </mesh>
          
          {/* Countertop edge detail */}
          <mesh castShadow position={[0, 0.16, 0.325]}>
            <boxGeometry args={[1.4, 0.02, 0.02]} />
            <meshStandardMaterial color="#f3f4f6" roughness={0.4} />
          </mesh>
          
          {/* Vanity cabinet */}
          <mesh castShadow receiveShadow position={[0, -0.15, 0]}>
            <boxGeometry args={[1.4, 0.5, 0.55]} />
            <meshStandardMaterial color="#f8f9fa" roughness={0.6} metalness={0.05} />
          </mesh>
          
          {/* Cabinet door - left */}
          <mesh castShadow position={[-0.35, -0.15, 0.28]}>
            <boxGeometry args={[0.65, 0.48, 0.02]} />
            <meshStandardMaterial color="#e9ecef" roughness={0.5} />
          </mesh>
          
          {/* Cabinet door - right */}
          <mesh castShadow position={[0.35, -0.15, 0.28]}>
            <boxGeometry args={[0.65, 0.48, 0.02]} />
            <meshStandardMaterial color="#e9ecef" roughness={0.5} />
          </mesh>
          
          {/* Cabinet handles */}
          {[-0.35, 0.35].map((x, i) => (
            <mesh key={i} castShadow position={[x, -0.15, 0.29]}>
              <cylinderGeometry args={[0.015, 0.015, 0.08, 16]} />
              <meshStandardMaterial color="#6b7280" metalness={0.7} roughness={0.3} />
            </mesh>
          ))}

          {/* Sink basin - more realistic shape */}
          <mesh receiveShadow position={[0, 0.05, 0]}>
            <cylinderGeometry args={[0.32, 0.38, 0.18, 32]} />
            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.2} />
          </mesh>
          
          {/* Sink inner basin */}
          <mesh receiveShadow position={[0, 0.08, 0]}>
            <cylinderGeometry args={[0.3, 0.36, 0.16, 32]} />
            <meshStandardMaterial color="#f0f9ff" roughness={0.15} metalness={0.25} />
          </mesh>

          {/* Sink overflow ring - more detailed */}
          <mesh castShadow position={[0, 0.15, -0.05]}>
            <torusGeometry args={[0.33, 0.012, 16, 32]} />
            <meshStandardMaterial color="#9ca3af" metalness={0.6} roughness={0.3} />
          </mesh>
          
          {/* Overflow opening */}
          <mesh castShadow position={[0, 0.12, -0.1]}>
            <boxGeometry args={[0.08, 0.06, 0.02]} />
            <meshStandardMaterial color="#6b7280" metalness={0.5} roughness={0.4} />
          </mesh>

          {/* Faucet base - more detailed */}
          <mesh castShadow position={[0, 0.22, 0.2]}>
            <cylinderGeometry args={[0.05, 0.05, 0.12, 16]} />
            <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
          </mesh>
          
          {/* Faucet body */}
          <mesh castShadow position={[0, 0.28, 0.2]}>
            <cylinderGeometry args={[0.04, 0.04, 0.08, 16]} />
            <meshStandardMaterial color="#3b82f6" metalness={0.85} roughness={0.15} />
          </mesh>

          {/* Faucet spout - curved */}
          <mesh castShadow position={[0, 0.18, 0.15]}>
            <cylinderGeometry args={[0.025, 0.025, 0.12, 16]} />
            <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
          </mesh>
          
          {/* Spout tip */}
          <mesh castShadow position={[0, 0.12, 0.1]}>
            <cylinderGeometry args={[0.02, 0.02, 0.05, 16]} />
            <meshStandardMaterial color="#2563eb" metalness={0.9} roughness={0.1} />
          </mesh>

          {/* Hot water handle - left */}
          <group position={[-0.2, 0.2, 0.2]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.025, 0.025, 0.06, 16]} />
              <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
            </mesh>
            <mesh castShadow position={[0, 0.03, 0]}>
              <boxGeometry args={[0.05, 0.02, 0.02]} />
              <meshStandardMaterial color="#dc2626" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>

          {/* Cold water handle - right */}
          <group position={[0.2, 0.2, 0.2]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.025, 0.025, 0.06, 16]} />
              <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.3} />
            </mesh>
            <mesh castShadow position={[0, 0.03, 0]}>
              <boxGeometry args={[0.05, 0.02, 0.02]} />
              <meshStandardMaterial color="#2563eb" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        </group>
      </RigidBody>

      {/* Sink drain - P-trap will be in PlumbingPipes component */}
      <group position={[0, 0, 0]}>
        {/* Drain outlet from sink */}
        <mesh castShadow position={[0, -0.1, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.2, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
}
