# Membership token

Generate the STL and matching browser mesh:

```sh
node scripts/build-membership-mesh.cjs /path/to/three
```

- Overall: 31.2 × 31.2 × 3.8625 mm.
- Front: original .ENV lettering, 0.6 mm deep with a 0.2 mm rounded lip.
- Back: plain, with no lettering.

The generator verifies closed, consistently wound manifold geometry. The corporate cube uses the same generator and also has a plain back.

The STL encodes the recess geometry, not material or finish. Request 316L stainless steel and the desired finish separately. Supplier review is still needed for the chosen process and polishing; the model is not a manufacturing approval.
