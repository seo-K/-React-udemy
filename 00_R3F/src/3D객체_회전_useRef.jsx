import {OrbitControls} from "@react-three/drei";
import {useEffect, useRef} from "react";

function MyElement3D() {
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
