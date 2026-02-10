import * as THREE from 'three';
import { ExperiencePhase } from '$lib/experience/Phase.js';

/**
 * SignalField - Creates moving signal pulses along network connections
 * Visualizes network communication with glowing dots traveling along connection lines
 */
export class SignalField {
	private readonly _signals: THREE.Points;
	private readonly _geometry: THREE.BufferGeometry;
	private readonly _material: THREE.PointsMaterial;
	private readonly _positions: Float32Array;
	private readonly _lineIndices: Uint16Array;
	private readonly _progress: Float32Array;
	private readonly _speeds: Float32Array;
	private readonly _count: number;
	private readonly _linePositions: Float32Array;
	private readonly _lineCount: number;
	private _phase: ExperiencePhase = ExperiencePhase.INTRO;

	constructor(scene: THREE.Scene, linePositions: Float32Array) {
		this._count = 150;
		this._linePositions = linePositions;
		this._lineCount = linePositions.length / 6; // Each line has 6 floats (2 points × 3 coords)

		// Create geometry
		this._geometry = new THREE.BufferGeometry();
		this._positions = new Float32Array(this._count * 3);
		this._lineIndices = new Uint16Array(this._count);
		this._progress = new Float32Array(this._count);
		this._speeds = new Float32Array(this._count);

		// Initialize each signal
		for (let i = 0; i < this._count; i++) {
			// Random line index
			this._lineIndices[i] = Math.floor(Math.random() * this._lineCount);

			// Random starting progress
			this._progress[i] = Math.random();

			// Random speed between 0.2 and 0.6
			this._speeds[i] = 0.2 + Math.random() * 0.4;
		}

		// Set position attribute
		this._geometry.setAttribute('position', new THREE.BufferAttribute(this._positions, 3));

		// Create material
		this._material = new THREE.PointsMaterial({
			size: 0.12,
			color: 0x88ccff,
			transparent: true,
			opacity: 1,
			blending: THREE.AdditiveBlending,
			depthWrite: false,
			sizeAttenuation: true
		});

		// Create points object
		this._signals = new THREE.Points(this._geometry, this._material);

		// Add to scene
		scene.add(this._signals);
	}

	public setPhase(phase: ExperiencePhase): void {
		this._phase = phase;
	}

	public update(_elapsedTime: number): void {
		const deltaTime = 0.016; // Approximate 60fps delta time

		// Get speed multiplier based on phase
		let multiplier: number;

		switch (this._phase) {
			case ExperiencePhase.INTRO:
				multiplier = 0.3;
				break;

			case ExperiencePhase.FULLSTACK:
				multiplier = 1;
				break;

			case ExperiencePhase.SECURITY:
				multiplier = 2.5;
				break;

			case ExperiencePhase.IOT:
				multiplier = 1.5;
				break;

			case ExperiencePhase.CONTACT:
				multiplier = 0.4;
				break;

			default:
				multiplier = 1;
				break;
		}

		// Update each signal position
		for (let i = 0; i < this._count; i++) {
			// Update progress with speed multiplier
			this._progress[i]! += this._speeds[i]! * multiplier * deltaTime;

			// Reset if progress exceeds 1
			if (this._progress[i]! > 1) {
				this._progress[i] = 0;
				this._lineIndices[i] = Math.floor(Math.random() * this._lineCount);
			}

			// Get line indices
			const lineIndex = this._lineIndices[i]!;
			const startIndex = lineIndex * 6;
			const endIndex = startIndex + 3;

			// Get start point
			const sx: number = this._linePositions[startIndex]!;
			const sy: number = this._linePositions[startIndex + 1]!;
			const sz: number = this._linePositions[startIndex + 2]!;

			// Get end point
			const ex: number = this._linePositions[endIndex]!;
			const ey: number = this._linePositions[endIndex + 1]!;
			const ez: number = this._linePositions[endIndex + 2]!;

			// Get progress for this signal
			const t: number = this._progress[i]!;

			// LERP between start and end points
			const i3 = i * 3;
			this._positions[i3] = sx + (ex - sx) * t;
			this._positions[i3 + 1] = sy + (ey - sy) * t;
			this._positions[i3 + 2] = sz + (ez - sz) * t;
		}

		// Update geometry
		this._geometry.attributes.position!.needsUpdate = true;
	}

	public destroy(): void {
		// Remove from scene
		this._signals.parent?.remove(this._signals);

		// Dispose geometry and material
		this._geometry.dispose();
		this._material.dispose();
	}

	get signals(): THREE.Points {
		return this._signals;
	}

	get count(): number {
		return this._count;
	}
}
