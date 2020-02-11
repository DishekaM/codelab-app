import React from 'react';
import Button from "@material-ui/core/Button";
import firebase from './firebase';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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
            <ButtonGroup size="small" aria-label="small outlined button group">
            <Button>Challenge 1</Button>
            <Button>Challenge 2</Button>
            <Button>Challenge 3</Button>
            </ButtonGroup>
        )
    }

    return(
        
        <Button variant="outlined" onClick={() => showChallenges()}>Load Challenge</Button>
    )
 

}

export default LoadChallenge
