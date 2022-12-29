import React, { Fragment, useEffect } from "react";
import "./WhatCard.css";
import Aos from "aos";
import "aos/dist/aos.css";

const WhatCard = ({name,id,description,image}) => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Fragment>
      <div data-aos="zoom-in-left" className="WhatCard">
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
