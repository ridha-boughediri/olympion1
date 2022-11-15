import React from "react";
import Cards from "../Components/Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Presents() {
  const velo = {
    type: "Un vélo",
    descritpion: "Rouler à vélo",
  };
  const metro = {
    type: "Le métro",
    descritpion: "Prendre le métro",
  };

  return (
    <div>
      <Container>
        <Cards value={velo} />
        <Cards value={metro} />
      </Container>
    </div>
  );
}

export default Presents;
