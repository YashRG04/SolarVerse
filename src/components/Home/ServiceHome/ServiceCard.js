import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ name, id, description, image }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const idLink = `/services/${id}`;

  return (
    <Fragment>
      <div
        data-aos="flip-left"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
        className="ServiceCard"
      >
        <div className="ImageContainer">
          <img className="ServiceImages" src={image} alt={name} />
        </div>
        <h1 className="ServiceName">{name}</h1>
        <p className="ServiceDescription">{description}</p>
        <Link className="ServiceButton" to={idLink}>
          Learn More
        </Link>
      </div>
    </Fragment>
  );
};

export default ServiceCard;