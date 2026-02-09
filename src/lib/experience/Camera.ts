import * as THREE from 'three';

/**
 * Camera - Responsible for PerspectiveCamera setup and resize handling
 */
export interface CameraOptions {
	fov?: number;
	near?: number;
	far?: number;
	position?: THREE.Vector3Tuple;
}

export class Camera {
	private readonly _camera: THREE.PerspectiveCamera;

	constructor(options: CameraOptions = {}) {
		const { fov = 75, near = 0.1, far = 100, position = [0, 0, 5] } = options;

		this._camera = new THREE.PerspectiveCamera(fov, 1, near, far);
		this._camera.position.set(...position);
	}

	get camera(): THREE.PerspectiveCamera {
		return this._camera;
	}

	public resize(width: number, height: number): void {
		const aspect = width / height;
		this._camera.aspect = aspect;
		this._camera.updateProjectionMatrix();
	}

	public destroy(): void {
		// Camera cleanup if needed
	}
}
