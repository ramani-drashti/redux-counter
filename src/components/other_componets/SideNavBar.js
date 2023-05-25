import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarData } from "./SideBarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SubMenu from "./SubSideMenu";
import { IconContext } from "react-icons/lib";
import { CDBSidebarHeader } from "cdbreact";

const Nav = styled.div`
  background: #d3d3d3;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.5rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // Color:#333;
`;

const SidebarNav = styled.nav`
  background: #ebecf0;
  // textcolor:#333;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SideNavbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "gray" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars
              onClick={showSidebar}
              prefix={<i className="fa fa-bars" />}
            />
          </NavIcon>
          {/* <FaIcons.FaBars
          onClick={showSidebar}
            // onClick={handleToggle}
            prefix={<i className="fa fa-bars" />}></FaIcons.FaBars> */}
          <h1
            style={{
              textAlign: "center",
              marginLeft: "200px",
              color: "purple",
            }}
          >
            Just Fly
          </h1>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <div
                className="container"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={
                    "https://seeklogo.com/images/B/butterfly-logo-0A00378822-seeklogo.com.png"
                  }
                  alt=""
                  style={{ width: "30px" }}
                />
                <h6 className="ml-2"  style={{paddingRight:'62px'}}>Just Fly ™</h6>
                
              <AiIcons.AiOutlineClose onClick={showSidebar} style={{marginBottom:'10px'}}/>
              </div>
            </NavIcon>

            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index}></SubMenu>;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
export default SideNavbar;
