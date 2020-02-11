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
import TextInput from './TextInput'
import firebase from './firebase';

//import Stopwatch from './Stopwatch';
firebase.firestore().collections('times').add({
  title: "The color purple",
  time_sec: 45
})

function App() {

  const [user, setUser] = useState(null);
  const [allSolutions, setAllSolutions] = useState([]);
  const [foundSolutions, setFoundSolutions] = useState([]);
  const [gameState, setGameState] = useState(GAME_STATE.BEFORE);
  const [grid, setGrid] = useState([]);

  // useEffect will trigger when the array items in the second argument are
  // updated so whenever grid is updated, we will recompute the solutions
  useEffect(() => {
    const wordList = require('./full-wordlist.json');
    let tmpAllSolutions = findAllSolutions(grid, wordList.words);
    setAllSolutions(tmpAllSolutions);
  }, [grid]);

  // This will run when gameState changes.
  // When a new game is started, generate a new random grid and reset solutions
  useEffect(() => {
    if (gameState === GAME_STATE.IN_PROGRESS) {
      setGrid(RandomGrid());
      setFoundSolutions([]);
    }
  }, [gameState]);

  function correctAnswerFound(answer) {
    console.log("New correct answer:" + answer);
    setFoundSolutions([...foundSolutions, answer]);
  }

  return (
    <div className="App">
    <header className="App-header">
    <LoginButton setUser={(user) => setUser(user)} />
   {
     user != null &&
     <p>Welcome, {user.displayName} ({user.email})</p>
   }
   <TextInput promptText="Name?" field="name" user={user} />
   <TextInput promptText="Hometown?" field="hometown" user={user} />
   </header>
      <ToggleGameState gameState={gameState}
                       setGameState={(state) => setGameState(state)} />
      { gameState === GAME_STATE.IN_PROGRESS &&

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
