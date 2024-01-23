import {OrbitControls} from "@react-three/drei";
import {useEffect, useRef} from "react";
import * as THREE from "three";

function MyElement3D() {
  const 정육면체_재질 = useRef();
  const 도넛_재질 = useRef();

  useEffect(() => {
    도넛_재질.current.material = 정육면체_재질.current.material;
  }, []);

  return (
    <>
      {/* 컨트롤러 */}
      <OrbitControls />

      {/* 조명 및 위치 */}
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.75} />

      {/* 정육면체 */}
      <mesh ref={정육면체_재질} position={[0.7, 0, 0]}>
        <boxGeometry />

        {/* ## 재질 */}
        {/*
        # 재질 색상 추가 방법
        1. color="red"
        2. color="#ff0000"
        3. color={0xff0000}
        */}
        {/* 1. 면 (광원의 영향을 받지 않음) */}
        {/* <meshBasicMaterial/> */}
        {/* 2. 면 (광원의 영향을 받음) */}
        {/* <meshLambertMaterial
          visible={true} // 화면에 보여지는지 유무
          transparent={false} // 투명 효과 (opacity랑 함께 사용)
          opacity={1} // 투명도
          // depthBuffer(Z축 버퍼로 가까이 있는 것이 진해보이는 엑스레이같은 것)
          depthTest={true} // 렌더링 되고 있는 메쉬의 픽셀을 화면에 그릴때 depthBuffer 값을 이용해 검사할 것인지에 대한 여부
          depthWrite={true} // 렌더링 되고 있는 메쉬의 픽셀에 대한 Z값을 depthBuffer에 기록할 것인지 여부
          side={THREE.FrontSide} // 메쉬를 구서앟는 면에 대해서 앞면만 렌더링할건지 앞면과 뒷면을 모두 렌더링할건지. [FrontSide | BackSide | DoubleSide]
          color={0xff0000} // 컬러
          wireframe={true} // 프레임
          emissive={0x66600} // 방출하는 색상
        /> */}
        {/* 3. 빛나는 글로우 면 (픽셀단위로 광원의 영향을 계산하는 재질 LamerMaterial 보다 정교한 쉐이딩 효과를 얻을 수 있음.) */}
        {/* <meshPhongMaterial
          visible={true}
          transparent={true}
          opacity={1}
          depthTest={true}
          depthWrite={true}
          side={THREE.FrontSide}
          color={0xff0000}
          emissive={0x66600}
          specular={0xffff00} // 광원에 의해 반사되는 색상값 (기본값은 연한회색색)
          shininess={100} // 빛나는 수준
          flatShading={false} // 메쉬를 평평하게 렌더링할지 여부.
          wireframe={false}
        /> */}
        <meshStandardMaterial
          visible={true}
          transparent={true}
          opacity={1}
          depthTest={true}
          depthWrite={true}
          side={THREE.FrontSide}
          color={0xff0000}
          emissive={0xff0000}
          roughness={0} // 거친정도
          metalness={0}
          flatShading={false}
          wireframe={false}
        />
      </mesh>

      {/* 도넛 */}
      <mesh ref={도넛_재질} position={[-0.7, 0, 0]}>
        <torusGeometry args={[0.5, 0.2]} />
      </mesh>
    </>
  );
}

export default MyElement3D;
