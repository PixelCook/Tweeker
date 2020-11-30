import React from "react";

const Post = (props) => {
  return (
    <>
      <section>
        <p>{props.content}</p>
        <button className="btn btn-danger delete" onClick={() => props.deletePost(props.id)}>Delete</button>
      </section>
    </>
  );
};
export default Post;
