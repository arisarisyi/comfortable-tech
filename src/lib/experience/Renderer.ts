import * as THREE from 'three';
import type { Scene } from './Scene.js';
import type { Camera } from './Camera.js';
import type { Sizes } from './Sizes.js';

/**
 * Renderer - Responsible for WebGLRenderer setup and rendering
 */
export interface RendererOptions {
	antialias?: boolean;
	alpha?: boolean;
	powerPreference?: 'default' | 'high-performance' | 'low-power';
}

export class Renderer {
	private readonly _renderer: THREE.WebGLRenderer;
	private readonly _sizes: Sizes;
	private readonly _scene: Scene;
	private readonly _camera: Camera;

	constructor(canvas: HTMLCanvasElement, sizes: Sizes, scene: Scene, camera: Camera, options: RendererOptions = {}) {
		const {
			antialias = true,
			alpha = true,
			powerPreference = 'high-performance'
		} = options;

		this._sizes = sizes;
		this._scene = scene;
		this._camera = camera;

		this._renderer = new THREE.WebGLRenderer({
			canvas,
			antialias,
			alpha,
			powerPreference
		});

		this._setupRenderer();
		this._bindResizeEvents();
	}

	private _setupRenderer(): void {
		this._renderer.setPixelRatio(this._sizes.pixelRatio);
		this._renderer.setSize(this._sizes.width, this._sizes.height);
	}

	private _bindResizeEvents(): void {
		this._sizes.onResize((width: number, height: number) => {
			this._handleResize(width, height);
		});
	}

	private _handleResize(width: number, height: number): void {
		this._renderer.setSize(width, height);
		this._renderer.setPixelRatio(this._sizes.pixelRatio);
	}

	public render(): void {
		this._renderer.render(this._scene.scene, this._camera.camera);
	}

	public destroy(): void {
		this._renderer.dispose();
	}
}
