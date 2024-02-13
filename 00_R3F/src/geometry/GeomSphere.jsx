import {useControls} from "leva";

function GeomSphere() {
  const {radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength} = useControls({
    radius: {value: 1, min: 0.1, max: 5, step: 0.01},
    widthSegments: {value: 32, min: 3, max: 256, step: 1},
    heightSegments: {value: 32, min: 2, max: 256, step: 1},
    phiStart: {value: 0, min: 0, max: 360, step: 0.1},
    phiLength: {value: 360, min: 0, max: 360, step: 0.1},
    thetaStart: {value: 0, min: 0, max: 180, step: 0.1},
    thetaLength: {value: 180, min: 0, max: 180, step: 0.1},
  });

  return (
    <>
      {/* sphereGeometry = 원형 */}
      {/* 기본값 [1.2, 32, 12, 0, Math.PI, 0, Math.PI / 2)];
        [반지름(1)], 수평방향 분할 수(비치발리볼 라인) = 값이 클수록 완전한 형태의 원형(32), 수직방향 분할 수(16) , 수평방향 시작각(0), 수평방향 연장각(2PI), 수직방향 시작각(0), 수직방향 연장각(PI) */}
      <sphereGeometry
        args={[
          radius,
          widthSegments,
          heightSegments,
          phiStart * (Math.PI / 180),
          phiLength * (Math.PI / 180),
          thetaStart * (Math.PI / 180),
          thetaLength * (Math.PI / 180),
        ]}
      />
    </>
  );
}

export default GeomSphere;
