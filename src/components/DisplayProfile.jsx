import React, { useContext } from "react";
import Login from "./auth/Login";
import { AuthContext } from "./auth/Auth";

const DisplayProfile = (props) => {
  const { currentUser } = useContext(AuthContext);
  const profile = currentUser ? currentUser.email : "";
  return (
    <>
      <form className="form-group main" onSubmit={props.updateProfile}>
        <h2>Are you, {profile}, or is that someone else?</h2>
        <Login />
        <br />
        <br />
        <button className="btn btn-dark">Get Tweekin'</button>
      </form>
    </>
  );
};

export default DisplayProfile;
