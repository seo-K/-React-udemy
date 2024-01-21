import {OrbitControls} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {useControls} from "leva";

function MyElement3D() {
  // Drei : R3F에서 사용할 수 있는 유용한 컴포넌트들을 모아놓은 라이브러리 입니다.
  // npm i @react-three/drei

  // leba :
  // npm i leva

  const refMesh = useRef();
  const refWireMesh = useRef();

  const {radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength} = useControls({
    radius: {value: 1, min: 0.1, max: 5, step: 0.01},
    widthSegments: {value: 32, min: 3, max: 256, step: 1},
    heightSegments: {value: 32, min: 2, max: 256, step: 1},
    phiStart: {value: 0, min: 0, max: 360, step: 0.1},
    phiLength: {value: 360, min: 0, max: 360, step: 0.1},
    thetaStart: {value: 0, min: 0, max: 180, step: 0.1},
    thetaLength: {value: 180, min: 0, max: 180, step: 0.1},
  });

  useEffect(() => {
    refWireMesh.current.geometry = refMesh.current.geometry;
    // console.log(refWireMesh.current.geometry);
  }, [radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength]);

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 2, 3]} intensity={0.5} />
      <mesh ref={refMesh}>
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
        <meshStandardMaterial color="#1abc9c" />
      </mesh>
      <mesh ref={refWireMesh}>
        {/* <boxGeometry /> */}
        <meshStandardMaterial emissive="yellow" wireframe={true} />
      </mesh>
      <axesHelper scale={10} />
    </>
  );
}

export default MyElement3D;
