import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import {GAME_STATE} from './game_state_enum.js';
import './ToggleGameState.css';
import Logo from './logo2.svg';

function ToggleGameState({gameState, setGameState}) {

  const [buttonText, setButtonText] = useState("Start a new game!");
  function updateGameState() {
    if (gameState === GAME_STATE.START){
      setGameState(GAME_STATE.BEFORE)
    }
    else if (gameState === GAME_STATE.BEFORE || gameState === GAME_STATE.ENDED) {
      setGameState(GAME_STATE.IN_PROGRESS);
      setButtonText("End game");
    } else if (gameState === GAME_STATE.IN_PROGRESS) {
      setGameState(GAME_STATE.ENDED);
      setButtonText("Start a new game!");
      
      
    }
  }

  return (
    <div>
    
    <div className="Toggle-game-state">
      <Button variant="outlined" onClick={() => updateGameState()} >
        {buttonText}
      </Button>
    </div>
    <div>
    <img src={Logo} alt="" className="App-logo" />
    </div>
    </div>
  );
}

export default ToggleGameState;
