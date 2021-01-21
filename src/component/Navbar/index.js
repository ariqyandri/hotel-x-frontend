import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { selectAppLoading } from "../../store/appState/selectors";
import { selectCategories } from "../../store/categories/selector";

export default function Navigation() {
  const loading = useSelector(selectAppLoading);
  const categories = useSelector(selectCategories);
  return (
    <main className={categories.length === 0 ? "hide-navbar" : "unhide-navbar"}>
      <Navbar bg="none" expand="md">
        <Navbar.Brand as={NavLink} to="/">
          <h1>Hotel X</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ width: "100%" }}>
            {categories.map(({ name }) => {
              return (
                <NavbarItem path={`/${name.toLowerCase()}`} linkText={name} />
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </main>
  );
}
