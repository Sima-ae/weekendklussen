'use client';

import { RigidBody } from '@react-three/rapier';

interface DoorsAndWindowsProps {
  showDoorsWindows: boolean;
}

export function DoorsAndWindows({ showDoorsWindows }: DoorsAndWindowsProps) {
  if (!showDoorsWindows) return null;

  const wallHeight = 3;
  const houseWidth = 12;
  const houseDepth = 10;
  const doorColor = '#ffffff'; // White door color
  const frameColor = '#ffffff'; // White frame color
  const windowColor = '#e8f4f8'; // Light blue-white for window glass
  const mullionColor = '#ffffff'; // White mullions (like in the image)

  const frameThickness = 0.08;
  const glassThickness = 0.02;
  const mullionThickness = 0.015;
  const sillDepth = 0.15;
  const sillThickness = 0.05;

  // Helper function to create window JSX
  const createWindowJSX = (x: number, y: number, z: number, width: number, height: number, isVertical: boolean, key: string) => {
    const frameZ = isVertical ? (z > 0 ? z + 0.01 : z - 0.01) : z;
    const frameX = isVertical ? x : (x > 0 ? x + 0.01 : x - 0.01);
    const innerFrameZ = isVertical ? (z > 0 ? z + 0.02 : z - 0.02) : z;
    const innerFrameX = isVertical ? x : (x > 0 ? x + 0.02 : x - 0.02);
    const sillZ = isVertical ? (z > 0 ? z + sillDepth * 0.5 : z - sillDepth * 0.5) : z;
    const sillX = isVertical ? x : (x > 0 ? x + sillDepth * 0.5 : x - sillDepth * 0.5);

    return (
      <RigidBody key={key} type="fixed" colliders="cuboid">
        {/* Main window frame - white, with depth */}
        <mesh 
          position={isVertical ? [x, y, frameZ] : [frameX, y, z]} 
          receiveShadow 
          castShadow
        >
          <boxGeometry args={isVertical ? [width, height, frameThickness] : [frameThickness, height, width]} />
          <meshStandardMaterial color={frameColor} roughness={0.5} metalness={0.1} transparent opacity={0.55} />
        </mesh>
        
        {/* Inner frame detail - creates depth */}
        <mesh 
          position={isVertical ? [x, y, innerFrameZ] : [innerFrameX, y, z]} 
          receiveShadow 
          castShadow
        >
          <boxGeometry args={isVertical ? [width * 0.95, height * 0.95, frameThickness * 0.3] : [frameThickness * 0.3, height * 0.95, width * 0.95]} />
          <meshStandardMaterial color={frameColor} roughness={0.4} metalness={0.1} transparent opacity={0.55} />
        </mesh>
        
        {/* Window glass */}
        <mesh 
          position={[x, y, z]} 
          receiveShadow
        >
          <boxGeometry args={isVertical ? [width * 0.88, height * 0.88, glassThickness] : [glassThickness, height * 0.88, width * 0.88]} />
          <meshStandardMaterial color={windowColor} roughness={0.05} metalness={0.05} transparent opacity={0.5} />
        </mesh>
        
        {/* Grid pattern - horizontal mullions (3 rows = 2 dividers) */}
        {[1, 2].map((i) => (
          <mesh 
            key={`h-${i}`}
            position={[x, y - height * 0.33 + i * height * 0.33, z + 0.001]} 
            receiveShadow 
            castShadow
          >
            <boxGeometry args={isVertical ? [width * 0.88, mullionThickness, glassThickness + 0.003] : [glassThickness + 0.003, mullionThickness, width * 0.88]} />
            <meshStandardMaterial color={mullionColor} roughness={0.4} metalness={0.1} transparent opacity={0.55} />
          </mesh>
        ))}
        
        {/* Grid pattern - vertical mullions (2 columns = 1 divider) */}
        <mesh 
          position={isVertical ? [x, y, z + 0.001] : [x + 0.001, y, z]} 
          receiveShadow 
          castShadow
        >
          <boxGeometry args={isVertical ? [mullionThickness, height * 0.88, glassThickness + 0.003] : [glassThickness + 0.003, height * 0.88, mullionThickness]} />
          <meshStandardMaterial color={mullionColor} roughness={0.4} metalness={0.1} transparent opacity={0.75} />
        </mesh>
        
        {/* Window sill - extends outward */}
        <mesh 
          position={isVertical ? [x, y - height * 0.5 - sillThickness * 0.5, sillZ] : [sillX, y - height * 0.5 - sillThickness * 0.5, z]} 
          receiveShadow 
          castShadow
        >
          <boxGeometry args={isVertical ? [width * 1.1, sillThickness, sillDepth] : [sillDepth, sillThickness, width * 1.1]} />
          <meshStandardMaterial color={frameColor} roughness={0.5} metalness={0.1} transparent opacity={0.55} />
        </mesh>
      </RigidBody>
    );
  };

  // Random window positions for each floor
  // Ground floor windows (Y = 1.5, floor top at Y=0.1)
  // All walls: 2 windows each. Long walls (front/back): double width (2.4), Short walls (left/right): normal width (1.2)
  const groundFloorWindows = [
    // Front wall (Z = -houseDepth/2 = -5) - 2 windows, double width
    { x: -3, y: 1.5, z: -houseDepth / 2, w: 2.4, h: 1.4, vert: true },
    { x: 3, y: 1.5, z: -houseDepth / 2, w: 2.4, h: 1.4, vert: true },
    // Back wall (Z = houseDepth/2 = 5) - 2 windows, double width
    { x: -3, y: 1.5, z: houseDepth / 2, w: 2.4, h: 1.4, vert: true },
    { x: 3, y: 1.5, z: houseDepth / 2, w: 2.4, h: 1.4, vert: true },
    // Left wall (X = -houseWidth/2 = -6) - 2 windows, normal width
    { x: -houseWidth / 2, y: 1.5, z: -2.5, w: 1.2, h: 1.4, vert: false },
    { x: -houseWidth / 2, y: 1.5, z: 2.5, w: 1.2, h: 1.4, vert: false },
    // Right wall (X = houseWidth/2 = 6) - 2 windows, normal width
    { x: houseWidth / 2, y: 1.5, z: -2.5, w: 1.2, h: 1.4, vert: false },
    { x: houseWidth / 2, y: 1.5, z: 2.5, w: 1.2, h: 1.4, vert: false },
  ];

  // First floor windows (Y = wallHeight + 1.5 = 4.5, floor top at Y=3.1)
  // All walls: 2 windows each, all single width (1.2)
  // Positioned opposite to ground and second floor windows
  const firstFloorWindows = [
    // Front wall (Z = -houseDepth/2 = -5) - 2 windows, single width, opposite positions
    { x: -4.5, y: wallHeight + 1.5, z: -houseDepth / 2, w: 1.2, h: 1.4, vert: true },
    { x: 4.5, y: wallHeight + 1.5, z: -houseDepth / 2, w: 1.2, h: 1.4, vert: true },
    // Back wall (Z = houseDepth/2 = 5) - 2 windows, single width, opposite positions
    { x: -4.5, y: wallHeight + 1.5, z: houseDepth / 2, w: 1.2, h: 1.4, vert: true },
    { x: 4.5, y: wallHeight + 1.5, z: houseDepth / 2, w: 1.2, h: 1.4, vert: true },
    // Left wall (X = -houseWidth/2 = -6) - 2 windows, single width, opposite positions
    { x: -houseWidth / 2, y: wallHeight + 1.5, z: -4, w: 1.2, h: 1.4, vert: false },
    { x: -houseWidth / 2, y: wallHeight + 1.5, z: 4, w: 1.2, h: 1.4, vert: false },
    // Right wall (X = houseWidth/2 = 6) - 2 windows, single width, opposite positions
    { x: houseWidth / 2, y: wallHeight + 1.5, z: -4, w: 1.2, h: 1.4, vert: false },
    { x: houseWidth / 2, y: wallHeight + 1.5, z: 4, w: 1.2, h: 1.4, vert: false },
  ];

  // Second floor windows (Y = wallHeight * 2 + 1.5 = 7.5, floor top at Y=6.1)
  // All walls: 2 windows each. Long walls (front/back): double width (2.4), Short walls (left/right): normal width (1.2)
  const secondFloorWindows = [
    // Front wall (Z = -houseDepth/2 = -5) - 2 windows, double width
    { x: -3, y: wallHeight * 2 + 1.5, z: -houseDepth / 2, w: 2.4, h: 1.4, vert: true },
    { x: 3, y: wallHeight * 2 + 1.5, z: -houseDepth / 2, w: 2.4, h: 1.4, vert: true },
    // Back wall (Z = houseDepth/2 = 5) - 2 windows, double width
    { x: -3, y: wallHeight * 2 + 1.5, z: houseDepth / 2, w: 2.4, h: 1.4, vert: true },
    { x: 3, y: wallHeight * 2 + 1.5, z: houseDepth / 2, w: 2.4, h: 1.4, vert: true },
    // Left wall (X = -houseWidth/2 = -6) - 2 windows, normal width
    { x: -houseWidth / 2, y: wallHeight * 2 + 1.5, z: -2.5, w: 1.2, h: 1.4, vert: false },
    { x: -houseWidth / 2, y: wallHeight * 2 + 1.5, z: 2.5, w: 1.2, h: 1.4, vert: false },
    // Right wall (X = houseWidth/2 = 6) - 2 windows, normal width
    { x: houseWidth / 2, y: wallHeight * 2 + 1.5, z: -2.5, w: 1.2, h: 1.4, vert: false },
    { x: houseWidth / 2, y: wallHeight * 2 + 1.5, z: 2.5, w: 1.2, h: 1.4, vert: false },
  ];

  return (
    <>
      {/* ============================================ */}
      {/* BACK DOOR - Ground floor, back of house */}
      {/* ============================================ */}
      {/* Back door at center of back wall (Z = houseDepth/2 = 5) */}
      {/* Floor top is at Y=0.1, door height is 2.0, so door center at Y=1.1 (bottom at 0.1, top at 2.1) */}
      {/* Door frame height is 2.2, so frame center at Y=1.2 */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Door frame - proper frame with side posts and top */}
        {/* Frame height: 2.08 (slightly larger than door height 2.0 for proper fit) */}
        {/* Left side post - from floor (Y=0.06) to top (Y=2.14) */}
        <mesh position={[-0.5, 1.1, houseDepth / 2 + 0.01]} receiveShadow castShadow>
          <boxGeometry args={[0.05, 2.08, 0.05]} />
          <meshStandardMaterial color={frameColor} roughness={0.6} />
        </mesh>
        {/* Right side post - from floor (Y=0.06) to top (Y=2.14) */}
        <mesh position={[0.5, 1.1, houseDepth / 2 + 0.01]} receiveShadow castShadow>
          <boxGeometry args={[0.05, 2.08, 0.05]} />
          <meshStandardMaterial color={frameColor} roughness={0.6} />
        </mesh>
        {/* Top frame - centered between the side posts */}
        <mesh position={[0, 2.14, houseDepth / 2 + 0.01]} receiveShadow castShadow>
          <boxGeometry args={[1.0, 0.05, 0.05]} />
          <meshStandardMaterial color={frameColor} roughness={0.6} />
        </mesh>
        {/* Back door - white, opens half-way (90 degrees) to outside when showDoorsWindows is true */}
        {/* Door rotates around left edge (X = -0.5) */}
        {/* When open: rotates 90 degrees around Y axis, swinging outward (positive Z) */}
        <group position={[-0.5, 1.1, houseDepth / 2]} rotation={[0, showDoorsWindows ? Math.PI / 2 : 0, 0]}>
          <mesh position={[0.5, 0, 0]} receiveShadow castShadow>
            <boxGeometry args={[1.0, 2.0, 0.03]} />
            <meshStandardMaterial color={doorColor} roughness={0.7} metalness={0.1} side={2} />
          </mesh>
          {/* Door handle - same position on both sides, like a real door */}
          {/* Handle position: right side of door (X=0.9) */}
          {/* Outside handle (forward side) */}
          <mesh position={[0.9, 0, 0.02]} receiveShadow castShadow>
            <sphereGeometry args={[0.025, 16, 16]} />
            <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
          </mesh>
          {/* Outside handle base plate */}
          <mesh position={[0.9, 0, 0.015]} rotation={[0, 0, Math.PI / 2]} receiveShadow castShadow>
            <cylinderGeometry args={[0.03, 0.03, 0.01, 16]} />
            <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
          </mesh>
          {/* Inside handle (backward side) - same X position, opposite Z */}
          <mesh position={[0.9, 0, -0.02]} receiveShadow castShadow>
            <sphereGeometry args={[0.025, 16, 16]} />
            <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
          </mesh>
          {/* Inside handle base plate */}
          <mesh position={[0.9, 0, -0.015]} rotation={[0, 0, Math.PI / 2]} receiveShadow castShadow>
            <cylinderGeometry args={[0.03, 0.03, 0.01, 16]} />
            <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.9} />
          </mesh>
        </group>
      </RigidBody>

      {/* ============================================ */}
      {/* WINDOWS - Random positions around whole house */}
      {/* Ground floor, first floor, and second floor */}
      {/* ============================================ */}
      
      {/* GROUND FLOOR WINDOWS */}
      {groundFloorWindows.map((win, i) => 
        createWindowJSX(win.x, win.y, win.z, win.w, win.h, win.vert, `ground-${i}-${win.x}-${win.y}-${win.z}`)
      )}
      
      {/* FIRST FLOOR WINDOWS */}
      {firstFloorWindows.map((win, i) => 
        createWindowJSX(win.x, win.y, win.z, win.w, win.h, win.vert, `first-${i}-${win.x}-${win.y}-${win.z}`)
      )}
      
      {/* SECOND FLOOR WINDOWS */}
      {secondFloorWindows.map((win, i) => 
        createWindowJSX(win.x, win.y, win.z, win.w, win.h, win.vert, `second-${i}-${win.x}-${win.y}-${win.z}`)
      )}
    </>
  );
}
