import React, { useState, useRef, useEffect } from "react";
import NewPost from "./NewPost";
import Post from "./Post"

const DisplayAllPosts = () => {
  const [content, setContent] = useState("");
  const saveditems = JSON.parse(localStorage.getItem('allPosts'))
  const [allPosts, setAllPosts] = useState(saveditems || []);
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

useEffect(() => {
    localStorage.setItem('allPosts', JSON.stringify(allPosts));
  }, [allPosts]);

  if(isCreateNewPost){
    return (
      <>
      <NewPost
        saveContentState={saveContentState}
        getContent={getContent}
        savePost={savePost}
        content={content}
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
