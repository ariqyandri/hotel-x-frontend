import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function NavbarItem(props) {
  return (
    <Nav.Link as={NavLink} exact to={props.path}>
      {props.linkText}
    </Nav.Link>
  );
}
