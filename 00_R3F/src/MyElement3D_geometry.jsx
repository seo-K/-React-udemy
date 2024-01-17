import {Box, OrbitControls} from "@react-three/drei";
import * as THREE from "three";

function MyBox(props) {
  const geom = new THREE.BoxGeometry();

  return <mesh {...props} geometry={geom}></mesh>;
}

function MyElement3D() {
  // Drei : R3F에서 사용할 수 있는 유용한 컴포넌트들을 모아놓은 라이브러리 입니다.
  // npm i @react-three/drei

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 2, 3]} intensity={0.5} />

      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="#1abc9c" />
      </mesh>

      <Box position={[1.2, 0, 0]}>
        <meshStandardMaterial color="#8e44ad" />
      </Box>

      <MyBox position={[-1.2, 0, 0]}>
        <meshStandardMaterial color="#e74c3c" />
      </MyBox>
    </>
  );
}

export default MyElement3D;
