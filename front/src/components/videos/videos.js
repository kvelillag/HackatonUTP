import React from "react";
import { Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./videos.css";

export default class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (!this.props.videos) {
      return <></>;
    }
    return (
      <>
        {this.props.videos.map((video) => (
          <Col>
            <ReactPlayer
              url={video}
              id="react-player"
              width="100%"
              height="450px"
              controls
            />
          </Col>
        ))}
      </>
    );
  }
}
