import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Zeeshan Shaikh</span>{" "}
            from <span className="purple">Maharashtra, India</span>.
            <br />
            I have successfully completed my Bachelor of Engineering in{" "}
            <span className="purple">Electronics and Telecommunication</span> and am now an
            <span className="purple"> ENTC Engineer</span>.
            <br />
            My interests include <span className="purple">full stack software development</span>,{" "}
            <span className="purple">web application development</span>, and building practical
            technology solutions that solve real problems.
            <br />
            <br />
            Outside of academics and coding, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies and learning by building
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on hands-on engineering projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Improving my software and problem-solving skills
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build practical solutions, learn continuously, and make technology useful."{" "}
          </p>
          <footer className="blockquote-footer">Zeeshan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
