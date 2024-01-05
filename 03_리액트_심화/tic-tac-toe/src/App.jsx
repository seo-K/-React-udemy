import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "0" : "X"));
    setGameTurns(prevTurns => {
      const updatedTurns = [
        {square : {row: rowIndex, col : colIndex} , player : activePlayer},
        ...prevTurns,
      ]
    } )
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="플레이어1" symbol="O" isActive={activePlayer === "O"} />
          <Player initialName="플레이어2" symbol="X" isActive={activePlayer === "X"} />
        </ol>
        <GameBoard openSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      <Log />
    </main>
  );
}

export default App;
