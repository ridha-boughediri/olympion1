import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Css/Presents.css";

function Cards({ value }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="size_card" variant="top" src={value.img} />
      <Card.Body>
        <Card.Title>{value.type}</Card.Title>
        <Card.Text>{value.descritpion}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
