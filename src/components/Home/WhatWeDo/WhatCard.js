import React, { Fragment, useEffect, useState } from "react";
import "./WhatCard.css";
import Aos from "aos";
import "aos/dist/aos.css";

const WhatCard = ({ name, id, description, image }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const truncatedDescription =
    description.split(" ").slice(0, 21).join(" ") + " ...";

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const toggleShowFullDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Fragment>
      <div data-aos="zoom-in-left" className="WhatCard">
        <div className="WhatCardImage">
          <img className="WhatImage" src={image} alt={name} />
        </div>
        <h1 className="WhatName">{name}</h1>
        <hr className="Underline3" />

        <p className="WhatDescription">
          {showFullDescription ? description+" " : truncatedDescription}
          {description.split(" ").length > 21 && (
            <button
              onClick={toggleShowFullDescription}
              className="BackToPasswordLoginButton"
            >
              {showFullDescription ? "Read less" : "Read more"}
            </button>
          )}
        </p>
      </div>
    </Fragment>
  );
};

export default WhatCard;
