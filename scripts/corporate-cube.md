# Corporate silver-finish desk cube

```sh
node scripts/build-corporate-cube.cjs /absolute/path/to/three
```

The `corporate-cube.stl` download contains the desk cube.
The browser uses the identical solid geometry.

- 50 × 50 × 50 mm overall, in millimeters.
- Solid body, with a consistent 3 mm radius on all twelve edges and spherical corner transitions; broad flat faces for standing on a desk.
- `.ENV` recessed 1.5 mm into one face, with 0.4 mm rounded lips.
- Lettering, edge construction, and export validation shared with the membership token.

The preview uses exactly the same silver material and darker recessed lettering
as the membership token. Color and finish are not STL features.
Confirm the metal and finish with the fabricator before ordering.

## Current solid tier exports

These files halve the volume at each tier, starting from the 4-inch Steward IV.
All STL coordinates are millimeters. They are solid, not hollow.

| Tier | File | Side length |
| --- | --- | --- |
| Steward I | `corporate-cube-steward-i-solid.stl` | 50.8 mm / 2 inches |
| Steward II | `corporate-cube-steward-ii-solid.stl` | 64.004 mm / 2.520 inches |
| Steward III | `corporate-cube-steward-iii-solid.stl` | 80.640 mm / 3.175 inches |
| Steward IV | `corporate-cube-steward-iv-solid.stl` | 101.6 mm / 4 inches |

The original `corporate-cube.stl` remains the 50 mm source geometry for the preview and scaled exports.
