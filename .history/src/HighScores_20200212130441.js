import firebase from 'firebase';
import 'firebase/firestore'

var highscores = {};

export function HighScores(){
  const db = firebase.firestore();
  var docRef = db.collection("boggle").doc("score");
  docRef.get().then(function(doc) {
      if (doc.exists) {
          highscores = doc.data();
      } else {
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  var myHighScores = [];

    for (let score in highscores){
      myHighScores.push(highscores[score]);
    }

  return myHighScores;
}
