import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Logo from "./Logo";

function List() {
  // const [allLogo,setallLogo]=useState([]);
  const [logo, setlogo] = useState([]);
  const [flight_code, setFlight_code] = useState([]);

  const handlelogodata = (data) => {
    setlogo(data);
  };
  const GetallLogo = () => {
    axios
      .get("https://api.treatmytravel.com/api/flight_logo")
      .then((res) => {
        // console.warn("data", res.data.Data[0].flight_code);
        console.log("Alldata", res.data.Data);
        console.warn(res.data.Data.length);

        setFlight_code(res.data.Data);
      })
      .catch((error) => console.error(`Error:${error}`));
  };
  useEffect(() => {
    GetallLogo();
  }, []);
  return (
    <Container>
      <div>
        <h2>Flight List</h2>
      </div>
      <Row>
        {flight_code.length > 0 && flight_code.map((data,index) => {
          return (
            <Logo
              key={data.flight_code}
              data={data}
              handlelogodata={handlelogodata}
            />
          );
          console.log()
        })}
      </Row>
    </Container>
  );
}

export default List;
