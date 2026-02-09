Sprint 10 — Implement Experience Phase System.

GOAL:

Create phase system driven by scroll progress.

This will allow experience to transition between sections.

CREATE FILE:

src/lib/experience/Phase.ts

DEFINE ENUM:

export enum ExperiencePhase
{
INTRO = 0,
FULLSTACK = 1,
SECURITY = 2,
IOT = 3,
CONTACT = 4
}

CREATE CLASS:

export default class Phase
{
current: ExperiencePhase
progress: number

    constructor(scroll: Scroll)

    update()

    destroy()

}

---

IMPLEMENTATION:

Phase must read scroll.progress.

Map scroll.progress to phase:

if progress < 0.2 → INTRO
else if progress < 0.4 → FULLSTACK
else if progress < 0.6 → SECURITY
else if progress < 0.8 → IOT
else → CONTACT

Store current phase.

Also store raw progress.

---

MODIFY Experience.ts

Add:

this.phase = new Phase(this.scroll)

Inside update():

this.phase.update()

Destroy lifecycle:

this.phase.destroy()

---

DEBUG REQUIREMENT (temporary):

console.log(this.phase.current)

Verify phase changes while scrolling.

---

EXPECTED RESULT:

Scrolling down changes phase:

0 → INTRO
1 → FULLSTACK
2 → SECURITY
3 → IOT
4 → CONTACT

Strict TypeScript required.

No memory leaks.
