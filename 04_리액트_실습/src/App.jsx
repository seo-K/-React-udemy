import { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Result from "./components/Result";

const inputList = [
  {
    id: "초기투자액",
    labelText: "초기투자액",
    value: 10000,
  },
  {
    id: "매년_투자되는_금액",
    labelText: "매년 투자되는 금액",
    value: 1200,
  },
  {
    id: "예상_수익률_(연간)",
    labelText: "예상 수익률 (연간)",
    value: 6,
  },
  {
    id: "투자_기간",
    labelText: "투자 기간 (시간 프레임)",
    value: 10,
  },
];

function App() {
  const [inputValue, setInputValue] = useState(inputList);
  function onChangeValue(targetId, newValue) {
    setInputValue((prev) => {
      return prev.map((item) => (item.id === targetId ? { ...item, value: +newValue } : item));
    });
  }

  return (
    <>
      <Header />
      <form action="" id="user-input">
        <div className="input-group">
          <Input id={inputList[0].id} label={inputList[0].labelText} onChangeValue={onChangeValue} initialValue={inputList[0].value} />
          <Input id={inputList[1].id} label={inputList[1].labelText} onChangeValue={onChangeValue} initialValue={inputList[1].value} />
        </div>
        <div className="input-group">
          <Input id={inputList[2].id} label={inputList[2].labelText} onChangeValue={onChangeValue} initialValue={inputList[2].value} />
          <Input id={inputList[3].id} label={inputList[3].labelText} onChangeValue={onChangeValue} initialValue={inputList[3].value} />
        </div>
      </form>
      <Result input={inputValue} />
    </>
  );
}

export default App;
