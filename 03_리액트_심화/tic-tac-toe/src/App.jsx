import React, {useState} from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from "./winning-combinations";

// 기본 게임판의 값
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// 플레이어 순서 함수
function derivesActivePlayer(gameTurns) {
  let currentPlayer = "X";
  // 지금 플레이어가 x면 O인 플레이어가 게임할 차례임.
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  // 상태를 불변한 방식으로 업데이트하고, 다른 상태를 병합하지 않도록함.
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derivesActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    // 구조 분해 할당을하여 정보 빼내기
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    console.log(combination);
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = derivesActivePlayer(prevTurns);
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
        {winner && <p>{winner}자네가 이겼다네.</p>}
        <ol id="players" className="highlight-player">
          <Player initialName="플레이어1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="플레이어2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
