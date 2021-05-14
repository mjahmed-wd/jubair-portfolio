import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import img from "../../../images/projects/fashionFare.png"

const ProjectImageSlider = ({ image }) => {
   

  return (
    <Carousel autoPlay={true} animation="slide" navButtonsAlwaysInvisible={true} interval="5000" indicators={false} timeout={1500}>
      {/* {items.map((item, i) => (
        <Item key={i} item={item} />
      ))} */}
     {image.map((img, i) => (
        <Item image={img} />
       ))} 
    </Carousel>
  );
};
const Item = ({  image }) => {
  return (
    <Paper>
      {/* <h2>{item.name}</h2>
      <p>{item.description}</p> */}
      <img src={image} alt="" style={{ width: "100%" }} />

      {/* <Button className="CheckButton">Check it out!</Button> */}
    </Paper>
  );
};

export default ProjectImageSlider;
