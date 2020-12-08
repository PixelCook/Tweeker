import React from "react";

const Post = (props) => {
  return (
    <>
      <section className="tweet">
        <h3>{props.content}</h3>
        <p>{props.date}</p>
        <p>{props.userName}</p>
      </section>
    </>
  );
};
export default Post;
