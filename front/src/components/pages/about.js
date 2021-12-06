import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "../img/ExperiMentalV2.png";
import "./about.css";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container id="about-container">
        <Row id="main-title">
          <h2>¿Qué es ExperiMental?</h2>
        </Row>
        <Row>
          <Col>
            <p>
              ExperiMental es una comunidad de apasionados a la ciencia… Esos
              curiosos innatos que amamos aprender a medida que vamos explorando
              el mundo, y que jamás nos cansamos de preguntarnos y buscar
              respuestas... ¡Y queremos que tú seas parte de nosotros!
            </p>
            <p>
              ExperiMental es un aplicativo web donde las personas pueden
              acceder a retos de experimentos científicos, realizarlos y subir
              videos contando su experiencia en ejecución y aprendizaje para
              cada uno de ellos. Es una manera divertida y muy emocionante de
              acercarse a la ciencia y poder socializar los aprendizajes y
              resultados obtenidos a través de los retos.
            </p>
            <p>
              Nuestros referentes son personas como las que observas en la
              imágen de abajo. Quizás algún día logremos formar una comunidad
              así (soñar no cuesta nada).
            </p>
          </Col>
        </Row>
        <Row>
          <Image
            src="https://p2.piqsels.com/preview/984/495/618/einstein-physicist-conference-solvay.jpg"
            fluid
          />
          <p>
            Conferencia Solvay. Esta foto Fue tomada, en 1927, en Bruselas.
            Entre los asistentes la única mujer fue Marie Curie. Es considerada
            la foto más famosa de la ciencia.
          </p>
        </Row>
        <Row id="main-title">
          <h2>¿Nuestro objetivo?</h2>
        </Row>
        <Row>
          <Col>
            <p>
              Nuestro proyecto está enfocado en despertar la curiosidad de todos
              los que lleguen a nuestro sitio e invitarlos a que se atrevan a
              retar su mente.
            </p>
            <p>
              ¿Quieres aprender algo nuevo? ¡Realiza los experimentos que te
              proponemos e intenta encontrar las respuestas detrás de ellos!...
              ¿Ya conoces la respuesta? ¡Compártela y ayuda a tus compañeros de
              experiencia!
            </p>
            <p>
              Recuerda que el mejor fin del conocimiento es ponerlo al servicio
              de los demás.
            </p>
          </Col>
          <Col>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQRYtzaj3o4R0pq_FOPfoxCP6Ihj3jpv5fZw&usqp=CAU" />
          </Col>
        </Row>
        <Row id="main-title">
          <h2>¿Qué significa nuestro logo?</h2>
        </Row>
        <Row>
          <Col>
            <Image id="explain-logo" src={logo} />
          </Col>
          <Col>
            <p>
              El slogan de la startup es "Reta tu mente". La idea de este slogan
              en hacer una invitación a quienes entran a la página, para que
              sientan la curiosidad de saber cómo pueden retar su mente y sigan
              viendo lo que pueden encontrar.
            </p>
            <p>
              El logo de la marca será una imagen que representa lo que queremos
              lograr: ¡activar la mente! Esta imagen es un cerebro dentro de un
              bombillo, donde se muestra que la energía y actividad de este
              cerebro es la que permite crear la luz que ilumina a través de la
              bombilla.
            </p>
          </Col>
        </Row>
        <Row id="main-title">
          <h2>¿Qué esperas?</h2>
        </Row>
        <Row>
          <Col>
            <p>
              Como lo vez, lo más importante de participar es que te puedas
              divertir mientras aprendes cosas nuevas…
            </p>
            <p>
              ¡Ahhh… y que compartas con tus amigos la experiencia de
              aprendizaje! Tus videos podrían ayudar a otros a entender el por
              qué detrás de los experimentos.
            </p>
            <p>
              Así que no hay excusas, ¡Súmate y hagamos ciencia juntos! Quién
              quita que nuestra comunidad sea la cuna de un futuro Premio Nobel…
            </p>
            <h4>¡Podrías ser tú!</h4>
          </Col>
          <Col>
            <Image
              id="nobel"
              src="https://p1.piqsels.com/preview/436/756/977/nobel-alfred-plate-coins-medal-portrait-thumbnail.jpg"
            />
          </Col>
        </Row>
        <Row id="main-title">
          <h3>
            ¡Súmate a este viaje y ayuda a otros a encontrar las respuestas que
            tú ya tienes!
          </h3>
        </Row>
      </Container>
    );
  }
}
