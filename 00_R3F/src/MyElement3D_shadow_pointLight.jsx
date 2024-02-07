import * as THREE from "three";
import { useEffect, useRef } from "react";
import { OrbitControls, useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

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
    smallSpherePivot.rotation.y = THREE.MathUtils.degToRad(time * 50);

    smallSpherePivot.children[0].getWorldPosition(light.current.position);
  });

  const light = useRef();

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      {/* 2. PointLight */}
      <pointLight ref={light} castShadow color="#fff" intensity={1} position={[0, 5, 0]} />

      {/* 평면 */}
      <mesh receiveShadow rotation-x={THREE.MathUtils.degToRad(-90)}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#2c3e50" roughness={0.5} matalness={0.5} side={THREE.DoubleSide} />
      </mesh>

      {/* 꼬인 매듭 */}
      <mesh castShadow receiveShadow position-y={1.7}>
        <torusKnotGeometry args={[1, 0.2, 256, 64]} />
        <meshStandardMaterial color="#fff" side={THREE.DoubleSide} roughness={0.1} matalness={0.2} />
      </mesh>

      {/* 도넛 */}
      {new Array(8).fill().map((item, index) => {
        return (
          <group key={index} rotation-y={THREE.MathUtils.degToRad(45 * index)}>
            <mesh castShadow receiveShadow geometry={torusGeometry} material={torusMaterial} position={[3, 0.5, 0]} />
          </group>
        );
      })}

      {/* 도넛 돌아다니는 원 */}
      <group name="smallSpherePivot">
        <mesh castShadow receiveShadow position={[3, 0.5, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#e74c3c" roughness={0.2} metalness={0.5} />
        </mesh>
      </group>
    </>
  );
}

export default MyElement3D_shadow;
