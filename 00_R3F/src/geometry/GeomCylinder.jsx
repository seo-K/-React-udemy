import {useControls} from "leva";

function GeomCylinder() {
  const {topRadius, bottomRadius, height, radialSegments, heightSegments, bottomOpen, thetaStart, thetaLength} = useControls({
    topRadius: {value: 1, min: 0.1, max: 5, step: 0.01},
    bottomRadius: {value: 1, min: 0.1, max: 5, step: 0.01},
    height: {value: 1, min: 0.1, max: 5, step: 0.01},
    radialSegments: {value: 32, min: 3, max: 256, step: 1},
    heightSegments: {value: 32, min: 1, max: 256, step: 1},
    bottomOpen: {value: true},
    thetaStart: {value: 0, min: 0.0, max: 360, step: 0.01},
    thetaLength: {value: 360, min: 0.0, max: 360, step: 0.01},
  });

  return (
    <>
      {/* CylinderGeometry  = 원통형 */}
      {/* 기본값 [1, 1, 1, 8, 1, false, 0, Math.PI X 2]
        [윗면반지름, 아랫면반지름, 높이, 둘레 분할개수, 높이 분할 개수, 밑면 여부, 시작각, 연장각] */}
      <cylinderGeometry
        args={[topRadius, bottomRadius, height, radialSegments, heightSegments, bottomOpen, thetaStart * (Math.PI / 180), thetaLength * (Math.PI / 180)]}
      />
    </>
  );
}

export default GeomCylinder;
