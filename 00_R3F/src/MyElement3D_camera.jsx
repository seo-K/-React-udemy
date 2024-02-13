import { useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { useControls } from "leva";
import * as THREE from "three";

const torusGeometry = new THREE.TorusGeometry(0.4, 0.1, 32, 32);
const torusMaterial = new THREE.MeshStandardMaterial({
  color: "#9b59b6",
  roughness: 0.5,
  metalness: 0.9,
});

// 카메라 설정읉 통해 작은 구의 입장에서 화면 바라보기

function MyElement3D() {
  useFrame((state) => {
    const time = state.clock.elapsedTime; // useFrame 훅에서 제공되는 state 객체의 속성. 현재 렌더링된 프레임까지의 경과 시간을 초 단위로 나타냄 (시간이 지날수록 렌더링속도가 빨라지므로, 속도가 빨라지게 됨)
    const smallSpherePivot = state.scene.getObjectByName("smallSpherePivot");
    smallSpherePivot.rotation.y = THREE.MathUtils.degToRad(time * 50);

    // 카메라가 해당 구를 쫓도록 함
    const target = new THREE.Vector3();
    smallSpherePivot.children[0].getWorldPosition(target);
    state.camera.position.copy(target);

    // 고스트 공을 만들어서 카메라가 해당 공을 쫓도록 함
    const ghostSpherePivot = state.scene.getObjectByName("ghostSpherePivot");
    ghostSpherePivot.rotation.y = THREE.MathUtils.degToRad(time * 50 + 30);
    ghostSpherePivot.children[0].getWorldPosition(target);
    state.camera.lookAt(target);
  });

  const light = useRef();
  RectAreaLightUniformsLib.init();
  useHelper(light, RectAreaLightHelper, "cyan");
  const { camera } = useThree();
  // 카메라 위치 조정 컨트롤러
  // useControls({
  //   positionZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //     onChange: (value) => (camera.position.z = value),
  //   },
  //   targetZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //     onChange: (value) => camera.lookAt(0, 0, value),
  //   },
  // });

  return (
    <>
      <ambientLight color="#ff0000" intensity={0.2} />

      <rectAreaLight ref={light} color="#fff" intensity={20} width={1} height={3} position={[0, 5, 0]} rotation-x={THREE.MathUtils.degToRad(-90)} />

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

      {/* 추가 */}
      <group name="ghostSpherePivot">
        <object3D position={[3, 0.5, 0]} />
      </group>
    </>
  );
}

export default MyElement3D;
