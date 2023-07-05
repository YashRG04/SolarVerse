import React, { Fragment } from "react";
import { CommercialServices } from "../../../assets/data/CommercialServices";
import { DomesticServices } from "../../../assets/data/DomesticServices";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import "./ServiceContainer.css";
import OfferCard from "../OfferedService/OfferCard";
import { OfferedServiceData } from "../../../assets/data/OfferedService";
import { useState } from "react";
import { useEffect } from "react";
import ServiceBtnSlider from "./ServiceBtnSlider";
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceContainer = () => {
  const [serviceIndex, setServiceIndex] = useState(1);
  const nextSlide = () => {
    if (serviceIndex !== OfferedServiceData.length) {
      setServiceIndex(serviceIndex + 1);
    } else if (serviceIndex === OfferedServiceData.length) {
      setServiceIndex(1);
    }
  };

  const prevSlide = () => {
    if (serviceIndex !== 1) {
      setServiceIndex(serviceIndex - 1);
    } else if (serviceIndex === 1) {
      setServiceIndex(OfferedServiceData.length);
    }
  };

  const moveServiceDot = (index) => {
    setServiceIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prevCounter) =>
        prevCounter == OfferedServiceData.length ? 1 : prevCounter + 1
      );
    }, [10000]);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <Fragment>
      <div className="ServiceContainer" >
        <div className="DomesticService">
          <h1 className="offerTitle">Services Being Offered</h1>

          <hr className="Underline" />
          <h1 className="offerSubTitle">Maintainance</h1>
          <hr className="Underline1" />
          <div className="ServiceCardContainer">
            {DomesticServices.map(({ name, id, description, image }) => {
              return (
                <ServiceCard
                  name={name}
                  id={id}
                  description={description}
                  image={image}
                />
              );
            })}
          </div>
        </div>

        <div className="ServiceCrousalOut">
          <div className="ServiceCardCrousalContainer">
            <div
              key={OfferedServiceData[0].id}
              className={
                serviceIndex === OfferedServiceData[0].id
                  ? "slideactive-anim"
                  : "slide"
              }
            >
              <div className="Servicecontainer">
                <OfferCard
                  id={OfferedServiceData[0].id}
                  name={OfferedServiceData[0].name}
                  image={OfferedServiceData[0].image}
                  desc={OfferedServiceData[0].desc}
                />
              </div>
            </div>

            <div
              key={OfferedServiceData[1].id}
              className={
                serviceIndex === OfferedServiceData[1].id
                  ? "slideactive-anim"
                  : "slide"
              }
            >
              <div className="Servicecontainer">
                <OfferCard
                  id={OfferedServiceData[1].id}
                  name={OfferedServiceData[1].name}
                  image={OfferedServiceData[1].image}
                  desc={OfferedServiceData[1].desc}
                />
              </div>
            </div>

            <div
              key={OfferedServiceData[2].id}
              className={
                serviceIndex === OfferedServiceData[2].id
                  ? "slideactive-anim"
                  : "slide"
              }
            >
              <div className="Servicecontainer">
                <OfferCard
                  id={OfferedServiceData[2].id}
                  name={OfferedServiceData[2].name}
                  image={OfferedServiceData[2].image}
                  desc={OfferedServiceData[2].desc}
                />
              </div>
            </div>

            <div
              key={OfferedServiceData[3].id}
              className={
                serviceIndex === OfferedServiceData[3].id
                  ? "slideactive-anim"
                  : "slide"
              }
            >
              <div className="Servicecontainer">
                <OfferCard
                  id={OfferedServiceData[3].id}
                  name={OfferedServiceData[3].name}
                  image={OfferedServiceData[3].image}
                  desc={OfferedServiceData[3].desc}
                />
              </div>
            </div>
          </div>
          <ServiceBtnSlider moveSlide={nextSlide} direction={"nextService"} />
          <ServiceBtnSlider moveSlide={prevSlide} direction={"prevService"} />
        </div>

        {/* <div className="ButtonContainer">
          <Link className="OfferedButton" to="/constactus">
            CONTACT US
          </Link>
        </div> */}
        {/* <div className="CommercialService">
          <h1 className="ServiceTitle">COMMERCIAL SERVICES</h1>
          <hr className="Underline" />
          <div className="ServiceCardContainer">
            {CommercialServices.map(({ name, id, description, image }) => {
              return (
                <ServiceCard
                  name={name}
                  id={id}
                  description={description}
                  image={image}
                />
              );
            })}
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default ServiceContainer;
