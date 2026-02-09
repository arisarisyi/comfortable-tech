Sprint 9 — Implement ConnectionField system for network visualization.

GOAL:

Create dynamic connection lines between nearby particles.

This transforms particle field into network visualization.

CREATE FILE:

src/lib/world/ConnectionField.ts

CLASS STRUCTURE:

class ConnectionField
{
lines: THREE.LineSegments

    constructor(
        scene: THREE.Scene,
        particlePositions: Float32Array
    )

    update(elapsedTime: number)

    destroy()

}

---

IMPORTANT:

ConnectionField must use particle positions from ParticleField.

Modify ParticleField.ts:

Expose positions array:

this.positions = positions

Make it public readonly.

---

CONNECTION REQUIREMENTS:

Loop through particles.

For each particle:

check distance to nearby particles.

If distance < threshold:

create line between them.

Use threshold:

distance < 2.5

LIMIT connections per particle to avoid performance issues:

maxConnections = 3

---

GEOMETRY REQUIREMENTS:

Use BufferGeometry.

Store line positions in Float32Array.

Example:

linePositions = new Float32Array(maxLines \* 6)

(each line = 2 points = 6 floats)

---

MATERIAL REQUIREMENTS:

Use LineBasicMaterial:

color: light blue
transparent: true
opacity: 0.2

---

CREATE LINE OBJECT:

this.lines = new THREE.LineSegments(
geometry,
material
)

Add to scene.

---

WORLD INTEGRATION:

Modify World.ts

Add:

this.connectionField =
new ConnectionField(
scene,
this.particleField.positions
)

Update:

this.connectionField.update(elapsedTime)

Destroy:

this.connectionField.destroy()

---

PERFORMANCE REQUIREMENTS:

Limit total lines to max 5000.

DO NOT recompute every frame.

Compute once in constructor.

Only animate slight rotation in update:

this.lines.rotation.y = elapsedTime \* 0.02

---

EXPECTED RESULT:

Particles now connected with lines.

Looks like network topology.

Strong engineering visual identity.

Matches tech company aesthetic.
