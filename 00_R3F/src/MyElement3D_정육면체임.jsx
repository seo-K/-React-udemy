import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useControls } from "leva";

function MyElement3D() {
  // Drei : R3F에서 사용할 수 있는 유용한 컴포넌트들을 모아놓은 라이브러리 입니다. ex) OrbitControls [3D 카메라 컨트롤]
  // npm i @react-three/drei

  // Leva : R3F에서 사용할 수 있는 장면과 상호 작용할 수 있는 조절툴. ex) useControls
  // npm i leva

  const refMesh = useRef();
  const refWireMesh = useRef();

  const { xSize, ySize, zSize, xSegments, ySegments, zSegments } = useControls({
    // xSize : {value : 초기값, min : 최소값, max : 최대값, step :조정단위, label : 'xSize' }
    xSize: { value: 1, min: 0.1, max: 5, step: 0.01, label: "xSize" },
    ySize: { value: 1, min: 0.1, max: 5, step: 0.01, label: "ySize" },
    zSize: { value: 1, min: 0.1, max: 5, step: 0.01, label: "zSize" },
    xSegments: { value: 1, min: 1, max: 10, step: 1, label: "xSegments" },
    ySegments: { value: 1, min: 1, max: 10, step: 1, label: "ySegments" },
    zSegments: { value: 1, min: 1, max: 10, step: 1, label: "zSegments" },
  });

  useEffect(() => {
    refWireMesh.current.geometry = refMesh.current.geometry;
    console.log(refWireMesh.current.geometry);
  }, [(refWireMesh.current.geometry = refMesh.current.geometry)]);

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 2, 3]} intensity={0.5} />

      {/* 큐브 */}
      <mesh ref={refMesh}>
        <boxGeometry args={[xSize, ySize, zSize, xSegments, ySegments, zSegments]} />
        {/* <boxGeometry args={[1, 1, 1, 1, 1, 1]} /> */}
        <meshStandardMaterial color="#1abc9c" />
      </mesh>

      {/* 그물 프레임 */}
      <mesh ref={refWireMesh}>
        {/* <boxGeometry /> */}
        <meshStandardMaterial emissive="yellow" wireframe={true} />
      </mesh>
    </>
  );
}

export default MyElement3D;
