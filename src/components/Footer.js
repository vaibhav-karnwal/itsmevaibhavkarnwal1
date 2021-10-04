import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import github from "../Assets/github.png";
import instagram from "../Assets/instagram.png";
import twitter from "../Assets/twitter.png";
import linkedin from "../Assets/linkedin.png";
import {AiFillLinkedin} from "react-icons/ai";
import {AiOutlineGithub} from "react-icons/ai";
import {FiTwitter} from "react-icons/fi";
import {AiOutlineInstagram} from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Vaibhav Karnwal</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} itsmevaibhavkarnwal</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
                <a
                  href="https://github.com/vaibhav-karnwal"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour"
                  ><AiOutlineGithub/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/algocreater"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  "
                  ><FiTwitter/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vaibhav-karnwal/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour "
                  ><AiFillLinkedin/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vaibhavkarnwal2812/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour"
                  ><AiOutlineInstagram/>
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
