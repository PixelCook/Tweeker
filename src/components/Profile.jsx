import React from "react";
import ParticlesBg from "particles-bg";

const Profile = (props) => {
  return (
    <>
      <ParticlesBg type="lines" bg={true} />
      <form className="form-group main" onSubmit={props.saveProfile}>
        <h2>What's the name bub?</h2>
        <input
          onChange={props.setProfileState}
          placeholder="Slim Jim"
          ref={props.getProfile}
        ></input>
        <br />
        <br />
        <button className="btn btn-dark">Get Tweekin'</button>
      </form>
    </>
  );
};

export default Profile;
