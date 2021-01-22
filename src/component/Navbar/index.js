import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/selector";

export default function Navigation() {
  const categories = useSelector(selectCategories);
  return (
    <main
      className={
        categories.length === 0
          ? "hide-navbar main-nav"
          : "unhide-navbar main-nav"
      }
    >
      <Navbar bg="none" expand="md">
        <Navbar.Brand as={NavLink} to="/">
          <h1 className="hvr-grow">Hotel X</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ width: "100%" }}>
            {categories.map(({ name }, i) => {
              return (
                <NavbarItem
                  key={i}
                  path={`/${name.toLowerCase()}`}
                  linkText={name}
                />
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </main>
  );
}
