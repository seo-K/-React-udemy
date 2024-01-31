import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function MatrToon() {
  const texture = useTexture("./img/threeTone.jpg");
  // const textureLoader = new THREE.TextureLoader();
  // const texture = textureLoader.load("../img/fourTone.jpg");
  // 색상 보관이 되지않도록 설정
  // 그냥 랜더링하면 텍스쳐가 너무 작아 보이지 않으므로 따로 설정을 해줘야함.
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  return (
    // 만화효과를 나타내는 재질
    // 색상톤을 나타내는 작은 이미지 (해당 색상으로 표현하는게 아닌, 해당 색상"톤"으로 표현)
    <>
      <meshToonMaterial gradientMap={texture} />
    </>
  );
}

export default MatrToon;
