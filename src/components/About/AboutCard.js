import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ken Adrian Cabrera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am a working student currently pursuing a Bachelor of Science in Computer Science (3rd year).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing basketball and chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Occasionally diving into mobile games
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
