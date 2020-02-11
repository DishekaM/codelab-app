import React, { useState, useEffect, Component } from 'react';
import Button from "@material-ui/core/Button";
import { ButtonGroup } from '@material-ui/core';
import * as firebase from 'firebase';
import 'firebase/firestore';


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  
  function LoadChallenge(props) {
      const [apiResult, setApiResult] = React.useState(null);
      const [score, setScore] = React.useState(null);
      async function LChallenge() {
          const db = firebase.firestore();
          const querySnapshot = await db.collection("boggle").get();
          const result = querySnapshot.docs.map(function (doc) {
              return doc.data();
          });
          let dict = result[0];
          var chal_1 = dict[Object.keys(dict)[0]]
          var chal_2 = dict[Object.keys(dict)[1]]
          var chal_3 = dict[Object.keys(dict)[2]]
          var chal_Arr = [[chal_1],[chal_2],[chal_3]];
          setApiResult(chal_Arr);
          setScore(result[1])
      }
      
      function display_load() {
          document.getElementById("myDropdown").classList.toggle("show");
          LChallenge()        
      }
  
      function setvariable(num){
        window.setter = num
      }
  
      const sendData = () => {
           props.parentCallback([apiResult,score]);
      }
  
      return (
          <div class="Toggle-game-state">
              {sendData()}
              <button class="dropbtn" onClick={() => display_load()} >
                  Load Challenge
                  <div id="myDropdown" class="dropdown-content">
                      <button class="myButton" onClick={() => setvariable(0)}>Challenge 1</button>
                      <button class="myButton" onClick={() => setvariable(1)}>Challenge 2</button>
                      <button class="myButton" onClick={() => setvariable(2)}>Challenge 3</button>
                  </div>
              </button>
              
          </div>
      );
  }




export default LoadChallenge

// class LoadChallenge extends Component {
   
    
//   constructor() {
   
//     super();
//     // firebase.firestore().collection('boggle').get().then((snapshot) => {
//     //     snapshot.docs.forEach(doc => {
//     //       console.log(doc.data())
//     //     })
       
//     //   })
    
//     this.state = {
//       showMenu: false,
//     };
    
//     this.showMenu = this.showMenu.bind(this);
//     this.closeMenu = this.closeMenu.bind(this);
//   }
  
  
  
//   showMenu(event) {
//     event.preventDefault();
    
//     this.setState({ showMenu: true }, () => {
//       document.addEventListener('click', this.closeMenu);
//     });
//   }
  
//   closeMenu(event) {
    
//     if (!this.dropdownMenu.contains(event.target)) {
      
//       this.setState({ showMenu: false }, () => {
//         document.removeEventListener('click', this.closeMenu);
//       });  
      
//     }
//   }

//   render() {
    
//     return (
//       <div>
//         <Button variant="outlined" onClick={this.showMenu}>
//           Load Challenge
//         </Button>
        
//         {
//           this.state.showMenu
//             ? (
//               <div
//                 className="menu"
//                 ref={(element) => {
//                   this.dropdownMenu = element;
//                 }}
//               >
//               <ButtonGroup orientation="vertical">
//                 <Button variant="contained" > Challenge 1</Button>
//                 <Button variant="contained"> Challenge 2 </Button>
//                 <Button variant="contained"> Challenge 3 </Button>
//             </ButtonGroup>
//               </div>
//             )
//             : (
//               null
//             )
//         }
//       </div>
//     );
//   }
// }




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


