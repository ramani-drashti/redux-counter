import Counter from "./other_componets/Counter";
import Operation from "./Operation";
import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import axios from "axios";
import UserCard from "./UserCard";
import UserDetailsModal from "./ModelText";
// import "./User.css";
// import{SideNav} from 'react-bootstrap'

function Home() {
  const [AllUser, setAllUser] = useState([]);
  const [show, setShow] = useState(false);
  const [user, setuser] = useState([]);
  // const [isShowing,setShowing]=useState();
  const handleUserData = (data) => {
    setuser(data);
    setShow(true);

  }
  const handleShow = () => {
    setShow(true)
    // console.warn('model data',data);
  }

  const handleClose = () => {
    setShow(false);
  }
  const GetAllUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.warn(res);
        const GetUser = res.data;
        setAllUser(res.data);
        // console.warn(res);
      })
      .catch((error) => console.error(`Error:${error}`));
  };


  useEffect(() => {
    GetAllUser();
  }, []);
  return (
    <Container>
      <div>
      <h2>this is home page </h2>
      </div>

      
        <Row>
        {AllUser.map((data) => (
          <UserCard key={data.id} data={data} handleUserData={handleUserData}/>
        ))}
        </Row>
        {show &&  <UserDetailsModal key={user.id} showModal={show} data={user} handleClose={handleClose}/>}
    </Container>
  );
}
export default Home;
