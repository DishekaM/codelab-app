import React from 'react';
import Button from "@material-ui/core/Button";
import firebase from './firebase';

//import Stopwatch from './Stopwatch';
firebase.firestore().collection('boggle').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data())
  })
 
})

function LoadChallenge() {
    const challengeList = document.querySelector('#challenge-list'); 

    function showChallenges() {
        return (
            <ul id="challenge-list"></ul>
        )
    }

    return(
        
        <Button variant="outlined" onClick={() => showChallenges()}>Load Challenge</Button>
    )
 

}

export default LoadChallenge
