import * as THREE from "three";
import { MeshTransmissionMaterial, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

function Material_MatrTransmission() {
  const config = useControls({
    transmissionSampler: false, // transmissionSampler, 모든 투과 재료에 대해 한 번 생성되는 threejs 투과 샘플러 텍스처를 사용할 수 있습니다. 장점은 여러 MeshPhysical 및 Transmission 재료를 사용하는 경우 더 빠를 수 있지만, 이를 사용하는 투과 재료는 다른 투명 또는 투과 객체를 볼 수 없으며 버퍼 및 해상도에 대한 제어가 불가능합니다. 기본값: false
    backside: false,
    samples: { value: 10, min: 1, max: 32, step: 1 }, // 굴절 샘플, 기본값: 6
    resolution: { value: 2048, min: 256, max: 2048, step: 256 },
    transmission: { value: 1, min: 0, max: 1 }, // 투과도, 기본값: 1
    roughness: { value: 0.0, min: 0, max: 1, step: 0.01 }, // 거칠기 (흐림), 기본값: 0
    thickness: { value: 0.5, min: 0, max: 1, step: 0.01 }, // 두께 (굴절), 기본값: 0
    ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0.06, min: 0, max: 1 }, // 색차, 기본값: 0.03
    anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.0, min: 0, max: 1, step: 0.01 }, // 왜곡, 기본값: 0
    distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 }, // 왜곡 스케일, 기본값: 0.5
    temporalDistortion: { value: 0.5, min: 0.01, max: 1, step: 0.01 }, // 시간적 왜곡 (이동 속도), 기본값: 0.0
    clearcoat: { value: 1, min: 0, max: 1 },
    attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
    attenuationColor: "#ffffff",
    color: "#c9ffa1",
    bg: "#839681", // 장면 배경 버퍼 (텍스처, 큐브 텍스처 또는 색상일 수 있음), 기본값: null
  });

  return (
    <>
      {/* 마우스&휠 컨트롤러 */}
      <OrbitControls />

      {/* 카메라와 광원 */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[2, 2, 3]} />
      <directionalLight position={[1, 2, 8]} intensity={0.5} />

      <mesh position={[6, 0, 0]}>
        <sphereGeometry args={[1.4, 128, 128]} />
        <MeshTransmissionMaterial {...config} background={new THREE.Color(config.bg)} color={new THREE.Color(config.color)} />
      </mesh>
      <mesh position={[6, 0, 0]} scale={0.3}>
        <torusGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}

export default Material_MatrTransmission;
