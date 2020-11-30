import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCvb96JRq4x8H-sqCMXp3a-521kq9xh47w",
    authDomain: "covent-2b7ac.firebaseapp.com",
    databaseURL: "https://covent-2b7ac.firebaseio.com",
    projectId: "covent-2b7ac",
    storageBucket: "covent-2b7ac.appspot.com",
    messagingSenderId: "16244326109",
    appId: "1:16244326109:web:1fc139df113913abf9a534"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire; 