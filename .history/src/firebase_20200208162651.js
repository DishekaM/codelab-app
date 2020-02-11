import * as firebase from "firebase/app";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs


// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyC-zMvb_4uxcqUjOYM8VO_wWebpv3VowBo",
    authDomain: "boggle-pr.firebaseapp.com",
    databaseURL: "https://boggle-pr.firebaseio.com/",
    projectId: "boggle-pr",
    storageBucket: "boggle-pr.appspot.com",
    messagingSenderId: "397178254874",
    appId: "1:397178254874:web:2fb4b0ce2755ad08d503a3"
  };


 firebase.initializeApp(firebaseConfig);