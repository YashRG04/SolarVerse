import React, { Fragment } from "react";
import ServiceBanner from "../ServiceBanner";
import ServiceContent from "../ServiceContent";
import StepsContainer from "../StepsContainer";
import "./CommercialService.css";
import ServiceCard from "../../Home/ServiceHome/ServiceCard";
import { CommercialServices } from "../../../assets/data/CommercialServices";
import { CommercialServicesData } from "../../../assets/data/CommercialServiceData";

const CommercialService = () => {
  // get the service id from the url
  const serviceId = window.location.pathname.split("/")[2];

  // get data for the services section of the required service
  const serviceData = CommercialServicesData.filter(
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

        <div className="RemainingServices">
          <h1>Other Services</h1>
          <div className="Services">
            {/* map the services other than this service id */}
            {CommercialServices.filter(({ id }) => id !== serviceId).map(
              ({ name, id, description, image }) => {
                return (
                  <ServiceCard
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

export default CommercialService;
