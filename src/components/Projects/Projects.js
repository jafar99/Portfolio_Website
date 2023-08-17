import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ghansoli from "../../Assets/Projects/ghansoli_bms.png";
import lodha from "../../Assets/Projects/lodha_bms.png";
import aasara from "../../Assets/Projects/aasara.png";
import nft from "../../Assets/Projects/nft.png";
import github from "../../Assets/Projects/Github.png";
import SU from "../../Assets/Projects/SU.png";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nft}
              isBlog={false}
              title="NFT DROP WEBSITE"
              description="
              Welcome to our NFT drop website! Immerse yourself in a world of unique digital art and collectibles. Explore limited edition NFTs from renowned artists, each securely minted on the blockchain to ensure authenticity and rarity. Our platform provides a seamless and secure way to buy, sell, and trade NFTs, allowing you to truly own a piece of digital history."
              ghLink="https://github.com/jafar99/NFTDrop-Website.git"
              demoLink="https://nftd-rop-website.vercel.app/nft/papafam-apes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ghansoli}
              isBlog={false}
              title="Ghansoli BMS "
              description="Welcome to our Building Management System (BMS) website. We specialize in state-of-the-art solutions for efficient building automation. Our platform enables seamless control and monitoring of various building systems such as HVAC, lighting, security, and more. With intuitive interfaces and advanced analytics, our BMS empowers you to optimize energy usage, enhance occupant comfort, and ensure the safety of your spaces."
              ghLink="https://github.com/iam-rnd/icici_bms_ui.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lodha}
              isBlog={false}
              title="Lodha BMS"
              description="Welcome to our Building Management System (BMS) website. We specialize in state-of-the-art solutions for efficient building automation. Our platform enables seamless control and monitoring of various building systems such as HVAC, lighting, security, and more. With intuitive interfaces and advanced analytics, our BMS empowers you to optimize energy usage, enhance occupant comfort, and ensure the safety of your spaces."
              ghLink="https://github.com/iam-rnd/lodha-bms-ui.git"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aasara}
              isBlog={false}
              title="Old Age Home"
              description="Discover a compassionate haven at our Old Age Home website. We provide a nurturing environment for seniors, offering personalized care, engaging activities, and a supportive community. Our mission is to ensure their well-being and dignity in their golden years."
              ghLink="https://github.com/jafar99/Aasara.git"
              demoLink="https://jafar99.github.io/Aasara/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Github Profile "
              description="Welcome to my GitHub user profile website. Explore my coding journey, projects, and contributions. From innovative repositories to collaborative endeavors, dive into my coding world and witness the evolution of my skills. Join me in the realm of open-source creativity."
              ghLink="https://github.com/jafar99/Github-profile-card-React.git"
              demoLink="https://github-profile-card-react.vercel.app/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SU}
              isBlog={false}
              title="SU Sales Website"
              description="
              Welcome to the Style Union website, where fashion meets individuality. Discover a curated collection of clothing that blends modern trends with timeless elegance. Our mission is to empower you to express your unique style confidently. Explore our diverse range of outfits designed to celebrate your authenticity. Join the Style Union and redefine fashion on your terms."
              ghLink="https://github.com/iam-rnd/su-sales-dashboard-ui.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
