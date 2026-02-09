/**
 * Mouse - Tracks mouse position normalized to -0.5 to +0.5 range
 * Used for parallax camera effects
 */
export class Mouse {
	private _x: number = 0;
	private _y: number = 0;
	private readonly _handleMouseMove: (event: MouseEvent) => void;

	constructor() {
		// Bind the handler once to avoid creating new functions
		this._handleMouseMove = this._onMouseMove.bind(this);

		// Start listening to mouse events
		window.addEventListener('mousemove', this._handleMouseMove);
	}

	private _onMouseMove(event: MouseEvent): void {
		// Normalize to -0.5 to +0.5 range
		this._x = event.clientX / window.innerWidth - 0.5;
		this._y = event.clientY / window.innerHeight - 0.5;
	}

	get x(): number {
		return this._x;
	}

	get y(): number {
		return this._y;
	}

	public destroy(): void {
		// Remove event listener
		window.removeEventListener('mousemove', this._handleMouseMove);
	}
}
