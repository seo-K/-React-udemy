import * as THREE from "three";
import React, { useEffect, useState } from "react";

// moel
import { Environment, OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

function ModelsContent() {
  const model = useGLTF("./models/model.glb");

  // 모델 애니메이션
  const animations = useAnimations(model.animations, model.scene);
  const { actionName } = useControls({
    actionName: {
      value: animations.names[0],
      options: animations.names,
    },
  });

  useEffect(() => {
    const action = animations.actions[actionName];
    action.reset().fadeIn(0.5).play();

    return () => {
      action.fadeOut(0.5); // 이전 액션을 서서히 fadeOut
    };
  }, [actionName]);

  // 모델의 높이를 가져와 중앙정렬
  const [modelHeight, setModelHeight] = useState(0);

  useEffect(() => {
    let minY = Infinity,
      maxY = -Infinity; // 최소, 최대 y값

    model.scene.traverse((item) => {
      // traverse 객체를 순회하면서 각 객체에 대해 콜백함수를 실행
      if (item.isMesh) {
        // item 이 isMesh 라면
        const geomBbox = item.geometry.boundingBox;
        if (minY > geomBbox.min.y) minY = geomBbox.min.y;
        if (maxY < geomBbox.max.y) maxY = geomBbox.max.y;
        // minY = Math.min(minY, item.geometry.boundingBox.min.y);
        // maxY = Math.max(maxY, item.geometry.boundingBox.max.y);
      }
    });

    const h = maxY - minY;
    setModelHeight(h);
  }, [model.scene]);

  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" />
      <primitive scale={5} object={model.scene} position-y={-(modelHeight / 2) * 5} />
    </>
  );
}

export default ModelsContent;
