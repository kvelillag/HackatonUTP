import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";

export default class Crear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reto: {
        nombre: "",
        descripcion: "",
        categoria: "",
      },
      loading: false,
      message: { text: "", show: false },
      redirect: false,
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
  }

  setValue(index, value) {
    this.setState({
      reto: {
        ...this.state.reto,
        [index]: value,
      },
    });
  }

  guardarReto() {
    this.setState({ loading: true });
    request
      .post("/retos", this.state.reto)
      .then((response) => {
        this.setState({ loading: false });
        if (response.data.exito) {
          this.setState({
            redirect: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: true });
      });
  }

  onExitedMessage() {
    if (this.state.redirect) this.props.changeTab("buscar");
  }

  render() {
    return (
      <Container id="retos-crear-container">
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h2>Crear reto</h2>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("nombre", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Descripci??n</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => this.setValue("descripcion", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Categor??a</Form.Label>
              <Form.Select
                onChange={(e) => this.setValue("categoria", e.target.value)}
              >
                <option>Seleccione una categor??a</option>
                <option value="F??sica">F??sica</option>
                <option value="Qu??mica">Qu??mica</option>
                <option value="Biolog??a">Biolog??a</option>
                <option value="Astronom??a">Astronom??a</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("imagen", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Videos</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("videos", e.target.value)}
                placeholder="No obligatorio. Si agrega, solo debe ser un video"
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => console.log(this.guardarReto())}
            >
              Guardar reto
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
