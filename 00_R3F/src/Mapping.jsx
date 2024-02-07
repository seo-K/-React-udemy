import { OrbitControls, useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function MyElement3D() {
  const texture = useTexture({
    map: "../img/glass/Glass_Window_002_basecolor.jpg",
    roughnessMap: "../img/glass/Glass_Window_002_roughness.jpg",
    metalnessMap: "../img/glass/Glass_Window_002_metallic.jpg",
    normalMap: "../img/glass/Glass_Window_002_normal.jpg",
    displacementMap: "../img/glass/Glass_Window_002_height.png",
    aoMap: "../img/glass/Glass_Window_002_ambientOcclusion.jpg",
    alphaMap: "../img/glass/Glass_Window_002_opacity.jpg",
  });

  const mesh = useRef();

  useEffect(() => {
    // 앞서 texture로 선언한 것들의 x축 = 수평을 4번 반복함.
    texture.map.repeat.x =
      texture.displacementMap.repeat.x =
      texture.aoMap.repeat.x =
      texture.roughnessMap.repeat.x =
      texture.metalnessMap.repeat.x =
      texture.normalMap.repeat.x =
      texture.alphaMap.repeat.x =
        4;

    // 반복이 시작되는 시점에서 어떻게 이미지를 랜더링할건지 (warpS = x축, warpT = y축)
    texture.map.wrapS =
      texture.displacementMap.wrapS =
      texture.aoMap.wrapS =
      texture.roughnessMap.wrapS =
      texture.metalnessMap.wrapS =
      texture.normalMap.wrapS =
      texture.alphaMap.wrapS =
        THREE.MirroredRepeatWrapping;
    mesh.current.geometry.setAttribute("uv2", new THREE.BufferAttribute(mesh.current.geometry.attributes.uv.array, 2));
  }, []);

  // 텍스쳐 개체 재랜더링
  texture.map.needsUpdate =
    texture.roughnessMap.needsUpdate =
    texture.metalnessMap.needsUpdate =
    texture.normalMap.needsUpdate =
    texture.displacementMap.needsUpdate =
    texture.aoMap.needsUpdate =
    texture.alphaMap.needsUpdate =
      true;

  // aoMap
  // useEffect(() => {
  //   mesh.current.geometry.setAttribute("uv2", new THREE.BufferAttribute(mesh.current.geometry.attributes.uv.array, 2));
  // }, []);

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 1, 0]} intensity={0.7} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />
      {/* mapping */}
      <mesh scale={0.4} ref={mesh}>
        <cylinderGeometry args={[2, 2, 3, 256, 256, true]} />
        <meshStandardMaterial
          // wireframe
          side={THREE.DoubleSide}
          map={texture.map}
          // 거칠기
          roughnessMap={texture.roughnessMap}
          roughnessMap-colorSpace={THREE.NoColorSpace}
          // 메탈
          metalnessMap={texture.metalnessMap}
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
          // aoMap = ambient occlusion map (앰비언트 오클루전 맵) = 메쉬 표면에 이미 만들어둔 그림자로 입체감을 살리는 역할
          // 그림자 이기 때문에 두가지 추가 요소가 필요함.
          // 1. ambientLight 빛이 필요 2. geometry에 UV2 라는 속성이 필요함.
          aoMap={texture.aoMap}
          // alphaMap = 투명도 (색상이 어두울수록, 투명도가 높아짐)
          // transparent 를 추가해야함
          alphaMap={texture.alphaMap}
          transparent
          // alphaToCoverage // 안티 앨리어싱(anti-aliasing) 기술 중 하나로, 투명한 객체의 가장자리를 부드럽게 만들어 줌. 물방울이나 유리같은거? 주로 투명한 객체들이 배경과 어우러질 때, 부드럽고 자연스럽게 블렌딩되도록 도와줌.
        />
      </mesh>
    </>
  );
}

export default MyElement3D;
