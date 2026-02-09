import * as THREE from 'three';
import type { Experience } from '$lib/experience/Experience.js';
import { ParticleField } from './ParticleField.js';
import { ConnectionField } from './ConnectionField.js';
import { SignalField } from './SignalField.js';
import { ExperiencePhase } from '$lib/experience/Phase.js';

/**
 * World - Abstraction layer for scene content
 * Responsible for creating, updating, and destroying 3D objects
 */
export class World {
	private readonly _scene: THREE.Scene;
	private readonly _ambientLight: THREE.AmbientLight;
	private readonly _directionalLight: THREE.DirectionalLight;
	private readonly _particleField: ParticleField;
	private readonly _connectionField: ConnectionField;
	private readonly _signalField: SignalField;

	constructor(experience: Experience) {
		this._scene = experience.scene.scene;

		// Create lighting
		this._ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
		this._scene.add(this._ambientLight);

		this._directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		this._directionalLight.position.set(5, 5, 5);
		this._scene.add(this._directionalLight);

		// Create particle field
		this._particleField = new ParticleField(this._scene);

		// Create connection field using near layer positions
		this._connectionField = new ConnectionField(this._scene, this._particleField.positions);

		// Create signal field using connection line positions
		this._signalField = new SignalField(this._scene, this._connectionField.linePositions);
	}

	public update(elapsedTime: number): void {
		// Update all objects in the world
		this._particleField.update(elapsedTime);
		this._connectionField.update(elapsedTime);
		this._signalField.update(elapsedTime);
	}

	public destroy(): void {
		// Destroy all objects
		this._signalField.destroy();
		this._connectionField.destroy();
		this._particleField.destroy();

		// Remove and dispose lights
		this._scene.remove(this._ambientLight);
		this._scene.remove(this._directionalLight);
		this._ambientLight.dispose();
		this._directionalLight.dispose();
	}

	public setPhase(phase: ExperiencePhase): void {
		this._connectionField.setPhase(phase);
	}
}
