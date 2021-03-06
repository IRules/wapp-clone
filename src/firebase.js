// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBXCV-9guziuplhPssUUSSfDD4KR0oc5GM",
    authDomain: "webchat-empowersoft.firebaseapp.com",      
    projectId: "webchat-empowersoft",
    storageBucket: "webchat-empowersoft.appspot.com",
    messagingSenderId: "486137239659",
    appId: "1:486137239659:web:a2def7956d5cb0df88392e",
    measurementId: "G-VYBRZ8NDTD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); // initializam firebase

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const providerg = new firebase.auth.GoogleAuthProvider();
  const providerf = new firebase.auth.FacebookAuthProvider();
  const providert = new firebase.auth.TwitterAuthProvider();

  export default db;
  export {auth, providerg, providerf, providert};    