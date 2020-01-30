import React from 'react';
import './App.css';
import {RandomGrid} from './BoilerPlate.js';
import NestedGrid from './BoggleGrid.js';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//import { ReactComponent as Logo } from './logo2.svg';
import Logo from './logo2.svg';

var grid_random = RandomGrid()
console.log(grid_random)

//Grid is not displayed until user clicks start
function ShowGrid(props){
  if(!props.show){
    return null;
  }
  return (
    <div className="App">
      <header className="App-header" >
      <img src={Logo} alt="" className="App-logo"/>
      <div>{NestedGrid(grid_random)}</div>
  </header>
 </div>
  );
}
  
class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {showGrid: false}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick(){
    this.setState(prevState => ({
      showGrid:
      !prevState.showGrid
    }));
  }

  render() { 
    return(
      <div>
      <header className="App-header" >
      <ShowGrid show= {this.state.showGrid}/>
      <ButtonGroup size="large" color="secondary" aria-label="large outlined primary button group">
    <Button onClick={() => window.location.reload(false)}>Refresh Me!</Button>
  <Button onClick={this.handleToggleClick}>Start</Button>
  <Button>Stop</Button>
  </ButtonGroup>
  </header>
      </div>
    );
    }
  }


export default App;

