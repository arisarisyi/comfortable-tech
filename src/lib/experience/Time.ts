/**
 * Time - Responsible for animation loop and delta time calculation
 */
export type TimeTickListener = (deltaTime: number, elapsedTime: number) => void;

export interface TimeOptions {
	startTime?: number;
}

export class Time {
	private readonly _listeners: Set<TimeTickListener> = new Set();
	private _currentTime: number;
	private _elapsedTime: number;
	private _deltaTime: number;
	private _animationFrameId: number | null = null;
	private _isRunning: boolean = false;

	constructor(options: TimeOptions = {}) {
		this._currentTime = options.startTime ?? 0;
		this._elapsedTime = options.startTime ?? 0;
		this._deltaTime = 0;
	}

	get deltaTime(): number {
		return this._deltaTime;
	}

	get elapsedTime(): number {
		return this._elapsedTime;
	}

	get isRunning(): boolean {
		return this._isRunning;
	}

	public onTick(callback: TimeTickListener): () => void {
		this._listeners.add(callback);

		// Return unsubscribe function
		return () => {
			this._listeners.delete(callback);
		};
	}

	public start(): void {
		if (this._isRunning) {
			return;
		}

		this._isRunning = true;
		this._currentTime = performance.now();
		this._tick();
	}

	public stop(): void {
		this._isRunning = false;

		if (this._animationFrameId !== null) {
			cancelAnimationFrame(this._animationFrameId);
			this._animationFrameId = null;
		}
	}

	private _tick = (): void => {
		if (!this._isRunning) {
			return;
		}

		const currentTime = performance.now();
		this._deltaTime = (currentTime - this._currentTime) / 1000;
		this._currentTime = currentTime;
		this._elapsedTime += this._deltaTime;

		// Notify all listeners
		for (const listener of this._listeners) {
			listener(this._deltaTime, this._elapsedTime);
		}

		this._animationFrameId = requestAnimationFrame(this._tick);
	};

	public destroy(): void {
		this.stop();
		this._listeners.clear();
	}
}
