import { Container, Grid } from "@material-ui/core";
import React from "react";
import IndividualProject from "./IndividualProject/IndividualProject";
import imageFashionFare1 from "../../images/projects/fashionFare.png";
import imageFashionFare2 from "../../images/projects/fashionFare2.png";
import imageFashionFare3 from "../../images/projects/fashionFare3.png";
import imageTravellersNest1 from "../../images/projects/travellersNest1.png";
import imageTravellersNest2 from "../../images/projects/travellersNest2.png";
import imageTravellersNest3 from "../../images/projects/travellersNest3.png";
import imageSirajAlIslam1 from "../../images/projects/sirajalislam.png";
import imageSirajAlIslam2 from "../../images/projects/sirajalislam2.png";
import imageSirajAlIslam3 from "../../images/projects/sirajalislam3.png";
import imageWhatsApp1 from "../../images/projects/whatsappClone1.png"
import imageWhatsApp2 from "../../images/projects/whatsappClone2.png"

const AllProjects = () => {
  const allProjects = [
    {
      title: "Travellers Nest",
      description: "Hotel Booking Website with dynamic Admin Panel and Payment Gateway",
      technology: ["React JS", "Node JS","Express", "Firebase", "Stripe", "MongoDB"],
      liveLink: "https://travellers-nest.web.app",
      githubLink: "https://github.com/mjahmed-wd/Travellers-Nest-Client",
      image: [imageTravellersNest1,imageTravellersNest2,imageTravellersNest3]
    },
    {
      title: "Fashion Fare",
      description: "This is a online shopping site",
      technology: ["React JS", "Node JS", "Express", "Firebase", "MongoDB"],
      liveLink: "https://fashion-fare.web.app",
      githubLink: "https://github.com/mjahmed-wd/Fashion-Fare-Client",
      image: [imageFashionFare1,imageFashionFare2,imageFashionFare3]
    },
    {
      title: "Lawyer Portfolio",
      description: "A static lawyer Portfolio website",
      technology: ["React JS", "JavaScript","CSS","Material UI"],
      liveLink: "https://whatsapp-clone-mj.web.app/",
      githubLink: "https://github.com/mjahmed-wd/sirajalislam.com-client",
      image: [imageSirajAlIslam1,imageSirajAlIslam2,imageSirajAlIslam3]
    },
    {
      title: "WhatsApp Clone",
      description: "Realtime Chatting Application",
      technology: ["React JS", "JavaScript","Firebase","Material UI"],
      liveLink: "https://sirajalislam.com",
      githubLink: "https://github.com/mjahmed-wd/whatsapp-clone",
      image: [imageWhatsApp1,imageWhatsApp2]
    },
  ];
  return (
    <Container fixed>
      <div style={{ margin: "50px 0" }}>
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
