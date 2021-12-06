import React from "react";
import { Image, Row, Col, Button } from "react-bootstrap";
import { request } from "../helper/helper";
import Loading from "../loading/loading";
import LoadVideo from "../prompts/video";
import Videos from "../videos/videos";
import "./reto.css";

export default class RetoScreen extends React.Component {
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
      confirmation: {
        title: "¡Compartenos tu experiencia!",
        text: "Graba un video realizando el experimento como se indica en la descripción y cuéntanos todo lo que aprendiste. Sube la URL del video y deja que el mundo se entere de tus hazañas :)",
        show: false,
      },
    };
    this.idReto = this.props.match.params.idReto;
  }

  componentDidMount() {
    this.getReto();
  }

  getReto() {
    this.setState({ loading: true });
    request
      .get(`/home/${this.idReto}`)
      .then((response) => {
        this.setState({ loading: false, reto: response.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <>
        <Loading show={this.state.loading} />
        <LoadVideo
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          idReto={this.idReto}
        />
        <Row className="reto-row">
          <Col>
            <Image id="reto-img" src={this.state.reto.imagen} />
          </Col>
          <Col>
            <h2>{this.state.reto.nombre}</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Categoría: </b>
                {this.state.reto.categoria}
              </li>
              <li className="list-group-item">
                <b>Descripción: </b>
                {this.state.reto.descripcion}
              </li>
            </ul>
            <Button
              id="reto-btn"
              variant="primary"
              onClick={() =>
                this.setState({
                  confirmation: { ...this.state.confirmation, show: true },
                })
              }
            >
              ¡Sube tu video!
            </Button>
            <Button id="reto-btn" variant="secondary" href="/">
              Regresar
            </Button>
          </Col>
        </Row>
        <Row xs={1} md={2} className="reto-row">
          <Videos videos={this.state.reto.videos} />
        </Row>
      </>
    );
  }
}
