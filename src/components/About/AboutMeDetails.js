import { Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import { Button } from "bootstrap";
import React from "react";

const AboutMeDetails = () => {
  return (
    <div>
      <h3>My name is</h3>
      <h1 className="text-green" style={{ fontWeight:"600"}}>MD JUBAIR AHMED</h1>
      <h3>Web Developer</h3>
      <p>
        I'm a passionate MERN Stake Web Developer with a passion for web
        application development and programming. Able to complete projects
        efficiently with interactive and responsive design. I enjoy turning
        complex problems into simple, beautiful, and intuitive designs. When I'm
        not on my study or coding, you'll find me reading books, or watching
        movies.
      </p>
      <div className="social-btn">
        <a href="https://www.linkedin.com/in/mjubairahmed">
          <LinkedIn />
        </a>
        <a href="https://www.github.com/mjahmed">
          <GitHub />
        </a>
        <a href="https://www.facebook.com/mjubairahmed">
          <Facebook />
        </a>
        <a href="https://www.twitter.com/mdjubairahmed">
          <Twitter />
        </a>
      </div>
      <button className="btn-green" style={{width:"50%"}}>Download Resume</button>
    </div>
  );
};

export default AboutMeDetails;
