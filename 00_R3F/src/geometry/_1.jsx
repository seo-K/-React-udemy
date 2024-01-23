import {useControls} from "leva";

// GeomCircle
// GeomCone
// GeomRing
// GeomPlane
// GeomTorus
// GeomTorusKnot
// GeomTetrahedron
// GeomPolyhedron
// GeomIcosahedron
// GeomOctahedron
// GeomDodecahedron
// GeomExtrude
// GeomLathe
// GeomCapsule
// GeomShape

function GeomBox() {
  const {xSize, ySize, zSize, xSegments, ySegments, zSegments} = useControls({
    xSize: {value: 1, min: 0.1, max: 5, step: 0.01},
    ySize: {value: 1, min: 0.1, max: 5, step: 0.01},
    zSize: {value: 1, min: 0.1, max: 5, step: 0.01},
    xSegments: {value: 1, min: 1, max: 10, step: 1},
    ySegments: {value: 1, min: 1, max: 10, step: 1},
    zSegments: {value: 1, min: 1, max: 10, step: 1},
  });

  return (
    <>
      {/* <boxGeometry args={[x사이즈, y사이즈, z사이즈, x분할갯수, y분할갯수, z분할갯수]} /> */}
      <boxGeometry args={[xSize, ySize, zSize, xSegments, ySegments, zSegments]} />
    </>
  );
}

export default GeomBox;
