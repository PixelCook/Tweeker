import React, { useState } from "react";
import firebase from "./../firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  }

  return (
    <>
      <div className="form-group main">
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
        <button className="btn btn-dark" onClick={login}>
          Login
        </button>
        <button className="btn btn-dark" onClick={logOut}>
          Log Out
        </button>
        <button className="fab fa-google" onClick={google}>Sign in with Google</button>
      </div>
    </>
  );
};

export default Login;
