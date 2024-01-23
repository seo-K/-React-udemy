import * as THREE from "three";

function MatrPhong({meshColor}) {
  return (
    <>
      {/* 3. 빛나는 글로우 면 (픽셀단위로 광원의 영향을 계산하는 재질 LamerMaterial 보다 정교한 쉐이딩 효과를 얻을 수 있음.) */}
      <meshPhongMaterial
        visible={true}
        transparent={true}
        opacity={1}
        depthTest={true}
        depthWrite={true}
        side={THREE.FrontSide}
        color={meshColor}
        emissive={meshColor}
        specular={meshColor} // 광원에 의해 반사되는 색상값 (기본값은 연한회색색)
        shininess={100} // 빛나는 수준
        flatShading={false} // 메쉬를 평평하게 렌더링할지 여부.
        wireframe={false}
      />
    </>
  );
}

export default MatrPhong;
