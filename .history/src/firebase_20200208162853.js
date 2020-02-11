import * as firebase from "firebase/app";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs


// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA_vJZ-8X-TDxXyTBsKyfhW7ZnCXUeJW58",
    authDomain: "boggle-pr.firebaseapp.com",
    databaseURL: "https://boggle-pr.firebaseio.com",
    projectId: "boggle-pr",
    storageBucket: "boggle-pr.appspot.com",
    messagingSenderId: "531435000770",
    appId: "1:531435000770:web:d045180e9f6e33b7187c5b"
  };


 firebase.initializeApp(firebaseConfig);