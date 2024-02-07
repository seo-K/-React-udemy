function MatrBasic({meshColor}) {
  return (
    <>
      {/* ## 재질 */}
      {/*
        # 재질 색상 추가 방법
        1. color="red"
        2. color="#ff0000"
        3. color={0xff0000}
        */}
      {/* 1. 면 (광원의 영향을 받지 않음) */}
      <meshBasicMaterial color={meshColor} />
    </>
  );
}

export default MatrBasic;
