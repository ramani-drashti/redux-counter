import "../components/SideBar.css";
import React from "react";
import { Button, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import fly from "../image/Fly.png";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../redux/action/CounterAction";
import { clearStore } from "../redux/action/LoginAction";
import list from "./List";

function SideBar() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  let isvalid = useSelector((state) => state.rootReducer.LoginReducer.isvalid);

  const clearLocalStorage = () => {
    localStorage.clear();
    dispatch(clear());
    dispatch(clearStore());
  };

  return (
    <div className="m-2">
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Navbar.Brand href="/">
              𝓳𝓾𝓼𝓽 𝓯𝓵𝔂
              <img
                src={fly}
                alt=""
                style={{ width: "40px", paddingLeft: "10px" }}
                />
                {/* <Button className="log ">log in</Button> */}
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  // style={{textShadow:'1px black'}}
                >
                  𝓳𝓾𝓼𝓽 𝓯𝓵𝔂
                  <img
                    src={fly}
                    alt=""
                    style={{ width: "40px", paddingLeft: "10px" }}
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <hr />
              <Offcanvas.Body>
                <Nav className="">
                  <div className="sidebar-list">
                    <Link to={"/"} className="fa fa-fw fa-clipboard">
                      &nbsp;DashBoard
                    </Link>
                  </div>

                  <div className="sidebar-list">
                    <Link to={"/home"} className="fa fa-fw fa-home">
                      &nbsp;Home
                    </Link>
                  </div>

                  <div className="sidebar-list">
                    <Link to={"/calculator"} className="fa fa-fw fa-calculator">
                      &nbsp;Calculator
                    </Link>
                  </div>

                  <div className="sidebar-list">
                    <Link to={"/features"} className="fa fa-fw fa-leaf">
                      &nbsp;Features
                    </Link>
                  </div>
                  <div className="sidebar-list">
                    <Link to={"/list"} className="fa fa-fw fa-calculator">
                      &nbsp;list
                    </Link>
                  </div>

                  <div className="sidebar-list">
                    <Link to={"/aboutus"} className="fa fa-fw fa-info">
                      &nbsp;AboutUs
                    </Link>
                  </div>

                  <div className="sidebar-list">
                    <Link to={"/service"} className="fa fa-fw fa-gear">
                      &nbsp;Services
                    </Link>
                  </div>
                  {/* <NavDropdown
                    title="AboutUs"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                      <Link
                        to={"aboutUs/aim"}
                        // className="fa fa-fw fa-target"
                      >
                        Aim
                      </Link>
                    <br />
                      <Link
                        to={"aboutUs/vision"}
                        // className="fa fa-fw fa-vision"
                      >
                        vision
                      </Link>
                  </NavDropdown> */}
                  {/* <NavDropdown
                    title="services"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                      <Link
                        to={"/services/services1"}
                        className="fa fa-fw fa-gear"
                      >
                        Services1
                      </Link>
                    <br />
                      <Link
                        to={"/services/services2"}
                        className="fa fa-fw fa-gear"
                      >
                        Services2
                      </Link>
                    <br />
                      <Link
                        to={"/services/services3"}
                        className="fa fa-fw fa-gear"
                      >
                        Services3
                      </Link>
                  </NavDropdown> */}
                  <div className="sidebar-list">
                    <Link
                      to={"https://www.prydan.com/contact/"}
                      className="fa fa fw fa-tablet"
                      target="_blank"
                    >
                      {"  "}ContactUs
                    </Link>
                  </div>
                  {isvalid === null ? (
                    <Button
                      icon="user-alt"
                      className="btn"
                      onClick={() => navigate("/login")}
                      // variant="outline-purple"
                    >
                      Log in
                    </Button>
                  ) : (
                    <Button
                      icon="user-alt"
                      className="btn"
                      onClick={clearLocalStorage}
                      variant="outline-secondary"
                    >
                      Log out
                    </Button>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      ))}
    </div>
  );
}

export default SideBar;
