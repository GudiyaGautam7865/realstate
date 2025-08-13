import React, { useState, useEffect } from "react";
import "./emicalculator.css"; // Optional CSS file for styling

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(40000000); // Default value
  const [interestRate, setInterestRate] = useState(7); // Default value
  const [loanTenure, setLoanTenure] = useState(5); // Default value
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);
  const [interestComponent, setInterestComponent] = useState(0);

  // Function to calculate EMI
  const calculateEMI = () => {
    const monthlyInterestRate = interestRate / 12 / 100;
    const totalMonths = loanTenure * 12;

    const emi =
      loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, totalMonths) /
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

    const totalAmountPayable = emi * totalMonths;
    const interestComponent = totalAmountPayable - loanAmount;

    setMonthlyEMI(emi.toFixed(2));
    setTotalPayable(totalAmountPayable.toFixed(2));
    setInterestComponent(interestComponent.toFixed(2));
  };

  // Recalculate EMI whenever inputs change
  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  return (
    <div className="calculator-container">
      <h1>EMI Calculator</h1>
      <div className="form-group">
        <label htmlFor="loanAmount">Loan Amount</label>
        <input
          type="number"
          id="loanAmount"
          placeholder="Enter loan amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label htmlFor="interestRate">Annual Interest Rate %</label>
        <input
          type="number"
          id="interestRate"
          placeholder="Enter interest rate"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label htmlFor="loanTenure">Loan Tenure (Year)</label>
        <input
          type="number"
          id="loanTenure"
          placeholder="Enter loan tenure"
          value={loanTenure}
          onChange={(e) => setLoanTenure(parseFloat(e.target.value))}
        />
      </div>
      <div className="result-container">
        <p>
          <strong>Monthly EMI:</strong> ₹{monthlyEMI}
        </p>
        <p>
          <strong>Total Amount Payable:</strong> ₹{totalPayable}
        </p>
        <p>
          <strong>Interest Component:</strong> ₹{interestComponent}
        </p>
      </div>
      <a href="#" className="apply-button">
        Apply for Home Loans
      </a>
    </div>
  );
};

export default EMICalculator;
