import React, { Fragment } from "react";
import ServiceBanner from "../ServiceBanner";
import ServiceContent from "../ServiceContent";
import StepsContainer from "../StepsContainer";
import "./DomestiService.css";
import ServiceCard from "../../Home/ServiceHome/ServiceCard";
import { DomesticServices } from "../../../assets/data/DomesticServices";
import { DomesticServicesData } from "../../../assets/data/DomesticServiceData";
import { Link } from "react-router-dom";

const DomesticService = () => {
  // get the service id from the url
  const serviceId = window.location.pathname.split("/")[2];

  // get data for the services section of the required service
  const serviceData = DomesticServicesData.filter(
    (service) => service.id === serviceId
  )[0];

  return (
    <Fragment>
      <div className="ServiceConatiner" id="top">
        <div className="Cushion"></div>
        <div className="ServiceBanner">
          <ServiceBanner
            image={serviceData.image}
            heading={serviceData.name}
            subtitle={serviceData.subtitle}
          />
        </div>
        <div className="ServiceContent">
          <ServiceContent
            content={serviceData.description}
            heading={serviceData.name}
            points={serviceData.points}
          />
        </div>

        {/*  Steps Container*/}
        {/* <div className="StepsContainer">
          <StepsContainer stepsData={serviceData.steps} />
        </div> */}

        <div className="ButtonContainer">
          <Link className="Purchase" to="/">
            PURCHASE PLAN
          </Link>
        </div>

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
