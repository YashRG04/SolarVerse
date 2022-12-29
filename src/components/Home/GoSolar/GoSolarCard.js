import React from "react";
import "../OfferedService/offerCard.css"

const GoSolarCard = ({name,image}) => {
  return (
    <div className="Offercard">
      <div className="offerimagecontainer">
        <img className="ServiceImages" src={image} alt={name} />
      </div>
      <h1 className="OfferServiceName">{name}</h1>
    </div>
  );
};

export default GoSolarCard;
