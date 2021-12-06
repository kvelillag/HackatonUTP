import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";
import ConfirmationPrompt from "../../prompts/confirmation";

export default class Editar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reto: {
        nombre: "",
        descripcion: "",
        categoria: "",
        imagen: "",
      },
      loading: false,
      message: { text: "", show: false },
      redirect: false,
      idReto: this.props.getIdReto(),
      confirmation: {
        title: "Modificar reto",
        text: "¿Está seguro que desea modificar el reto?",
        show: false,
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  setValue(index, value) {
    this.setState({
      reto: {
        ...this.state.reto,
        [index]: value,
      },
    });
  }

  componentDidMount() {
    this.getReto();
  }

  getReto() {
    this.setState({ loading: true });
    request
      .get(`/retos/${this.state.idReto}`)
      .then((response) => {
        this.setState({ loading: false, reto: response.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  guardarReto() {
    this.setState({ loading: true });
    request
      .put(`/retos/${this.state.idReto}`, this.state.reto)
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

  onCancel() {
    this.setState({
      confirmation: { ...this.state.confirmation, show: false },
    });
  }

  onConfirm() {
    this.setState({
      confirmation: { ...this.state.confirmation, show: false },
    });
    this.guardarReto();
  }

  render() {
    return (
      <Container id="retos-crear-container">
        <ConfirmationPrompt
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h2>Editar reto</h2>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("nombre", e.target.value)}
                value={this.state.reto.nombre}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => this.setValue("descripcion", e.target.value)}
                value={this.state.reto.descripcion}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Categoría</Form.Label>
              <Form.Select
                onChange={(e) => this.setValue("categoria", e.target.value)}
              >
                <option>{this.state.reto.categoria}</option>
                <option value="Física">Física</option>
                <option value="Química">Química</option>
                <option value="Biología">Biología</option>
                <option value="Astronomía">Astronomía</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("imagen", e.target.value)}
                value={this.state.reto.imagen}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() =>
                this.setState({
                  confirmation: { ...this.state.confirmation, show: true },
                })
              }
            >
              Guardar cambios
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
