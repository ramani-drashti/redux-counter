// import { useState } from "react";
import { Container} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { add } from "../redux/action/CounterAction";
// import LogIn from "./LogIn";

function Counter() {
 
  const count = useSelector((state) => state.rootReducer.counterData.count);
  console.warn("data", count);
  return (
  
    <>
      <Container>
       <div className="d-flex justify-content-center mt-4" style={{ fontSize: "30px" }}>
        {/* {isvalid === null} */}
          <span>{count}</span>
       </div>
      </Container>
    </>
  );
}

export default Counter;
