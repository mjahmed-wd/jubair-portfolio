import { Grid } from "@material-ui/core";
import React from "react";
import "./TechnologyUsed.css";
import reactImg from "../../images/technology/react.png";
import reduxImg from "../../images/technology/redux.png";
import jsImg from "../../images/technology/js.png";
import bootstrapImg from "../../images/technology/bootstap.png";
import materialUiImg from "../../images/technology/mui.png";
import sassImg from "../../images/technology/sass.png";
import firebaseImg from "../../images/technology/firebase.png";
import html5Img from "../../images/technology/html5.png";
import css3Img from "../../images/technology/css3.png";
import nodeImg from "../../images/technology/node.png";
import expressImg from "../../images/technology/express.png";
import mongoDbImg from "../../images/technology/mongodb.png";
import HerokuImg from "../../images/technology/heroku.png";
import vsCodeImg from "../../images/technology/vscode.png";
import gitImg from "../../images/technology/git.png";
import githubImg from "../../images/technology/github.png";
import netlifyImg from "../../images/technology/netlify.png";
import npmImg from "../../images/technology/npm.png";
import chromeImg from "../../images/technology/chromedevtools.png";
import IndividualTools from "./IndividualTools";

const TechnologyUsed = () => {
  return (
    <div>
      <h1>My Skills</h1>
      <h3>Front-end Skills</h3>
      <hr style={{backgroundColor:"white"}}/>
      <div className="tools-img">
        <IndividualTools img={reactImg} name="React" />
        <IndividualTools img={reduxImg} name="Redux" />
        <IndividualTools img={jsImg} name="Javascript" />
        <IndividualTools img={bootstrapImg} name="Bootstrap" />
        <IndividualTools img={materialUiImg} name="Material UI" />
        <IndividualTools img={sassImg} name="SASS" />
        <IndividualTools img={firebaseImg} name="Firebase" />
        <IndividualTools img={html5Img} name="HTML5" />
        <IndividualTools img={css3Img} name="CSS3" />
      </div>
      <h3>Back-end Skills</h3>
      <hr style={{backgroundColor:"white"}}/>
      <div className="tools-img">
        <IndividualTools img={nodeImg} name="Node.js" />
        <IndividualTools img={expressImg} name="Express.js" />
        <IndividualTools img={mongoDbImg} name="MongoDB" />
        <IndividualTools img={HerokuImg} name="Heroku" />
      </div>

      <h3>Tools</h3>
      <hr style={{backgroundColor:"white"}}/>
      <div className="tools-img">
        <IndividualTools img={vsCodeImg} name="Visual Studio Code" />
        <IndividualTools img={gitImg} name="Git" />
        <IndividualTools img={githubImg} name="Github" />
        <IndividualTools img={netlifyImg} name="Netlify" />
        <IndividualTools img={npmImg} name="NPM" />
        <IndividualTools img={chromeImg} name="Chrome Developer Tools" />
      </div>
    </div>
  );
};

export default TechnologyUsed;
