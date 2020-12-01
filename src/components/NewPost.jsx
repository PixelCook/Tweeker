import React from "react";

const NewPost = (props) => {
  
  return (
    <>
      <form className="form-group main" onSubmit={props.savePost}>
        <h1>Create New Post</h1>
        <textarea
          onChange={props.saveContentState}
          placeholder="Blog your heart out"
          rows="8"
          cols="41"
          ref={props.getContent}
        ></textarea>
        <br/>
        <button disabled={props.content.length>140 || props.content.length<5} className="btn btn-dark">Tweek It</button>
      </form>
    </>
  );
};
export default NewPost;