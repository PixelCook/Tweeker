import React, { useState } from "react";
import firebase, { auth } from "./../firebase";
import { ButtonGroup } from "react-bootstrap";
import {storage} from "../firebase"
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const logOut = () => {
    firebase.auth().signOut();
  };

  const resetInput = () => {
    setEmail("");
    setPassword("");
  };

  const google = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const handleChange = e =>{
    if (e.target.files[0]){
      setImage(e.target.files[0])
    }
};
  const handleUpload = () => {
    const uploadAvatar = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error)
      },
      () => {
        storage
        .ref("images")
        .child(image.name)
        getDowloadURL()
        .then(url => {
          console.log(url)
        })
      }
    )
  };

  return (
    <>
      <div className="form-group main signup">
        <h3>Login/Register</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button className="btn btn-dark" onClick={register}>
            Register
          </button>
          <input
          type="file"
          onChange={handleChange}
          placeholder="User/documents/gallery"
        />
         <button className="btn btn-info" onClick={handleUpload}>
            Add Avatar
          </button>
        <ButtonGroup>
          <button className="btn btn-dark" onClick={login}>
            Login
          </button>
          <button className="btn btn-primary" onClick={google}>
            Sign in with Google
          </button>
        <button className="btn btn-dark" onClick={logOut}>
          Log Out
        </button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default Login;
