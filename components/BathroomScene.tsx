'use client';

import { RigidBody } from '@react-three/rapier';
import { Toilet } from './bathroom/Toilet';
import { Bathtub } from './bathroom/Bathtub';
import { Sink } from './bathroom/Sink';
import { PlumbingPipes } from './bathroom/PlumbingPipes';
import { Walls } from './bathroom/Walls';

export function BathroomScene() {
  return (
    <>
      {/* Room structure */}
      <Walls />
      
      {/* Tiled Floor */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <boxGeometry args={[10, 10, 0.1]} />
          <meshStandardMaterial color="#f3f4f6" roughness={0.7} />
        </mesh>
        {/* Tile grid pattern */}
        {Array.from({ length: 10 }).map((_, i) =>
          Array.from({ length: 10 }).map((_, j) => (
            <mesh
              key={`${i}-${j}`}
              rotation={[-Math.PI / 2, 0, 0]}
              position={[-4.5 + i, 0.051, -4.5 + j]}
              receiveShadow
            >
              <boxGeometry args={[0.9, 0.9, 0.02]} />
              <meshStandardMaterial color="#ffffff" roughness={0.6} />
            </mesh>
          ))
        )}
        {/* Grout lines */}
        {Array.from({ length: 11 }).map((_, i) => (
          <mesh
            key={`h-${i}`}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[-5 + i, 0.052, 0]}
            receiveShadow
          >
            <boxGeometry args={[0.02, 10, 0.01]} />
            <meshStandardMaterial color="#d1d5db" roughness={0.8} />
          </mesh>
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <mesh
            key={`v-${i}`}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0.052, -5 + i]}
            receiveShadow
          >
            <boxGeometry args={[10, 0.02, 0.01]} />
            <meshStandardMaterial color="#d1d5db" roughness={0.8} />
          </mesh>
        ))}
      </RigidBody>


      {/* Bathroom fixtures - positioned to match image layout */}
      <Toilet position={[0, 0, 0]} />
      <Bathtub position={[0, 0, 0]} />
      <Sink position={[0, 0, 0]} />
      
      {/* Plumbing system */}
      <PlumbingPipes />
    </>
  );
}
