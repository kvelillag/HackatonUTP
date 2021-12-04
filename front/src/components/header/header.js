import React from "react";
import { Container } from "react-bootstrap";
import logo from "../img/ExperiMental.png";
import "./header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <img id="logo" src={logo} />
      </Container>
    );
  }
}
