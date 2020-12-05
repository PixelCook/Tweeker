import React, { useState, useRef, useEffect } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Profile from "./Profile";

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
