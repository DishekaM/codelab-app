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
//If false, show grid
function ShowGrid(props){
  if(!props.show){

    return null;
  }
    return(<div className="App">
    <header className="App-header" >
    <img src={Logo} alt="" className="App-logo"/>
    <div>{NestedGrid(grid_random)}
    <ButtonGroup size="large" color="secondary" aria-label="large outlined primary button group">
  <Button onClick={() => window.location.reload(false)}>Refresh Me!</Button>
<Button>Stop</Button>
</ButtonGroup>
    </div>
</header>
</div>)
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

  //First page user sees to start game
  render() { 
    return(
      <div>
      <header className="App-header" >
      <ShowGrid show= {this.state.showGrid}/>
      <ButtonGroup size="large" color="secondary" aria-label="large outlined primary button group">
  <Button onClick={this.handleToggleClick}>Start New Game</Button>
  </ButtonGroup>
  </header>
      </div>
    );
    }
  }


export default App;

