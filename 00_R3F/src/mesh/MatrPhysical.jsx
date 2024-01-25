import * as THREE from "three";
import { useControls } from "leva";

function MatrPhysical({ meshColor }) {
  const { roughness, metalness, clearcoat, clearcoatRoughness, transmission, thickness, ior } = useControls({
    roughness: { value: 0, min: 0, max: 1, step: 0.01, label: "윤기" },
    metalness: { value: 0, min: 0, max: 1, step: 0.01, label: "금속성" },
    clearcoat: { value: 0, min: 0, max: 1, step: 0.01, label: "코팅" },
    clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.01, label: "코팅에 대한 거칠기 값" },
    transmission: { value: 0, min: 0, max: 1, step: 0.01, label: "투명도" },
    thickness: { value: 0, min: 0, max: 10, step: 0.01, label: "유리의 두께" },
    ior: { value: 1.5, min: 0, max: 2.333, step: 0.01, label: "굴절률" },
  });
  return (
    <>
      {/* 4. 고품질이지만. 속도면에서는 이 전 두개보다 조금 느림. (MeshLambertMaterial, MeshPhongMaterial) */}
      {/* meshPhysicalMaterial = 물리 기반 렌더링 재질 = 유리*/}
      {/* rouhness 1, clearcoat 1 */}
      <meshPhysicalMaterial
        visible={true}
        transparent={true} // 유리효과는 투명 효과를 켜줘야함
        opacity={1}
        depthTest={true}
        depthWrite={true}
        // side={THREE.FrontSide}
        side={THREE.DoubleSide}
        color={meshColor}
        emissive={0x000000}
        roughness={roughness} // 윤기
        metalness={metalness} // 금속성 (윤기와 금속성은 상관관계가 높다) 돌 ~ 금속
        // MatrStandard 와 다르게 이게 들어감
        flatShading={false}
        wireframe={false}
        clearcoat={clearcoat} // 표면에 코팅이 전혀 안되어 있는 재질 0
        clearcoatRoughness={clearcoatRoughness} // 코팅에 대한 거칠기 값. = 매트느낌 0
        // 유리효과
        // roughness 0, metalness 0, clearcoat 0, clearcoatRoughness 0, transmission 1, thickness 0, ior 2.333
        transmission={transmission} // 투명도 (0 투명하지 않음, 1 완전 투명)
        thickness={thickness} // 유리의 두께
        ior={ior} // 굴절률 (1 굴절이 없음, 1.5 유리, 2 다이아몬드)
      />
    </>
  );
}

export default MatrPhysical;
