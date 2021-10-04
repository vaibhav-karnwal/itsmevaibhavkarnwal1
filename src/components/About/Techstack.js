import React from "react";
import { Col, Row } from "react-bootstrap";
import {RiReactjsFill} from "react-icons/ri";
import {RiFlutterFill} from "react-icons/ri";
import {FaJava} from "react-icons/fa";
import {DiJavascript1} from "react-icons/di";
import {AiFillHtml5} from "react-icons/ai";
import {FaCss3} from "react-icons/fa";
import {DiBootstrap} from "react-icons/di";
import {FaSass} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {FaNodeJs} from "react-icons/fa";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <RiReactjsFill/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiFlutterFill/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNodeJs/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSass/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3/>
      </Col>
    </Row>
  );
}

export default Techstack;
