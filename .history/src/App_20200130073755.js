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
class ShowGrid extends React.Component {
  render(props) {
 
    return(<div className="App">
    <header className="App-header" >
    <ButtonGroup size="large" color="secondary" aria-label="large outlined primary button group">
  <Button onClick={() => window.location.reload(false)}>End Game</Button>
</ButtonGroup>
    <img src={Logo} alt="" className="App-logo"/>
    <div>{NestedGrid(grid_random)}
    
    </div>
</header>
</div>)
  }
}
  
  class StartGameButton extends React.Component{
    render() {
      return (
        <ButtonGroup size="large" color="secondary" aria-label="large outlined primary button group">
        <Button>Start Game</Button>
        </ButtonGroup>
      );
    }
  }

  class EndGameButton extends React.Component{
    render() {
      return (
        <ButtonGroup size="large" color="secondary" aria-label="large outlined primary button group">
        <Button onClick={this.handleToggleClick}> {this.state.showGrid ? 'End Game' : 'Start New Game'}</Button>
        </ButtonGroup>
      );
    }
  }


 //Create Parent Component 
class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {showGrid: true}
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
      <StartGameButton/>
  </header>
      </div>
    );
    }
  }


export default App;

