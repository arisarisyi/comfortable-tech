Sprint 13 — Convert SignalField to line-bound signal pulses.

GOAL:

Signals must travel along connection lines.

Not free-floating.

---

MODIFY ConnectionField.ts

Expose line positions:

public readonly linePositions: Float32Array

Store geometry position attribute array.

Example:

this.linePositions =
geometry.attributes.position.array as Float32Array

---

MODIFY SignalField.ts

Constructor must receive linePositions:

constructor(
scene: THREE.Scene,
linePositions: Float32Array
)

---

Each signal must store:

lineIndex: number
progress: number
speed: number

Use arrays:

this.progress = new Float32Array(count)
this.lineIndices = new Uint16Array(count)
this.speeds = new Float32Array(count)

---

INITIALIZE:

Random lineIndex:

lineIndices[i] =
Math.floor(Math.random() \* lineCount)

progress[i] = Math.random()

speed[i] = 0.2 → 0.6

---

UPDATE LOGIC:

For each signal:

progress += speed \* deltaTime

If progress > 1:

progress = 0
pick new random lineIndex

Compute position using LERP:

const startIndex = lineIndex \* 6
const endIndex = startIndex + 3

sx, sy, sz = linePositions[startIndex]
ex, ey, ez = linePositions[endIndex]

px = sx + (ex - sx) _ progress
py = sy + (ey - sy) _ progress
pz = sz + (ez - sz) \* progress

Store in positions array.

Mark geometry attribute needs update:

geometry.attributes.position.needsUpdate = true

---

WORLD INTEGRATION:

Modify World.ts

Pass linePositions:

this.signalField =
new SignalField(
scene,
this.connectionField.linePositions
)

---

EXPECTED RESULT:

Signals travel along connection lines.

Looks like real data flow.

Strong engineering realism.

Matches IoT, network, and security visualization.
