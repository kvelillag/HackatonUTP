import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import Buscar from "./crud/buscar";
import Crear from "./crud/crear";
import Editar from "./crud/editar";
import "./retos.css";

export default class Retos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "buscar",
      _id: null,
    };
    this.changeTab = this.changeTab.bind(this);
    this.setIdReto = this.setIdReto.bind(this);
    this.getIdReto = this.getIdReto.bind(this);
  }

  changeTab(tab) {
    this.setState({ currentTab: tab });
  }

  setIdReto(id) {
    this.setState({ _id: id });
  }

  getIdReto() {
    return this.state._id;
  }

  render() {
    return (
      <Container id="retos-container">
        <Row>
          <Nav
            fill
            variant="tabs"
            defaultActiveKey="/buscar"
            onSelect={(eventKey) => this.setState({ currentTab: eventKey })}
          >
            <Nav.Item>
              <Nav.Link eventKey="buscar">Buscar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="crear">Crear</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          {this.state.currentTab === "buscar" ? (
            <Buscar changeTab={this.changeTab} setIdReto={this.setIdReto} />
          ) : this.state.currentTab === "crear" ? (
            <Crear changeTab={this.changeTab} />
          ) : (
            <Editar changeTab={this.changeTab} getIdReto={this.getIdReto} />
          )}
        </Row>
      </Container>
    );
  }
}
