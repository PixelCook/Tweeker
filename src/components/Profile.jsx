import React from "react"

const Profile = (props) => {
    return (
        <>
        <form className="form-group main" onSubmit={props.saveProfile}>
        <h2>What's the name bub?</h2>
        <input
          onChange={props.setProfileState}
          placeholder="Slim Jim"
          ref={props.getProfile}
        ></input>
        <br/>
        <button className="btn btn-dark">Get Tweekin'</button>
      </form>
        </>
    )
}


export default Profile;