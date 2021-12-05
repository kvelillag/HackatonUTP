import React from "react";
import { Modal, Button } from "react-bootstrap";

export default class ConfirmationPrompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      text: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show,
      title: nextProps.title,
      text: nextProps.text,
    });
  }

  render() {
    return (
      <Modal
        id="confirmation-prompt"
        centered
        onHide={() => this.props.onCancel()}
        show={this.state.show}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.state.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{this.state.text}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.props.onCancel()}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => this.props.onConfirm()}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
