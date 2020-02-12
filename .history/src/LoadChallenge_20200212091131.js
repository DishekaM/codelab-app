import * as firebase from 'firebase';
import 'firebase/firestore';



var gridsMap = {};
export default function LoadChallenge() {
  const db = firebase.firestore();
  var challengeBoard = [];

  var docRef = db.collection("boggle").doc("grid");
  docRef.get().then(function(doc) {
      if (doc.exists) {
        gridsMap= doc.data();
      } else {
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  var allChallengeBoards = [];

    for (let challenge in gridsMap){
      let chars = gridsMap[challenge];

      if(chars.length >=  24) {
        const SIZE = 5;
        for (let row = 0; row < SIZE; row++) {
          challengeBoard[row] = [];
          for (let col = 0; col < SIZE; ++col) {
            challengeBoard[row][col] = chars[SIZE * row + col];
            if (challengeBoard[row][col] === "Q") {challengeBoard[row][col] = "Qu";}
          }
        }
        allChallengeBoards.push(challengeBoard);
        challengeBoard = [];
      }
    }
    console.log(docRef.get());

  return allChallengeBoards;
  
}






























// import React, { Component} from 'react';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Button from "@material-ui/core/Button";
// import * as firebase from 'firebase';
// import 'firebase/firestore';



// export default function LoadChallenge() {
//     // const challengeList = document.querySelector('#challenge-list'); 

//     const showChallenges = () => {
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
        
//         <Button variant="outlined" onClick={showChallenges}>
//         Load Challenge
//         </Button>
//     )
 
// }
















// class LoadChallenge extends Component {
   
    
//   constructor() {
   
//     super();
    
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
//     firebase.firestore().collection('boggle').get().then((snapshot) => {
//         snapshot.docs.forEach(doc => {
//           console.log(doc.data())
//         })
       
//       })
    
    
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
           
//               </div>
//             )
//             : (
//               null
//             )
//         }
//       </div>
//         );
//       }
//     }


// export default LoadChallenge;


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
//     firebase.firestore().collection('boggle').get().then((snapshot) => {
//         snapshot.docs.forEach(doc => {
//           console.log(doc.data())
//         })
       
//       })
//       function Challenges() {
//           database = firebase.database();
//           var ref = database.ref('boggle');
//           var boggle = data.val();
//           var keys = Object.keys(boggle);
//           console.log(keys)
         
          
//         //   for (var i =0; i< keys.length; i++){
//         //     <ButtonGroup orientation="vertical">
//         //         <Button variant="contained" >{keys}</Button>
                
//         //     </ButtonGroup>
//         // }
//     }
    
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
//              {Challenges()}
//               </div>
//             )
//             : (
//               null
//             )
//         }
//       </div>
//         );
//     }
// }


// export default LoadChallenge;


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