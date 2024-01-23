import {Box, OrbitControls} from "@react-three/drei";
import * as THREE from "three";

function MyBox(props) {
  const geom = new THREE.BoxGeometry();

  return <mesh {...props} geometry={geom}></mesh>;
}

function MyElement3D() {
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
