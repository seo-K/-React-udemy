import { useState, useRef } from "react";

export default function Player() {
  // input 값을 참조함. (value, onChange 를 없애고 ref 를 사용함)
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      {/* <h2>Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"} </h2> */}
      <p>
        <input ref={playerName} type="text" placeholder="이름을 입력해주셈" required />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
