import { Box, Button, Divider, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { shadows } from '@material-ui/system';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    color: "#f2f2f2",
    backgroundColor: "#6C757D",
    border: "none",
    borderRadius: "5px",
    fontSize: ".75rem",
    padding: "5px",
    margin: "5px 0"
  },
}));
const IndividualProject = ({ projectData }) => {
  const { image,liveLink,githubLink,title,description,technology } = projectData;
  const classes = useStyles();
  return (
    <Grid item md={6}>
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
      <Box boxShadow={3} p={5}>
      <img src={image} alt="" style={{ width: "100%" }} />
      <h3 className="text-center">{title}</h3>
      <Divider p={5}/>
      <p>{description}</p>
      <div className="social-btn">
        {technology.map((technology) => (
          <button className={classes.button}>{technology}</button>
        ))}
      </div>
      <a href={liveLink} rel="noreferrer" target="_blank">
      <button className="btn-green" >Live Link</button>
      </a>
     <a href={githubLink} rel="noreferrer" target="_blank">
     <button className="btn-white">Github</button>
     </a>
     
      
      </Box>
      </div>
    </Grid>
  );
};

export default IndividualProject;
