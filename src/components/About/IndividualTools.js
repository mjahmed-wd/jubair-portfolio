import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const IndividualTools = ({img, name}) => {
    return (
        <div data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <img src={img} alt=""/>
            <p>{name}</p>
        </div>
    );
};

export default IndividualTools;