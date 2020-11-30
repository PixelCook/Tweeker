import React from "react";

const NewPost = (props) => {
  return (
    <>
      <form className="form-group" onSubmit={props.savePost}>
        <h1>Create New Post</h1>
        <textarea
          onChange={props.saveContentState}
          placeholder="Blog your heart out"
          rows="8"
          cols="41"
          ref={props.getContent}
        ></textarea>
        <button className="btn btn-dark">Twink It</button>
      </form>
    </>
  );
};
export default NewPost;