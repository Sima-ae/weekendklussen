'use client';

import { useState } from 'react';
import { RealisticHouse } from './rooms/RealisticHouse';
import { HouseFurniture } from './rooms/HouseFurniture';
import { HorizontalHousePlumbing } from './rooms/HorizontalHousePlumbing';
import { AnnexRoom } from './rooms/AnnexRoom';
import { AddAnnexIcon } from './rooms/AddAnnexIcon';
import { FloatingStairs } from './rooms/FloatingStairs';
import { DoorsWindowsIcon } from './rooms/DoorsWindowsIcon';
import { DoorsAndWindows } from './rooms/DoorsAndWindows';
import { WardrobeWithExpandIcon } from './rooms/WardrobeWithExpandIcon';
import { FloorIcon } from './rooms/FloorIcon';
import { AnnexDoor } from './rooms/AnnexDoor';
import { KitchenIcon } from './rooms/KitchenIcon';
import { RoofIcon } from './rooms/RoofIcon';
import { RoofExtension } from './rooms/RoofExtension';
import { BathroomIcon } from './rooms/BathroomIcon';
import { ToiletIcon } from './rooms/ToiletIcon';
import { StairsIcon } from './rooms/StairsIcon';
import { PlumbingIcon } from './rooms/PlumbingIcon';

export function MultiRoomScene() {
  const [hasAnnex, setHasAnnex] = useState(false);
  const [hasDoorsWindows, setHasDoorsWindows] = useState(false);
  const [hasRoofExtension, setHasRoofExtension] = useState(false);

  const handleToggleAnnex = () => {
    setHasAnnex(!hasAnnex);
  };

  const handleToggleDoorsWindows = () => {
    setHasDoorsWindows(!hasDoorsWindows);
  };

  const handleToggleRoofExtension = () => {
    setHasRoofExtension(!hasRoofExtension);
  };

  return (
    <>
      {/* Realistic house structure with floors, walls, roof */}
      <RealisticHouse />

      {/* Furniture and fixtures */}
      <HouseFurniture />

      {/* Wardrobe with +/- expand (1 or 3 closets) and "Inbouw en montage" popup */}
      <WardrobeWithExpandIcon />

      {/* Horizontal plumbing - ALL pipes horizontal, NO vertical */}
      <HorizontalHousePlumbing />

      {/* Floating stairs on bottom floor - positioned exactly below first floor stairs */}
      <FloatingStairs 
        floorLevel={0} 
        wallHeight={3} 
        startX={4.0}
        startZ={-4}
      />
      
      {/* Floating stairs on first floor - back to wall position */}
      <FloatingStairs floorLevel={1} wallHeight={3} reverseDirection={true} startX={5.0}
        startZ={-1.3}/>
      
      {/* Floating stairs on second floor - same location as bottom floor, going up to attic */}
      <FloatingStairs 
        floorLevel={2} 
        wallHeight={3} 
        startX={4.0}
        startZ={-4}
      />

      {/* Add/Remove Annex Icon - positioned to the right of the house */}
      <AddAnnexIcon 
        position={[7, 2, 0]} 
        hasAnnex={hasAnnex}
        onToggleAnnex={handleToggleAnnex}
      />

      {/* Annex room - appears when icon is clicked, connected to right side of house */}
      {hasAnnex && (
        <AnnexRoom position={[8, 0, 0]} />
      )}

      {/* Annex door - appears when annexroom is shown, half open from hall to annexroom */}
      <AnnexDoor showDoor={hasAnnex} />

      {/* Doors and Windows Icon - positioned at back of house */}
      <DoorsWindowsIcon 
        position={[0, 1.5, 6.5]} 
        hasDoorsWindows={hasDoorsWindows}
        onToggleDoorsWindows={handleToggleDoorsWindows}
      />

      {/* Doors and Windows - appear when icon is clicked */}
      <DoorsAndWindows showDoorsWindows={hasDoorsWindows} />

      {/* Floor Icon - positioned in center of second floor room */}
      <FloorIcon position={[0, 6.1, 0]} />

      {/* Kitchen Icon - positioned above sink in kitchen counter */}
      {/* Sink is at [4.5, 1.05, 4.6], icon positioned slightly above counter at Y=1.15 */}
      <KitchenIcon position={[4.5, 1.15, 4.6]} />

      {/* Bathroom Icon - positioned in center of bathtub on first floor */}
      {/* Bathtub is at [5, 3.4, 4.7], icon positioned above bathtub at Y=3.8 */}
      <BathroomIcon position={[5, 3.8, 4.7]} />

      {/* Toilet Icon - positioned in center of toilet on second floor */}
      {/* Toilet is at [5, 6.7, 1.3], icon positioned above toilet at Y=7.0 */}
      <ToiletIcon position={[5, 7.0, 1.3]} />

      {/* Stairs Icon - positioned in center of stairs on second floor */}
      {/* Stairs start at [4.0, 6.1, -4], center is approximately at [4.0, 7.6, -2.5], icon positioned above at Y=8.0 */}
      <StairsIcon position={[4.0, 8.0, -2.5]} />

      {/* Plumbing Icon - positioned at T-split of pipes behind first floor toilet */}
      {/* T-split is at [5, 3.3, 0.7], icon positioned slightly in front at Z=0.9 and slightly above at Y=3.5 */}
      <PlumbingIcon position={[5, 3.0, 0.7]} />

      {/* Roof Icon - positioned on left roof slope (crane side), center of roof */}
      {/* Left roof slope center: X=-3 (middle of left slope), Y=11 (on roof surface), Z=0 (center of roof depth) */}
      <RoofIcon 
        position={[-3, 11, 0]} 
        hasRoofExtension={hasRoofExtension}
        onToggleRoofExtension={handleToggleRoofExtension}
      />

      {/* Roof Extension (Dormer) - appears when roof icon is clicked */}
      {hasRoofExtension && (
        <RoofExtension position={[-3, 11, 0]} />
      )}
    </>
  );
}
