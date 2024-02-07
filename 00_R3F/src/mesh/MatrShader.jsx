import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

// 1. 버텍스 쉐이더 코드
// 화면에 출력하기 위한 좌푤를 변경
// 2. 프래그먼트 쉐이드
// 화면에 그려지는 픽셀의 색상을 결정

const SimpleMaterial = new shaderMaterial(
  {
    uColor: new THREE.Color(1, 0, 0),
  },
  `
  varying vec2 vUv;

  void main(){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  `
  uniform vec3 uColor;
  varying vec2 vUv;

  void main(){
    gl_FragColor = vec4( vUv.y *uColor, 1.0);
  }
  `
);

extend({ SimpleMaterial });

function MatrShader() {
  return (
    <>
      <mesh position={[0, 0, 2]}>
        <torusGeometry color="blue" />
        {/* extend는 대문자로 시작, 여기는 소문자로 선언 */}
        <simpleMaterial uColor={"green"} />
      </mesh>
    </>
  );
}

export default MatrShader;
