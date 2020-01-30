import React from 'react';
import './App.css';
import {RandomGrid} from './BoilerPlate.js';
import NestedGrid from './BoggleGrid.js';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//import { ReactComponent as Logo } from './logo2.svg';
import Logo from './logo2.svg';

function myFunction(){
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


var grid_random = RandomGrid()
console.log(grid_random)
function App() {  
  return (
    <div className="App">
      <header className="App-header" >
      <img src={Logo} alt="" className="App-logo"/>
       
      
      <ButtonGroup size="large" color="secondary" aria-label="large outlined primary button group">
    <Button onClick={() => window.location.reload(false)}>Refresh Me!</Button>
  <Button onClick={()=> myFunction() }>Start</Button>
  <Button>Stop</Button>
  {NestedGrid(grid_random)}
  </ButtonGroup>
  </header>
    </div>
  );
}




// class Gridd extends Component{
//   render(){
//     return(
//     function NestedGrid(grid) {
    
//       const classes = useStyles();
//     return (
        
//         <div className={classes.root}>
//           <Grid container justify='center' spacing={1} >
    
//             <Grid container justify='center' item xs={12} spacing={1}>
//             {FormRow(grid[0])}
//             </Grid>
//             <Grid container justify='center'  item xs={12} spacing={1}>
//             {FormRow(grid[1])}
//             </Grid>
//             <Grid container justify='center' item xs={12} spacing={1}>
//             {FormRow(grid[2])}
//             </Grid>
//             <Grid container justify='center' item xs={12} spacing={1}>
//             {FormRow(grid[3])}
//             </Grid>
//             <Grid container justify='center' item xs={12} spacing={1}>
//             {FormRow(grid[4])}
//             </Grid>
//           </Grid>
//         </div>
//       )
//     })}}


export default App;





//{NestedGrid(grid_random)}
// import React from 'react';
// import './App.css';
// import {RandomGrid} from './BoilerPlate.js';
// import NestedGrid from './BoggleGrid.js';
// import Randomize from './Randomize.js';
// //import { ReactComponent as Logo } from './logo2.svg';
// import Logo from './logo2.svg';

// var grid_random = RandomGrid()
// console.log(grid_random)
// function App() {  
//   return (
//     <div className="App">
//       <header className="App-header" >
//       <img src={Logo} alt="" className="App-logo"/>
//        <button onClick={ this.boggleDiv }>{NestedGrid(grid_random)}</button>
        
//         <Randomize/>
//       </header>
//     </div>
//   );
// }

// class Gridd extends Component{
//   render(){
//     return(
//     function NestedGrid(grid) {
    
//       const classes = useStyles();
//     return (
        
//         <div className={classes.root}>
//           <Grid container justify='center' spacing={1} >
    
//             <Grid container justify='center' item xs={12} spacing={1}>
//             {FormRow(grid[0])}
//             </Grid>
//             <Grid container justify='center'  item xs={12} spacing={1}>
//             {FormRow(grid[1])}
//             </Grid>
//             <Grid container justify='center' item xs={12} spacing={1}>
//             {FormRow(grid[2])}
//             </Grid>
//             <Grid container justify='center' item xs={12} spacing={1}>
//             {FormRow(grid[3])}
//             </Grid>
//             <Grid container justify='center' item xs={12} spacing={1}>
//             {FormRow(grid[4])}
//             </Grid>
//           </Grid>
//         </div>
//       )
//     })}}


// <ButtonGroup size="large" color="secondary" aria-label="large outlined primary button group">
//       <Button onClick={() => window.location.reload(false)}>Refresh Me!</Button>
//       {this.state.show? <div><Gridd/></div>:null}
//       <Button onClick={()=> this.boggleDiv() }>Start</Button>
//       <Button>Stop</Button>
//     </ButtonGroup>