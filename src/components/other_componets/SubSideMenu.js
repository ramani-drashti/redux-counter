import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
 
const SidebarLink = styled(Link)`
  display: flex;
  color:purple;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
 
  &:hover {
    color:black;
    // background:gray;
    border-left: 4px solid purple;
    cursor: pointer;
  }
`;
 
const SidebarLabelIcon = styled.span`

  color:purple;
  justify-content: space-between;
  align-items: center
 
  &:hover {
    color:black;
    // background:white;
   cursor: pointer;
  }
`;



const SidebarLabel = styled.span`
  margin-left: 16px;
  // color:black;
  &:hover {
    color:purple;
    // background:gray;
    // border-left: 4px solid green;
    cursor: pointer;
  }
  
`;
 
const DropdownLink = styled(Link)`
  // background: #252831;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 18px;
 
  &:hover {
    // color:purple;
    padding-left:50px;
    border-left: 4px solid purple;
    background: #EBECF0;
    cursor: pointer;
  }
`;
 
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
 
  const showSubnav = () => setSubnav(!subnav);
 
  return (
    <>
      <SidebarLink to={item.path}
      onClick={item.subNav && showSubnav}>
        <div>
          <SidebarLabelIcon>

          {item.icon}
          </SidebarLabelIcon>

          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
       
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};
 
export default SubMenu;