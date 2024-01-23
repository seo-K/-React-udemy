import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

function MyElement3D() {
  // Drei : R3F에서 사용할 수 있는 유용한 컴포넌트들을 모아놓은 라이브러리 입니다.
  // npm i @react-three/drei

  const refMesh = useRef();
  const refWireMesh = useRef();

  useEffect(() => {
    refWireMesh.current.geometry = refMesh.current.geometry;
    console.log(refWireMesh.current.geometry);
  }, []);

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 2, 3]} intensity={0.5} />

      <mesh ref={refMesh}>
        <boxGeometry />
        <meshStandardMaterial color="#1abc9c" />
      </mesh>

      <mesh ref={refWireMesh}>
        {/* <boxGeometry /> */}
        <meshStandardMaterial emissive="yellow" wireframe={true} />
      </mesh>
    </>
  );
}

export default MyElement3D;
