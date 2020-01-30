/** Sources: https://material-ui.com/ */

import React from 'react';
import './App.css';
import {RandomGrid} from './BoilerPlate.js';
import NestedGrid from './BoggleGrid.js';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//import { ReactComponent as Logo } from './logo2.svg';
import Logo from './logo2.svg';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField required id="standard-required" label="Required" defaultValue="Enter possible solutions..." />
        <TextField
          id="standard-solution-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /></div></form>
        
  )}



var grid_random = RandomGrid()
console.log(grid_random)

//Grid is not displayed until user clicks start
//If false, show grid

function ShowGrid(props){
  if(!props.show){

    return null;
  }
    return(<div className="App">
    <header className="App-header" >
    <ButtonGroup size="large" aria-label="large outlined primary button group">
    <Button onClick={() => window.location.reload(false)}>Start Over</Button>
</ButtonGroup>
    <img src={Logo} alt="" className="App-logo"/>
    <div>{NestedGrid(grid_random)}
    
    </div>
    <FormPropsTextFields show= {this.state.showGrid} />
</header>
</div>)
  }
  
 //Create Pa 
class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {showGrid: false}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick(){
    this.setState(prevState => ({
      showGrid: !prevState.showGrid
    }));
  }

  //First page user sees to start game
  render() { 
    return(
      <div>
      <header className="App-header" >
      <ShowGrid show= {this.state.showGrid}/>
      <ButtonGroup size="large"  aria-label="large outlined primary button group">
    <Button onClick={this.handleToggleClick}>  {this.state.showGrid ? 'Hide Board' : 'Start New Game / Show Board'}</Button>
  </ButtonGroup>
 
  </header>
      </div>
    );
    }
  }

 
export default App;

