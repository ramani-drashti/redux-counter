import {
  Container,
  Navbar,
  Nav,
  NavLink,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import feature from "../image/features.ico";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../redux/action/CounterAction";
import { clearStore } from "../redux/action/LoginAction";
import chat from "../image/chat-heart-fill.ico";
import SideBar from "./SideBar";
// import SideNavBar from "../components/SideNavBar";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let isvalid = useSelector((state) => state.rootReducer.LoginReducer.isvalid);
  const [loggedIn, setLoggedIn] = useState(true);
  const clearLocalStorage = () => {
    localStorage.clear();
    dispatch(clear());
    dispatch(clearStore());
  };
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div style={{ position: "sticky" }}>
      <Navbar variant="">
        <Nav className="me-auto">
          <SideBar />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Row className="lg-3 md-6 sm=12">
            <Col>
              <Nav.Link
                href="/home"
                className="mx-1"
                style={{ height: "76px", textAlign: "center" }}
              >
                <i className="fa fa-fw fa-home" />
                Home
              </Nav.Link>
            </Col>
            <Col>
              <Nav.Link
                href="/calculator"
                className="mx-1"
                style={{ height: "76px" }}
              >
                <i className="fa fa-fw fa-calculator" />
                &nbsp;calculator
              </Nav.Link>
            </Col>
            <Col>
              <Nav.Link
                href="/features"
                style={{ height: "76px", width: "50px", textAlign: "center" }}
              >
                <img src={feature} style={{ width: "30px", height: "25px" }} />
                &nbsp;Features
              </Nav.Link>
            </Col>
            <Col>
              <Nav.Link
                href="/aboutUs"
                style={{ height: "76px", textAlign: "center" }}
              >
                <i className="fa fa-fw fa-solid fa-info" />
                About Us
              </Nav.Link>
            </Col>
          </Row>
        </Nav>
      </Navbar>
    </div>
  );
};
export default Header;
