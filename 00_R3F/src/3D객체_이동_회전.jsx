import {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";

function MyElement3D() {
  const refMesh = useRef();

  // 각도 변환
  // {(45 * Math.PI) / 180} = {THREE.MathUtils.degToRad(45)}

  useFrame((state, delta) => {
    refMesh.current.rotation.z += delta;
  });

  return (
    <>
      {/* 조명 추가 (없으면 블랙처리 돼버림) */}
      <directionalLight position={[1, 1, 1]} />
      {/* 마우스 및 휠 컨트롤러 */}
      <OrbitControls />
      {/* 안내선 || red = x, green = y, blue = z */}
      <axesHelper scale={10} />
      {/* 1. POSITION : 이동 */}
      {/* <mesh ref={refMesh} position-x={2}> */}
      {/* <mesh ref={refMesh} position={[2, 0, 0]}> */}
      {/* 2. ROTATION : 회전 */}
      {/* x축으로 0도, y축으로 45도, z축으로 0도 회전 */}
      {/* <mesh rotation={[0, (45 * Math.PI) / 180, 0]}> */}
      {/* <mesh rotation-y={(45 * Math.PI) / 180}> */}
      <mesh ref={refMesh} position-y={2} rotation-z={THREE.MathUtils.degToRad(45)} scale={[2, 1, 1]}>
        {/* 박스 */}
        <boxGeometry />
        <meshStandardMaterial color="red" opacity={0.5} transparent={true} />
        <axesHelper />

        <mesh position-y={2} scale={(0.2, 0.2, 0.2)}>
          {/* 원형 */}
          <sphereGeometry />
          <meshStandardMaterial color="blue" />
          <axesHelper scale={5} />
        </mesh>
      </mesh>
    </>
  );
}

export default MyElement3D;
