import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  const [navigate, setnavigate] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 120) {
      setnavigate(true);
    } else {
      setnavigate(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      className={
        navigate
          ? "bg-light shadow navbar-light navbar-default"
          : "bg- navbar-dark navbar-default"
      }
    >
      <Container>
        <div className="navbar-brand" href="#home">
          {" "}
          <div>
            {" "}
            <img src="img/logo.png" width="18%"></img>{" "}
          </div>{" "}
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="">
            <Nav.Link href="#home" className="px-4 nav-item ">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="px-4 nav-item">
              {" "}
              About{" "}
            </Nav.Link>
            <Nav.Link href="#services" className="px-4">
              {" "}
              Services{" "}
            </Nav.Link>
            <Nav.Link href="#skills" className="px-4">
              {" "}
              Skills{" "}
            </Nav.Link>
            <Nav.Link href="#work" className="px-4">
              {" "}
              Project{" "}
            </Nav.Link>
            <Nav.Link href="#contact"> Contact </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
