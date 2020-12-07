var firebaseConfig = {
  apiKey: "AIzaSyDCr9fdiziJj5L9Wc8-dW3eWJe1VDclbMg",
  authDomain: "tweeker-d8213.firebaseapp.com",
  projectId: "tweeker-d8213",
  storageBucket: "tweeker-d8213.appspot.com",
  messagingSenderId: "830715937417",
  appId: "1:830715937417:web:72a435ebe0eee5830abc58",
  measurementId: "G-5XK6ZE84XP",
};
var db = firebase.firestore();
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

db.collection("users")
  .add({
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  })
  .then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function (error) {
    console.error("Error adding document: ", error);
  });
