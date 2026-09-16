import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description" style={{ paddingTop: "42px" }}>
            <h1 style={{ fontSize: "2.6em", marginTop: "20px" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m Zeeshan Shaikh, an <b className="purple">ENTC Engineer</b> who
              recently completed my engineering degree and is focused on building
              practical, user-friendly software solutions.
              <br />
              <br />
              My experience includes working with
              <i>
                <b className="purple"> HTML, CSS, JavaScript, React, MySQL, and REST APIs </b>
              </i>
              while improving UI, debugging issues, and supporting application
              workflows.
              <br />
              <br />
              I enjoy solving real-world problems through
              <i>
                <b className="purple"> full stack software development, web applications, embedded systems, and automation </b>
              </i>
              with an emphasis on clear design, reliable functionality, and business value.
              <br />
              <br />
              I’m especially motivated by projects that connect
              <b className="purple"> software engineering </b>
              with real-world automation and engineering challenges.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
