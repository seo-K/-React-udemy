import Player from "./components/Player";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="플레이어1" symbol="O" />
          <Player name="플레이어2" symbol="X" />
        </ol>
      </div>
    </main>
  );
}

export default App;
