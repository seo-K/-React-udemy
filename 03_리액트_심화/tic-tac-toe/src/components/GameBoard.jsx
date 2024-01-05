const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ openSelectSquare, activePlayerSymbol,onSelectSquare }) {

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playSymbol, colIndex) => {
              return (
                <li key={colIndex}>
                  <button type="button" onClick={onSelectSquare}>
                    {playSymbol}
                  </button>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
}
