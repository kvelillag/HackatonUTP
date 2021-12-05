import React from "react";
import { Card, Button } from "react-bootstrap";
import "./card.css";

export default class RetoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card id="reto-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`${this.props.url}`} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {this.props.category}
          </Card.Subtitle>
          <Card.Text numberOfLines={1}>
            {this.props.description.length < 200
              ? `${this.props.description}`
              : `${this.props.description.substring(0, 197)}... `}
            <a href="#">Ver más</a>
          </Card.Text>
          <Button variant="primary" disabled>
            Participar
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
