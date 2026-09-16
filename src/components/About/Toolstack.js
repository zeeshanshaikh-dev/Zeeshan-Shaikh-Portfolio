import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import GitHub from "../../Assets/TechIcons/github-color-svgrepo-com.svg";
import Jupyter from "../../Assets/TechIcons/jupyter-svgrepo-com.svg";
import PyCharm from "../../Assets/TechIcons/pycharm-svgrepo-com.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={GitHub} alt="GitHub" className="tech-icon-images" />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Jupyter} alt="Jupyter Notebook" className="tech-icon-images" />
        <div className="tech-icons-text">Jupyter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={PyCharm} alt="PyCharm" className="tech-icon-images" />
        <div className="tech-icons-text">PyCharm</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
