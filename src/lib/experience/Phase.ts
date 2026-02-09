import type { Scroll } from './Scroll.js';

/**
 * ExperiencePhase - Defines phases of the user journey
 */
export enum ExperiencePhase {
	INTRO = 0,
	FULLSTACK = 1,
	SECURITY = 2,
	IOT = 3,
	CONTACT = 4
}

/**
 * Phase - Maps scroll progress to experience phases
 * Driven by scroll position for section transitions
 */
export class Phase {
	private readonly _scroll: Scroll;
	private _current: ExperiencePhase;
	private _previous: ExperiencePhase;
	private readonly _phaseThresholds: readonly number[];

	constructor(scroll: Scroll) {
		this._scroll = scroll;
		this._current = ExperiencePhase.INTRO;
		this._previous = ExperiencePhase.INTRO;
		this._phaseThresholds = [0.2, 0.4, 0.6, 0.8] as const;

		// Initialize phase based on current scroll position
		this._updatePhase();
	}

	private _updatePhase(): void {
		const progress = this._scroll.progress;

		// Map scroll progress to phase
		if (progress < this._phaseThresholds[0]!) {
			this._current = ExperiencePhase.INTRO;
		} else if (progress < this._phaseThresholds[1]!) {
			this._current = ExperiencePhase.FULLSTACK;
		} else if (progress < this._phaseThresholds[2]!) {
			this._current = ExperiencePhase.SECURITY;
		} else if (progress < this._phaseThresholds[3]!) {
			this._current = ExperiencePhase.IOT;
		} else {
			this._current = ExperiencePhase.CONTACT;
		}

		// Log phase change (temporary debug)
		if (this._current !== this._previous) {
			console.log(`Phase changed: ${ExperiencePhase[this._previous]} → ${ExperiencePhase[this._current]}`);
			this._previous = this._current;
		}
	}

	public update(): void {
		this._updatePhase();
	}

	get current(): ExperiencePhase {
		return this._current;
	}

	get progress(): number {
		return this._scroll.progress;
	}

	public destroy(): void {
		// No resources to clean up
		// Scroll is owned by Experience
	}
}
