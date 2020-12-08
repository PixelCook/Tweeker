import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyDCr9fdiziJj5L9Wc8-dW3eWJe1VDclbMg",
  authDomain: "tweeker-d8213.firebaseapp.com",
  projectId: "tweeker-d8213",
  Bucket: "tweeker-d8213.appspot.com",
  messagingSenderId: "830715937417",
  appId: "1:830715937417:web:72a435ebe0eee5830abc58",
  measurementId: "G-5XK6ZE84XP",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage()
export default firebase;
export const firestore = firebase.firestore();
export const auth = firebase.auth();
