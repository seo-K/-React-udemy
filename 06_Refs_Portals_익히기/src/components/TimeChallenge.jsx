import React, { useState,useRef } from "react";


export default function TimeChallenge({ title, targetTime }) {
  const timer = useRef()
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const handleStart = () => {
    // let 으로 선언시 다른 TimeChallenge 컴포넌트에서도 공통으로 사용되어
    // 5초 타이머를 실행하고, 1초 타이머를 실행하면 5초 타이머의 값이 1초 타이머에 적용되어(값 공유) 바로 실패처리가되는 이슈가 있음.
    // let timer;
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      // setTimerStarted(false);
    }, targetTime * 1000);
    setTimerStarted(true);
  };

  const handleStop = () => {
    // setTimerExpired(false);
    // setTimerStarted(false);
    clearTimeout(timer.current);
  };

  // 1. 시작
  // 2. 중지
  // 3. 타임오버로 재시작 = reset
  // const handleReset = () => {
  //   timerStarted(true)
  //   setTimerExpired(false)
  //   clearTimeout(timer)
  // }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>실패!!!!!!!!!!!!</p>}
      <div className="challenge-time">
        {targetTime} second {targetTime > 1}
      </div>
      <p>
        <button type="button" onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "재시작" : "시작"}
        </button>
        {/* <button type="button">{gameStarted ? "Start" : "Restart"}</button> */}
      </p>
      <p className={timerStarted ? "active" : undefined}>{timerStarted ? "타이머가 실행중" : "타이머가 멈춤"}</p>
    </section>
  );
}
