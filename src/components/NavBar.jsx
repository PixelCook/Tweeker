import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "react-router-dom";


const MyNavbar = () => {
  
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
