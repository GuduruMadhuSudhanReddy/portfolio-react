import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import SocialLinks from "../components/SocialLinks";
import { Navbar, Nav, Container } from "react-bootstrap";

// ✅ Sample Projects
const projects = [
  {
    title: "Library Management System",
    description:
      "A Library Management System is a software solution designed to manage library operations efficiently. It helps librarians track and organize books, manage member accounts, handle checkouts and returns, and generate reports.",
    link: "https://github.com/GuduruMadhuSudhanReddy/librarymanagementsystem",
  },
  {
    title: "Restaurant Food-Serving System",
    description:
      "Our food ordering system streamlines the ordering process with an interactive UI. Customers can browse menus, select tables, and place orders. Technologies: HTML, CSS, JavaScript, React.js, Bootstrap.",
    link: "https://restaurant-project-l786.vercel.app/",
  },
  {
    title: "E-commerce Website",
    description:
      "An e-commerce website where users can browse and purchase products with features like a shopping cart, secure checkout, and payment integration. Technologies: Python, Django, HTML, CSS, JavaScript, Bootstrap, MySQL.",
    link: "https://github.com/GuduruMadhuSudhanReddy/e_commerce",
  },
  

  {
    title: "Video Streaming Platform 🎬",
    description:
      "A web-based video streaming platform inspired by Hotstar, built using Django for the backend and HTML, CSS, Bootstrap for the frontend. The platform enables seamless content streaming, user authentication, and admin management for an efficient viewing experience.",
    link: "https://github.com/GuduruMadhuSudhanReddy/hotstapp-mini",
  },
];

// ✅ Skills List
const skills = [
  "Python", "Django", "JavaScript", "React.js", "Bootstrap",
  "HTML", "CSS", "MySQL", "Git/GitHub", "REST APIs"
];

// ✅ Certifications List (Using PDF files)
const certifications = [
  { name: "MYsql Certification - Spoken Tutorial-IIT-Boombay", file: "/certifications/Mysql.pdf" },
  { name: "POSTGRE Certification - Spoken Tutorial-IIT-Boombay", file: "/certifications/postgreSQL.pdf" },
  { name: "Genrerative -Ai- Certification-Microsoft", file: "/certifications/generative-AI.pdf" },
  { name: "Machine-Leraning With Python - IBM", file: "/certifications/IBM.pdf" },
  { name: "SoftwaredevelopementCertification - IBM", file: "/certifications/Software-Developement.pdf" },
  { name: "React-js Certification -Graet-learning", file: "/certifications/react.pdf" },
  { name: "DSA Certification -Simply-learn", file: "/certifications/DSA.pdf" },
  { name: "Python FUll Stack Certification ", file: "/certifications/DS.pdf" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ✅ Bootstrap Navbar */}
      <Navbar expand="lg" className="bg-dark navbar-dark fixed-top shadow-lg">
        <Container>
          <Navbar.Brand href="#" className="text-white fw-bold">
            My Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-white">Home</Nav.Link>
              <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
              <Nav.Link href="#skills" className="text-white">Skills</Nav.Link>
              <Nav.Link href="#certifications" className="text-white">Certifications</Nav.Link>
              <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
              <Nav.Link href="/resume.pdf" download className="text-white">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ Main Content */}
      <div id="home" className="container mt-5 pt-5 bg-white text-black" style={{ paddingTop: "100px" }}>
  <div className="row align-items-center">
    <aside className="col-md-4 text-center mb-4">
      <img
        src="/images/profile.jpg"
        alt="Developer Profile"
        className="w-100 rounded-circle shadow-lg border border-primary"
        style={{ maxWidth: "200px" }}
      />
    </aside>
    <main className="col-md-8">
      <motion.h2
        className="fw-bold text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to My Portfolio!
      </motion.h2>
      <motion.p
        className="fs-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi there! I'm <strong>Madhu Sudhan Reddy</strong>, a web developer passionate about crafting efficient and scalable web applications.  
        My work focuses on creating seamless user experiences, optimized performance, and robust solutions for complex challenges.
      </motion.p>
      <motion.p
        className="fs-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Feel free to explore my projects to see how I bring ideas to life through code. Whether you're a fellow developer, recruiter,  
        or just curious about web development, I'm excited to share my journey and expertise with you.  
        <strong>Let's connect and build something amazing together!</strong> 🚀
      </motion.p>
    </main>
  </div>
</div>


      {/* ✅ Projects Section */}
      <div id="projects" className="container mt-5 bg-gray-900 text-white p-4 rounded">
        <h2 className="text-center fw-semibold mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 mb-4">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Skills Section */}
      <div id="skills" className="container mt-5 bg-white text-black p-4 rounded shadow-lg">
        <h2 className="text-center fw-semibold mb-4">Skills</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {skills.map((skill, index) => (
            <span key={index} className="badge bg-dark text-white m-2 p-2 fs-6">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* ✅ Certifications Section */}
      <div id="certifications" className="container mt-5 bg-gray-900 text-white p-4 rounded shadow-lg">
        <h2 className="text-center fw-semibold mb-4">Certifications</h2>
        <ul className="list-unstyled text-center">
          {certifications.map((cert, index) => (
            <li key={index} className="mb-2">
              📜 <a href={cert.file} download className="text-blue-400 fw-bold">
                {cert.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Contact & Resume */}
      <div id="contact" className="container text-center mt-5 bg-white text-black p-4 rounded shadow-lg">
  <h2 className="fw-semibold mb-4">Contact Me</h2>
  <p className="mb-2">
    📧 <a href="mailto:madhusudhan850062@gmail.com" className="text-blue-600 fw-bold">
      madhusudhan850062@gmail.com
    </a>
  </p>
  <p className="mb-3">
    📞 <a href="tel:+916309195703" className="text-blue-600 fw-bold">+91 6309195703</a>
  </p>
  <p className="mt-3 fw-semibold">
    If my skills match your needs, feel free to <strong>contact me anytime!</strong> 🚀
  </p>
  <a href="/resume.pdf" download className="btn btn-primary mt-3">
    Download Resume
  </a>
</div>


      {/* ✅ Footer */}
      <footer className="bg-dark text-white text-center p-4 mt-5">
        <SocialLinks />
        <p className="text-white mt-2">© 2024 Madhu Sudhan Reddy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
