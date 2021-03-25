// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCIsn8rYLxpJI8eVyykg3y0Hf50oa3GD0Y",
    authDomain: "challenge-345b0.firebaseapp.com",
    projectId: "challenge-345b0",
    storageBucket: "challenge-345b0.appspot.com",
    messagingSenderId: "72140066068",
    appId: "1:72140066068:web:d399971058a01fefb2c601",
    measurementId: "G-L2XNBRX47G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth};