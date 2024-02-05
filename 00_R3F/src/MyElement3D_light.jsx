import { Environment, OrbitControls, useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";

const torusGeometry = new THREE.TorusGeometry(0.4, 0.1, 32, 32);
const torusMaterial = new THREE.MeshStandardMaterial({
  color: "#9b59b6",
  roughness: 0.5,
  metalness: 0.9,
});

function MyElement3D() {
  useFrame((state) => {
    const time = state.clock.elapsedTime; // useFrame 훅에서 제공되는 state 객체의 속성. 현재 렌더링된 프레임까지의 경과 시간을 초 단위로 나타냄 (시간이 지날수록 렌더링속도가 빨라지므로, 속도가 빨라지게 됨)
    const smallSpherePivot = state.scene.getObjectByName("smallSpherePivot");
    smallSpherePivot.rotation.y = THREE.MathUtils.degToRad(time * 50);
    // smallSpherePivot.children[0].getWorldPosition(light.current.target.position); // [directionalLight, spotLight] 확인용 // getWorldPosition() 메서드를 사용하여 smallSpherePivot의 첫번째 자식인 돌아가는 구슬의 위치를 가져옴
    // smallSpherePivot.children[0].getWorldPosition(light.current.position);  // [pointLight] 확인용
  });

  // directionalLight의 방향을 확인하기 위한 helper 추가
  const light = useRef();

  // [directionalLight] 확인용
  // useHelper(light, THREE.DirectionalLightHelper, "red");

  // [directionalLight, spotLight] 확인용
  // const { scene } = useThree();
  // useEffect(() => {
  //   scene.add(light.current.target);
  //   return () => {
  //     scene.remove(light.current.target);
  //   };
  // }, [light]);

  // [pointLight] 확인용
  // useHelper(light, THREE.PointLightHelper, 0.5); // 0.5 는 useHelper의 크기

  // [spotLight] 확인용
  // useHelper(light, THREE.SpotLightHelper, "cyan");

  // [rectAreaLight] 확인용
  // RectAreaLightUniformsLib.init();
  // useHelper(light, RectAreaLightHelper, "cyan");

  return (
    <>
      <OrbitControls />
      {/* <ambientLight color="#ff0000" intensity={0.2} /> */}
      {/* <hemisphereLight args={["#00f", "#f00", 2]} /> */}
      {/* <directionalLight ref={light} color={0xffffff} intensity={1} position={[0, 5, 0]} target-position={[-10, 2, 10]} /> */}
      {/* <pointLight ref={light} color="#fff" intensity={20} position={[0, 5, 0]} distance={2} /> */}
      {/* <spotLight ref={light} color={0xffffff} intensity={10} position={[0, 5, 0]} target-position={[0, 0, 0]} distance={0} angle={THREE.MathUtils.degToRad(30)} penumbra={0} /> */}
      {/* <rectAreaLight ref={light} color="#fff" intensity={20} width={1} height={3} position={[0, 5, 0]} rotation-x={THREE.MathUtils.degToRad(-90)} /> */}
      <Environment blur={0.1} background files={"./public/img/4k.hdr"} />

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

export default MyElement3D;
