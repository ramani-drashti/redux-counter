import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import '../components/DashBoard.css'
import fly from '../image/homeimage.png'

function DashBoard() {
  return (
    <>
    <Container className="section">
     <h1>This is a DashBoard</h1>
    </Container>
    <hr/>
   
      <div>
          <Container>
        <Row>
          <Col style={{backgroundColor:'green',height:"450px"}}>
          </Col>
          <Col style={{height:"450px",backgroundColor:'pink'}}>
          <img src={fly} className="fly"/>
          </Col>
        </Row>
          </Container>

      </div>
    
    </>
  )
}

export default DashBoard
