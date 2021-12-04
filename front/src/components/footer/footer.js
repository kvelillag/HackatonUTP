import React from "react";
import "./footer.css";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer class="py-5">
        <div class="row">
          <div id="div-footer">
            <h5>Encuéntranos en:</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Avenida Siempreviva 123, Medellín.
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Boulevard de los sueños rotos, Bogotá.
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Centro Comercial Pachanguero, Cali.
                </a>
              </li>
            </ul>
          </div>
          <div class="col-4 offset-1"></div>
        </div>

        <div class="d-flex justify-content-between py-4 my-4 border-top">
          <p>&copy; 2021 ExperiMental. Todos los derechos reservados.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use />
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use />
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
