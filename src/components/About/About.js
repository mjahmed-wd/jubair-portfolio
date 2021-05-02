import { Box, Button, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import AboutMeDetails from "./AboutMeDetails";
import TechnologyUsed from "./TechnologyUsed";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const About = () => {
  const classes = useStyles();
  return (
   <div style={{backgroundColor: "#1C2A2B",color:"white", padding:"50px 0"}}>
      <Container fixed>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item md={6} sm={12}>
            <Box
              display="flex"
              alignItems="center"
              p={1}
              m={1}
              css={{ height: "100%" }}
            >
              <AboutMeDetails/>
            </Box>
          </Grid>
          <Grid item md={6} sm={12}>
            <Box
              display="flex"
              alignItems="center"
              css={{ height: "100%" }}
            >
              <TechnologyUsed />
            </Box>
          </Grid>
        </Grid>
      </div>
    </Container>
   </div>
  );
};

export default About;
