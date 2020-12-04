import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "react-router-dom";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DisplayAllPosts from "./DisplayAllPosts";
import NewPost from "./NewPost";
import Profile from "./Profile";

const MyNavbar = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/displayallposts" component={DisplayAllPosts} />
          <Route path="/newPost" component={NewPost} />
          <Route path="/profile" component={Profile} />
        </Switch>

        <Navbar sticky="top" bg="dark" variant="dark">
          <Navbar.Brand href="">Tweeker</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/displayallposts">Home</Link>
            <Link to="/newPost">New Tweek</Link>
            <Link href="/profile">Profile</Link>
          </Nav>
        </Navbar>
      </Router>
    </>
  );
};
export default MyNavbar;
