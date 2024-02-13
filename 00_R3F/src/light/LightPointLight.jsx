import { OrbitControls, useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const torusGeometry = new THREE.TorusGeometry(0.4, 0.1, 32, 32);
const torusMaterial = new THREE.MeshStandardMaterial({
  color: "#9b59b6",
  roughness: 0.5,
  metalness: 0.9,
});

function LightPointLight() {
  useFrame((state) => {
    const time = state.clock.elapsedTime; // useFrame 훅에서 제공되는 state 객체의 속성. 현재 렌더링된 프레임까지의 경과 시간을 초 단위로 나타냄 (시간이 지날수록 렌더링속도가 빨라지므로, 속도가 빨라지게 됨)
    const smallSpherePivot = state.scene.getObjectByName("smallSpherePivot");
    smallSpherePivot.rotation.y = THREE.MathUtils.degToRad(time * 50);
    smallSpherePivot.children[0].getWorldPosition(light.current.position); // [pointLight] 확인용
  });

  // directionalLight의 방향을 확인하기 위한 helper 추가
  const light = useRef();

  // [pointLight] 확인용
  useHelper(light, THREE.PointLightHelper, 0.5); // 0.5 는 useHelper의 크기

  return (
    <>
      <OrbitControls />
      <pointLight ref={light} color="#fff" intensity={20} position={[0, 5, 0]} distance={2} />

      <mesh rotation-x={THREE.MathUtils.degToRad(-90)}>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial color="#2c3e50" roughness={0.5} metalness={0.5} side={THREE.DoubleSide} />
      </mesh>

      <mesh rotation-x={THREE.MathUtils.degToRad(-90)}>
        <sphereGeometry args={[1.5, 64, 64, 0, Math.PI]} />
        <meshStandardMaterial color="#fff" roughness={0.1} metalness={0.2} />
      </mesh>

      {new Array(8).fill().map((item, index) => {
        return (
          <group key={index} rotation-y={THREE.MathUtils.degToRad(45 * index)}>
            <mesh geometry={torusGeometry} material={torusMaterial} position={[3, 0.5, 0]} />
          </group>
        );
      })}

      <group name="smallSpherePivot">
        <mesh position={[3, 0.5, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#e74c3c" roughness={0.2} metalness={0.5} />
        </mesh>
      </group>
    </>
  );
}

export default LightPointLight;
