import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

function MyElement3D() {
  const refMesh = useRef();

  // 애니메이션 = useFrame 콜백함수 = 매 프레임이 렌더링되기 전에 실행되는 함수
  // delata = 이전,현재 프레임 사이의 시간 간격
  useFrame((state, delta) => {
    refMesh.current.rotation.y += delta;
  });
  return (
    <>
      {/* 조명 추가 (없으면 블랙처리 돼버림) */}
      <directionalLight position={[1, 1, 1]} />
      {/* x축으로 0도, y축으로 45도, z축으로 0도 회전 */}
      {/* <mesh rotation={[0, (45 * Math.PI) / 180, 0]}> */}
      {/* <mesh rotation-y={(45 * Math.PI) / 180}> */}
      <mesh ref={refMesh} rotation-y={(45 * Math.PI) / 180}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
}

export default MyElement3D;
