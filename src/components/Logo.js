import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";

const Logo = ({ data }) => {
  // const [logo, setlogo] = useState([]);
  // console.warn('logo',data);
  return (
    <Col>
      <Card className="Card">
        {data.flight_code},
        {data.flight_id}
      </Card>
    </Col>
  );
};

export default Logo;
