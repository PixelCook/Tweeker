import React from "react"
import {Navbar} from 'react-bootstrap'
import {Nav} from "react-bootstrap"

const MyNavbar = () => {
return (
    <>
<Navbar sticky="top" bg="dark" variant="dark">
    <Navbar.Brand href="">Tweeker</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">Profile</Nav.Link>
    </Nav>
  </Navbar>
  </>
)};
export default MyNavbar