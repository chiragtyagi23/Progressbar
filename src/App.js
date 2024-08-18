import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([0]);  
  const [currentStep, setCurrentStep] = useState(0);  

  function inc() {
    if (value < 150) {
      const newValue = value + 1;
      const newHistory = history.slice(0, currentStep + 1);
      setHistory([...newHistory, newValue]);
      setCurrentStep(currentStep + 1);
      setValue(newValue);
    }
  }

  function dec() {
    if (value > -150) {
      const newValue = value - 1;
      const newHistory = history.slice(0, currentStep + 1);
      setHistory([...newHistory, newValue]);
      setCurrentStep(currentStep + 1);
      setValue(newValue);
    }
  }

  function undo() {
    if (currentStep > 0) {
      const previousStep = currentStep - 1;
      setValue(history[previousStep]);
      setCurrentStep(previousStep);
    }
  }

  function redo() {
    if (currentStep < history.length - 1) {
      const nextStep = currentStep + 1;
      setValue(history[nextStep]);
      setCurrentStep(nextStep);
    }
  }

  return (
    <div className="App">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(value + 150) / 3}%` }}></div>
      </div>

      <br />

      <button onClick={inc} className="inc">Increment</button>
      <button onClick={dec} className="dec">Decrement</button> <br /><br />
      <button onClick={undo} className="undo">Undo</button>
      <button onClick={redo} className="redo">Redo</button>
    </div>
  );
}

export default App;
