import React, {useState} from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  // 상태를 불변한 방식으로 업데이트하고, 다른 상태를 병합하지 않도록함.
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      // 지금 플레이어가 x면 O인 플레이어가 게임할 차례임.
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        // 어떤플레이어가 어떤 수를 눌렀나하는 정보.
        {square: {row: rowIndex, col: colIndex}, player: activePlayer},
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  console.log(gameTurns);
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="플레이어1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="플레이어2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
