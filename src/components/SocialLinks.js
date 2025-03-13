import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="text-center mt-4">
      <div className="d-flex justify-content-center gap-4">
        <a href="https://github.com/GuduruMadhuSudhanReddy" className="text-white" style={{ fontSize: "2rem" }}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/madhu-sudhan-reddy-0588b6258/" className="text-white" style={{ fontSize: "2rem" }}>
          <FaLinkedin />
        </a>
        <a href="mailto:madhusudhan850062@gmail.com" className="text-white" style={{ fontSize: "2rem" }}>
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
