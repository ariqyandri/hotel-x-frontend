import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import "./Navbar.css";

export default function Navigation() {
  return (
    <Navbar bg="none" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        Hotel X
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
