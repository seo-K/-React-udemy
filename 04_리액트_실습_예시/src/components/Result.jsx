import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

  console.log(initialInvestment);
  return (
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
        {resultsData &&
          resultsData.map((yearData, index) => {
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
  );
}
