import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
          <Button onClick={handleClick}>{options[selectedIndex]}</Button>
          <Button
            color="primary"
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === 2}
                        selected={index === selectedIndex}
                        onClick={event => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
}










// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }
  



//   function LoadChallenge(props) {
//     const [apiResult, setApiResult] = React.useState(null);
//     const [score, setScore] = React.useState(null);
//     async function LChallenge() {
//         const db = firebase.firestore();
//         const querySnapshot = await db.collection("boggle").get();
//         const result = querySnapshot.docs.map(function (doc) {
//             return doc.data();
//         });
//         let dict = result[0];
//         var chal_1 = dict[Object.keys(dict)[0]]
//         var chal_2 = dict[Object.keys(dict)[1]]
//         var chal_3 = dict[Object.keys(dict)[2]]
//         var chal_Arr = [[chal_1],[chal_2],[chal_3]];
//         setApiResult(chal_Arr);
//         setScore(result[1])
//     }
    
//     function display_load() {
//         document.getElementById("challengeDropdown").classList.toggle("show");
//         LChallenge()        
//     }

//     function setvariable(num){
//       window.setter = num
//     }

//     const sendData = () => {
//          props.parentCallback([apiResult,score]);
//     }

//     return (
//         <div class="Toggle-game-state">
//             {sendData()}
//             <button class="dropbtn" onClick={() => display_load()} >
//                 Load Challenge
//                 <div id="challengeDropdown" class="dropdown-content">
//                     <button class="myButton" onClick={() => setvariable(0)}>Challenge 1</button>
//                     <button class="myButton" onClick={() => setvariable(1)}>Challenge 2</button>
//                     <button class="myButton" onClick={() => setvariable(2)}>Challenge 3</button>
//                 </div>
//             </button>
            
//         </div>
//     );
// }




// firebase.firestore().collection('boggle').get().then((snapshot) => {
//   snapshot.docs.forEach(doc => {
//     console.log(doc.data())
//   })
 
// })

// function LoadChallenge() {
//     // const challengeList = document.querySelector('#challenge-list'); 

//     function showChallenges() {
//         return (
//             <div id="challengeDropdown" class="dropdown-content show">
//             <ButtonGroup size="small" aria-label="challenge button group">
//                 <Button>Challenge 1</Button>
//                 <Button>Challenge 2</Button>
//                 <Button>Challenge 3</Button>
//                 </ButtonGroup>
//             </div>
//         )
//     }

//     return(
        
//         <Button variant="outlined" onClick={() => showChallenges()}>
//         Load Challenge
//         </Button>
//     )
 
// }


