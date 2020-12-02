import React from "react";

const Post = (props) => {
  return (
    <>
      <section className="tweet">
        <h3>{props.content}</h3>
        <p>{props.date}</p>
        <p>{props.userName}</p>
        <button className="btn btn-danger delete" onClick={() => props.deletePost(props.id)}>Delete</button>
      </section>
    </>
  );
};
export default Post;
