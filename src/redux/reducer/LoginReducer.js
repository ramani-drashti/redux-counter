// import { LoginAction } from "../action/LoginAction"
// import { Action } from "@remix-run/router";
// import { Navigate } from "react-router-dom";
// import { type } from "@testing-library/user-event/dist/type";
// import { useNavigate } from "react-router-dom";
import { remove_user, users } from "../contanst";

// import state from "sweetalert/typings/modules/state";

const initialevalue = {
  // isvalid: false ,
  isvalid: localStorage.getItem("email"),
  // && localStorage.getItem("password")
};
// const navigate = useNavigate();
const userData = (state = initialevalue, LoginAction) => {
  switch (LoginAction.type) {
    case users:
      return { ...state, isvalid: LoginAction.data };

    case remove_user:
      return {
        isvalid : null
      }
    default:
      return state;
  }
};

export default userData;
