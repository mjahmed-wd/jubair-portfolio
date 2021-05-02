import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import IndividualProject from "./IndividualProject/IndividualProject";
import imageFashionFare from "../../images/projects/fashionFare.png";

const Projects = () => {
  const allProjects = [
    {
      title: "Fashion Fare",
      description: "This is a online shopping site",
      technology: ["React JS", "Node JS", "Angular", "Vue"],
      liveLink: "https://example.com/",
      githubLink: "https://github.com",
      image: imageFashionFare,
    },
    {
      title: "Fashion Fare",
      description: "This is a online shopping site",
      technology: ["React JS", "Node JS", "Angular", "Vue"],
      liveLink: "https://example.com/",
      githubLink: "https://github.com",
      image: imageFashionFare,
    },
  ];
  return (
    <Container fixed>
      <h1
        style={{
          marginTop: "50px",
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "800",
        }}
      >
        <span>Latest</span> <span style={{ color: "#009E66" }}>Projects</span>
      </h1>
      <hr style={{ margin: "50px" }} />
      <Grid container spacing={4}>
        {allProjects.map((individualProject, index) => (
          <IndividualProject key={index} projectData={individualProject} />
        ))}
      </Grid>
     <div style={{ textAlign: "center", margin:"50px"}} >
     <button className="btn-green" style={{width:"50%"}}>View All Projects</button>
     </div>
    </Container>
  );
};

export default Projects;
