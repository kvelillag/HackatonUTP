import React from "react";
import { Container, Row } from "react-bootstrap";
import DataGrid from "../../grid/grid";
import ConfirmationPrompt from "../../prompts/confirmation";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";

const columns = [
  {
    dataField: "_id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "nombre",
    text: "Nombre",
  },
  {
    dataField: "descripcion",
    text: "Descripción",
  },
  {
    dataField: "categoria",
    text: "Categoría",
  },
];

export default class Buscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmation: {
        title: "Eliminar reto",
        text: "¿Está seguro que desea eliminar el reto?",
        show: false,
      },
      idReto: null,
      loading: false,
      message: { text: "", show: false },
    };
    this.onClickEditButton = this.onClickEditButton.bind(this);
    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  onClickEditButton(row) {
    this.props.setIdReto(row._id);
    this.props.changeTab("editar");
  }

  onClickDeleteButton(row) {
    this.setState({
      idReto: row._id,
      confirmation: { ...this.state.confirmation, show: true },
    });
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
    this.eliminarReto();
  }

  eliminarReto() {
    this.setState({ loading: true });
    request
      .delete(`/retos/${this.state.idReto}`)
      .then((response) => {
        this.setState({
          loading: false,
          message: {
            text: response.data.msg,
            show: true,
          },
        });
        if (response.data.exito) this.reloadPage();
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }

  render() {
    return (
      <Container id="retos-buscar-container">
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
          <h2>Buscar retos</h2>
        </Row>
        <Row>
          <DataGrid
            url="/retos"
            columns={columns}
            showEditButton={true}
            showDeleteButton={true}
            onClickEditButton={this.onClickEditButton}
            onClickDeleteButton={this.onClickDeleteButton}
          />
        </Row>
      </Container>
    );
  }
}
