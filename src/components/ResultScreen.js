
import React from "react";

const ResultScreen = ({ successRate, cyclesUsed, onRecalculate }) => {
  return (
    <div className="screen">
      <h2>Your estimated IVF Success Rate is</h2>
      <div className="result">
        <div className="success-rate">{successRate}%</div>
        <p>With {cyclesUsed} IVF Cycle(s)</p>
      </div>
      <button onClick={onRecalculate}>Recalculate</button>
    </div>
  );
};

export default ResultScreen;
