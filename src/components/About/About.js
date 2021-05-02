import { Box, Button, Container, Grid, makeStyles } from "@material-ui/core";
import { Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";
import TechnologyUsed from "./TechnologyUsed";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item md={6} sm={12}>
            <Box
              display="flex"
              alignItems="center"
              p={1}
              m={1}
              bgcolor="background.paper"
              css={{ height: "100%" }}
            >
              <div>
                <h4>HELLO I'M</h4>
                <h1>MD JUBAIR AHMED</h1>
                <h3>Web Developer</h3>
                <p>
                  I'm a passionate MERN Stake Web Developer with a passion for
                  web application development and programming. Able to complete
                  projects efficiently with interactive and responsive design. I
                  enjoy turning complex problems into simple, beautiful, and
                  intuitive designs. When I'm not on my study or coding, you'll
                  find me reading books, or watching movies.
                </p>
                <div>
                  <LinkedIn />
                  <GitHub />
                  <Facebook />
                  <Twitter />
                </div>
                <Button
                  variant="contained"
                  color="secondary"
                  href="https://drive.google.com/uc?export=download&id=1aIXcyI-9aQlSD2EyXYWDZTvlHyXVcyWb"
                >
                  Get Resume
                </Button>
              </div>
            </Box>
          </Grid>
          <Grid item md={6} sm={12}>
            <Box
              display="flex"
              alignItems="center"
              bgcolor="background.paper"
              css={{ height: "100%" }}
            >
              <TechnologyUsed />
            </Box>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default About;
