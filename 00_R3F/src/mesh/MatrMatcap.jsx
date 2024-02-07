import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import MapCapImg from "../../public/img/crystal.png";

function MatrMatcap() {
  // const matcap = useLoader(THREE.TextureLoader, MapCapImg);
  const matcap = useTexture("./img/crystal.png");
  // const matcap = useTexture("https://raw.githubusercontent.com/nidorx/matcaps/master/1024/593E2C_E5D8A9_BC9F79_9F8A68.png");

  // matcap이미지 파일은 이미 조명을 포함한 이미지를 그대로 보여줘서 조명이 필요없음.
  // 텍스처를 그대로 입히는 것으로, 광원이 필요없다.
  /* 카메라와 광원 */
  //  <ambientLight intensity={0.2} /> <directionalLight position={[1, 2, 8]} intensity={0.5} />

  return (
    <>
      <meshMatcapMaterial matcap={matcap} />
      {/*  flatShading={true}  = 매쉬가 각진 면으로 표현됨 */}
    </>
  );
}

export default MatrMatcap;
