import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import IndividualProject from "./IndividualProject/IndividualProject";
import imageFashionFare from "../../images/projects/fashionFare.png";
import imageTravellersNest from "../../images/projects/travellersNest1.png"
import { useHistory } from "react-router";

const Projects = () => {
  const history=useHistory()
  const allProjects = [
    {
      title: "Travellers Nest",
      description: "Hotel Booking Website with dynamic Admin Panel and Payment Gateway",
      technology: ["React JS", "Node JS","Express", "Firebase", "Stripe", "MongoDB"],
      liveLink: "https://travellers-nest.web.app",
      githubLink: "https://github.com",
      image: imageTravellersNest,
    },
    {
      title: "Fashion Fare",
      description: "This is a online shopping site",
      technology: ["React JS", "Node JS", "Express", "Firebase", "MongoDB"],
      liveLink: "https://fashion-fare.web.app",
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
     <button className="btn-green" style={{width:"50%"}} onClick={()=>history.push("/projects")}>View All Projects</button>
     </div>
    </Container>
  );
};

export default Projects;
