import { Button, Card, Col, Row } from "react-bootstrap";
import dp from "../image/user.jpeg";
import { UserCardStyled } from "./UserCardStyled";
import { useState } from "react";

const UserCard = ({ data ,handleUserData}) => {
  const [show, setShow] = useState(false);
  const [user, setuser] = useState([]);
  const handleShow = () => {
    setShow(true)
    // console.warn('model data',data);
  }

  const handleClose = () => {
    setShow(false);
  }
    ;
  return (
    <Col>
      <UserCardStyled>
        <Card className="Card">
          <Card.Img variant="top" src={dp} />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              <b>phone:</b> {data.phone}
            </Card.Text>
            <Card.Text>
              <b>email:</b> {data.email}
            </Card.Text>
            <Card.Text>
              <b>Address Details:</b> {data.address.street},{" "}
              {data.address.suite}, {data.address.city}, {data.address.zipcode}
            </Card.Text>
            <Button onClick={() => handleUserData(data)} variant="outline-primary" className="btn">
              Show Details
            </Button>
          </Card.Body>
        </Card>
      </UserCardStyled>
          
    </Col>
  );
};

export default UserCard;
