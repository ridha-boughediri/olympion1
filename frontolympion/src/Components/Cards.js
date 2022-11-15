import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ value }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{value.type}</Card.Title>
        <Card.Text>{value.descritpion}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
