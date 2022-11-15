import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React, { Component } from "react";

function Navig() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="https://dev.jo4marseille.fr/">
          JO4Marseille
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
