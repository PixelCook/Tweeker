import React from "react";

const Post = (props) => {
  return (
    <>
      <section>
        <p>{props.content}</p>
        <button className="btn btn-warning">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </section>
    </>
  );
};
export default Post;
