import { CubeCamera, MeshTransmissionMaterial, OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";

function Material_MeshTransmissionMaterial({ selectedGeometry, selectedMesh }) {
  const texture = useLoader(RGBELoader, "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr");

  return (
    <>
      {/* 마우스&휠 컨트롤러 */}
      <OrbitControls />

      {/* 카메라와 광원 */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[2, 2, 3]} />
      <directionalLight position={[1, 2, 8]} intensity={0.5} />

      <mesh>
        <SphereGeometry args={[1.4, 128, 128]} />
        <meshStandardMaterial transparent={true} opacity={0.2} />
      </mesh>
      <mesh scale={0.3}>
        <torusGeometry args={[0.5, 0.2, 32]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}

export default Material_MeshTransmissionMaterial;
