import * as THREE from "three";
import { useEffect, useRef } from "react";
import { AccumulativeShadows, ContactShadows, OrbitControls, RandomizedLight, SoftShadows, useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

// 카메라 설정읉 통해 작은 구의 입장에서 화면 바라보기
const torusGeometry = new THREE.TorusGeometry(0.4, 0.1, 32, 32);
const torusMaterial = new THREE.MeshStandardMaterial({
  color: "#9b59b6",
  roughness: 0.5,
  metalness: 0.9,
});

function MyElement3D_shadow() {
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const smallSpherePivot = state.scene.getObjectByName("smallSpherePivot");
    smallSpherePivot.rotation.y = THREE.MathUtils.degToRad(time * 5);
  });

  return (
    <>
      <OrbitControls />

      <ContactShadows
        position={[0, 0, 0]} // 그림자가 표현되는 평면의 위치
        scale={10} // 그림자가 표현되는 평면의 크기
        resolution={512} // 그림자의 이미지 크기
        color="#000" // 그림자 색상
        opacity={0.4} // 그림자의 불투명도
        blur={0.5} // 그림자의 블러링처리 세기
        // frames={1} // 정적인 그림자 (옵션임)
      />

      <ambientLight intensity={0.6} />

      <directionalLight color="#fff" intensity={1} position={[0, 5, 0]} />

      {/* 꼬인 매듭 */}
      <mesh position-y={1.7}>
        <torusKnotGeometry args={[1, 0.2, 256, 64]} />
        <meshStandardMaterial color="#fff" side={THREE.DoubleSide} roughness={0.1} matalness={0.2} />
      </mesh>

      {/* 도넛 */}
      {new Array(8).fill().map((item, index) => {
        return (
          <group key={index} rotation-y={THREE.MathUtils.degToRad(45 * index)}>
            <mesh geometry={torusGeometry} material={torusMaterial} position={[3, 0.5, 0]} />
          </group>
        );
      })}

      {/* 도넛 돌아다니는 원 */}
      <group name="smallSpherePivot">
        <mesh position={[3, 0.5, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#e74c3c" roughness={0.2} metalness={0.5} />
        </mesh>
      </group>
    </>
  );
}
//
export default MyElement3D_shadow;
