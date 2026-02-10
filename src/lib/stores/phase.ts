import { writable } from 'svelte/store';
import type { ExperiencePhase } from '$lib/experience/Phase.js';

export const phaseStore = writable<ExperiencePhase>(0);
