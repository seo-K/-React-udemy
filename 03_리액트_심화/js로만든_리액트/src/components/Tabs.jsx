import React from "react";

// ButtonContainer 의 기본값 설정
export default function Tabs({ children, button, ButtonContainer = "menu" }) {
  // let ButtonContainer = buttonContainer;
  return (
    <React.Fragment>
      {/* // 아니... 태그도 propsㄹ로 넘길 수 있구나... */}
      <ButtonContainer>{button}</ButtonContainer>
      {children}
    </React.Fragment>
  );
}
