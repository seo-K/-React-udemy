import * as THREE from "three";
import { useControls } from "leva";
import { useTexture } from "@react-three/drei";

function MatrNormal() {
  const mapcap = useTexture("https://raw.githubusercontent.com/nidorx/matcaps/master/1024/593E2C_E5D8A9_BC9F79_9F8A68.png");

  return (
    <>
      {/* 4. 고품질이지만. 속도면에서는 이 전 두개보다 조금 느림. (MeshLambertMaterial, MeshPhongMaterial) */}
      <meshNormalMaterial mapcap={mapcap} />
    </>
  );
}

export default MatrNormal;
