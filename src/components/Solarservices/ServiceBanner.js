import React, { Fragment } from "react";
import "./ServiceBanner.css";

const ServiceBanner = (props) => {
  

  return (
    <Fragment>
      <div
        className="hero-image"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${props.image})`,
        }}
      >
        <div className="hero-text">
          <h1>{props.heading}</h1>
          <p>{props.subtitle}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ServiceBanner;
