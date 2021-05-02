import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Button, Container } from "@material-ui/core";
import profilePic from "../../images/ProfilePic.jpg";
import { Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import introBg from "../../images/projects/introBg.jpg";
import Typewriter from "typewriter-effect";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Introduction = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundColor: "#1c2a2b",
        paddingBottom: "75px",
        paddingTop: "75px",
        zIndex: "50",
      }}
    >
      <Container fixed>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item md={6} sm={12}>
              <Box
                display="flex"
                alignItems="center"
                bgcolor=""
                css={{ height: "100%" }}
              >
                <img
                  src={profilePic}
                  alt=""
                  style={{ width: "100%", zIndex: "50" }}
                />
              </Box>
            </Grid>
            <Grid item md={6} sm={12}>
              <Box
                display="flex"
                alignItems="center"
                p={1}
                m={1}
                bgcolor="transparent"
                css={{ color: "white", height: "100%" }}
              >
                <div>
                  <h4 className="text-green">HELLO I'M</h4>
                  <h1 style={{ fontSize: "3rem" }}>MD JUBAIR AHMED</h1>
                  <h2 className="text-green">
                    <Typewriter
                      options={{
                        strings: [
                          "Web Developer",
                          "Javascript Programmer",
                          "Traveller",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                      style={{ fontSize: "2rem" }}
                    />
                  </h2>
                  <p>
                    I'm a passionate MERN Stake Web Developer with a passion for
                    web application development and programming. Able to
                    complete projects efficiently with interactive and
                    responsive design. I enjoy turning complex problems into
                    simple, beautiful, and intuitive designs. When I'm not on my
                    study or coding, you'll find me reading books, or watching
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
                  <Button
                    variant="contained"
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#009E66",
                      color: "white",
                    }}
                    href="https://drive.google.com/uc?export=download&id=1aIXcyI-9aQlSD2EyXYWDZTvlHyXVcyWb"
                  >
                    Get Resume
                  </Button>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
