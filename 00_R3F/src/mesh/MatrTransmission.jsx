import * as THREE from "three";
import { OrbitControls, CubeCamera, MeshRefractionMaterial } from "@react-three/drei";
import { useControls } from "leva";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";

function MatrTransmission() {
  const texture = useLoader(RGBELoader, "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr");

  return (
    <>
      {/* 마우스&휠 컨트롤러 */}
      <OrbitControls />
      <MeshTransmissionMaterial envMap={texture} toneMapped={false} {...config} />
    </>
  );
}

export default MatrTransmission;
