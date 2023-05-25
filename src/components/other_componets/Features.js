import React from "react";
// import { Card, Button } from "react-bootstrap";
import redux from "../image/redux.svg";
import dp from "../image/react.png";
import node from '../image/node-js-icon-8.jpg';
import next from '../image/NextJs.png'
import FeaturesCard from "./FeaturesCard";
import { Col, Container, Row } from "react-bootstrap";
import "../components/other_componets/Featurestyle.css";

function Features() {
  return (
    <div>
    <Container>
      <Row
        className="justify-content-center d-inline-flex"
        //  style={{textAlign:'center'}}
        >
        <Col className="sm-4">
          <FeaturesCard
            Img={dp}
            Title={"React"}
            Text={
              "React provides state-of-the-art functionality and is an excellent choice for developers looking for an easy-to-use and highly productive JavaScript framework."
            }
            // Using React, you can build complex UI interactions that communicate with the server in record time with JavaScript-driven pages.
            // color={"baby pink"}
            Link={"https://reactjs.org/docs/getting-started.html"}
            />
        </Col>
        <Col className="sm-4">
          <FeaturesCard
            Img={redux}
            Title={"Redux"}
            Text={
              "Redux allows you to manage your app's state in a single place and keep changes in your app more predictable and traceable. "
            }
            // color={"baby pink"}
            Link={"https://redux.js.org/"}
            />
        </Col>
        <Col className="sm-4">
          <FeaturesCard
            Img={node}
            Title={"Node Js"}
            Text={
              "Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser."
            }
            // color={"baby pink"}
            Link={"https://redux.js.org/"}
            />
        </Col>
        <Col className="sm-4">
          <FeaturesCard
            Img={next}
            Title={"Redux"}
            Text={
              "Next.js provides a framework to structure your application, and optimizations that help make both the development process and final application faster."
            }
            // color={"baby pink"}
            Link={"https://redux.js.org/"}
            />
        </Col>
      </Row>
  </Container>
    </div>
  );
}

export default Features;
