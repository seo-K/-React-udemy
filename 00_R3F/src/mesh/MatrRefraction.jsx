import * as THREE from "three";
import { CubeCamera, MeshRefractionMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";

function MatrRefraction() {
  const texture = useLoader(RGBELoader, "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr");

  return (
    <>
      <CubeCamera resolution={128} frames={1} envMap={texture}>
        {(texture) => (
          <mesh position={[0, 0, 2]}>
            <dodecahedronGeometry />
            <MeshRefractionMaterial envMap={texture} toneMapped={false} bounces={2} aberrationStrength={0.03} ior={2.75} fresnel={1} fastChroma="true" />
          </mesh>
        )}
      </CubeCamera>
    </>
  );
}

export default MatrRefraction;
