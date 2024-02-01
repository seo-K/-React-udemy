import * as THREE from "three";
import { OrbitControls, CubeCamera, MeshRefractionMaterial } from "@react-three/drei";
import { useControls } from "leva";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";

function MatrRefraction({ meshColor }) {
  const texture = useLoader(RGBELoader, "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr");

  const config = useControls({
    transmissionSampler: false,
    backside: false,
    samples: { value: 10, min: 1, max: 32, step: 1 },
    resolution: { value: 2048, min: 256, max: 2048, step: 256 },
    transmission: { value: 0.5, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0.5, min: 0, max: 1, step: 0.01 },
    thickness: { value: 0.5, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.5, min: 1, max: 3, step: 0.01 },
    chromaticAberration: { value: 0.01, min: 0, max: 1, step: 0.01 },
    anisotropy: { value: 0, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 1, min: 0, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 0, min: 0, max: 1, step: 0.01 },
    attenuationDistance: { value: 0, min: 0, max: 1, step: 0.01 },
    attenuationColor: "#ffffff",
    color: "#c9ffa1",
    bg: "#839681",
  });
  return (
    <>
      {/* 마우스&휠 컨트롤러 */}
      <OrbitControls />

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

export default MatrRefraction;
