import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyDHlR243vTGGYlVKrfkkLKpBYw_FAPDa6g",
    authDomain: "pry-portafolio.firebaseapp.com",
    projectId: "pry-portafolio",
    storageBucket: "pry-portafolio.appspot.com",
    messagingSenderId: "1039109744341",
    appId: "1:1039109744341:web:93c51e1735cca38d7b245c"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();
