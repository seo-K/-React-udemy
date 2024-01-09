import { useState, useEffect } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Result({ input }) {
  console.log(input);
  const [inputResult, setInputResult] = useState(
    calculateInvestmentResults({
      initialInvestment: input[0].value,
      annualInvestment: input[1].value,
      expectedReturn: input[2].value,
      duration: input[3].value,
    })
  );

  const initialInvestment = inputResult[0].valueEndOfYear - inputResult[0].interest - inputResult[0].annualInvestment;
  console.log(initialInvestment);
  useEffect(() => {
    init();
    // initialInvestment 업데이트 추가
    setInputResult(
      calculateInvestmentResults({
        initialInvestment: input[0].value,
        annualInvestment: input[1].value,
        expectedReturn: input[2].value,
        duration: input[3].value,
      })
    );
  }, [input]);

  function init() {
    setInputResult(
      calculateInvestmentResults({
        initialInvestment: input[0].value,
        annualInvestment: input[1].value,
        expectedReturn: input[2].value,
        duration: input[3].value,
      })
    );
  }

  console.log(initialInvestment);
  return (
    <>
      {inputResult !== null ? (
        <table id="result">
          <thead>
            <tr>
              <th className="center">년도</th>
              <th className="center">투자 가치</th>
              <th className="center">이자 (연간)</th>
              <th className="center">총 이자</th>
              <th className="center">투자 자본</th>
            </tr>
          </thead>
          <tbody>
            {inputResult.map((yearData, index) => {
              const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
              const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
              return (
                <tr key={"tr" + index}>
                  <td>{yearData.year}</td>
                  <td>{formatter.format(yearData.valueEndOfYear)}</td>
                  <td>{formatter.format(yearData.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className="center">유효한 값을 입력해주세요</p>
      )}
    </>
  );
}
