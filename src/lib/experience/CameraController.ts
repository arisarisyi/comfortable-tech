import * as THREE from 'three';
import type { Mouse } from './Mouse.js';
import type { Scroll } from './Scroll.js';

/**
 * CameraController - Controls camera motion for immersive spatial depth
 * Uses orbit motion combined with mouse parallax and scroll-driven depth
 */
export interface CameraControllerOptions {
	orbitRadius?: number;
	orbitSpeed?: number;
	driftSpeedX?: number;
	driftSpeedY?: number;
	driftAmplitudeX?: number;
	driftAmplitudeY?: number;
	parallaxStrength?: number;
	parallaxSmoothing?: number;
	scrollSmoothing?: number;
	minZ?: number;
	maxZ?: number;
}

export class CameraController {
	private readonly _camera: THREE.PerspectiveCamera;
	private readonly _mouse: Mouse;
	private readonly _scroll: Scroll;
	private readonly _orbitRadius: number;
	private readonly _orbitSpeed: number;
	private readonly _driftSpeedX: number;
	private readonly _driftSpeedY: number;
	private readonly _driftAmplitudeX: number;
	private readonly _driftAmplitudeY: number;
	private readonly _parallaxStrength: number;
	private readonly _parallaxSmoothing: number;
	private readonly _scrollSmoothing: number;
	private readonly _minZ: number;
	private readonly _maxZ: number;
	private _parallaxX: number = 0;
	private _parallaxY: number = 0;
	private _scrollZ: number = 0;

	constructor(
		camera: THREE.PerspectiveCamera,
		mouse: Mouse,
		scroll: Scroll,
		options: CameraControllerOptions = {}
	) {
		this._camera = camera;
		this._mouse = mouse;
		this._scroll = scroll;
		this._orbitRadius = options.orbitRadius ?? 5;
		this._orbitSpeed = options.orbitSpeed ?? 0.05;
		this._driftSpeedX = options.driftSpeedX ?? 0.2;
		this._driftSpeedY = options.driftSpeedY ?? 0.15;
		this._driftAmplitudeX = options.driftAmplitudeX ?? 0.5;
		this._driftAmplitudeY = options.driftAmplitudeY ?? 0.3;
		this._parallaxStrength = options.parallaxStrength ?? 1.5;
		this._parallaxSmoothing = options.parallaxSmoothing ?? 0.02;
		this._scrollSmoothing = options.scrollSmoothing ?? 0.05;
		this._minZ = options.minZ ?? 3;
		this._maxZ = options.maxZ ?? 12;
	}

	public update(elapsedTime: number): void {
		// Orbit motion - camera moves around the scene
		const angle = elapsedTime * this._orbitSpeed;

		// Drift motion - subtle organic movement
		const driftX = Math.sin(elapsedTime * this._driftSpeedX) * this._driftAmplitudeX;
		const driftY = Math.sin(elapsedTime * this._driftSpeedY) * this._driftAmplitudeY;

		// Parallax - smooth interpolation towards mouse position
		const targetParallaxX = this._mouse.x * this._parallaxStrength;
		const targetParallaxY = -this._mouse.y * this._parallaxStrength;

		this._parallaxX += (targetParallaxX - this._parallaxX) * this._parallaxSmoothing;
		this._parallaxY += (targetParallaxY - this._parallaxY) * this._parallaxSmoothing;

		// Scroll - smooth interpolation for depth journey
		const targetScrollZ = this._maxZ - (this._scroll.progress * (this._maxZ - this._minZ));
		this._scrollZ += (targetScrollZ - this._scrollZ) * this._scrollSmoothing;

		// Combine orbit + drift + parallax for final position
		// orbitZ starts at the orbitRadius, then we subtract scrollZ to move forward
		const orbitZ = Math.sin(angle) * this._orbitRadius;
		const x = Math.cos(angle) * this._orbitRadius + driftX + this._parallaxX;
		const z = orbitZ - this._scrollZ;
		const y = driftY + this._parallaxY;

		// Update camera position
		this._camera.position.set(x, y, z);

		// Always look at center
		this._camera.lookAt(0, 0, 0);
	}

	public destroy(): void {
		// No resources to clean up
		// Camera is owned by Camera class
		// Mouse and Scroll are owned by Experience
	}
}
