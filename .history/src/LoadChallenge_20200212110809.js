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
   

  return allChallengeBoards;
  
}

