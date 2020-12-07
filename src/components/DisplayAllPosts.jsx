import React, { useState, useRef, useEffect } from "react";
import MyNavbar from "./NavBar";
import NewPost from "./NewPost";
import Post from "./Post";
import Profile from "./Profile";
// import firebase from "firebase/firebase-app";
// import "firebase/firestore";
// import "firebase/firebase-auth";
// import { useAuthState } from "react-firebase-hooks";
// import { useCollectionDate } from "react-firebase-hooks/firestore";

// firbase.initializeApp({
//   apiKey: "AIzaSyDCr9fdiziJj5L9Wc8-dW3eWJe1VDclbMg",
//   authDomain: "tweeker-d8213.firebaseapp.com",
//   projectId: "tweeker-d8213",
//   storageBucket: "tweeker-d8213.appspot.com",
//   messagingSenderId: "830715937417",
//   appId: "1:830715937417:web:72a435ebe0eee5830abc58",
//   measurementId: "G-5XK6ZE84XP",
// });

// const auth = firbase.auth();
// const firestore = firebase.firestore();
// const [user] = useAuthState(auth);

// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//   } auth.signInWithPopup(provider);
//     return <button onClick={signInWithGoogle}> Sign in with Google</button>;
//   };

// function SignOut(){
//   return auth.currentUser && (
//     <button onClick={() => auth.SignOut()}>Sign Out</button>
//   )
// }

const DisplayAllPosts = () => {
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [profile, setProfile] = useState("");
  const [isCreateNewProfile, setIsCreateNewProfile] = useState(true);
  const [error, setError] = useState(false);
  // initialize useRef
  const getContent = useRef();
  const getProfile = useRef();

  // -------------------Fetches
  const URL =
    "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

  // -------Get
  useEffect(() => {
    const getTweets = async () => {
      const response = await fetch(URL);
      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      setAllPosts(data.tweets.reverse());
    };
    setInterval(() => {
      getTweets();
    }, 10000);
  }, []);

  const pushingTweets = async (newTweets) => {
    setAllPosts(newTweets);
    let lastTweet = newTweets.slice(-1)[0];
    const result = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(lastTweet),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!result.ok) {
      setError(!error);
      throw new Error(`An error has occurred: ${result.status}`);
    }
    const response = await result.json();
    allPosts.push(response);
  };

  // -------------------Functionality
  const setProfileState = (event) => {
    setProfile(event.target.value);
  };
  const toggleCreateNewProfile = () => {
    setIsCreateNewProfile(!isCreateNewProfile);
  };

  const saveContentState = (event) => {
    setContent(event.target.value);
  };

  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };

  const saveProfile = (event) => {
    event.preventDefault();
    setProfile(profile);
    toggleCreateNewProfile();
  };
  const updateProfile = (event) => {
    event.preventDefault();
    setProfile(profile);
    toggleCreateNewProfile();
  };

  const savePost = (event) => {
    event.preventDefault();
    const newPost = {};
    newPost.content = content;
    newPost.userName = profile;
    newPost.date = new Date().toISOString();
    pushingTweets([...allPosts, newPost]);
    getContent.current.value = "";
    toggleCreateNewPost();
  };

  const deletePost = (id) => {
    const modifiedPost = allPosts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setAllPosts(modifiedPost);
  };
  const firebase = require("firebase");
  // Required for side-effects
  require("firebase/firestore");

  // -------------------Conditional Renders
  if (isCreateNewProfile) {
    return (
      <>
        <Profile
          setProfileState={setProfileState}
          profile={profile}
          setProfile={setProfile}
          getProfile={getProfile}
          saveProfile={saveProfile}
        />
      </>
    );
  }

  if (!isCreateNewPost) {
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
        <button className="btn btn-dark button" onClick={toggleCreateNewPost}>
          Tweek Yo self
        </button>
        {!allPosts.length ? (
          <div>
            <h3>No Tweeks to Display</h3>
          </div>
        ) : (
          allPosts
            .slice(0)
            .reverse()
            .map((eachPost) => {
              return (
                <>
                  <Post
                    id={eachPost.id}
                    key={eachPost.id}
                    content={eachPost.content}
                    date={eachPost.date}
                    userName={eachPost.userName}
                    deletePost={deletePost}
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
