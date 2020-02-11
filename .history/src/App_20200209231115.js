import React, { useState, useEffect } from 'react';
import findAllSolutions from './solver.js';
import Board from './Board.js';
import GuessInput from './GuessInput.js';
import FoundSolutions from './FoundSolutions.js';
import ToggleGameState from './ToggleGameState.js';
import './App.css';
import LoginButton from './LoginButton.js';
import {GAME_STATE} from './game_state_enum.js';
import {RandomGrid} from './random_grid.js';
import LoadChallenge from './LoadChallenge.js';
import Logo from './logo2.svg';




function App() {

 

  const [user, setUser] = useState(null);
  const [allSolutions, setAllSolutions] = useState([]);
  const [foundSolutions, setFoundSolutions] = useState([]);
  const [SetMessage] = useState([]);
  const [SetData] = useState([]);
  const [gameState, setGameState] = useState(GAME_STATE.BEFORE);
  const [message] = useState([]);
  const [grid, setGrid] = useState([]);

  // useEffect will trigger when the array items in the second argument are
  // updated so whenever grid is updated, we will recompute the solutions
  useEffect(() => {
    const wordList = require('./full-wordlist.json');
    let tmpAllSolutions = findAllSolutions(grid, wordList.words);
    window.solutions = tmpAllSolutions
    setAllSolutions(tmpAllSolutions);
  }, [grid]);

  // This will run when gameState changes.
  // When a new game is started, generate a new random grid and reset solutions
  useEffect(() => {
    if (gameState === GAME_STATE.IN_PROGRESS) {
      setGrid(RandomGrid());
      setFoundSolutions([]);
    }
    else{
      var marr = [[['a','b','c']],[['d','e','f']]];
        setGrid(message[window.setter]);
        setFoundSolutions([]);
    }
  }, [gameState]);

  function correctAnswerFound(answer) {
    console.log("New correct answer:" + answer);
    setFoundSolutions([...foundSolutions, answer]);
  }
  const callbackFunction = (childData) => {
    SetMessage(childData[0])
    SetData(childData[1])
}

  return (
    <div className="App">
    <header className="App-header">
    <LoginButton setUser={(user) => setUser(user)} />
   {
     user != null &&
     <p>Welcome, {user.displayName} ({user.email})</p>
   }
   </header>
   <LoadChallenge parentCallback = {callbackFunction} />
      <ToggleGameState gameState={gameState}
                       setGameState={(state) => setGameState(state)} />
      { gameState === GAME_STATE.IN_PROGRESS &&
        <div>
        <img src={Logo} alt="" className="App-logo" />
        </div>
        <div>
          <Board board={grid} />
          <GuessInput allSolutions={allSolutions}
                      foundSolutions={foundSolutions}
                      correctAnswerCallback={(answer) => correctAnswerFound(answer)}/>
          <FoundSolutions headerText="Solutions you've found" words={foundSolutions} />
        </div>
      }
      { gameState === GAME_STATE.ENDED &&
        <div>
          <Board board={grid} />
          <FoundSolutions headerText="All possible solutions" words={allSolutions} />
        </div>
      }
    </div>
  );
}

export default App;
