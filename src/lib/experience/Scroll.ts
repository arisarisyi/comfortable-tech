/**
 * Scroll - Smooth scroll tracking system
 * Provides normalized scroll progress (0 to 1) with smooth interpolation
 */
export class Scroll {
	private _current: number = 0;
	private _target: number = 0;
	private _progress: number = 0;
	private readonly _handleScroll: () => void;

	constructor() {
		// Bind the handler once to avoid creating new functions
		this._handleScroll = this._onScroll.bind(this);

		// Start listening to scroll events
		window.addEventListener('scroll', this._handleScroll, { passive: true });

		// Initialize target with current scroll position
		this._target = window.scrollY;
		this._current = this._target;
		this._updateProgress();
	}

	private _onScroll(): void {
		// Update target scroll position
		this._target = window.scrollY;
	}

	private _updateProgress(): void {
		// Calculate total scrollable height
		const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

		// Normalize progress to 0-1 range
		this._progress = scrollHeight > 0
			? Math.max(0, Math.min(1, this._current / scrollHeight))
			: 0;
	}

	public update(): void {
		// Smooth interpolation towards target
		this._current += (this._target - this._current) * 0.1;

		// Update normalized progress
		this._updateProgress();

		// Temporary debug - can be removed after testing
		console.log(`Scroll progress: ${this._progress.toFixed(3)}`);
	}

	get current(): number {
		return this._current;
	}

	get target(): number {
		return this._target;
	}

	get progress(): number {
		return this._progress;
	}

	public destroy(): void {
		// Remove scroll listener
		window.removeEventListener('scroll', this._handleScroll);
	}
}
