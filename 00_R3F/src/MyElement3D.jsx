import { OrbitControls, useTexture } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";

import Material_MeshReflectorMaterial from "./meshComponent/Material_MeshReflectorMaterial";

function MyElement3D() {
  const texture = useTexture({
    map: "../img/glass/Glass_Window_002_basecolor.jpg",
    roughnessMap: "../img/glass/Glass_Window_002_roughness.jpg",
    metallicMap: "../img/glass/Glass_Window_002_metallic.jpg",
    normalMap: "../img/glass/Glass_Window_002_normal.jpg",
    displacementMap: "../img/glass/Glass_Window_002_height.png",
    aoMap: "../img/glass/Glass_Window_002_ambientOcclusion.jpg",
  });

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 1, 0]} intensity={0.7} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />
      {/* mapping */}
      <mesh scale={0.4}>
        <cylinderGeometry args={[2, 2, 3, 256, 256, true]} />
        <meshStandardMaterial
          // wireframe
          side={THREE.DoubleSide}
          map={texture.map}
          // 거칠기
          roughnessMap={texture.roughnessMap}
          roughnessMap-colorSpace={THREE.NoColorSpace}
          // 메탈
          metalnessMap={texture.metallicMap}
          metalnessMap-colorSpace={THREE.NoColorSpace}
          metalness={0.5}
          // 법선 벡터 normal Vactor
          normalMap={texture.normalMap}
          normalMap-colorSpace={THREE.NoColorSpace}
          normalScale={[1, 1]} // 입체 효과가 강하게 들어가는 정도
          // Displacement map(디스플레이스먼트맵/디스맵) =   wireframe 로 확인
          // - 실제 메쉬에 변형을 가함
          // - 실제 메쉬를 변형하므로 그에 대한 그림자가 생기게되지만, 디테일한 설정이 필요하면 디스맵에 더불어 노멀맵도 같이 사용해야함(아래 참고)
          // 모델링하기 힘든 굴곡들을 displacement map으로 적용된 이미지의 밝고, 어두움을 기준으로 형성해주는 기법 (분할수를 늘려야함 segment가 꼭 필요함)
          // normal map은 눈속임 기법인 것에 반해 displacement map은 비트맵의 명도에 따라 실제 mesh를 생성해주는 기법
          displacementMap={texture.displacementMap}
          displacementMap-colorSpace={THREE.NoColorSpace}
          displacementScale={0.2} // displacementMap을 사용하면 뚱뚱해져서 이걸 조절해야댐
          displacementBias={-0.2} // displacementMap을 사용하면 뚱뚱해져서 이걸 조절해야댐
          // ambient occlusion map(앰비언트 오클루전 맵) = 그림자 이기 때문에 ambientLight 가 꼭 필요함
          aoMap={texture.aoMap}
        />
      </mesh>
    </>
  );
}

export default MyElement3D;
