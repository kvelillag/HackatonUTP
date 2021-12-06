import React from "react";
import { Carousel, Row } from "react-bootstrap";
import physics from "../img/physics.jpg";
import chemestry from "../img/chemestry.jpg";
import astronomy from "../img/astronomy.jpg";
import biology from "../img/biology.jpg";
import RetosCards from "../cards/cards";
import "./home.css";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                id="banner"
                className="d-block w-100"
                src={physics}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>Física</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                id="banner"
                className="d-block w-100"
                src={chemestry}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h2>Química</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                id="banner"
                className="d-block w-100"
                src={astronomy}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>Astronomía</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                id="banner"
                className="d-block w-100"
                src={biology}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>Biología</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row id="card-row">
          <RetosCards />
        </Row>
      </>
    );
  }
}
