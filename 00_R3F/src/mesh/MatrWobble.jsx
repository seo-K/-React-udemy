import * as THREE from "three";
import { MeshWobbleMaterial } from "@react-three/drei";

function MatrWobble() {
  return (
    <>
      <mesh position={[0, 0, 2]} scale={0.3}>
        <torusGeometry />
        <MeshWobbleMaterial factor={1} speed={10} color="pink" /> // factor 흔들거리는 정도, speed 흔들리는 속도
      </mesh>
    </>
  );
}

export default MatrWobble;
