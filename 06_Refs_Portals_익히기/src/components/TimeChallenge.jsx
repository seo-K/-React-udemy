import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenge({ title, targetTime }) {
  // 참조 = 특정 컴포넌트 인스턴스에만 할당됨
  const timer = useRef();
  const dialog = useRef();

  const [timeRenaming, setTimeRenaming] = useState(targetTime * 1000);
  const timerIsActive = timeRenaming > 0 && timeRenaming < targetTime * 1000;

  if (timeRenaming <= 0) {
    clearInterval(timer.current);
    // setTimeRenaming(targetTime * 1000);
    dialog.current.open(); // dialog 자체에 있는 showModal() 메서드를 호출
  }

  function handleReset() {
    setTimeRenaming(targetTime * 1000);
  }

  const handleStart = () => {
    // 10ms 마다 10ms씩 감소
    timer.current = setInterval(() => {
      setTimeRenaming((prevTimeRenaming) => prevTimeRenaming - 10);
    }, 10);
  };

  console.log(timeRenaming);
  // console.log(timerIsActive);
  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };

  return (
    <>
      <ResultModal result="짐" targetTime={targetTime} ref={dialog} remainingTime={timeRenaming} onReset={handleReset} />
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>실패!!!!!!!!!!!!</p>} */}
        <div className="challenge-time">
          {targetTime} second {targetTime > 1}
        </div>
        <p>
          <button type="button" onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "재시작" : "시작"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>{timerIsActive ? "타이머가 실행중" : "타이머가 멈춤"}</p>
      </section>
    </>
  );
}
