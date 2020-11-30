import React, { useState, useRef } from "react";
import NewPost from "./NewPost";
import Post from "./Post"

const DisplayAllPosts = () => {
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  // initialize useRef
  const getContent = useRef();

  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost)
  }

  const savePost = (event) => {
    event.preventDefault();
    const id = Date.now()
    setAllPosts([...allPosts, {content, id}]);
    getContent.current.value = "";
    toggleCreateNewPost()
  }

  const saveContentState = (event) => {
    setContent(event.target.value);
    console.log(content);
  };
  if(isCreateNewPost){
    return (
      <>
      <NewPost
        saveContentState={saveContentState}
        getContent={getContent}
        savePost={savePost}
      />
    </>
    )
  }
  return (
   <>
   <h2>All Tweeks</h2>
   {!allPosts.length ?(
     <div>
       <h3>No tweeks</h3>
     </div>
   ) : (   
   allPosts.map(eachPost => {
     return (
     <Post
     id={eachPost.id}
     key={eachPost.id}
     content={eachPost.content}
     />
     );
   })
   )}
   <button onClick={toggleCreateNewPost}>Tweek It</button>
   </>
  );
};

export default DisplayAllPosts;
