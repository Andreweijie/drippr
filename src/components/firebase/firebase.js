import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBtZuhcEpNzlvlwvM25-Wrn33An8ju-na8",
  authDomain: "drippr-854ce.firebaseapp.com",
  databaseURL: "https://drippr-854ce.firebaseio.com",
  projectId: "drippr-854ce",
  storageBucket: "drippr-854ce.appspot.com",
  messagingSenderId: "202058501457",
  appId: "1:202058501457:web:5a9ed38b0148a903d09770",
  measurementId: "G-MSXW3RVZPX"
};

const fire = firebase.initializeApp(config);
let db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default fire;
