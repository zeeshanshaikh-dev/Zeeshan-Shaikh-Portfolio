import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          A few projects and problem-solving experiences from my engineering journey.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Automated Ration Dispensing System"
              description="Developed an automated ration dispensing system integrating RFID authentication, load-cell sensing, and motor-controlled dispensing. The project uses AWS DynamoDB for secure storage of users, quota limits, and transaction logs, and focuses on accurate, real-time dispensing logic for public service automation."
              ghLink="https://github.com/zeeshanshaikh-dev"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Automated Braking System"
              description="Built a sensor-based braking system using Arduino UNO and infrared sensors to detect obstacles and reduce motor speed progressively as the object comes closer. The system demonstrates real-time reaction, motor control, and embedded system logic for safety-oriented automation."
              ghLink="https://github.com/zeeshanshaikh-dev"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Web Application & UI Development"
              description="Worked on web-based applications at Huda's Technologies using HTML, CSS, JavaScript, React, and MySQL. Responsibilities included refining frontend interfaces, debugging functional issues, improving user experience, and supporting database-driven workflows in a modern software development environment."
              ghLink="https://github.com/zeeshanshaikh-dev"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
