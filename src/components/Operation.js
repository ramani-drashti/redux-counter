import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { add, clear, sub, sweet } from "../redux/action/CounterAction";
import LoginReducer from "../redux/reducer/rootReducer";

const Operation = () => {
  const [increment, setIncrement] = useState(1);
  const dispatch = useDispatch("");
  let data = useSelector((state) => state.rootReducer.counterData.count);
  let isvalid = useSelector((state) => state.rootReducer.LoginReducer.isvalid);

  const Add = () => {
    dispatch(add(increment));
  };
  const Sub = () => {
    dispatch(sub(increment));
  };
  const alert = () => {
    if (isvalid === null) {
      Swal.fire("please click on login button and  login..");
    } else {
      Swal.fire({ title: "This count's come from redux store:" + data });
    }
  };
  const authentication = (func) => {
    if (isvalid === null) {
      Swal.fire("please click on login button and  login..");
    } else {
      func();
    }
  };
  const Remove = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",

      showCancelButton: true,

      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   Swal.fire(
        //     'Deleted!',
        //     'Your file has been deleted.',
        //     'success'
        //   ),
        dispatch(clear());
      }
    });
  };
  return (
    <>
      <Container>
        <Row style={{ textAlign: "center", marginTop: "10%" }}>
          <Col>
            <input
              style={{ width: "50px", height: "35px", textAlign: "center" }}
              aria-label="Set increment"
              value={increment}
              onChange={(e) => setIncrement(e.target.value)}
            />
          </Col>
          <Col>
            <Button onClick={() => authentication(Add)}>ADD</Button>
          </Col>
          <Col>
            <Button onClick={() => authentication(Sub)}>SUB</Button>
          </Col>
          <Col>
            <Button onClick={() => authentication(alert)}>Sweet</Button>
          </Col>
          <Col>
            <Button onClick={() => authentication(Remove)}>clear</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Operation;
