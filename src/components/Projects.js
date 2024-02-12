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

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Crafting Inspiration: A Personal Odyssey through Creative Projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
