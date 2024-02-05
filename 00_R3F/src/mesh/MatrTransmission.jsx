import * as THREE from "three";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useControls } from "leva";

function MatrTransmission() {
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

  // type MeshTransmissionMaterialProps = JSX.IntrinsicElements['meshPhysicalMaterial'] & {
  //   /* Transmission, default: 1 */
  //   transmission?: number // 투과도, 기본값: 1
  //   /* Thickness (refraction), default: 0 */
  //   thickness?: number // 두께 (굴절), 기본값: 0
  //   /** Backside thickness (when backside is true), default: 0 */
  //   backsideThickness?: number // 뒷면 두께 (backside가 true일 때), 기본값: 0
  //   /* Roughness (blur), default: 0 */
  //   roughness?: number // 거칠기 (흐림), 기본값: 0
  //   /* Chromatic aberration, default: 0.03 */
  //   chromaticAberration?: number // 색차, 기본값: 0.03
  //   /* Anisotropy, default: 0.1 */
  //   anisotropicBlur?: number // 이방성 흐림, 기본값: 0.1
  //   /* Distortion, default: 0 */
  //   distortion?: number // 왜곡, 기본값: 0
  //   /* Distortion scale, default: 0.5 */
  //   distortionScale?: number // 왜곡 스케일, 기본값: 0.5
  //   /* Temporal distortion (speed of movement), default: 0.0 */
  //   temporalDistortion?: number // 시간적 왜곡 (이동 속도), 기본값: 0.0
  //   /** The scene rendered into a texture (use it to share a texture between materials), default: null  */
  //   buffer?: THREE.Texture // 텍스처로 렌더링된 장면 (재료간에 텍스처를 공유하는 데 사용), 기본값: null
  //   /** transmissionSampler, you can use the threejs transmission sampler texture that is
  //    *  generated once for all transmissive materials. The upside is that it can be faster if you
  //    *  use multiple MeshPhysical and Transmission materials, the downside is that transmissive materials
  //    *  using this can't see other transparent or transmissive objects nor do you have control over the
  //    *  buffer and its resolution, default: false */
  //   transmissionSampler?: boolean // transmissionSampler, 모든 투과 재료에 대해 한 번 생성되는 threejs 투과 샘플러 텍스처를 사용할 수 있습니다. 장점은 여러 MeshPhysical 및 Transmission 재료를 사용하는 경우 더 빠를 수 있지만, 이를 사용하는 투과 재료는 다른 투명 또는 투과 객체를 볼 수 없으며 버퍼 및 해상도에 대한 제어가 불가능합니다. 기본값: false
  //   /** Render the backside of the material (more cost, better results), default: false */
  //   backside?: boolean // 재료의 뒷면 렌더링 (비용이 더 들지만 더 나은 결과), 기본값: false
  //   /** Resolution of the local buffer, default: undefined (fullscreen) */
  //   resolution?: number // 로컬 버퍼의 해상도, 기본값: undefined (전체 화면)
  //   /** Resolution of the local buffer for backfaces, default: undefined (fullscreen) */
  //   backsideResolution?: number // 뒷면용 로컬 버퍼의 해상도, 기본값: undefined (전체 화면)
  //   /** Refraction samples, default: 6 */
  //   samples?: number // 굴절 샘플, 기본값: 6
  //   /** Buffer scene background (can be a texture, a cubetexture or a color), default: null */
  //   background?: THREE.Texture // 장면 배경 버퍼 (텍스처, 큐브 텍스처 또는 색상일 수 있음), 기본값: null
  // }

  return (
    <>
      <mesh position={[0, 0, 2]} scale={0.3}>
        <sphereGeometry args={[1.4, 128, 128]} />
        <MeshTransmissionMaterial {...config} background={new THREE.Color(config.bg)} color={new THREE.Color(config.color)} />
      </mesh>
      <mesh position={[0, 0, 2]} scale={0.3}>
        <torusGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}

export default MatrTransmission;
