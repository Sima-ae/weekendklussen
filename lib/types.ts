import { Vector3, Euler } from 'three';

export interface PhysicsObject {
  id: string;
  position: Vector3;
  rotation: Euler;
  velocity?: Vector3;
  mass?: number;
  type: 'box' | 'sphere' | 'plane' | 'custom';
  color?: string;
  size?: Vector3 | number;
}

export interface PhysicsWorldConfig {
  gravity: Vector3;
  timeStep: number;
  iterations: number;
}

export interface DragState {
  isDragging: boolean;
  objectId: string | null;
  offset: Vector3;
}

export interface CameraState {
  position: Vector3;
  target: Vector3;
  fov: number;
}

export interface SimulationState {
  isPaused: boolean;
  speed: number;
  objects: PhysicsObject[];
  selectedObject: string | null;
}
