import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/vaibhav-karnwal_resume.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Flutter Developer Intern [ Ranavaj Power Solution ]"
              date="Apr 2021 - July 2021"
              content={[
                "Worked on the development of an EV Charging Flutter Application with Dart and Flutter",
                "Designed the Raft EV Charging App and added the features to enhance the user experience and optimized designs for Ios and Android Both.",
                "Develop and debug the hybrid application, Created the Database, Added the Verification, Validation of Data Function and permissions to the Application.",
                "Integrated the Razorpay Payment Gateway, Rest Api and other useful plugins in it",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [K.S.V.C.E.M-2021]"
              content={[
                "Worked on building front-end UI design using HTML5, CSS3, JavaScript, and building API routes using Node and React.js.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science & Engineering [K.S.V.C.E.M, Bijnor] "
              date="2018 - 2021"
              content={[`CGPA: 8.0 (All Sem)`]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                'Achieved the Certificate of Complete Guide of Flutter & Dart from Udemy',
                "HackerRank Java Certificate.",
                "Achieved Arctic code Vault Contributor batch on Github.",
                "HackerRank Python Certificate.",
                `Current rank in Codecheff 286113`,
                `Current rank in HackerRank 112538`,
                "Currently having 5 stars on HackerRank in Java and MySQL and 4 stars in Problem Solving",
                "Got 467 rank in Wheebox National Employability Test.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
