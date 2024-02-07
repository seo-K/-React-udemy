import { useControls } from "leva";

function GeomRing() {
  const { innerRadius, outerRadius, thetaSegments, phiSegments, thetaLength } = useControls({
    innerRadius: { value: 0.5, min: 0.5, max: 30, step: 1 },
    outerRadius: { value: 1, min: 1, max: 30, step: 1 },
    thetaSegments: { value: 32, min: 3, max: 30, step: 1 },
    phiSegments: { value: 1, min: 1, max: 30, step: 1 },
    thetaLength: { value: 360, min: 0, max: 360, step: 1 },
  });

  // RingGeometry (링모형)
  // - ex) RingGeometry(0.5, 1, 8, 1, 0, Math.PI X 2); // [내부반지름 , 내부반지름, 가장자리 둘레방향 분할개수, 링내부방향 분할개수, 시작각, 연장각]

  return (
    <>
      <ringGeometry args={[innerRadius, outerRadius, thetaSegments, phiSegments, thetaLength * (Math.PI / 180)]} />
    </>
  );
}

export default GeomRing;
