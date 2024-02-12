import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/4.png";
import projImg8 from "../assets/img/5.png";
import projImg9 from "../assets/img/6.png";
import projImg10 from "../assets/img/7.png";
import exp from "../assets/img/1.png";
import trakky from "../assets/img/2.png";
import marscapital from "../assets/img/3.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "FOOD PARADISE",
      description: "A demo website formed in angular",
      imgUrl: projImg1,
      
    },
    {
      title: "image classifier",
      description: "ai based project in python",
      imgUrl: projImg2,
    },
    {
      title: "jarvis",
      description: "voice assistent made in python",
      imgUrl: projImg3,
    },
    {
      title: "virtual mouse",
      description: "based on computer vision ",
      imgUrl: projImg4,
    },
    {
      title: "face detection",
      description: "ai based project in python",
      imgUrl: projImg5,
    },
    {
      title: "analytical dashboard",
      description: "dashboard build in react",
      imgUrl: projImg6,
    },
    {
      title: "NewsMonkey",
      description: "A react based app that shows you top news",
      imgUrl: projImg7,
    },
    {
      title: "Weather App",
      description: "Forecasting Tomorrow: Building a Python-Based Weather Website",
      imgUrl: projImg8,
    },
    {
      title: "Reamazon",
      description: "Building a Seamless Shopping Experience: A MERN-based Amazon Clone",
      imgUrl: projImg9,
    },
    {
      title: "Google-Clone",
      description: "Building a Seamless Experience: A React-based Google-Clone",
      imgUrl: projImg10,
    },
  ];

  const Experience=[
    {
      title:"Full Stack Developer",
      company:"Experiencious",
      Month:" January 2024 - current",
      imgUrl:exp,
    },
    {
      title:"Wordpress Developer and graphic designer",
      company:"Trakky",
      Month:" January 2023 - April 2023",
      imgUrl:trakky,
    },
    {
      title:"Frontend  Developer",
      company:"MarsCapital",
      Month:" July 2022 - September 2022",
      imgUrl:marscapital
    }
  ];

  const handleProjectClick = (githubLink) => {
    window.open(githubLink, "_blank"); 
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Details</h2>
                <p>Crafting Inspiration: A Personal Odyssey through Creative Projects</p>
                <p>Open for collaboration</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">About Myself</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleProjectClick(project.githubLink)}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p>Experiences</p>
                    <Row>
                    {
                      Experience.map((Experience, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...Experience}
                            />
                        )
                      })
                    }
                  </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                     <p>Hello! I'm Mansi, a dedicated full-stack developer driven by a passion for innovation and problem-solving. My journey in software development began with internships at Experiencious, Trakky, and MarsCapital, where I gained hands-on experience in a diverse range of technologies. At Experiencious, I immersed myself in Flutter development, contributing to the creation of intuitive and engaging applications. Transitioning to Trakky, I delved into WordPress development, refining my skills in crafting dynamic and visually appealing websites. At MarsCapital, I embraced Angular, collaborating on the development of robust web applications. Additionally, as a SAP trainee, I've expanded my expertise in enterprise resource planning systems.
<br/>
                     I thrive on challenges and am committed to continuous learning and growth. Whether it's through leveraging emerging technologies or tackling complex problems, I'm always eager to push the boundaries of what's possible. My goal is to create meaningful and impactful experiences through software development, and I'm excited about the prospect of collaborating with like-minded individuals and teams to bring innovative ideas to life. Let's embark on this journey together and build something extraordinary!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
