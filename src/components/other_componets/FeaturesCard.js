import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Featurestyle.css";

function FeaturesCard(props) {
  // const handel={
  //   onclick,
  // }

  return (
    <>
      <div>
        <div className="m-2">
          <Card className="size" style={{ marginTop: "14px" }}>
            <Card.Img
              style={{ width: "134px" }}
              // <Card.Img
              className="imgsize"
              variant="top"
              src={props.Img}
            />
            <Card.Body>
              <Card.Title>{props.Title}</Card.Title>
              <Card.Text>
                <p className="textalign">
                  <b>Use:</b>&nbsp;&nbsp;{props.Text}
                </p>
                {/* <li><b>Colour:</b>&nbsp;&nbsp;{props.color}</li> */}
              </Card.Text>
              <div className="po">
                <Button variant="primary">
                  <Link
                    to={props.Link}
                    target={"_blank"}
                    className="buttonalign"
                  >
                    More Details
                  </Link>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default FeaturesCard;
