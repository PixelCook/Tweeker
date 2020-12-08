import React, { useState, useRef, useEffect, useContext } from "react";
import MyNavbar from "./NavBar";
import NewPost from "./NewPost";
import Post from "./Post";
import firebase from "./firebase";
import { AuthContext } from "./auth/Auth";

const DisplayAllPosts = () => {
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [loading, setLoading] = useState(false);
  // initialize useRef
  const getContent = useRef();
  const { currentUser } = useContext(AuthContext);
  const profile = currentUser ? currentUser.email : "";

  const ref = firebase.firestore().collection("Tweeks").orderBy("date", "desc");

  function getTweets() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setAllPosts(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getTweets();
  });

  // -------------------Functionality

  const saveContentState = (event) => {
    setContent(event.target.value);
  };

  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };

  const savePost = (event) => {
    event.preventDefault();
    const newPost = {};
    newPost.content = content;
    newPost.userName = profile;
    newPost.date = new Date().toISOString();
    firebase.firestore().collection("/Tweeks").add(newPost);
    getContent.current.value = "";
    toggleCreateNewPost();
  };

  if (!loading) {
    return <h1>LOADING...</h1>;
  }

  if (isCreateNewPost) {
    return (
      <>
        <NewPost
          saveContentState={saveContentState}
          getContent={getContent}
          savePost={savePost}
          content={content}
        />
      </>
    );
  }

  // -------------------Standard Renders
  return (
    <>
      <div className="main">
        <MyNavbar />
        <h2 className="allTweeks">Tweeker</h2>
        <h3>Welcome {profile}</h3>
        <button className="btn btn-dark button" onClick={toggleCreateNewPost}>
          Tweek Yo self
        </button>
        {!allPosts.length ? (
          <div>
            <h3>You must sign in to view tweeks!</h3>
          </div>
        ) : (
          allPosts.map((eachPost) => {
            return (
              <>
                <Post
                  id={eachPost.id}
                  key={eachPost.id}
                  content={eachPost.content}
                  date={eachPost.date}
                  userName={eachPost.userName}
                />
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default DisplayAllPosts;
