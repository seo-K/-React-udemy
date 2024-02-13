import { MeshReflectorMaterial } from "@react-three/drei";

function MatrReflector({ meshColor }) {
  return (
    <>
      {/* <MeshReflectorMaterial
        blur={[0, 0]} // 지면 반사 흐림 정도 (너비, 높이), 0은 흐림 없음
        mixBlur={0} // 흐림이 표면 거칠기와 섞이는 비율 (기본값 = 1)
        mixStrength={1} // 반사의 강도
        mixContrast={1} // 반사의 대비
        resolution={256} // 오프-버퍼 해상도, 낮을수록 빠르고 높을수록 품질이 좋음
        mirror={0} // 환경을 거울처럼 반사, 0 = 텍스처 색상, 1 = 환경 색상 사용
        depthScale={0} // 깊이 요소의 스케일(0 = 깊이 없음, 기본값 = 0)
        minDepthThreshold={0.9} // 깊이 텍스처 보간의 하한 값 (기본값 = 0)
        maxDepthThreshold={1} // 깊이 텍스처 보간의 상한 값 (기본값 = 0)
        depthToBlurRatioBias={0.25} // 흐림 양을 계산하기 전에 깊이 텍스처에 보정 요소를 추가 [흐림 요소 = 흐림 텍스처 * (깊이 텍스처 + 보정)]. 0부터 1 사이의 값을 받으며, 기본값은 0.25입니다. 양의 보정은 깊이 텍스처와의 곱셈으로 인해 흐림 텍스처가 너무 날카로워지지 않도록 합니다.
        distortion={1} // 왜곡의 양 (왜곡맵 텍스처를 기반으로 함)
        // distortionMap={distortionTexture} // 이 텍스처의 빨간 채널이 왜곡 맵으로 사용됩니다. 기본값은 null입니다.
        debug={0}  할당된 값에 따라 다음 채널 중 하나가 표시됩니다:
      0 = 디버그 없음
      1 = 깊이 채널
      2 = 기본 채널
      3 = 왜곡 채널
      4 = lod 채널 (거칠기를 기반으로 함)
    
        reflectorOffset={0.2} // 반영 프로젝션을 하는 가상 카메라를 오프셋합니다. 반사 표면이 객체의 원점에서 어떤 거리에 있는 경우 유용합니다 (기본값 = 0)
      /> */}

      <mesh position={[4, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <MeshReflectorMaterial
          resolution={2048} // 오프-버퍼 해상도, 낮을수록 빠르고 높을수록 품질이 좋음
          mixBlur={1} // 흐림이 표면 거칠기와 섞이는 비율 (기본값 = 1)
          mixStrength={20} // 반사의 강도
          roughness={1}
          depthScale={0.7} // 깊이 요소의 스케일(0 = 깊이 없음, 기본값 = 0)
          minDepthThreshold={0.5} // 깊이 텍스처 보간의 하한 값 (기본값 = 0)
          maxDepthThreshold={1.4} // 깊이 텍스처 보간의 상한 값 (기본값 = 0)
          color="#fff"
          metalness={0.5}
        />
      </mesh>
    </>
  );
}

export default MatrReflector;
