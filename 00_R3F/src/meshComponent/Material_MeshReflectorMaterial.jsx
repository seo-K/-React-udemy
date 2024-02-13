import { Box, MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React from "react";

function Material_MeshReflectorMaterial({ selectedGeometry, selectedMesh }) {
  return (
    <>
      {/* 마우스&휠 컨트롤러 */}
      <OrbitControls />

      {/* 카메라와 광원 */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[2, 2, 3]} />
      <directionalLight position={[1, 2, 8]} intensity={0.5} />

      <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <MeshReflectorMaterial
          resolution={2048} // 오프-버퍼 해상도, 낮을수록 빠르고 높을수록 품질이 좋음
          mixBlur={1} // 흐림이 표면 거칠기와 섞이는 비율 (기본값 = 1)
          mixStrength={20} // 반사의 강도
          roughness={1}
          depthScale={0.7} // 깊이 요소의 스케일(0 = 깊이 없음, 기본값 = 0)
          minDepthThreshold={0.5} // 깊이 텍스처 보간의 하한 값 (기본값 = 0)
          maxDepthThreshold={1.4} // 깊이 텍스처 보간의 상한 값 (기본값 = 0)
          color="#fff"
          metalness={0.5}
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
}

export default Material_MeshReflectorMaterial;
