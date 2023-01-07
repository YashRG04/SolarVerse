import React, { Fragment, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CheckoutSteps from "./CheckoutSteps";
import "./Details.css";

const Details = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Fragment>
      <CheckoutSteps activeStep={0} />
      <div className="CheckoutDetails">
        <div className="TitleContainer">
          <h1 data-aos="slide-left" className="BookingTitle">
            BOOKING INFORMATION
          </h1>
          <hr data-aos="slide-left" className="Underline" />
        </div>
        <div className="DetailsContainer">
            <form className="DetailsForm"/>
        </div>
      </div>
    </Fragment>
  );
};

export default Details;
