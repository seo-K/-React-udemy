import { CubeCamera, MeshRefractionMaterial, OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";

function Material_MeshRefractionMaterial({ selectedGeometry, selectedMesh }) {
  const texture = useLoader(RGBELoader, "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr");

  return (
    <>
      {/* 마우스&휠 컨트롤러 */}
      <OrbitControls />

      {/* 카메라와 광원 */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[2, 2, 3]} />
      <directionalLight position={[1, 2, 8]} intensity={0.5} />

      <CubeCamera resolution={128} frames={1} envMap={texture}>
        {(texture) => (
          <mesh>
            <dodecahedronGeometry />
            <MeshRefractionMaterial envMap={texture} toneMapped={false} bounces={2} aberrationStrength={0.03} ior={2.75} fresnel={1} fastChroma="true" />
          </mesh>
        )}
      </CubeCamera>
    </>
  );
}

export default Material_MeshRefractionMaterial;
