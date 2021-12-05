import React from "react";
import RetoCard from "./card";
import { requestHome } from "../helper/helper";
import { Col } from "react-bootstrap";
import "./card.css";

export default class RetosCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      retos: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    requestHome
      .get("/home")
      .then((response) => {
        this.setState({ retos: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        {this.state.retos.map((reto) => (
          <Col id="cards">
            <RetoCard
              title={reto.nombre}
              url={reto.imagen}
              description={reto.descripcion}
              category={reto.categoria}
            />
          </Col>
        ))}
      </>
    );
  }
}
