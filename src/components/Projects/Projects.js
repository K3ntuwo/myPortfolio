import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import firstProject from "../../Assets/Projects/firstProject.png";
import secondProject from "../../Assets/Projects/secondProject.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={firstProject}
              isBlog={false}
              title={<><strong>Kinaiya</strong></>}
              description={<><strong>Kinaiya </strong>is a static Java-based e-commerce application designed to deliver a user-friendly and visually engaging experience. The project features a graphical user interface (GUI) that allows users to interact with the software seamlessly. It primarily consists of intuitive visual components that make navigation and functionality straightforward, enhancing overall usability.</>}
              ghLink="https://github.com/K3ntuwo/Kinaiya_E-commerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={secondProject}
              isBlog={false}
              title={<><strong>Website Portfolio</strong></>}
              description={<>This portfolio website is something I built using <strong>React.js</strong> and <strong>Tailwind CSS</strong>. I chose React for its flexibility and component-based structure, which makes it easier to organize everything. Tailwind CSS helped me quickly style the site without writing a lot of custom CSS—it’s super handy for making the layout responsive and clean. I focused on keeping the design simple, smooth, and easy to navigate, with a few animations to make it feel more interactive. Everything here—from the navbar to the project cards—is built with the goal of sharing my work and who I am as clearly as possible.</>}
              ghLink="https://github.com/K3ntuwo/my-portfolio"
              demoLink="https://adrian-cabrera.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"         
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
