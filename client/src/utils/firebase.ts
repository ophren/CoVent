import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQHcrCWn75xfhkH4gFSPYeA4Fovkrs6Gw",
  authDomain: "covent-3da54.firebaseapp.com",
  projectId: "covent-3da54",
  storageBucket: "covent-3da54.appspot.com",
  messagingSenderId: "917329844187",
  appId: "1:917329844187:web:b65d2244efd6ecd3a139fe",
  measurementId: "G-T9BCS54VF4"
};

// Initialize Firebase

const fire = firebase.initializeApp(firebaseConfig);

//const fireBaseAppAuth = fireBaseApp.auth()


//const providers = { googleProvider : new firebase.auth.GoogleAuthProvider() }


export default fire;

