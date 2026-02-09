import * as THREE from 'three';

/**
 * TestObject - Simple rotating cube for validating the World system
 */
export class TestObject {
	private readonly _mesh: THREE.Mesh;
	private readonly _geometry: THREE.BoxGeometry;
	private readonly _material: THREE.MeshStandardMaterial;

	constructor(scene: THREE.Scene) {
		// Create geometry
		this._geometry = new THREE.BoxGeometry(1, 1, 1);

		// Create material
		this._material = new THREE.MeshStandardMaterial({
			color: 0x00ff88,
			metalness: 0.3,
			roughness: 0.4
		});

		// Create mesh
		this._mesh = new THREE.Mesh(this._geometry, this._material);

		// Add to scene
		scene.add(this._mesh);
	}

	public update(elapsedTime: number): void {
		// Rotate cube slowly over time
		this._mesh.rotation.y = elapsedTime * 0.5;
	}

	public destroy(): void {
		// Remove mesh from scene
		this._mesh.parent?.remove(this._mesh);

		// Dispose geometry and material
		this._geometry.dispose();
		this._material.dispose();
	}
}
