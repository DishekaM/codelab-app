/**Credits: Kelsi Fulton assisted with assignment
 * https://material-ui.com/
 */

import React, { useState, useEffect } from 'react';
import findAllSolutions from './solver.js';
import Board from './Board.js';
import GuessInput from './GuessInput.js';
import FoundSolutions from './FoundSolutions.js';
import ToggleGameState from './ToggleGameState.js';
import {CHALLENGES_STATE} from './challenges_enum.js'
import './App.css';
import LoginButton from './LoginButton.js';
import {GAME_STATE} from './game_state_enum.js';
import {RandomGrid} from './random_grid.js';
import Logo from './logo2.svg';
import { LoadChallenge } from './LoadChallenge.js'
import Leaderboard from './Leaderboard.js'; 



function App() {
  var challenge_grid = LoadChallenge();

  const [user, setUser] = useState(null);
  const [allSolutions, setAllSolutions] = useState([]);
  const [foundSolutions, setFoundSolutions] = useState([]);
  const [gameState, setGameState] = useState(GAME_STATE.BEFORE);
  const [grid, setGrid] = useState([]);
  const [challengeGame, setChallenge] = useState(CHALLENGES_STATE.CHALLENGE_1);


  useEffect(() => {
    const wordList = require('./full-wordlist.json');
    let tmpAllSolutions = findAllSolutions(grid, wordList.words);
    setAllSolutions(tmpAllSolutions);
  }, [grid]);

//USE EFFECT TO SET AND LOAD THE "CHALLENGE GRID", RANDOM GRID AND SOLUTION
  useEffect(() => {
    if (gameState === GAME_STATE.IN_PROGRESS) {
      setGrid(RandomGrid());
      setFoundSolutions([]);
    }
    else if (gameState === GAME_STATE.CHALLENGE_MODE) {
      if(challengeGame === CHALLENGES_STATE.CHALLENGE_1){
        setGrid(challenge_grid[0]);
        //setHighScore(allHighScores[0]);
      }
      else if(challengeGame === CHALLENGES_STATE.CHALLENGE_2){
        setGrid(challenge_grid[1]);
        //setHighScore(allHighScores[1]);
      }
      else if(challengeGame === CHALLENGES_STATE.CHALLENGE_3){
        setGrid(challenge_grid[2]);
        //setHighScore(allHighScores[2]);
      }
      setFoundSolutions([]);
    }
  }, [gameState, challengeGame]);

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
   
   </header>
      <ToggleGameState gameState={gameState}
                       setGameState={(state) => setGameState(state)}
                       challengeGame={challengeGame} 
                       setChallenge={(challengeGame) => setChallenge(challengeGame)} />
      <div position= 'absolute'>
      </div>

      { gameState === GAME_STATE.IN_PROGRESS &&
        <div>
            <div>
            <img src={Logo} alt="" className="App-logo" />
            </div>
          <Board board={grid} />
            <GuessInput allSolutions={allSolutions}
                foundSolutions={foundSolutions}
                correctAnswerCallback={(answer) => correctAnswerFound(answer)}/>
          <FoundSolutions headerText="Solutions you've found" words={foundSolutions} />
        </div>
      }

      { gameState === GAME_STATE.CHALLENGE_MODE &&
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
          <div position= 'absolute'>
          <Board board={grid} />
          <div>
            <Leaderboard/>
          </div>
          <FoundSolutions headerText="All possible solutions" words={allSolutions} />
          <FoundSolutions headerText="Solutions you've found" words={foundSolutions} />
          </div>
          </div>
      }
    </div>
  );
}


export default App;
