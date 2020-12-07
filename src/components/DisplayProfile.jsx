import React from "react";

const DisplayProfile = (props) => {
  return (
    <>
      <form className="form-group main" onSubmit={props.updateProfile}>
        <h2>Are you, {Profile}, or is that someone else?</h2>
        <input
          onChange={props.setProfileState}
          placeholder={props.Profile}
          ref={props.getProfile}
        ></input>
        <br />
        <br />
        <button className="btn btn-dark">Get Tweekin'</button>
      </form>
    </>
  );
};

export default DisplayProfile;
