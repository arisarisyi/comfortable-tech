import * as THREE from 'three';
import { ExperiencePhase } from '$lib/experience/Phase.js';

/**
 * ConnectionField - Creates dynamic connection lines between nearby particles
 * Transforms particle field into network visualization
 * Responds to ExperiencePhase with changing opacity
 */
export class ConnectionField {
	private readonly _lines: THREE.LineSegments;
	private readonly _geometry: THREE.BufferGeometry;
	private readonly _material: THREE.LineBasicMaterial;
	private _phase: ExperiencePhase = ExperiencePhase.INTRO;
	private _currentOpacity: number = 0.1;
	public readonly linePositions: Float32Array;
	public readonly lineCount: number;

	constructor(scene: THREE.Scene, particlePositions: Float32Array) {
		const threshold = 2.5;
		const maxConnections = 3;
		const maxLines = 5000;

		this._geometry = new THREE.BufferGeometry();
		const linePositions = new Float32Array(maxLines * 6); // 6 floats per line (2 points × 3 coords)

		let lineIndex = 0;
		const particleCount = particlePositions.length / 3;

		// Compute connections once in constructor for performance
		for (let i = 0; i < particleCount && lineIndex < maxLines; i++) {
			const i3 = i * 3;
			const x1: number = particlePositions[i3]!;
			const y1: number = particlePositions[i3 + 1]!;
			const z1: number = particlePositions[i3 + 2]!;

			let connections = 0;

			// Check nearby particles
			for (let j = i + 1; j < particleCount && connections < maxConnections && lineIndex < maxLines; j++) {
				const j3 = j * 3;
				const x2: number = particlePositions[j3]!;
				const y2: number = particlePositions[j3 + 1]!;
				const z2: number = particlePositions[j3 + 2]!;

				// Calculate distance
				const dx = x2 - x1;
				const dy = y2 - y1;
				const dz = z2 - z1;
				const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

				// Create line if particles are close enough
				if (distance < threshold) {
					// Line start point
					linePositions[lineIndex * 6] = x1;
					linePositions[lineIndex * 6 + 1] = y1;
					linePositions[lineIndex * 6 + 2] = z1;

					// Line end point
					linePositions[lineIndex * 6 + 3] = x2;
					linePositions[lineIndex * 6 + 4] = y2;
					linePositions[lineIndex * 6 + 5] = z2;

					lineIndex++;
					connections++;
				}
			}
		}

		// Set position attribute
		this._geometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
		this._geometry.setDrawRange(0, lineIndex * 2); // Only draw computed lines

		// Store ONLY valid line positions for SignalField
		// Slice the array to exclude unused (zero) positions
		this.linePositions = linePositions.slice(0, lineIndex * 6);
		this.lineCount = lineIndex;

		// Create material
		this._material = new THREE.LineBasicMaterial({
			color: 0x66aadd,
			transparent: true,
			opacity: this._currentOpacity
		});

		// Create line segments object
		this._lines = new THREE.LineSegments(this._geometry, this._material);

		// Add to scene
		scene.add(this._lines);
	}

	public setPhase(phase: ExperiencePhase): void {
		this._phase = phase;
	}

	private _getTargetOpacity(): number {
		switch (this._phase) {
			case ExperiencePhase.INTRO:
				return 0.1;
			case ExperiencePhase.FULLSTACK:
				return 0.35;
			case ExperiencePhase.SECURITY:
				return 0.6;
			case ExperiencePhase.IOT:
				return 0.45;
			case ExperiencePhase.CONTACT:
				return 0.15;
			default:
				return 0.1;
		}
	}

	public update(_elapsedTime: number): void {
		// Smooth opacity interpolation based on phase
		const targetOpacity = this._getTargetOpacity();
		this._currentOpacity += (targetOpacity - this._currentOpacity) * 0.05;
		this._material.opacity = this._currentOpacity;
	}

	public destroy(): void {
		// Remove from scene
		this._lines.parent?.remove(this._lines);

		// Dispose geometry and material
		this._geometry.dispose();
		this._material.dispose();
	}

	get lines(): THREE.LineSegments {
		return this._lines;
	}
}
