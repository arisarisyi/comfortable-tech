import * as THREE from 'three';

/**
 * ParticleField - Multi-layer particle system for true spatial depth
 * Creates near, mid, and far particle layers with different behaviors
 */

interface LayerConfig {
	count: number;
	spread: number;
	size: number;
	color: number;
}

interface Layer {
	points: THREE.Points;
	geometry: THREE.BufferGeometry;
	material: THREE.PointsMaterial;
	positions: Float32Array;
}

export class ParticleField {
	private readonly _scene: THREE.Scene;
	private readonly _nearLayer: Layer;
	private readonly _midLayer: Layer;
	private readonly _farLayer: Layer;

	constructor(scene: THREE.Scene) {
		this._scene = scene;

		// Create three layers for depth perception
		this._nearLayer = this._createLayer({
			count: 500,
			spread: 10,
			size: 0.03,
			color: 0x88ccff
		});

		this._midLayer = this._createLayer({
			count: 1500,
			spread: 25,
			size: 0.02,
			color: 0x66aadd
		});

		this._farLayer = this._createLayer({
			count: 3000,
			spread: 50,
			size: 0.015,
			color: 0x4488bb
		});

		// Add all layers to scene
		this._scene.add(this._nearLayer.points);
		this._scene.add(this._midLayer.points);
		this._scene.add(this._farLayer.points);
	}

	private _createLayer(config: LayerConfig): Layer {
		const { count, spread, size, color } = config;

		// Create geometry
		const geometry = new THREE.BufferGeometry();
		const positions = new Float32Array(count * 3);

		// Initialize particle positions
		for (let i = 0; i < count; i++) {
			const i3 = i * 3;
			positions[i3] = (Math.random() - 0.5) * spread * 2;     // x
			positions[i3 + 1] = (Math.random() - 0.5) * spread * 2; // y
			positions[i3 + 2] = (Math.random() - 0.5) * spread * 2; // z
		}

		// Set position attribute
		geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

		// Create material
		const material = new THREE.PointsMaterial({
			size,
			color,
			transparent: true,
			depthWrite: false,
			sizeAttenuation: true
		});

		// Create points object
		const points = new THREE.Points(geometry, material);

		return { points, geometry, material, positions };
	}

	public update(elapsedTime: number): void {
		// Near layer - fastest rotation for parallax effect
		this._nearLayer.points.rotation.y = elapsedTime * 0.15;
		this._nearLayer.points.rotation.x = elapsedTime * 0.05;

		// Mid layer - medium rotation
		this._midLayer.points.rotation.y = elapsedTime * 0.08;
		this._midLayer.points.rotation.x = elapsedTime * 0.02;

		// Far layer - slowest rotation for depth
		this._farLayer.points.rotation.y = elapsedTime * 0.03;
		this._farLayer.points.rotation.x = elapsedTime * 0.01;
	}

	public destroy(): void {
		// Remove all layers from scene
		this._scene.remove(this._nearLayer.points);
		this._scene.remove(this._midLayer.points);
		this._scene.remove(this._farLayer.points);

		// Dispose near layer
		this._nearLayer.geometry.dispose();
		this._nearLayer.material.dispose();

		// Dispose mid layer
		this._midLayer.geometry.dispose();
		this._midLayer.material.dispose();

		// Dispose far layer
		this._farLayer.geometry.dispose();
		this._farLayer.material.dispose();
	}

	get near(): THREE.Points {
		return this._nearLayer.points;
	}

	get mid(): THREE.Points {
		return this._midLayer.points;
	}

	get far(): THREE.Points {
		return this._farLayer.points;
	}

	get totalCount(): number {
		return 500 + 1500 + 3000; // 5000 total particles
	}

	get positions(): Float32Array {
		// Expose near layer positions for ConnectionField
		return this._nearLayer.positions;
	}
}
