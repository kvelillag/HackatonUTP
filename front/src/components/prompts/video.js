import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Loading from "../loading/loading";
import { request } from "../helper/helper";
import MessagePrompt from "../prompts/message";

export default class LoadVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      text: "",
      loading: false,
      idReto: null,
      reto: { videos: "" },
      message: { text: "", show: false },
    };
  }

  setValue(index, value) {
    this.setState({
      reto: {
        ...this.state.reto,
        [index]: value,
      },
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show,
      title: nextProps.title,
      text: nextProps.text,
      idReto: nextProps.idReto,
    });
  }

  onCancel() {
    this.setState({ show: false });
  }

  onConfirm() {
    this.setState({ show: false });
    this.guardarVideo();
  }

  guardarVideo() {
    this.setState({ loading: true });
    request
      .post(`/home/${this.state.idReto}`, this.state.reto)
      .then((response) => {
        this.setState({ loading: false });
        if (response.data.exito) {
          this.setState({
            message: {
              text: response.data.msg,
              show: true,
            },
          });
          this.reloadPage();
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: true });
      });
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }

  render() {
    return (
      <>
        <Loading show={this.state.loading} />
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />
        <Modal
          id="confirmation-prompt"
          centered
          onHide={() => this.onCancel()}
          show={this.state.show}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{this.state.text}</p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>
                  Compartenos la URL de YouTube donde tienes tu video:
                </Form.Label>
                <Form.Control
                  onChange={(e) => this.setValue("videos", e.target.value)}
                  value={this.state.reto.videos}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button
              id="reto-btn"
              variant="secondary"
              onClick={() => this.onCancel()}
            >
              Cancelar
            </Button>
            <Button
              id="reto-btn"
              variant="primary"
              onClick={() => {
                this.onConfirm();
              }}
            >
              Subir video
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
