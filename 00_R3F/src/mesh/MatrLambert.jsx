import * as THREE from "three";

function MatrLambert({ meshColor }) {
  return (
    <>
      {/* ## 재질 */}
      {/* 2. 면 (광원의 영향을 받음) */}
      <meshLambertMaterial
        visible={true} // 화면에 보여지는지 유무
        transparent={false} // 투명 효과 (opacity랑 함께 사용)
        opacity={1} // 투명도
        // depthBuffer(Z축 버퍼로 가까이 있는 것이 진해보이는 엑스레이같은 것)
        depthTest={true} // 렌더링 되고 있는 메쉬의 픽셀을 화면에 그릴때 depthBuffer 값을 이용해 검사할 것인지에 대한 여부
        depthWrite={true} // 렌더링 되고 있는 메쉬의 픽셀에 대한 Z값을 depthBuffer에 기록할 것인지 여부
        side={THREE.FrontSide} // 메쉬를 구서앟는 면에 대해서 앞면만 렌더링할건지 앞면과 뒷면을 모두 렌더링할건지. [FrontSide | BackSide | DoubleSide]
        color={meshColor} // 컬러
        wireframe={true} // 프레임
        emissive={0x66600} // 방출하는 색상
      />
    </>
  );
}

export default MatrLambert;
