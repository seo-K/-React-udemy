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

  const {xSize, ySize, zSize, xSegments, ySegments, zSegments} = useControls({
    xSize: {value: 1, min: 0.1, max: 5, step: 0.01},
    ySize: {value: 1, min: 0.1, max: 5, step: 0.01},
    zSize: {value: 1, min: 0.1, max: 5, step: 0.01},
    xSegments: {value: 1, min: 1, max: 10, step: 1},
    ySegments: {value: 1, min: 1, max: 10, step: 1},
    zSegments: {value: 1, min: 1, max: 10, step: 1},
  });

  useEffect(() => {
    refWireMesh.current.geometry = refMesh.current.geometry;
    // console.log(refWireMesh.current.geometry);
  }, [xSize, ySize, zSize, xSegments, ySegments, zSegments]);

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 2, 3]} intensity={0.5} />
      <mesh ref={refMesh}>
        {/* 추가 */}
        {/* <boxGeometry args={[x사이즈, y사이즈, z사이즈, x분할갯수, y분할갯수, z분할갯수]} /> */}
        <boxGeometry args={[xSize, ySize, zSize, xSegments, ySegments, zSegments]} />
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
