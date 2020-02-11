import * as firebase from "firebase/app";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs


// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyC-zMvb_4uxcqUjOYM8VO_wWebpv3VowBo",
    authDomain: "first-database-project-266501.firebaseapp.com",
    databaseURL: "https://first-database-project-266501.firebaseio.com",
    projectId: "first-database-project-266501",
    storageBucket: "first-database-project-266501.appspot.com",
    messagingSenderId: "397178254874",
    appId: "1:397178254874:web:2fb4b0ce2755ad08d503a3"
  };


 firebase.initializeApp(firebaseConfig);