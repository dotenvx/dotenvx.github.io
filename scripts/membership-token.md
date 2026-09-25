# Membership token

Generate the STL and matching browser mesh:

```sh
node scripts/build-membership-mesh.cjs /path/to/three
```

- Overall: 31.2 × 31.2 × 3.8625 mm.
- Front: original .ENV lettering, 0.6 mm deep with a 0.2 mm rounded lip.
- Back: centered SM, 12.6642 mm wide × 7 mm overall height, 0.8 mm deep with a 0.2 mm rounded lip.
- Initials use bold contours stored in physical millimeters in membership-token-design.json. The back is mirrored in model X so it reads correctly when viewed from behind.
- Sampled normal sections through the long letter strokes: minimum 1.475 mm for S, 1.057 mm for M. The rounded lip widens the opening; it does not narrow the recess floor.
- Conservative material remaining between opposing engravings: 2.4625 mm.
- Initials derived from Helvetiker Bold in Three.js; see membership-initials-font-LICENSE.

The generator verifies closed, consistently wound manifold geometry. The corporate cube uses the same generator but does not include the back initials. Its output is unchanged.

The STL encodes the recess geometry, not material or finish. Request 316L stainless steel and the desired finish separately. Supplier review is still needed for the chosen process and polishing; the model is not a manufacturing approval.
