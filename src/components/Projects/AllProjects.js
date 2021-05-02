import { Container, Grid } from "@material-ui/core";
import React from "react";
import IndividualProject from "./IndividualProject/IndividualProject";
import imageTravellersNest from "../../images/projects/travellersNest1.png";
import imageFashionFare from "../../images/projects/fashionFare.png";
import imageSirajAlIslam from "../../images/projects/sirajalislam.png";

const AllProjects = () => {
  const allProjects = [
    {
      title: "Travellers Nest",
      description:
        "Hotel Booking Website with dynamic Admin Panel and Payment Gateway",
      technology: [
        "React JS",
        "Node JS",
        "Express",
        "Firebase",
        "Stripe",
        "MongoDB",
      ],
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
    {
      title: "Lawyer Portfolio",
      description: "A static lawyer Portfolio website",
      technology: ["React JS", "JavaScript"],
      liveLink: "https://sirajalislam.com",
      githubLink: "https://github.com",
      image: imageSirajAlIslam,
    },
  ];
  return (
    <Container fixed>
      <div  style={{margin: "50px 0"}}>
      <h1
        style={{
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
      
      </div>
    </Container>
  );
};

export default AllProjects;
