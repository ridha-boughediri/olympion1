import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Css/Presents.css";

function Cards({ value }) {
  return (
    <Card>
      <Card.Img className="size_image" variant="top" src={value.img} />
      <Card.Body>
        <Card.Title className="card_font_title">{value.type}</Card.Title>
        <Card.Text>{value.descritpion}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
