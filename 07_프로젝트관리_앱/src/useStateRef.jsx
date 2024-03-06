import { useState, useRef } from "react";

function App() {
  const [상태값, set상태값] = useState(0);
  const countRef = useRef(0);
  let 변수카운터 = 0;
  const [렌더링, set렌더링] = useState(0);

  console.log("***** 렌더링 후 Ref:", countRef.current);
  console.log("***** 렌더링 후 Var:", 변수카운터);

  const State증가함수 = () => {
    set상태값(상태값 + 1);
  };
  const useRef증가함수 = () => {
    countRef.current = countRef.current + 1;
    console.log("참조 +1! --->", countRef.current);
  };
  const Let증가함수 = () => {
    변수카운터 = 변수카운터 + 1;
    console.log("변수 +1! --->", 변수카운터);
  };

  const 렌더링함수 = () => {
    set렌더링(!렌더링);
  };

  return (
    <div className="App" style={{ padding: "1rem" }}>
      <main className="App-header">
        <p>useState: {상태값}</p>
        <p>useRef: {countRef.current}</p>
        <p>let: {변수카운터}</p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button onClick={State증가함수} style={{ background: "#000", color: "#fff", padding: "0.5rem 1rem" }}>
            참조 +1!
          </button>
          <button onClick={useRef증가함수} style={{ background: "#000", color: "#fff", padding: "0.5rem 1rem" }}>
            참조 +1!
          </button>
          <button onClick={Let증가함수} style={{ background: "#000", color: "#fff", padding: "0.5rem 1rem" }}>
            변수 +1!
          </button>
          <button onClick={렌더링함수} style={{ background: "#000", color: "#fff", padding: "0.5rem 1rem" }}>
            렌더링!
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
