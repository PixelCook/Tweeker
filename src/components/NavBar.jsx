import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DisplayAllPosts from "./DisplayAllPosts";
import DisplayProfile from "./DisplayProfile";

const MyNavbar = () => {
  <Router>
    <Switch>
      <Route path="/displayallposts" component={DisplayAllPosts} />
      <Route path="/displayprofile" component={DisplayProfile} />
    </Switch>
  </Router>;
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand href="">Tweeker</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link to="/displayallposts">Home</Nav.Link>
          <Nav.Link href="/displayprofile">Profile</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
export default MyNavbar;
