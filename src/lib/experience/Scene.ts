import * as THREE from 'three';

/**
 * Scene - Responsible for creating and managing the THREE.Scene
 */
export class Scene {
	private readonly _scene: THREE.Scene;

	constructor() {
		this._scene = new THREE.Scene();
		this._setupScene();
	}

	private _setupScene(): void {
		// Set a background color for validation
		this._scene.background = new THREE.Color(0x1a1a2e);
	}

	get scene(): THREE.Scene {
		return this._scene;
	}

	public destroy(): void {
		// Clear the scene
		this._scene.clear();
	}
}
