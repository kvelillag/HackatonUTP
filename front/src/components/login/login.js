import React from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { APIHOST as host } from "../../app.json";
import "./login.css";
import { isNull } from "util";
import Cookies from "universal-cookie";
import { CalculaTiempoSesion } from "../helper/helper";
import Loading from "../loading/loading";

const cookies = new Cookies();

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: "",
      pass: "",
    };
  }

  iniciarSesion() {
    this.setState({ loading: true });
    axios
      .post(`${host}/retos/login`, {
        usuario: this.state.usuario,
        pass: this.state.pass,
      })
      .then((response) => {
        if (isNull(response.data.token)) {
          alert("Usuarios y/o contraseña inválidos");
        } else {
          cookies.set("_s", response.data.token, {
            path: "/",
            expires: CalculaTiempoSesion(),
          });
          this.props.history.push("/retos");
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Container id="login-container">
        <Loading show={this.state.loading} />
        <Row>
          <Col>
            <Row>
              <h2>Iniciar sesión</h2>
            </Row>
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        this.setState({
                          usuario: e.target.value,
                        })
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) =>
                        this.setState({
                          pass: e.target.value,
                        })
                      }
                    />
                  </Form.Group>

                  <Button
                    variant="secondary"
                    onClick={() => {
                      this.iniciarSesion();
                    }}
                  >
                    Iniciar sesión
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
