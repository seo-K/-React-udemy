import * as THREE from "three";
import { MeshDistortMaterial } from "@react-three/drei";

function MatrDistort() {
  return (
    <>
      <mesh position={[0, 0, 2]}>
        <torusGeometry color="blue" />
        <MeshDistortMaterial distort={0.3} speed={5} />
      </mesh>
    </>
  );
}

export default MatrDistort;
