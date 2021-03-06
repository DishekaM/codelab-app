import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import {GAME_STATE} from './game_state_enum.js';
import './ToggleGameState.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';




function ToggleGameState({gameState, setGameState}) {

  const [buttonText, setButtonText] = useState("Start a new game!");
 
  function updateGameState() {
    if (gameState === GAME_STATE.BEFORE || gameState === GAME_STATE.ENDED) {
      setGameState(GAME_STATE.IN_PROGRESS);
      setButtonText("End game");
    } 
    
    else if (gameState === GAME_STATE.IN_PROGRESS) {
      setGameState(GAME_STATE.ENDED);
      setButtonText("Start a new game!");
      
      
    }
  }
  const StyledMenu = withStyles({
    paper: {
      border: '1px solid black',
      margin: 'auto'
    },
  })(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  function challengeButtons(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      // var gridRef = db.collection("boggle").doc("grid");
      // setGrid(doc.data('grid'))
     setAnchorEl(null);
    };
    return(
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="outlined"
        
        onClick={handleClick}
      >
        Load Challenges
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <div id="menu">
        <MenuItem onClick={handleClose}>Challenge 1</MenuItem>
        <MenuItem onClick={handleClose}>Challenge 2</MenuItem>
        <MenuItem onClick={handleClose}>Challenge 3</MenuItem>
        </div>
      </StyledMenu>
    </div>
    );
}

  return (
    <div>
    
    <div className="Toggle-game-state">
      <Button variant="outlined" onClick={() => updateGameState()} >
        {buttonText}
      </Button>
     
     
    </div>

    </div>
  );
}

export default ToggleGameState;
