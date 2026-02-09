import { Sizes } from './Sizes.js';
import { Time } from './Time.js';
import { Scene } from './Scene.js';
import { Camera } from './Camera.js';
import { Renderer } from './Renderer.js';
import { Mouse } from './Mouse.js';
import { Scroll } from './Scroll.js';
import { Phase } from './Phase.js';
import { CameraController } from './CameraController.js';
import { World } from '$lib/world/World.js';

/**
 * Experience - Central controller for the WebGL experience
 * Coordinates all components and manages the update loop
 */
export interface ExperienceOptions {
	canvas: HTMLCanvasElement;
}

export class Experience {
	private readonly _canvas: HTMLCanvasElement;
	private readonly _sizes: Sizes;
	private readonly _time: Time;
	private readonly _scene: Scene;
	private readonly _camera: Camera;
	private readonly _mouse: Mouse;
	private readonly _scroll: Scroll;
	private readonly _phase: Phase;
	private readonly _cameraController: CameraController;
	private readonly _renderer: Renderer;
	private readonly _world: World;
	private readonly _resizeUnsubscribe: () => void;
	private readonly _tickUnsubscribe: () => void;

	constructor(options: ExperienceOptions) {
		this._canvas = options.canvas;

		// Initialize components
		this._sizes = new Sizes();
		this._time = new Time();
		this._scene = new Scene();
		this._camera = new Camera();
		this._mouse = new Mouse();
		this._scroll = new Scroll();
		this._phase = new Phase(this._scroll);
		this._cameraController = new CameraController(this._camera.camera, this._mouse, this._scroll);
		this._renderer = new Renderer(this._canvas, this._sizes, this._scene, this._camera);
		this._world = new World(this);

		// Set up event listeners
		this._resizeUnsubscribe = this._sizes.onResize((width: number, height: number) => {
			this._handleResize(width, height);
		});

		this._tickUnsubscribe = this._time.onTick((deltaTime: number) => {
			this._update(deltaTime);
		});

		// Initialize and start
		this.init();
	}

	get sizes(): Sizes {
		return this._sizes;
	}

	get time(): Time {
		return this._time;
	}

	get scene(): Scene {
		return this._scene;
	}

	get camera(): Camera {
		return this._camera;
	}

	get scroll(): Scroll {
		return this._scroll;
	}

	get phase(): Phase {
		return this._phase;
	}

	get renderer(): Renderer {
		return this._renderer;
	}

	public init(): void {
		// Start the animation loop
		this._time.start();
	}

	private _update(_deltaTime: number): void {
		// Update scroll tracking
		this._scroll.update();

		// Update phase based on scroll progress
		this._phase.update();

		// Update camera controller for smooth motion
		this._cameraController.update(this._time.elapsedTime);

		// Update world with elapsed time
		this._world.update(this._time.elapsedTime);

		// Render the scene
		this._renderer.render();
	}

	private _handleResize(width: number, height: number): void {
		// Update camera on resize
		this._camera.resize(width, height);
	}

	public destroy(): void {
		// Stop animation loop
		this._time.stop();

		// Unsubscribe from events
		this._resizeUnsubscribe();
		this._tickUnsubscribe();

		// Destroy components in reverse order
		this._world.destroy();
		this._renderer.destroy();
		this._cameraController.destroy();
		this._phase.destroy();
		this._scroll.destroy();
		this._mouse.destroy();
		this._camera.destroy();
		this._scene.destroy();
		this._time.destroy();
		this._sizes.destroy();
	}
}
