import React, { useState } from "react";
import "./App.css";

const messages = [
  "Learn React",
  "Apply for jobs💼",
  "Invest your new income wisely🏠",
];
function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    setStep(step - 1);
  }
  function handleNext() {
    setStep(step + 1);
  }

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>
        <p className="messages">{messages[step - 1]}</p>
        <div className="buttons">
          <button style={{ color: "#fff", backgroundColor: "#7950f2" }}>
            Previous
          </button>
          <button style={{ color: "#fff", backgroundColor: "#7950f2" }}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
