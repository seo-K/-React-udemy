import { OrbitControls } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import { useControls } from "leva";
import * as THREE from "three";

import Material_MeshReflectorMaterial from "./meshComponent/Material_MeshReflectorMaterial";

function MyElement3D() {
  const 박스_재질 = useRef();
  const 도넛_재질 = useRef();

  const { roughness, metalness, clearcoat, clearcoatRoughness } = useControls({
    roughness: { value: 0, min: 0, max: 1, step: 0.01, label: "윤기" },
    metalness: { value: 0, min: 0, max: 1, step: 0.01, label: "금속성" },
    clearcoat: { value: 0, min: 0, max: 1, step: 0.01, label: "코팅" },
    clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.01, label: "코팅에 대한 거칠기" },
  });

  useEffect(() => {
    console.log(박스_재질.current);
    도넛_재질.current.material = 박스_재질.current.material;
  }, []);
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 1, 0]} intensity={0.7} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />

      {/* meshPhysicalMaterial = 물리 기반 렌더링 재질 = 유리*/}
      <mesh ref={박스_재질} position={[0.7, 0, 0]}>
        <torusKnotGeometry args={[0.5, 0.2, 256, 128]} />
        <meshPhysicalMaterial
          visible={true}
          transparent={true} // 유리효과는 투명 효과를 켜줘야함
          opacity={1}
          depthTest={true}
          depthWrite={true}
          side={THREE.FrontSide}
          color={0xff0000}
          emissive={0x000000}
          roughness={roughness} // 윤기
          metalness={metalness} // 금속성 (윤기와 금속성은 상관관계가 높다)
          flatShading={false}
          wireframe={false}
          clearcoat={clearcoat} // 표면에 코팅이 전혀 안되어 있는 재질 0
          clearcoatRoughness={clearcoatRoughness} // 코팅에 대한 거칠기 값. = 매트느낌 0
          thicknewss={0} // 돌처럼 금속
          ior={1.5}
        />
      </mesh>

      {/* meshStandardMaterial */}
      {/* <mesh ref={박스_재질} position={[0.7, 0, 0]}>
        <torusKnotGeometry args={[0.5, 0.2, 256, 128]} />
        <meshStandardMaterial
          visible={true}
          transparent={false}
          opacity={1}
          depthTest={true}
          depthWrite={true}
          side={THREE.FrontSide}
          color={0xff0000}
          emissive={0x000000}
          roughness={roughness} // 윤기
          metalness={metalness} // 금속성 (윤기와 금속성은 상관관계가 높다)
          flatShading={false}
          wireframe={false}
          clearcoat={clearcoat} // 표면에 코팅이 전혀 안되어 있는 재질 0
          clearcoatRoughness={clearcoatRoughness} // 코팅에 대한 거칠기 값. = 매트느낌 0
        />
      </mesh> */}
      <mesh ref={도넛_재질} position={[-0.7, 0, 0]}>
        <torusGeometry arg={[0.5, 0.2]} />
      </mesh>
    </>
  );
}

export default MyElement3D;
