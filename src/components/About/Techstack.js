import React from "react";
import { Col, Row } from "react-bootstrap";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Html from "../../Assets/TechIcons/html-5-svgrepo-com.svg";
import Css from "../../Assets/TechIcons/css-3-svgrepo-com.svg";
import Json from "../../Assets/TechIcons/json-svgrepo-com.svg";
import MySql from "../../Assets/TechIcons/mysql-svgrepo-com.svg";
import Postgres from "../../Assets/TechIcons/postgresql-svgrepo-com.svg";
import Cpp from "../../Assets/TechIcons/C++.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Html} alt="HTML" />
        <div className="tech-icons-text">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Css} alt="CSS" />
        <div className="tech-icons-text">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text" style={{ fontWeight: 600 }}>REST APIs</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Json} alt="JSON" />
        <div className="tech-icons-text">JSON</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MySql} alt="MySQL" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postgres} alt="PostgreSQL" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="AWS DynamoDB" className="tech-icon-images" />
        <div className="tech-icons-text">AWS DynamoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Cpp} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>
    </Row>
  );
}

export default Techstack;
