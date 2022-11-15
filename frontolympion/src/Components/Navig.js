import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React, { Component } from "react";

function Navig() {
  const logo = require("../Css/Images/Logo_sponsors/logo.png");
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="https://dev.jo4marseille.fr/">
          <img href={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/presents">Cadeaux</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navig;
