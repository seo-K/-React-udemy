import * as THREE from "three";
import { useControls } from "leva";

function MatrStandard({ meshColor }) {
  const { roughness, metalness } = useControls({
    roughness: { value: 0, min: 0, max: 1, step: 0.01, label: "윤기" },
    metalness: { value: 0, min: 0, max: 1, step: 0.01, label: "금속성" },
  });
  return (
    <>
      {/* 4. 고품질이지만. 속도면에서는 이 전 두개보다 조금 느림. (MeshLambertMaterial, MeshPhongMaterial) */}
      <meshStandardMaterial
        visible={true}
        transparent={false}
        opacity={1}
        depthTest={true}
        depthWrite={true}
        side={THREE.FrontSide}
        color={meshColor}
        emissive="red"
        // emissive={0x000000}
        roughness={roughness} // 윤기
        metalness={metalness} // 금속성 (윤기와 금속성은 상관관계가 높다) 돌 ~ 금속
      />
    </>
  );
}

export default MatrStandard;
