import React from "react";
import { Col, Row } from "react-bootstrap";
import {DiAndroid} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiAndroid/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      
      </Col>
      <Col xs={4} md={2} className="tech-icons">
   
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      
      </Col>
    </Row>
  );
}

export default Toolstack;
