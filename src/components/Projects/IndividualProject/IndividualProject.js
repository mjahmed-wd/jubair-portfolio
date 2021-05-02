import { Box, Button, Divider, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { shadows } from '@material-ui/system';

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
  const { image } = projectData;
  const classes = useStyles();
  return (
    <Grid item md={6}>
      <Box boxShadow={3} p={5}>
      <img src={image} alt="" style={{ width: "100%" }} />
      <h3 className="text-center">{projectData.title}</h3>
      <Divider p={5}/>
      <p>{projectData.description}</p>
      <div className="social-btn">
        {projectData.technology.map((technology) => (
          <button className={classes.button}>{technology}</button>
        ))}
      </div>
      <button className="btn-green">Live Link</button>
      <button className="btn-white">Github</button>
      
      </Box>
    </Grid>
  );
};

export default IndividualProject;
