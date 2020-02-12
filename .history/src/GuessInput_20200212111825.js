import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import './GuessInput.css';

function GuessInput({allSolutions, foundSolutions, correctAnswerCallback}) {

  const [labelText, setLabelText] = useState("Enter possible solutions...");
  const [input, setInput] = useState("");

  function evaluateInput() {
    if (foundSolutions.includes(input)) {
      setLabelText(input + " is correct!");
    } else if (allSolutions.includes(input)) {
      correctAnswerCallback(input);
      setLabelText(input + " has already been found!");
    } else {
      setLabelText(input + " is incorrect!");
    }
  }

  function keyPress(e) {
    if (e.key === 'Enter') {
      evaluateInput()
    }
  }

  return (
    <div className="Guess-input">
      <div>
        {labelText}
      </div>
      <TextField onKeyPress={(e) => keyPress(e)} onChange={(event) => setInput(event.target.value)} />
    </div>
  );
}

export default GuessInput;
