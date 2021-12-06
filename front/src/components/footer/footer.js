import React from "react";
import { Row, Col } from "react-bootstrap";
import "./footer.css";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer class="py-5">
        <Row>
          <Col id="div-footer">
            <h5>¿Quieres saber más de nosotros?</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="/about" class="nav-link p-0 text-muted">
                  Conócenos
                </a>
              </li>
            </ul>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a
                  href="https://github.com/kvelillag/HackatonUTP"
                  class="nav-link p-0 text-muted"
                >
                  Nuestro código
                </a>
              </li>
            </ul>
          </Col>
          <Col id="subscribe">
            <form>
              <h5>Suscríbete</h5>
              <p>Te avisaremos cuando agreguemos un nuevo reto</p>
              <div class="d-flex w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Correo electrónico
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Correo electrónico"
                />
                <button class="btn btn-primary" type="button">
                  Suscribir
                </button>
              </div>
            </form>
          </Col>
        </Row>

        <div class="d-flex justify-content-between py-4 my-4 border-top">
          <p>&copy; 2021 ExperiMental. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  }
}
