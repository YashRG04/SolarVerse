import React, { Fragment } from "react";
import "./WhatCard.css";

const WhatCard = ({name,id,description,image}) => {
  return (
    <Fragment>
      <div className="WhatCard">
        <div className="WhatCardImage">
          <img className="WhatImage" src={image} alt={name} />
        </div>
        <h1 className="WhatName">{name}</h1>
        <hr className="Underline" />
        <p className="WhatDescription">{description}</p>
      </div>
    </Fragment>
  );
};

export default WhatCard;
