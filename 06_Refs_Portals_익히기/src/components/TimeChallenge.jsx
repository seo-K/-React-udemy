import React, { useState } from "react";

export default function TimeChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);

  const handleStart = () => {
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  };
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>실패!!!!!!!!!!!!</p>}
      <div className="challenge-time">
        {targetTime} second {targetTime > 1}
      </div>
      <p>
        <button type="button" onClick={handleStart}>
          시작 !!! / 재시작!!
        </button>
        {/* <button type="button">{gameStarted ? "Start" : "Restart"}</button> */}
      </p>
      <div className="">타이머가 실행중 / 타이머가 멈춤</div>
    </section>
  );
}
