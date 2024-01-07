export default function GameBoard({onSelectSquare, board}) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playSymbol, colIndex) => {
              return (
                <li key={colIndex}>
                  <button type="button" onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playSymbol !== null}>
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
