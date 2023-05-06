import React, { Fragment } from "react";
import "./DomestiService.css";
import ServiceCard from "../../Home/ServiceHome/ServiceCard";
import { DomesticServices } from "../../../assets/data/DomesticServices";
import { DomesticServicesData } from "../../../assets/data/DomesticServiceData";
import { Link } from "react-router-dom";
import { GiSolarPower } from "react-icons/gi";
import Servicebg from "../../../assets/images/servicebg.png";
import SolarPoint from "../../../assets/images/solarpoint.png";
import ServiceBanner from "../ServiceBanner";
import ServiceContent from "../ServiceContent";

const DomesticService = () => {
  // get the service id from the url
  const serviceId = window.location.pathname.split("/")[2];

  const servicelink = `/services/${serviceId}`;

  // get data for the services section of the required service
  const serviceData = DomesticServicesData.filter(
    (service) => service.id === serviceId
  )[0];

  const temp = DomesticServices.filter(({ id }) => id === serviceId)[0];

  return (
    <Fragment>
      <div className="ServiceConatiner" id="top">
        {/* <div className="Cushion"></div> */}
        <div className="ServiceBanner">
          <ServiceBanner
            image={serviceData.image}
            heading={serviceData.name}
            subtitle={serviceData.subtitle}
          />
          <hr />
        </div>
        <div className="ServiceContent">
          <ServiceContent
            content={serviceData.description}
            heading={serviceData.name}
          />
        </div>
        <div className="SectionContainer">
          <div className="LeftSection">
            <div className="ServiceButtonContainer">
              <Link className="Purchase Maintainance" to={servicelink}>
                MAINTAINANCE
              </Link>
            </div>
            <h1 className="ServiceHeading">{serviceData.name} ?</h1>
            <h2 className="ServiceSubHeading">{serviceData.subtitle}</h2>
            <ul className="ServicePointsList">
              <div className="ServicePointItem">
                <img className="ServicePointIcon" src={SolarPoint} />
                <li className="ServicePointText">{serviceData.points.first}</li>
              </div>
              <div className="ServicePointItem">
                <img className="ServicePointIcon" src={SolarPoint} />
                <li className="ServicePointText">
                  {serviceData.points.second}
                </li>
              </div>
              <div className="ServicePointItem">
                <img className="ServicePointIcon" src={SolarPoint} />
                <li className="ServicePointText">{serviceData.points.third}</li>
              </div>
              <div className="ServicePointItem">
                <img className="ServicePointIcon" src={SolarPoint} />
                <li className="ServicePointText">
                  {serviceData.points.fourth}
                </li>
              </div>
            </ul>
          </div>
          <div className="RightSection">
            <div className="ServiceImageTextContainer">
              <img className="Servicebgimage" src={Servicebg}></img>
              <div className="ServiceRightCardContainer">
                <div className="ServiceRightCard">
                  <h1 className="ServiceRightCardHeading">
                    {serviceData.subtitle2}
                  </h1>
                  <img
                    className="ServiceRightCardImage"
                    src={serviceData.image}
                  ></img>
                  <ul className="ServiceRightCardList">
                    {serviceData.points2.map((point) => {
                      return (
                        <li className="ServiceRightCardPoint">
                          <div className="temp">
                            <img
                              className="ServicePointIcon Sricon"
                              src={SolarPoint}
                            />
                            <span className="ServiceRightCardPointH">
                              {point.ptitle}
                            </span>
                          </div>
                          <span className="ServiceRightCardPointP">
                            {point.psubtitle}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="ButtonContainer">
                    <Link className="Purchase RightCardButton" to="/">
                      BOOK NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="ButtonContainer">
          <Link className="Purchase" to="/">
            BOOK NOW
          </Link>
        </div> */}

        <div className="RemainingServices">
          <h1>Other Services</h1>
          <div className="Services">
            {/* map the services other than this service id */}
            {DomesticServices.filter(({ id }) => id !== serviceId).map(
              ({ name, id, description, image }) => {
                return (
                  <ServiceCard
                    className="ServiceCard"
                    name={name}
                    id={id}
                    description={description}
                    image={image}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DomesticService;
