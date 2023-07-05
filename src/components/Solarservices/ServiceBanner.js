import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ServiceBanner.css";
import { useAlert } from "react-alert";

const ServiceBanner = (props) => {

  const navigate=useNavigate();
  const alert=useAlert();

  const bookNow =()=>{
    alert.success('Please submit enquiry form!');
    navigate('/');
  }
  return (
    <Fragment>
      <div
        className="hero-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${props.image})`,
        }}
      >
        <div className="hero-text">
          <h1>{props.heading}</h1>
          <div className="ButtonContainer">
            <button className="Purchase"onClick={bookNow}>
              PURCHASE PLAN
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ServiceBanner;
