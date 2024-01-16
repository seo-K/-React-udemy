import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// ref 를 가져올때는 forwardRef 를 사용해야함
const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  // 함수 바깥쪽에서 함수로 제어하면 유지보수 및 관리가 어려움. 그래서 안쪽에서 함수를 만들어 제어할 수 있도록 작업.
  // useImperativeHandle(ref, () => {return { 속성과 메소드들은 해당 컴포넌트나 다른 컴포넌트에 노출되어야하는 것들}} )  forwardRef랑 짝꿍이며, 재사용가능하게 만들어줌
  useImperativeHandle(ref, () => {
    return {
      // 컴포넌트 바깥에서 호출되는 함수명
      open() {
        dialog.current.showModal(); // dialog 자체에 있는 showModal() 메서드를 호출
      },
    };
  });
  console.log(remainingTime, targetTime, remainingTime !== targetTime * 1000, "얍");
  return createPortal(
    // onClose = ESC 키 누를시, 모달이 닫기는 기능
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      <h2>너 {!userLost ? "이김" : "짐"}.ㅋ</h2>
      <h3>{!userLost && `너의점수는 ${score}이얌!`}</h3>
      {/* <h2>너 {remainingTime > 0 || remainingTime !== targetTime * 1000 ? "이김" : "짐"}.ㅋ</h2> */}
      <p>
        너의 목표레벨은 <strong>{targetTime}</strong>
      </p>
      <p>{formattedRemainingTime}초 남기고 타이머를 멈췄엄</p>
      {/* onSubmit : react에 기본으로 지원되는 기능 */}
      <form method="dialog" action="" onSubmit={onReset}>
        <button>닫기</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
