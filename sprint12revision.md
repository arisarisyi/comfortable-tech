Fix SignalField visibility and immersion.

MODIFY SignalField.ts

CHANGE signal count:

from:
this.\_count = 200

to:
this.\_count = 600

---

CHANGE bounds:

from:
this.\_bounds = 50

to:
this.\_bounds = 25

---

CHANGE PointsMaterial:

from:
size: 0.05,
opacity: 0.9

to:

size: 0.12,
opacity: 1.0,
blending: THREE.AdditiveBlending,
depthWrite: false

---

EXPECTED RESULT:

Signal pulses now clearly visible.

Glowing dots moving through network.

Strong engineering and IoT visual identity.

Immersive signal flow effect.
