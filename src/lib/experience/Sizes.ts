/**
 * Sizes - Responsible for tracking viewport dimensions and resize events
 */
export type SizesListener = (width: number, height: number) => void;

export interface SizesOptions {
	width?: number;
	height?: number;
	pixelRatio?: number;
}

export class Sizes {
	private readonly _listeners: Set<SizesListener> = new Set();
	private _width: number;
	private _height: number;
	private _pixelRatio: number;

	constructor(options: SizesOptions = {}) {
		this._width = options.width ?? window.innerWidth;
		this._height = options.height ?? window.innerHeight;
		this._pixelRatio = options.pixelRatio ?? Math.min(window.devicePixelRatio, 2);

		this._bindResizeEvents();
	}

	get width(): number {
		return this._width;
	}

	get height(): number {
		return this._height;
	}

	get pixelRatio(): number {
		return this._pixelRatio;
	}

	public onResize(callback: SizesListener): () => void {
		this._listeners.add(callback);

		// Return unsubscribe function
		return () => {
			this._listeners.delete(callback);
		};
	}

	private _bindResizeEvents(): void {
		window.addEventListener('resize', this._handleResize);
	}

	private _handleResize = (): void => {
		this._width = window.innerWidth;
		this._height = window.innerHeight;

		// Notify all listeners
		for (const listener of this._listeners) {
			listener(this._width, this._height);
		}
	};

	public destroy(): void {
		window.removeEventListener('resize', this._handleResize);
		this._listeners.clear();
	}
}
