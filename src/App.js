
import React, { useState } from "react";
import InputScreen from "./components/InputScreen";
import ResultScreen from "./components/ResultScreen";
import "./index.css";

const App = () => {
  const [screen, setScreen] = useState("input");
  const [successRate, setSuccessRate] = useState(0);
  const [cyclesUsed, setCyclesUsed] = useState(1);

  const handleCalculate = (rate, cycles) => {
    setSuccessRate(rate);
    setCyclesUsed(cycles);
    setScreen("result");
  };

  const handleRecalculate = () => {
    setScreen("input");
  };

  return (
    <div className="app">
      {screen === "input" ? (
        <InputScreen onCalculate={handleCalculate} />
      ) : (
        <ResultScreen
          successRate={successRate}
          cyclesUsed={cyclesUsed}
          onRecalculate={handleRecalculate}
        />
      )}
    </div>
  );
};

export default App;
