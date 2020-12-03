import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4tComQzw7ujcExFaC6saRxo14DKGJo38",
  authDomain: "covent-f2bb2.firebaseapp.com",
  databaseURL: "https://covent-f2bb2.firebaseio.com",
  projectId: "covent-f2bb2",
  storageBucket: "covent-f2bb2.appspot.com",
  messagingSenderId: "422585074955",
  appId: "1:422585074955:web:a21859b4877320ee478e0e",
  measurementId: "G-B3GBBMM7PD"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

//const fireBaseAppAuth = fireBaseApp.auth()


//const providers = { googleProvider: new firebase.auth.GoogleAuthProvider() }


export default fire;

