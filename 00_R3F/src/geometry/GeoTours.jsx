import { useControls } from "leva";

function GeoTours() {
  const { radius, tube, radialSegments, tubularSegments, arc } = useControls({
    radius: { value: 1, min: 1, max: 20, step: 1 },
    tube: { value: 0.4, min: 0.1, max: 10, step: 0.1 },
    radialSegments: { value: 12, min: 3, max: 30, step: 1 },
    tubularSegments: { value: 15, min: 1, max: 200, step: 1 },
    arc: { value: 360, min: 0, max: 360, step: 1 },
  });

  // RingGeometry (링모형)
  // - ex) RingGeometry(0.5, 1, 8, 1, 0, Math.PI X 2); // [내부반지름 , 내부반지름, 가장자리 둘레방향 분할개수, 링내부방향 분할개수, 시작각, 연장각]

  return (
    <>
      <torusGeometry args={[radius, tube, radialSegments, tubularSegments, arc * (Math.PI / 180)]} />
    </>
  );
}

export default GeoTours;
