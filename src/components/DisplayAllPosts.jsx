import React, { useState, useRef } from "react";
import NewPost from "./NewPost";
import Post from "./Post"

const DisplayAllPosts = () => {
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  // initialize useRef
  const getContent = useRef();

  const saveContentState = (event) => {
    setContent(event.target.value);
    console.log(content);
  };

  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost)
  };

  const savePost = (event) => {
    event.preventDefault();
    const id = Date.now()
    setAllPosts([...allPosts, {content, id}]);
    getContent.current.value = "";
    toggleCreateNewPost()
  };

  const deletePost = id => {
    const modifiedPost = allPosts.filter(eachPost => {
      return eachPost.id !== id;
    })
    setAllPosts(modifiedPost);
  };


if (content.length > 144){
  
 return (
   <>
    Can't be longer than 144 characters
    <NewPost
      saveContentState={saveContentState}
      getContent={getContent}
      savePost={savePost}
     />
    </>
 )
}
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
   <div className="main">
   <h2>All Tweeks</h2>
   {!allPosts.length ?(
     <div>
       <h3>No Tweeks to Display</h3>
     </div>
   ) : (   
   allPosts.map(eachPost => {
     return (
     <Post
     id={eachPost.id}
     key={eachPost.id}
     content={eachPost.content}
     deletePost={deletePost}
     />
     );
   })
   )}
   <button className="btn btn-dark" onClick={toggleCreateNewPost}>Tweek It</button>
   </div>
  );
};

export default DisplayAllPosts;
