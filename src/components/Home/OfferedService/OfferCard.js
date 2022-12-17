import React from 'react'
import './offerCard.css'
import { motion } from "framer-motion";

const OfferCard = ({name,image}) => {
  return (
    <>
      <div className="Offercard">
        <div className="offerimagecontainer">
          <img className="ServiceImages" src={image} alt={name} />
        </div>
        <h1 className="OfferServiceName">{name}</h1>
      </div>
    </>
  );
}

export default OfferCard