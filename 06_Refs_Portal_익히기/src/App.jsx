import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimeChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="쉬움" targetTime={1} />
        <TimeChallenge title="중간" targetTime={5} />
        <TimeChallenge title="어려움" targetTime={10} />
        <TimeChallenge title="개어려움" targetTime={15} />
      </div>
    </>
  );
}

export default App;
