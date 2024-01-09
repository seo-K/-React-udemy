import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result.jsx";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // input validation
  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputFilter, newValue) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputFilter]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid ? <Result input={userInput} /> : <p className="center">유효한 값을 입력해주세요</p>}
    </>
  );
}

export default App;
