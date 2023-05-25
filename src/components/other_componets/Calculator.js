import React from "react";
import { Container } from "react-bootstrap";
import Counter from "./Counter";
import Operation from "../Operation";

function Calculator() {
  return (
    <div>
      <Container>
        <Counter />
        <Operation />
      </Container>
    </div>
  );
}

export default Calculator;
