import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
    return (
      <Navbar expand="lg">
        <Container fluid style={{ padding: "1vh 1vw" }}>
          <Navbar.Brand href="#">
            <img src={logo} className="d-inline-block align-top" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link href="#action1" className="navbar__item">
                Flowers
              </Nav.Link>
              <Nav.Link href="#action1" className="navbar__item">
                Latest Sightings
              </Nav.Link>
              <Nav.Link href="#action1" className="navbar__item">
                Favorites
              </Nav.Link>
              <Nav.Link
                href="#action1"
                className="navbar__item"
                style={{ color: "#DF9186" }}
              >
                Login
              </Nav.Link>
              <Button variant="secondary" style={{ backgroundColor: "#DF9186" }}>
                New Account
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;