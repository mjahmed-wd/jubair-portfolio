import React from 'react';

const IndividualTools = ({img, name}) => {
    return (
        <div>
            <img src={img} alt=""/>
            <p>{name}</p>
        </div>
    );
};

export default IndividualTools;