import * as THREE from "three";
import React, { useEffect, useState } from "react";

import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";
import { BrightnessContrast, EffectComposer, HueSaturation } from "@react-three/postprocessing";

// 도넛 셋팅
const torusGeometry = new THREE.TorusGeometry(0.4, 0.1, 32, 32);
const torusMaterial = new THREE.MeshStandardMaterial({
  color: "#9b59b6",
  roughness: 0.5,
  metalness: 0.9,
});

function PostprocessingContent({ selectedPostprocessing }) {
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const smallSpherePivot = state.scene.getObjectByName("smallSpherePivot");
    smallSpherePivot.rotation.y = THREE.MathUtils.degToRad(time * 50);

    // 1. DirectionalLight
    // smallSpherePivot.children[0].getWorldPosition(light.current.target.position);
  });

  const { enabled, hue, saturation } = useControls("HueSaturation", {
    enabled: { value: true },
    hue: {
      value: 0,
      min: 0,
      max: Math.PI,
      step: 0.1,
    },
    saturation: {
      value: 0,
      min: 0,
      max: Math.PI,
      step: 0.1,
    },
  });

  const { brightness, contrast } = useControls({
    brightness: {
      value: 0,
      min: -1,
      max: 1,
      step: 0.1,
    },
    contrast: {
      value: 0,
      min: -1,
      max: 1,
      step: 0.1,
    },
  });

  return (
    <>
      <OrbitControls />

      <EffectComposer
        disableNormalPass // 효과 해제
        enabled={enabled} // 후처리 적용 여부
      >
        <HueSaturation hue={hue} saturation={saturation} /> // 색조와 채도를 변경
        <BrightnessContrast brightness={brightness} contrast={contrast} />
      </EffectComposer>

      <ambientLight intensity={0.1} />
      {/* 1. DirectionalLight */}
      <directionalLight castShadow color={0xffffff} intensity={1.2} position={[-3, 3, 3]} shadow-mapSize={[1024 * 2, 1024 * 2]} />

      {/* 평면 */}
      <mesh receiveShadow rotation-x={THREE.MathUtils.degToRad(-90)}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#2c3e50" roughness={0.5} matalness={0.5} side={THREE.DoubleSide} />
      </mesh>

      {/* 꼬인 매듭 */}
      <mesh castShadow receiveShadow position-y={0.6} rotation-x={-Math.PI / 2}>
        <torusKnotGeometry args={[0.6, 0.2, 128, 32]} />
        <meshStandardMaterial color="#fff" roughness={0.1} matalness={0.6} />
      </mesh>

      {/* 도넛 */}
      {new Array(8).fill().map((item, index) => {
        return (
          <group key={index} rotation-y={THREE.MathUtils.degToRad(45 * index)}>
            <mesh castShadow receiveShadow geometry={torusGeometry} material={torusMaterial} position={[3, 0.5, 0]} />
          </group>
        );
      })}

      {/* 도넛 돌아다니는 원 */}
      <group name="smallSpherePivot">
        <mesh castShadow receiveShadow position={[3, 0.5, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#e74c3c" roughness={0.2} metalness={0.5} />
        </mesh>
      </group>
    </>
  );
}

export default PostprocessingContent;
