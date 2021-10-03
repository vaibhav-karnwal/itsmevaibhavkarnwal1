import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vaibhav Karnwal </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I am Bachlor's in Computer Science & engineering from AKTU University.    
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
             Playing Games
            </li>
            <li className="about-activity">
             Watching Korean and Chinese Dramas
            </li>
            <li className="about-activity">
             Chatting with Friends
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
