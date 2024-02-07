import * as THREE from "three";
import { useControls } from "leva";

function MatrDepth({ meshColor }) {
  // const { roughness, metalness } = useControls({
  //   roughness: { value: 0, min: 0, max: 1, step: 0.01, label: "윤기" },
  //   metalness: { value: 0, min: 0, max: 1, step: 0.01, label: "금속성" },
  // });
  return (
    <>
      <meshDepthMaterial color={meshColor} />
    </>
  );
}

export default MatrDepth;
