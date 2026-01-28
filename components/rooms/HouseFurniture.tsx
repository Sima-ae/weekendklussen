'use client';

import { RigidBody } from '@react-three/rapier';
import { useTexture } from '@react-three/drei';
import { RealisticPlant } from './RealisticPlant';

function TVLogo() {
  const texture = useTexture('/images/LOGO-FIX-WEB-SITE.png');
  texture.flipY = true;
  return (
    <mesh position={[-4, 1.3, -4.84]} receiveShadow>
      <planeGeometry args={[1.5, 0.85]} />
      <meshBasicMaterial map={texture} transparent opacity={1} toneMapped={false} />
    </mesh>
  );
}

export function HouseFurniture() {
  return (
    <>
      {/* ============================================ */}
      {/* GROUND FLOOR - LIVING ROOM */}
      {/* ============================================ */}
      
      {/* Realistic sectional couch - beige/off-white, rotated 180 degrees */}
      <RigidBody type="fixed" colliders="cuboid">
        <group position={[-4, 0.1, 0]} rotation={[0, Math.PI, 0]}>
          {/* Main section base */}
          <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
            <boxGeometry args={[3.2, 0.5, 1.4]} />
            <meshStandardMaterial color="#f5f5dc" roughness={0.8} />
          </mesh>
          
          {/* Main section - 3 seat cushions */}
          {[-1.0, 0, 1.0].map((x, i) => (
            <mesh key={`seat-${i}`} position={[x, 0.425, 0]} castShadow receiveShadow>
              <boxGeometry args={[0.95, 0.15, 1.3]} />
              <meshStandardMaterial color="#f5f5dc" roughness={0.7} />
            </mesh>
          ))}
          
          {/* Main section - 3 back cushions */}
          {[-1.0, 0, 1.0].map((x, i) => (
            <mesh key={`back-${i}`} position={[x, 0.775, -0.6]} castShadow receiveShadow>
              <boxGeometry args={[0.95, 0.5, 0.3]} />
              <meshStandardMaterial color="#f5f5dc" roughness={0.8} />
            </mesh>
          ))}
          
          {/* Left armrest (wide, flat) */}
          <mesh position={[-1.6, 0.475, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.15, 0.6, 1.4]} />
            <meshStandardMaterial color="#f5f5dc" roughness={0.8} />
          </mesh>
          
          {/* Right armrest */}
          <mesh position={[1.6, 0.475, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.15, 0.6, 1.4]} />
            <meshStandardMaterial color="#f5f5dc" roughness={0.8} />
          </mesh>
          
          {/* Small dark legs - main section */}
          {[-1.3, 1.3].map((x, i) => (
            <mesh key={`leg-main-${i}`} position={[x, 0.075, -0.6]} castShadow>
              <boxGeometry args={[0.08, 0.15, 0.08]} />
              <meshStandardMaterial color="#2a2a2a" roughness={0.3} />
            </mesh>
          ))}
          {[-1.3, 1.3].map((x, i) => (
            <mesh key={`leg-main-front-${i}`} position={[x, 0.075, 0.6]} castShadow>
              <boxGeometry args={[0.08, 0.15, 0.08]} />
              <meshStandardMaterial color="#2a2a2a" roughness={0.3} />
            </mesh>
          ))}
        </group>
      </RigidBody>

      {/* TV on wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-4, 1.3, -4.9]} castShadow>
          <boxGeometry args={[2.5, 1.5, 0.1]} />
          <meshStandardMaterial color="#000000" roughness={0.1} />
        </mesh>
      </RigidBody>

      {/* Logo on TV screen (advertisement) */}
      <TVLogo />

      {/* Coffee table */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-4, 0.35, -2]} castShadow receiveShadow>
          <boxGeometry args={[1.2, 0.5, 0.7]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.6} />
        </mesh>
      </RigidBody>

      {/* Realistic plants in all 4 corners of the living room - randomized rotations to look different from bedroom */}
      {/* Back-left corner - different rotation pattern */}
      <RealisticPlant position={[-5.3, 0.1, -4.3]} cornerRotation={Math.PI / 2.5} />
      {/* Back-right corner - different rotation pattern */}
      <RealisticPlant position={[1.3, 0.1, -4.3]} cornerRotation={-Math.PI / 2.2} />
      {/* Front-left corner - different rotation pattern */}
      <RealisticPlant position={[-5.3, 0.1, 4.3]} cornerRotation={-Math.PI / 2.8} />
      {/* Front-right corner - different rotation pattern */}
      <RealisticPlant position={[1.3, 0.1, 4.3]} cornerRotation={Math.PI / 2.3} />

      {/* ============================================ */}
      {/* GROUND FLOOR - KITCHEN */}
      {/* ============================================ */}
      
      {/* Refrigerator - positioned exactly between center wall (X=2) and kitchen counter (starts at X=3) */}
      {/* Refrigerator depth is 0.7, wall inside face is at Z=4.9, so position center at Z=4.55 */}
      {/* Center wall right face is at X=2.125 (wall at X=2, thickness 0.25), counter starts at X=3 */}
      {/* Refrigerator width is 0.8, centered at X=2.5 to fit exactly between wall and counter */}
      {/* Refrigerator height is 2, split into: top door (cooling, 1.33 high) and bottom door (freezer, 0.67 high) */}
      {/* Rotated 180 degrees horizontally */}
      <RigidBody type="fixed" colliders="cuboid">
        <group position={[2.5, 1.1, 4.55]} rotation={[0, Math.PI, 0]}>
          {/* Refrigerator body - cream/beige color */}
          <mesh position={[0, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.8, 2, 0.7]} />
            <meshStandardMaterial color="#f5e6d3" roughness={0.6} metalness={0.1} />
          </mesh>
          
          {/* Top door - cooling compartment (larger, 2/3 of height) */}
          {/* Door spans from Y=0.67 to Y=2, center at Y=1.335 */}
          <mesh position={[0, 0.335, 0.35]} castShadow>
            <boxGeometry args={[0.75, 1.33, 0.02]} />
            <meshStandardMaterial color="#f5e6d3" roughness={0.6} metalness={0.1} />
          </mesh>
          {/* Top door handle - chrome, horizontal */}
          <mesh position={[0, 0.335, 0.36]} castShadow>
            <boxGeometry args={[0.2, 0.02, 0.01]} />
            <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
          </mesh>
          
          {/* Bottom door - freezer compartment (smaller, 1/3 of height) */}
          {/* Door spans from Y=0 to Y=0.67, center at Y=0.335 */}
          <mesh position={[0, -0.665, 0.35]} castShadow>
            <boxGeometry args={[0.75, 0.67, 0.02]} />
            <meshStandardMaterial color="#f5e6d3" roughness={0.6} metalness={0.1} />
          </mesh>
          {/* Bottom door handle - chrome, horizontal */}
          <mesh position={[0, -0.665, 0.36]} castShadow>
            <boxGeometry args={[0.2, 0.02, 0.01]} />
            <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
          </mesh>
          
          {/* Horizontal divider between top and bottom doors */}
          <mesh position={[0, -0.33, 0]} castShadow>
            <boxGeometry args={[0.8, 0.02, 0.7]} />
            <meshStandardMaterial color="#d4c4b0" roughness={0.5} metalness={0.2} />
          </mesh>
        </group>
      </RigidBody>

      {/* Kitchen counter - moved forward to front wall (swapped with refrigerator) */}
      {/* Counter depth is 0.6, wall inside face is at Z=4.9, so position center at Z=4.6 (back edge at wall) */}
      {/* Counter width is 3, house spans X=-6 to X=6, so center at X=4.5 to fit inside (spans X=3 to X=6) */}
      {/* Counter is continuous and flat, sink embedded in center */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.5, 1.0, 4.6]} castShadow receiveShadow>
          <boxGeometry args={[3, 0.1, 0.6]} />
          <meshStandardMaterial color="#5a5a5a" roughness={0.6} />
        </mesh>
      </RigidBody>

      {/* Kitchen cabinets - 3 separate cabinets with doors - ROTATED 180 DEGREES */}
      {/* Cabinet depth is 0.5, wall inside face is at Z=4.9, so position center at Z=4.65 */}
      {/* Each cabinet is 1.0 unit wide, positioned at X=3.5, 4.5, 5.5 - NO GAPS between them */}
      {/* Rotated 180 degrees so doors face backward (toward wall) */}
      {[3.5, 4.5, 5.5].map((xPos, i) => (
        <RigidBody key={i} type="fixed" colliders="cuboid">
          {/* Cabinet body - exactly 1.0 unit wide to eliminate gaps */}
          <mesh position={[xPos, 0.55, 4.65]} castShadow receiveShadow>
            <boxGeometry args={[1.0, 0.9, 0.5]} />
            <meshStandardMaterial color="#ffffff" roughness={0.7} />
          </mesh>
          {/* Cabinet door - rotated 180 degrees, now facing backward */}
          <mesh position={[xPos, 0.55, 4.4]} castShadow>
            <boxGeometry args={[0.95, 0.85, 0.02]} />
            <meshStandardMaterial color="#ffffff" roughness={0.6} />
          </mesh>
          {/* Cabinet door handle - silver/chrome */}
          <mesh position={[xPos, 0.55, 4.39]} castShadow>
            <boxGeometry args={[0.15, 0.01, 0.01]} />
            <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
          </mesh>
        </RigidBody>
      ))}

      {/* Kitchen drawers removed - counter top is now flat and continuous */}

      {/* Kitchen sink - centered above middle cabinet */}
      {/* Counter top is at Y=1.05 (counter at Y=1.0 + height 0.1/2) */}
      {/* Counter center is at Z=4.6, sink embedded in counter top */}
      {/* Sink width is 0.8, centered on middle cabinet at X=4.5 */}
      {/* Sink rim is at counter level (Y=1.05) for flat continuous surface */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Sink rim - at counter level (Y=1.05), dark and visible */}
        <mesh position={[4.5, 1.05, 4.6]} castShadow>
          <boxGeometry args={[0.8, 0.02, 0.5]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.2} />
        </mesh>
        {/* Sink basin - below counter level, very dark and visible */}
        <mesh position={[4.5, 0.98, 4.6]} castShadow>
          <boxGeometry args={[0.75, 0.12, 0.45]} />
          <meshStandardMaterial color="#000000" roughness={0.1} metalness={0.3} />
        </mesh>
        {/* Sink inner bottom - very dark */}
        <mesh position={[4.5, 0.92, 4.6]} castShadow>
          <boxGeometry args={[0.7, 0.02, 0.4]} />
          <meshStandardMaterial color="#000000" roughness={0.1} metalness={0.4} />
        </mesh>
      </RigidBody>

      {/* Kitchen sink faucet - silver/chrome (similar to second floor sink) */}
      {/* Positioned on counter top surface, clearly visible above counter */}
      {/* Rotated 180 degrees horizontally around faucet center */}
      {/* Moved forward toward wall side */}
      <RigidBody type="fixed" colliders="cuboid">
        <group position={[4.5, 1.1, 4.75]} rotation={[0, Math.PI, 0]}>
          {/* Faucet base - on counter surface, clearly above counter */}
          <mesh position={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.04, 0.04, 0.08, 16]} />
            <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
          </mesh>
          {/* Faucet spout - extends forward over sink, clearly visible */}
          <mesh position={[0, -0.04, 0.15]} rotation={[Math.PI / 5, 0, 0]} castShadow>
            <cylinderGeometry args={[0.025, 0.025, 0.2, 16]} />
            <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
          </mesh>
          {/* Faucet handles - left and right, clearly on top of counter */}
          <mesh position={[-0.18, 0, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.06, 16]} />
            <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
          </mesh>
          <mesh position={[0.18, 0, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.06, 16]} />
            <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
          </mesh>
        </group>
      </RigidBody>

      {/* ============================================ */}
      {/* FIRST FLOOR - BEDROOM */}
      {/* ============================================ */}
      {/* Wardrobe with +/- expand icons → WardrobeWithExpandIcon in MultiRoomScene */}

      {/* Realistic king size bed - centered against back wall, rotated 180 degrees */}
      {/* Back wall inside face is at Z≈4.875, headboard at relative -1.0 becomes +1.0 after 180° rotation */}
      {/* So bed center at Z=3.875 makes headboard at Z=4.875 (against wall) */}
      <RigidBody type="fixed" colliders="cuboid">
        <group position={[-2.2, 3.1, 3.875]} rotation={[0, Math.PI, 0]}>
          {/* Bed frame/base - king size (longer) */}
          <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
            <boxGeometry args={[2, 0.3, 2.1]} />
            <meshStandardMaterial color="#8b7355" roughness={0.7} />
          </mesh>
          
          {/* Mattress - king size */}
          <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.9, 0.4, 2.0]} />
            <meshStandardMaterial color="#f5f5dc" roughness={0.8} />
          </mesh>
          
          {/* Headboard - tall, against wall (positioned so it touches wall at Z=5) */}
          <mesh position={[0, 0.8, -1.0]} castShadow receiveShadow>
            <boxGeometry args={[2, 1.0, 0.1]} />
            <meshStandardMaterial color="#f5f5dc" roughness={0.7} />
          </mesh>
          
          {/* Pillows - 2 pillows side by side, toward headboard */}
          {[-0.4, 0.4].map((x, i) => (
            <mesh key={`pillow-${i}`} position={[x, 0.6, -0.6]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow>
              <boxGeometry args={[0.4, 0.15, 0.75]} />
              <meshStandardMaterial color="#ffffff" roughness={0.6} />
            </mesh>
          ))}
          
          {/* Bed legs - small, dark */}
          {[-0.8, 0.8].map((x, i) => (
            <mesh key={`leg-${i}`} position={[x, -0.05, -0.95]} castShadow>
              <boxGeometry args={[0.08, 0.1, 0.08]} />
              <meshStandardMaterial color="#2a2a2a" roughness={0.3} />
            </mesh>
          ))}
          {[-0.8, 0.8].map((x, i) => (
            <mesh key={`leg-front-${i}`} position={[x, -0.05, 0.95]} castShadow>
              <boxGeometry args={[0.08, 0.1, 0.08]} />
              <meshStandardMaterial color="#2a2a2a" roughness={0.3} />
            </mesh>
          ))}
        </group>
      </RigidBody>

      {/* Realistic plants in all 4 corners of the bedroom - positioned to keep leaves inside walls */}
      {/* Back-left corner (against back wall and left wall) - rotated to point leaves toward room center */}
      <RealisticPlant position={[-5.3, 3.1, 4.3]} cornerRotation={Math.PI / 3} />
      {/* Back-right corner (against back wall and door wall) - rotated to point leaves toward room center */}
      <RealisticPlant position={[1.3, 3.1, 4.3]} cornerRotation={-Math.PI / 3} />
      {/* Front-left corner (against front wall and left wall) - rotated to point leaves toward room center */}
      <RealisticPlant position={[-5.3, 3.1, -4.3]} cornerRotation={-Math.PI / 3} />
      {/* Front-right corner (against front wall and door wall) - rotated to point leaves toward room center */}
      <RealisticPlant position={[1.3, 3.1, -4.3]} cornerRotation={Math.PI / 3} />

      {/* ============================================ */}
      {/* FIRST FLOOR - TOILET ROOM (top-right corner) */}
      {/* ============================================ */}
      
      {/* Toilet - positioned backwards against the wall */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Toilet bowl */}
        <mesh position={[5, 3.4, 1.3]} castShadow receiveShadow>
          <boxGeometry args={[0.5, 0.6, 0.6]} />
          <meshStandardMaterial color="#ffffff" roughness={0.6} />
        </mesh>
        {/* Toilet tank */}
        <mesh position={[5, 3.8, 1.0]} castShadow>
          <boxGeometry args={[0.5, 0.4, 0.3]} />
          <meshStandardMaterial color="#ffffff" roughness={0.6} />
        </mesh>
        {/* Toilet seat - silver/chrome */}
        <mesh position={[5, 3.7, 1.3]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[0.25, 0.02, 16, 32]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Toilet lid - white */}
        <mesh position={[5, 3.72, 1.3]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[0.25, 0.015, 16, 32]} />
          <meshStandardMaterial color="#ffffff" roughness={0.6} />
        </mesh>
      </RigidBody>

      {/* ============================================ */}
      {/* SECOND FLOOR - BATHROOM (top-right corner) */}
      {/* ============================================ */}
      
      {/* Toilet - moved backwards against the wall (same as first floor) */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Toilet bowl */}
        <mesh position={[5, 6.4, 1.3]} castShadow receiveShadow>
          <boxGeometry args={[0.5, 0.6, 0.6]} />
          <meshStandardMaterial color="#ffffff" roughness={0.6} />
        </mesh>
        {/* Toilet tank */}
        <mesh position={[5, 6.8, 1.0]} castShadow>
          <boxGeometry args={[0.5, 0.4, 0.3]} />
          <meshStandardMaterial color="#ffffff" roughness={0.6} />
        </mesh>
        {/* Toilet seat - silver/chrome */}
        <mesh position={[5, 6.7, 1.3]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[0.25, 0.02, 16, 32]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Toilet lid - white */}
        <mesh position={[5, 6.72, 1.3]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[0.25, 0.015, 16, 32]} />
          <meshStandardMaterial color="#ffffff" roughness={0.6} />
        </mesh>
      </RigidBody>

      {/* Bathroom sink - moved forward against the wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 6.9, 4.7]} castShadow>
          <boxGeometry args={[0.5, 0.2, 0.4]} />
          <meshStandardMaterial color="#ffffff" roughness={0.5} />
        </mesh>
      </RigidBody>
      
      {/* Sink faucet - silver/chrome */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Faucet base */}
        <mesh position={[5, 7.05, 4.7]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.05, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Faucet spout - extends forward */}
        <mesh position={[5, 7.02, 4.85]} rotation={[Math.PI / 6, 0, 0]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.15, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Faucet handles - left and right */}
        <mesh position={[4.85, 7.05, 4.7]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.04, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        <mesh position={[5.15, 7.05, 4.7]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.04, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
      </RigidBody>

      {/* Realistic plants on second floor - next to bathroom door on both sides, outside bathroom in hall */}
      {/* Bathroom door is at X=4, Z=3, door frame from Z=2.5 to Z=3.5 */}
      {/* Wall is at X=4, plants positioned in hall (X < 4) against the wall */}
      {/* Left side of door (closer to front) - positioned in hall against bathroom wall */}
      <RealisticPlant position={[3.8, 6.1, 2.2]} cornerRotation={-Math.PI / 2} />
      {/* Right side of door (closer to back) - positioned in hall against bathroom wall */}
      <RealisticPlant position={[3.8, 6.1, 3.8]} cornerRotation={Math.PI / 2} />

      {/* ============================================ */}
      {/* FIRST FLOOR - BATHROOM */}
      {/* ============================================ */}
      
      {/* Bathtub - moved from second floor to first floor, forward against the wall */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Bathtub outer shell */}
        <mesh position={[5, 3.4, 4.7]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 0.6, 0.8]} />
          <meshStandardMaterial color="#ffffff" roughness={0.5} />
        </mesh>
        {/* Bathtub inner basin */}
        <mesh position={[5, 3.55, 4.7]} castShadow>
          <boxGeometry args={[1.3, 0.3, 0.7]} />
          <meshStandardMaterial color="#e0e0e0" roughness={0.4} />
        </mesh>
      </RigidBody>
      
      {/* Bathtub faucet - silver/chrome, at the foot end, inside the bathtub */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Faucet base - inside bathtub at foot end */}
        <mesh position={[5, 3.6, 4.35]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.06, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Faucet spout - extends upward and forward into bathtub */}
        <mesh position={[5, 3.65, 4.45]} rotation={[-Math.PI / 4, 0, 0]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.15, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Faucet handles - left and right */}
        <mesh position={[4.85, 3.6, 4.35]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.05, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
        <mesh position={[5.15, 3.6, 4.35]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.05, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
        </mesh>
      </RigidBody>
    </>
  );
}
