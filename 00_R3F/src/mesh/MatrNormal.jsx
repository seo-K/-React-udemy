import * as THREE from "three";

function MatrNormal() {
  return (
    // Normal은 메쉬 표현에 대한 법선 벡터
    // 법선 벡터의 xyz값을 rgb값으로 표현한 재질
    // 법선 벡터 관련 https://gusdnd852.tistory.com/280
    <>
      <meshNormalMaterial />
    </>
  );
}

export default MatrNormal;
